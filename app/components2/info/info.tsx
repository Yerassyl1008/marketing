"use client";

import { useTranslations } from "next-intl";

const INFO_ITEM_IDS = [1, 2, 3, 4] as const;

export default function Info() {
  const t = useTranslations("info");

  return (
    <section className="mt-10 p-4 md:p-6">
      <h2 className="mb-8 text-center text-6xl font-bold text-[var(--design-title)] md:mb-16 md:text-5xl">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {INFO_ITEM_IDS.map((id) => (
          <article key={id} className="border-l border-zinc-500 pl-3 md:pl-4">
            <h3 className="mb-3 text-3xl font-bold text-[var(--design-title)] md:text-4xl">
              {t(`items.${id}.title`)}
            </h3>
            <p className="text-2xl leading-8 text-[var(--design-title)] md:text-2xl md:leading-7">
              {t(`items.${id}.body`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
