import Image from "next/image";
import Link from "next/link";

export default function Smm() {
  return (
    <section className="relative pb-16 pt-6 pl-10 md:pb-20 md:pt-10">
      <div className="w-full md:max-w-[980px]">
        <div className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
          <span>⌂</span>
          <span>›</span>
          <span>Услуги</span>
          <span>›</span>
          <span className="font-semibold text-zinc-700">SMM</span>
        </div>

        <h1 className="mb-3 text-5xl font-extrabold leading-[108%] text-zinc-900 md:text-7xl">
          <span className="inline-block rounded-full bg-[#f5d58d] px-4 py-1">
            SMM-продвижение
          </span>{" "}
          которое
          <br />
          работает на ваши продажи
        </h1>

        <p className="mb-6 max-w-[640px] text-sm leading-6 text-zinc-600 md:text-lg md:leading-8">
          Строим живые сообщества вокруг бренда, генерируем органический трафик
          и конвертируем подписчиков в покупателей - системно, без накруток.
        </p>

        <button className="flex items-center gap-2 rounded-full bg-[#acc2fd] px-6 py-3 text-base transition-colors duration-300 hover:bg-[#9fb8fc]">
          <Image
            src="/svg/solar_calculator-broken.svg"
            alt="calculator"
            width={20}
            height={20}
          />
          Связаться с нами
        </button>
      </div>

      <div className="mt-24 flex justify-start md:absolute pl-10 md:bottom-4 md:left-0 md:mt-0">
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