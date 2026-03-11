"use client";

import { useState } from "react";

type ServiceSection = {
  id: string;
  title: string;
  items: string[];
};

const sections: ServiceSection[] = [
  {
    id: "popular",
    title: "Самые частые заказы",
    items: [
      "Таргетированная реклама Meta, VK, TikTok",
      "Контекстная реклама Google Ads / Я.Директ",
      "SEO-продвижение сайта",
      "Создание сайта корпоративного",
      "SMM - ведение социальных сетей",
      "Разработка рекламных креативов",
      "Копирайтинг (тексты для сайта, рекламы)",
      "Настройка аналитики (Google Analytics, Я.Метрика)",
      "Email-маркетинг (настройка рассылок)",
    ],
  },
  {
    id: "middle",
    title: "Средняя частота заказа",
    items: [
      "Редизайн сайта",
      "UX/UI-дизайн",
      "A/B-тестирование рекламы и посадочных страниц",
      "Продвижение на маркетплейсах",
      "Создание интернет-магазина",
      "Influencer-реклама (подбор блогеров)",
      "Видеореклама / видеопродакшн",
      "Настройка CRM и автоматизации",
      "Локальное SEO (карты, Google Business Profile)",
    ],
  },
  {
    id: "rare",
    title: "Реже, но регулярно заказывают",
    items: [
      "Разработка логотипа",
      "Разработка фирменного стиля",
      "PR-размещение в СМИ",
      "Брендбук",
      "Маркетинговые исследования",
      "Фотосъемка для бизнеса",
      "Разработка презентаций",
      "Чат-боты для сайта / мессенджеров",
      "Разработка квиз-лендингов",
    ],
  },
];

export default function Services() {
  const [openedSection, setOpenedSection] = useState<string>("popular");

  return (
    <section className="mt-8  px-3 py-8 md:px-8 md:py-10">
      <h2 className="mb-10 text-center text-3xl font-bold text-zinc-800 md:mb-16 md:text-4xl">
        Услуги
      </h2>

      <div className="space-y-4 md:space-y-8">
        {sections.map((section) => {
          const isOpenMobile = openedSection === section.id;

          return (
            <div key={section.id} className="rounded-2xl bg-[#F1F0EE] p-2 md:p-3">
              <button
                type="button"
                onClick={() =>
                  setOpenedSection((prev) => (prev === section.id ? "" : section.id))
                }
                className="flex w-full items-center justify-between rounded-xl px-2 py-1 text-left md:pointer-events-none md:justify-center"
                aria-expanded={isOpenMobile}
              >
                <span className="text-1xl font-semibold text-zinc-800 md:text-2xl mb-2">
                  {section.title}
                </span>
                <span className="text-xl text-zinc-500 md:hidden">
                  {isOpenMobile ? "⌃" : "⌄"}
                </span>
              </button>

              <div
                className={`mt-2 grid grid-cols-2 gap-2 md:grid md:grid-cols-3 md:gap-3 ${
                  isOpenMobile ? "block" : "hidden"
                } md:block`}
              >
                {section.items.map((item, index) => {
                  const isActive = section.id === "popular" && index === 0;

                  return (
                    <div
                      key={item}
                      className={`flex min-h-16 items-start gap-2 rounded-full px-3 py-4 md:min-h-16 md:items-center ${
                        isActive
                          ? "bg-[#9ab5f6] text-zinc-800"
                          : "bg-zinc-100 text-zinc-700"
                      }`}
                    >
                      <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full border border-zinc-400 md:mt-0" />
                      <span className="text-xs leading-5 md:text-sm">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}