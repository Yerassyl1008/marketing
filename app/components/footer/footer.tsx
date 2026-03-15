import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Команда", href: "/team" },
  { label: "Процесс", href: "/main-page#work" },
  { label: "Услуги", href: "/services" },
  { label: "Проекты", href: "/projects" },
  { label: "Карта сайта", href: "/connect" },
];

const contacts = [
  { label: "Написать нам", href: "/connect" },
  { label: "+9 999 99 99 99", href: "tel:+99999999999" },
  { label: "Inst: @Info", href: "https://instagram.com", external: true },
  { label: "Telegram: @Info", href: "https://t.me", external: true },
  { label: "Viber: @Info", href: "viber://chat?number=%2B99999999999" },
];

const docs = [
  { label: "Политика Конфиденциальности", href: "/privacy" },
  { label: "Условия использования", href: "#" },
  { label: "Реквизиты компании", href: "#" },
];

const linkClass =
  "group inline-flex items-center text-zinc-300 transition-all duration-300 hover:translate-x-1 hover:text-white";

export default function Footer() {
  return (
    <footer className="mt-10 w-full rounded-t-[32px] bg-[#E5E5E5] px-3 pb-0 pt-3 md:px-8 md:pb-0 md:pt-8">
      <div className="rounded-[28px] bg-[#E5E5E5] px-4 py-6 md:px-12 md:py-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3 md:max-w-[620px]">
            <span className="text-5xl text-zinc-300">“</span>
            <p className="text-sm text-zinc-500 md:text-2xl md:leading-9">
              <span className="font-semibold text-zinc-700">
                Мы готовы работать на тебя,
              </span>{" "}
              чтобы ты получил лучший результат за справедливую цену
            </p>
          </div>

          <div className="order-2 flex items-center md:order-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
              <div
                key={item}
                className={`relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#f5f5f5] md:h-14 md:w-14 ${
                  idx === 0 ? "" : "-ml-2 md:-ml-3"
                }`}
              >
                <Image
                  src="/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png"
                  alt="member"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="order-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#9ab5f6] px-5 py-2.5 text-sm font-medium text-zinc-900 shadow transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#89a9f5] md:order-2 md:px-8 md:py-3.5 md:text-base"
          >
            <span>→</span>
            Связаться с нами
          </button>
        </div>
      </div>

      <div className="mt-4 -mx-3 bg-[#1d1d1f] text-zinc-200 md:-mx-8">
        <div className="mx-auto max-w-[1900px] px-4 py-6 md:px-12 md:py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[2.2fr_1fr_1fr_1fr] md:gap-10">
          <div>
            <h3 className="mb-3 text-2xl font-semibold md:text-4xl">MARKETING LOGO</h3>
            <p className="max-w-md text-sm leading-6 text-zinc-400 md:text-lg md:leading-8">
              Комплексное продвижение бизнеса. Работаем с компаниями по всему миру - от
              стартапов до крупных корпораций.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-base">
              <span>Google Partner</span>
              <span>Meta Partner</span>
              <span>SSL Secure</span>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm text-zinc-500 md:text-lg">Навигация</p>
            <ul className="space-y-2 text-sm md:text-lg">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    <span className="border-b border-transparent transition-colors duration-300 group-hover:border-white/70">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm text-zinc-500 md:text-lg">Контакты</p>
            <ul className="space-y-2 text-sm md:text-lg">
              {contacts.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={linkClass}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer noopener" : undefined}
                  >
                    <span className="border-b border-transparent transition-colors duration-300 group-hover:border-white/70">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm text-zinc-500 md:text-lg">Документы</p>
            <ul className="space-y-2 text-sm md:text-lg">
              {docs.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    <span className="border-b border-transparent transition-colors duration-300 group-hover:border-white/70">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

          <div className="my-6 h-px w-full border-t border-dashed border-zinc-600" />

          <div className="flex flex-col gap-2 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 INFO. Все права защищены.</p>
            <p>Комплексное продвижение бизнеса</p>
          </div>
        </div>
      </div>
    </footer>
  );
}