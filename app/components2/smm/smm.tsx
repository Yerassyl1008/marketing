"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Smm() {
  const t = useTranslations("smm");

  return (
    <section className="relative px-3 pb-16 pt-6 sm:px-4 md:px-0 md:pb-20 md:pt-10 md:pl-10">
      <div className="w-full md:max-w-[880px]">
        <div className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
          <span aria-hidden>⌂</span>
          <span aria-hidden>›</span>
          <span>{t("breadcrumbServices")}</span>
          <span aria-hidden>›</span>
          <span className="font-semibold text-zinc-700">{t("breadcrumbCurrent")}</span>
        </div>

        <h1 className="mb-3 text-[1.8rem] font-extrabold leading-[108%] text-[var(--foreground)] sm:text-[2.8rem] md:text-5xl">
          <span className="inline-block whitespace-nowrap rounded-full bg-[var(--hero-span)] px-4 py-1">
            {t("titleHighlight")}
          </span>{" "}
          {t("titleRest")}
        </h1>

        <p className="mb-6 max-w-[640px] font-medium text-sm leading-5 text-[var(--foreground)] md:text-lg md:leading-8">
          {t("description")}
        </p>

        <Link
          href="/connect"
          className="inline-flex items-center gap-2 rounded-full bg-[#acc2fd] px-5 py-3 text-sm transition-colors duration-300 hover:bg-[#9fb8fc] sm:px-6 sm:text-base"
        >
          <Image
            src="/svg/solar_calculator-broken.svg"
            alt={t("calculatorAlt")}
            width={20}
            height={20}
          />
          {t("contactButton")}
        </Link>
      </div>

      <div className="mt-12 flex justify-start md:absolute md:bottom-4 md:left-0 md:mt-0 md:pl-10">
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
