"use client";

import { useEffect, useMemo, useState } from "react";

type ColumnId = "new" | "in_progress" | "success" | "rejected";

interface Lead {
  id: number;
  name: string;
  email: string;
  contact_type: "telegram" | "whatsapp";
  contact: string;
  message: string | null;
  status: ColumnId;
}

interface ColumnMeta {
  id: ColumnId;
  title: string;
}

const COLUMNS: ColumnMeta[] = [
  { id: "new", title: "1. Новые заявки" },
  { id: "in_progress", title: "2. Заявки в работе" },
  { id: "success", title: "3. Клиент согласился работать" },
  { id: "rejected", title: "4. Нельзя связаться / не согласен работать" },
];

interface BoardResponse {
  new: Lead[];
  in_progress: Lead[];
  success: Lead[];
  rejected: Lead[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export function Column() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [draggedLeadId, setDraggedLeadId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadBoard = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/public/leads/board`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Не удалось загрузить заявки.");
      }
      const board = (await response.json()) as BoardResponse;
      setLeads([...board.new, ...board.in_progress, ...board.success, ...board.rejected]);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Ошибка загрузки.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBoard();
  }, []);

  const grouped = useMemo(() => {
    return COLUMNS.map((column) => ({
      ...column,
      items: leads.filter((lead) => lead.status === column.id),
    }));
  }, [leads]);

  const moveLead = (leadId: number, nextStatus: ColumnId) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === leadId ? { ...lead, status: nextStatus } : lead))
    );
  };

  const handleDrop = async (columnId: ColumnId) => {
    if (!draggedLeadId) return;
    const previous = leads;
    moveLead(draggedLeadId, columnId);
    setDraggedLeadId(null);

    try {
      const response = await fetch(`${API_BASE_URL}/public/leads/${draggedLeadId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: columnId }),
      });
      if (!response.ok) {
        throw new Error("Не удалось сохранить статус.");
      }
    } catch {
      setLeads(previous);
      setError("Не удалось сохранить статус на сервере.");
    }
  };

  return (
    <section className="rounded-[28px] bg-[var(--team-surface)] p-3 shadow-sm sm:p-4 md:rounded-[36px] md:p-6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-xl font-extrabold text-[var(--foreground)] md:text-2xl">CRM воронка</h2>
        <span className="rounded-full bg-[var(--design-btn)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
          {leads.length} клиентов
        </span>
      </div>
      {error ? <p className="mb-3 text-sm text-red-500">{error}</p> : null}
      {isLoading ? <p className="mb-3 text-sm text-[var(--design-muted)]">Загрузка заявок...</p> : null}

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {grouped.map((column) => (
          <div
            key={column.id}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => handleDrop(column.id)}
            className="min-h-[260px] rounded-2xl border border-black/5 bg-[var(--background)] p-3 dark:border-white/10"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold leading-5 text-[var(--foreground)]">{column.title}</h3>
              <span className="rounded-full bg-[var(--projects-span-bg)] px-2 py-1 text-xs text-[var(--design-muted)]">
                {column.items.length}
              </span>
            </div>

            <div className="space-y-3">
              {column.items.map((lead) => (
                <article
                  key={lead.id}
                  draggable
                  onDragStart={() => setDraggedLeadId(lead.id)}
                  onDragEnd={() => setDraggedLeadId(null)}
                  className="cursor-grab rounded-xl border border-black/5 bg-[var(--team-surface)] p-3 active:cursor-grabbing dark:border-white/10"
                >
                  <p className="text-sm font-semibold text-[var(--foreground)]">{lead.name}</p>
                  <p className="mt-1 text-xs text-[var(--design-muted)]">{lead.email}</p>
                  <p className="mt-1 text-xs text-[var(--design-muted)]">
                    {lead.contact_type === "telegram" ? "Telegram" : "WhatsApp"}: {lead.contact}
                  </p>
                  {lead.message ? (
                    <p className="mt-3 rounded-lg bg-[var(--background)] px-2 py-2 text-xs text-[var(--foreground)]">
                      {lead.message}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
