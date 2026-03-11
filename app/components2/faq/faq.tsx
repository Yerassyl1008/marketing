"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Как быстро вы запускаете продвижение после старта?",
    answer:
      "Обычно базовый запуск занимает 3-7 рабочих дней: собираем вводные, проверяем аналитику, формируем гипотезы и запускаем первые связки. Сложные проекты с большим количеством каналов могут занять до 10-14 дней.",
  },
  {
    question: "Какие рекламные каналы вы используете?",
    answer:
      "Мы подбираем каналы под задачу: Meta Ads, Google Ads, TikTok Ads, SEO, email-маркетинг и контент. В каждом проекте формируем микс инструментов, который дает лучший результат по стоимости лида и продажам.",
  },
  {
    question: "Как вы оцениваете эффективность рекламы?",
    answer:
      "Фиксируем KPI до старта: CPL, CPA, ROAS, CAC, конверсия в заявку и продажу. Далее строим отчеты по неделям и месяцам, чтобы видеть динамику и принимать решения на основе цифр, а не догадок.",
  },
  {
    question: "Вы работаете только с крупными компаниями?",
    answer:
      "Нет, мы работаем с бизнесом разного масштаба: от небольших локальных компаний до международных проектов. Стратегия и бюджет адаптируются под текущий этап роста бизнеса.",
  },
  {
    question: "Кто будет вести мой проект на практике?",
    answer:
      "За проект отвечает выделенный маркетолог и команда специалистов по направлениям: таргет, контекст, дизайн, аналитика, контент. Вы всегда знаете, кто отвечает за задачи и сроки выполнения.",
  },
  {
    question: "Можно ли начать с тестового периода?",
    answer:
      "Да, мы можем начать с тестового этапа, где проверяем гипотезы и определяем рабочие связки. По итогам теста формируем масштабируемый план и прозрачный прогноз по дальнейшему росту.",
  },
];

export default function Faq() {
  const [openedIndex, setOpenedIndex] = useState(0);

  return (
    <section className="mt-10 p-2 md:p-6">
      <h2 className="mb-6 text-center text-5xl font-bold text-zinc-800 md:mb-10 md:text-6xl">
        FAQ
      </h2>

      <div className="rounded-3xl  px-3 py-2 md:px-6 md:py-4">
        {faqItems.map((item, index) => {
          const isOpen = openedIndex === index;

          return (
            <div key={item.question} className="border-b border-zinc-300 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenedIndex((prev) => (prev === index ? -1 : index))}
                className="flex w-full items-center gap-3 py-4 text-left md:py-8"
                aria-expanded={isOpen}
              >
                <span className="w-4 text-xl text-zinc-700">{isOpen ? "−" : "+"}</span>
                <span className="text-xl font-medium text-zinc-800 md:text-4xl">
                  {item.question}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] pb-4 md:pb-5" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden pl-7 pr-1">
                  <p className="max-w-[1200px] text-base leading-7 text-zinc-700 md:text-3xl md:leading-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}