"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Sales() {
  const t = useTranslations("sales");

  return (
    <section className="relative pb-16 pt-6 md:pb-20 md:pt-10">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
        <div className="flex w-full justify-center md:w-1/2 md:flex-shrink-0">
          <Image
            src="/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png"
            alt={t("imageAlt")}
            width={500}
            height={660}
            className="h-auto w-full rounded-3xl shadow-sm md:max-w-[660px]"
          />
        </div>

        <div className="w-full min-w-0 md:w-1/2 md:max-w-[660px]">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span aria-hidden>⌂</span>
              <span aria-hidden>›</span>
              <span>{t("breadcrumbProjects")}</span>
              <span aria-hidden>›</span>
              <span className="font-semibold text-zinc-700">
                {t("breadcrumbCurrent")}
              </span>
            </div>

            <span className="rounded-full bg-zinc-900 px-4 py-1 text-sm  text-[#f5d58d] font-extrabold font-['Manrope'] ">
              {t("badge")}
            </span>
          </div>

          <h1 className="mb-3 text-5xl font-extrabold leading-[108%] md:text-5xl text-[var(--design-title)]">
            <span className="inline-block rounded-full bg-[#f5d58d] px-4 py-1">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleMetric")}
            <br />
            {t("titleSubtitle")}
          </h1>

          <p className="mb-5 max-w-[580px] text-sm leading-6 text-[var(--design-text)] md:text-lg md:leading-8">
            {t("description")}
          </p>

          <p className="text-xl text-zinc-600 md:text-2xl">
            {t("priceLabel")}{" "}
            <span className="font-bold text-[var(--design-text)]">
              {t("priceValue")}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-end md:absolute md:bottom-4 md:right-2 md:mt-0">
        <div className="flex items-center gap-2">
          <Link href="#" aria-label={t("socialInstagram")}>
            <Image
              src="/svg/Instagram_black.svg"
              alt=""
              width={26}
              height={26}
            />
          </Link>
          <Link href="#" aria-label={t("socialTelegram")}>
            <Image
              src="/svg/Telegram_black.svg"
              alt=""
              width={26}
              height={26}
            />
          </Link>
          <Link href="#" aria-label={t("socialViber")}>
            <Image
              src="/svg/Viber_black.svg"
              alt=""
              width={26}
              height={26}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
