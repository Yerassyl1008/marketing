import Image from "next/image";
import Link from "next/link";

export default function Smm() {
  return (
    <section className="relative px-3 pb-16 pt-6 sm:px-4 md:px-0 md:pb-20 md:pt-10 md:pl-10">
      <div className="w-full md:max-w-[880px]">
        <div className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
          <span>⌂</span>
          <span>›</span>
          <span>Услуги</span>
          <span>›</span>
          <span className="font-semibold text-zinc-700">SMM</span>
        </div>

        <h1 className="mb-3 text-[1.8rem] font-extrabold leading-[108%] text-[var(--foreground)] sm:text-[2.8rem] md:text-5xl">
          <span className="inline-block whitespace-nowrap rounded-full bg-[var(--hero-span)] px-4 py-1">
            SMM-продвижение
          </span>{" "}
          которое
        
          работает на ваши продажи
        </h1>

        <p className="mb-6 max-w-[640px] font-medium text-sm leading-5 text-[var(--foreground)] md:text-lg md:leading-8">
          Строим живые сообщества вокруг бренда, генерируем органический трафик
          и конвертируем подписчиков в покупателей - системно, без накруток.
        </p>

        <button className="flex items-center gap-2 rounded-full bg-[#acc2fd] px-5 py-3 text-sm transition-colors duration-300 hover:bg-[#9fb8fc] sm:px-6 sm:text-base">
          <Image
            src="/svg/solar_calculator-broken.svg"
            alt="calculator"
            width={20}
            height={20}
          />
          Связаться с нами
        </button>
      </div>

      <div className="mt-12 flex justify-start md:absolute md:bottom-4 md:left-0 md:mt-0 md:pl-10">
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