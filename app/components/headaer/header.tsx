"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const languages = ["RU", "ENG"];
const navLinks = [
  { label: "Команда", href: "/team" },
  { label: "Процесс", href: "/process" },
  { label: "Услуги", href: "/services" },
  { label: "Проекты", href: "/projects" },
  { label: "Связаться", href: "/connect" },
];

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("RU");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="my-6 flex items-center justify-between rounded-full border border-zinc-300 bg-zinc-100 px-4 py-3 md:px-6 md:py-4">
        <h1 className="text-2xl font-semibold md:text-lg">MARKETING LOGO</h1>

        <button
          type="button"
          className="inline-flex text-3xl md:hidden"
          aria-label="Открыть меню"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>

        <div className="hidden items-center gap-4 md:flex">
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative" ref={languageRef}>
              <button
                type="button"
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                className="flex items-center justify-center gap-2 rounded-full px-2 py-1"
              >
                <span>{selectedLanguage}</span>
                <Image src="/svg/chevron-right.svg" alt="arrow-down" width={10} height={10} />
              </button>

              {isLanguageOpen && (
                <div className="absolute left-0 top-12 z-20 w-full rounded-3xl border border-zinc-300 bg-zinc-100 p-1 shadow-sm">
                  {languages
                    .filter((lang) => lang !== selectedLanguage)
                    .map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setIsLanguageOpen(false);
                        }}
                        className="flex w-full items-center justify-center rounded-full px-2 py-1 text-zinc-600 transition hover:bg-zinc-200"
                      >
                        {lang}
                      </button>
                    ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className={`relative flex h-10 w-20 items-center rounded-full p-1 transition-colors ${
                isDark ? "bg-indigo-300" : "bg-amber-200"
              }`}
              aria-label="Переключить тему"
              aria-pressed={isDark}
            >
              <span
                className={`grid h-8 w-8 place-items-center rounded-full text-lg transition-all duration-300 ${
                  isDark
                    ? "translate-x-10 bg-zinc-900 text-indigo-300"
                    : "translate-x-0 bg-zinc-900 text-amber-200"
                }`}
              >
                {isDark ? "☾" : "☼"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f4f4f4]/95 px-6 pb-6 pt-8 backdrop-blur-sm md:hidden">
          <button
            type="button"
            aria-label="Закрыть меню"
            className="absolute right-6 top-6 text-3xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>

          <nav>
            <ul className="space-y-5 text-4xl text-zinc-800">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="mt-16 inline-flex items-center gap-2 rounded-full bg-[#acc2fd] px-6 py-3 text-lg shadow"
          >
            → Связаться с нами
          </button>

          <div className="mt-10 flex justify-center opacity-20">
            <Image src="/img/Mask group.png" alt="decorative" width={220} height={220} />
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className={`relative flex h-10 w-20 items-center rounded-full p-1 transition-colors ${
                isDark ? "bg-indigo-300" : "bg-amber-200"
              }`}
              aria-label="Переключить тему"
            >
              <span
                className={`grid h-8 w-8 place-items-center rounded-full text-lg transition-all duration-300 ${
                  isDark
                    ? "translate-x-10 bg-zinc-900 text-indigo-300"
                    : "translate-x-0 bg-zinc-900 text-amber-200"
                }`}
              >
                {isDark ? "☾" : "☼"}
              </span>
            </button>

            <button type="button" className="flex items-center gap-2 text-2xl">
              {selectedLanguage}
              <Image src="/svg/chevron-right.svg" alt="arrow" width={12} height={12} />
            </button>

            <div className="flex items-center gap-2">
              <Image src="/svg/Instagram_black.svg" alt="Instagram" width={24} height={24} />
              <Image src="/svg/Telegram_black.svg" alt="Telegram" width={24} height={24} />
              <Image src="/svg/Viber_black.svg" alt="Viber" width={24} height={24} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}