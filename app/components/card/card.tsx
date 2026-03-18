"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Card() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDarkTheme(root.classList.contains("dark"));

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-10 rounded-[32px] bg-[var(--team-surface)] p-3 shadow-sm sm:p-6 lg:p-10 lg:py-30">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-[var(--team-surface)] p-3 sm:p-4 lg:p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 bg-[var(--team-surface)]">
          <div className="hidden border-r border-dashed border-zinc-300 pr-6 lg:block">
            <h3 className="mb-3 text-5xl font-bold leading-tight text-[var(--foreground)]">
              <span className="rounded-full bg-[var(--hero-span)]">
                Не знаете
              </span >
              <br />с чего начать?
            </h3>
            <p className="max-w-md text-lg font-medium leading-7 text-[var(--foreground)]">
              Если вы еще не знаете, кого вам хотелось бы нанять в команду -
              оставьте заявку на общение с маркетологом.
              <span className="font-semibold text-[var(--foreground)]"> Это бесплатно.</span>            </p>

            <div className="mt-8 rounded-2xl  p-4">
              <div className="mb-4 grid h-[210px] place-items-center rounded-xl">
                <Image
                  src={
                    isDarkTheme
                      ? "/img/Frame%20189%20(1)%201.jpg"
                      : "/img/Frame189(1)1.png"
                  }
                  alt="Иллюстрация услуг"
                  width={380}
                  height={380}
                  className={isDarkTheme ? "mb-6 opacity-[0.28]" : "mb-6"}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Дизайн и брендинг",
                  "Создание сайтов",
                  "SMM",
                  "Копирайтинг",
                  "Email-маркетинг",
                  "SEO-продвижение сайта",
                  "Таргетированная реклама",
                  "Google Ads / Я. Директ",
                  "И так далее...",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-xs text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <form className="rounded-3xl p-1 lg:p-0">
            <h3 className="mb-4 text-4xl leading-tight font-bold text-(var(--foreground)) sm:mb-5 sm:text-5xl">
              Свяжитесь с нами
            </h3>

            <label className="mb-2 block text-base text-zinc-600 sm:text-lg" htmlFor="name">
              Ваше имя:
            </label>
            <input
              id="name"
              type="text"
              defaultValue="Алекс"
              className="mb-4 w-full rounded-2xl border border-zinc-500 bg-[var(--card-input-bg)] px-3 py-2.5 text-base outline-none transition focus:border-zinc-700 sm:px-4 sm:text-lg"
            />

            <label className="mb-2 block text-base text-zinc-600 sm:text-lg" htmlFor="email">
              Электронная почта:
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="mb-4 w-full rounded-2xl border border-zinc-300 bg-[var(--card-input-bg)] px-3 py-2.5 text-base outline-none transition focus:border-zinc-500 sm:px-4 sm:text-lg"
            />

            <p className="mb-2 text-base text-zinc-600 sm:text-lg">Способ связи</p>
            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                type="button"
                className="flex items-center justify-between rounded-2xl border border-zinc-500 px-3 py-2.5 text-sm text-zinc-800 sm:text-base"
              >
                <span className="flex items-center gap-2">
                  <Image
                    src="/svg/Telegram_black.svg"
                    alt="Telegram"
                    width={20}
                    height={20}
                  />
                  Телега
                </span>
                <span className="h-4 w-4 rounded-full border-2 border-zinc-500 bg-zinc-900" />
              </button>
              <button
                type="button"
                className="flex items-center justify-between rounded-2xl border border-zinc-300 px-3 py-2.5 text-sm text-zinc-500 sm:text-base"
              >
                <span className="flex items-center gap-2">
                  <Image src="/svg/Viber_black.svg" alt="Viber" width={20} height={20} />
                  Вацап
                </span>
                <span className="h-4 w-4 rounded-full border-2 border-zinc-400" />
              </button>
            </div>

            <div className="mb-1 flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-3">
              <label className="block text-base text-zinc-600 sm:text-lg" htmlFor="tg">
                Ваш Telegram:
              </label>
              <span className="text-xs leading-tight text-[#ff6f6f] sm:text-sm">
                Пожалуйста заполните поле
              </span>
            </div>
            <input
              id="tg"
              type="text"
              placeholder="@username или номер телефона"
              className="mb-8 w-full rounded-2xl border border-[#ff8f8f] bg-[var(--card-input-bg)] px-3 py-2.5 text-base text-zinc-500 outline-none transition focus:border-[#ff6f6f] sm:px-4 sm:text-lg"
            />

            <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-end">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border-b-8 border-zinc-900 bg-[#a9bffd] px-4 py-3 text-xl font-medium text-zinc-900 transition-colors hover:bg-[#98b1fb] sm:w-auto sm:justify-start sm:px-6 sm:text-2xl"
              >
                <span className="text-xl sm:text-2xl">→</span>
                Получить консультацию
              </button>

              <div className="flex items-center justify-center gap-2 self-end text-center sm:self-auto">
                <Link href="#" aria-label="Telegram">
                  <Image
                    src="/svg/Telegram_black.svg"
                    alt="Telegram"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href="#" aria-label="Viber">
                  <Image src="/svg/Viber_black.svg" alt="Viber" width={30} height={30} />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}