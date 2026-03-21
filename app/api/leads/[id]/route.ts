import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function crmBase(): string {
  return (
    process.env.CRM_API_URL?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
    "http://127.0.0.1:8000"
  );
}

/** Кэш JWT от /auth/login (сервер Next), чтобы не логиниться на каждый клик */
let loginTokenCache: { token: string; at: number } | null = null;
const LOGIN_CACHE_MS = 25 * 60 * 1000;

async function resolveBearerToken(): Promise<string | null> {
  const fromEnv = process.env.CRM_API_TOKEN?.trim();
  if (fromEnv) return fromEnv;

  if (loginTokenCache && Date.now() - loginTokenCache.at < LOGIN_CACHE_MS) {
    return loginTokenCache.token;
  }

  const email = process.env.CRM_ADMIN_EMAIL?.trim();
  const password = process.env.CRM_ADMIN_PASSWORD?.trim();
  if (!email || !password) return null;

  const CRM = crmBase();
  const res = await fetch(`${CRM}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) return null;

  loginTokenCache = { token: data.access_token, at: Date.now() };
  return data.access_token;
}

type AttemptResult = { url: string; method: string; status: number; body: string };

/**
 * Удаление лида: сервер Next ходит в CRM.
 * 1) DELETE /leads/{id} + Bearer (CRM_API_TOKEN или логин CRM_ADMIN_*)
 * 2) публичные URL (если в CRM поднят lead_router с delete)
 */
export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  if (!id || Number.isNaN(Number(id))) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const CRM = crmBase();
  const failures: AttemptResult[] = [];

  try {
    const token = await resolveBearerToken();

    const attempts: Array<{
      url: string;
      method: string;
      body?: string;
      auth?: boolean;
    }> = [];

    if (token) {
      attempts.push({ url: `${CRM}/leads/${id}`, method: "DELETE", auth: true });
    }
    attempts.push(
      { url: `${CRM}/public/leads/delete/${id}`, method: "POST", body: "{}" },
      { url: `${CRM}/public/leads/delete/${id}`, method: "DELETE" },
      { url: `${CRM}/public/leads/${id}/delete`, method: "POST", body: "{}" },
      { url: `${CRM}/public/leads/${id}`, method: "DELETE" }
    );

    for (const a of attempts) {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (a.auth && token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const res = await fetch(a.url, {
        method: a.method,
        headers,
        body: a.body,
        cache: "no-store",
      });

      const bodyText = await res.text();

      if (res.ok) {
        try {
          const json = JSON.parse(bodyText) as unknown;
          return NextResponse.json(json);
        } catch {
          return NextResponse.json({ message: bodyText || "Lead deleted" });
        }
      }

      failures.push({
        url: a.url,
        method: a.method,
        status: res.status,
        body: bodyText.slice(0, 500),
      });
    }

    const hasCreds =
      Boolean(process.env.CRM_API_TOKEN?.trim()) ||
      (Boolean(process.env.CRM_ADMIN_EMAIL?.trim()) &&
        Boolean(process.env.CRM_ADMIN_PASSWORD?.trim()));

    return NextResponse.json(
      {
        error: "Delete failed — CRM отклонил все варианты запроса",
        crm: CRM,
        hadAuth: hasCreds && Boolean(token),
        loginFailed:
          !process.env.CRM_API_TOKEN?.trim() &&
          Boolean(process.env.CRM_ADMIN_EMAIL) &&
          Boolean(process.env.CRM_ADMIN_PASSWORD) &&
          !token,
        attempts: failures,
        hint: !hasCreds
          ? "Добавь в my-app/.env.local: CRM_ADMIN_EMAIL и CRM_ADMIN_PASSWORD (как ADMIN_EMAIL/ADMIN_PASSWORD в vrode_crm/.env), либо CRM_API_TOKEN. Перезапусти npm run dev."
          : !token
            ? "Логин в CRM не удалился (проверь email/пароль и что uvicorn запущен на CRM)."
            : "Проверь, что в CRM есть DELETE /leads/{id} и лид с таким id существует.",
      },
      { status: 502 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        error: "CRM недоступен с сервера Next",
        crm: CRM,
        detail: message,
        hint:
          "Убедись, что CRM запущен (uvicorn) и CRM_API_URL указывает на него. В Docker вместо localhost часто нужен host.docker.internal.",
      },
      { status: 503 }
    );
  }
}
