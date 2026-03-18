import Image from "next/image";
import Link from "next/link";

export default function Design() {
  return (
    <section className="relative pb-16 pt-6 md:pb-20 md:mx-10">
      <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:gap-10">
        <div className="flex w-full justify-start md:w-[40%] md:flex-shrink-0">
          <Image
            src="/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1 (2) 1.png"
            alt="hero"
            width={600}
            height={600}
            className="h-auto w-full max-w-[400px] md:max-w-[600px]"
          />
        </div>

        <div className="w-full min-w-0 md:w-[46%] md:max-w-[800px]">
          <div className="mb-4 flex items-center gap-2 text-sm text-[var(--design-muted)]">
            <span>⌂</span>
            <span>›</span>
            <span>Команда</span>
            <span>›</span>
            <span className="font-semibold text-[var(--design-text)]">Анастасия Яковлева</span>
          </div>

          <h2 className="mb-3 text-5xl font-extrabold leading-[105%] text-[var(--design-title)] md:text-6xl">
            <span className="inline-block rounded-full bg-[var(--design-accent)] px-4 py-1">
              SMM-Дизайнер
            </span>
            <br />
            &amp; Контент-мейкер
          </h2>

          <p className="mb-5 max-w-[520px] text-sm leading-6 text-[var(--design-text)] md:text-base">
            Создаёт визуальный голос бренда — от стратегии до пикселя.
            Превращает идеи в контент, который запоминают и которым делятся.
          </p>

          <button className="flex items-center gap-2 rounded-full bg-[var(--design-btn)] px-6 py-3 text-base transition-colors duration-300 hover:bg-[var(--design-btn-hover)]">
            <Image
              src="/svg/solar_calculator-broken.svg"
              alt="calculator"
              width={20}
              height={20}
            />
            Связаться с нами
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-end md:absolute md:bottom-4 md:right-8 md:mt-0">
        <div className="flex items-center gap-2">
          <Link
            href="#"
            aria-label="Instagram"
            className="grid place-items-center rounded-full  text-[10px] text-white 
          "
          >
            <Image src="/svg/Instagram_black.svg" alt="Instagram" width={30} height={30} />
          </Link>
          <Link
            href="#"
            aria-label="Telegram"
            className="grid place-items-center rounded-full  text-[10px] text-white 
          "
          >
            <Image src="/svg/Telegram_black.svg" alt="Telegram" width={30} height={30} />
          </Link>
          <Link
            href="#"
            aria-label="Viber"
            className="grid place-items-center rounded-full  text-[10px] text-white 
          "
          >
            <Image src="/svg/Viber_black.svg" alt="Viber" width={30} height={30} />
          </Link>
          
        </div>
      </div>
    </section>
  );
}