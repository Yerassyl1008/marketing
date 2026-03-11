import Image from "next/image";
import Link from "next/link";

export default function Sales() {
  return (
    <section className="relative pb-16 pt-6 md:pb-20 md:pt-10">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
        <div className="flex w-full justify-start md:w-1/2 md:flex-shrink-0">
          <Image
            src="/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png"
            alt="Сильпо кейс"
            width={760}
            height={500}
            className="h-auto w-full rounded-3xl shadow-sm md:max-w-[760px]"
          />
        </div>

        <div className="w-full min-w-0 md:w-1/2 md:max-w-[780px]">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span>⌂</span>
              <span>›</span>
              <span>Проекты</span>
              <span>›</span>
              <span className="font-semibold text-zinc-700">Сильпо</span>
            </div>

            <span className="rounded-full bg-zinc-900 px-4 py-1 text-sm font-semibold text-[#f5d58d]">
              Розничная торговля
            </span>
          </div>

          <h1 className="mb-3 text-5xl font-extrabold leading-[108%] text-zinc-900 md:text-7xl">
            <span className="inline-block rounded-full bg-[#f5d58d] px-4 py-1">
              Рост продаж
            </span>{" "}
            ×3.4
            <br />
            за 8 месяцев работы
          </h1>

          <p className="mb-5 max-w-[580px] text-sm leading-6 text-zinc-600 md:text-lg md:leading-8">
            Как мы помогли региональному ресторану выйти на федеральный уровень —
            с нуля до 40 000 подписчиков и 2,3 млн охвата ежемесячно.
          </p>

          <p className="text-xl text-zinc-600 md:text-2xl">
            Цена <span className="font-bold text-zinc-900">300€ в месяц</span>
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-end md:absolute md:bottom-4 md:right-2 md:mt-0">
        <div className="flex items-center gap-2">
          <Link href="#" aria-label="Instagram">
            <Image src="/svg/Instagram_black.svg" alt="Instagram" width={26} height={26} />
          </Link>
          <Link href="#" aria-label="Telegram">
            <Image src="/svg/Telegram_black.svg" alt="Telegram" width={26} height={26} />
          </Link>
          <Link href="#" aria-label="Viber">
            <Image src="/svg/Viber_black.svg" alt="Viber" width={26} height={26} />
          </Link>
        </div>
      </div>
    </section>
  );
}