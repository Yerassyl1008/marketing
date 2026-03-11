import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pb-16 pt-6 md:pb-20 md:pt-10">
      <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center">
        <div className="flex w-full justify-center md:w-1/2 md:flex-shrink-0">
          <Image
            src="/img/Mask group.png"
            alt="hero"
            width={550}
            height={550}
            className="h-auto w-full max-w-[420px] md:max-w-[450px]"
          />
        </div>

        <div className="w-full min-w-0 md:w-1/2 md:max-w-[800px]">
          <h2 className="mb-2 text-5xl font-bold leading-[120%] md:text-6xl">
            Комплексное продвижение вашего <br className="hidden md:block" />
            бизнеса от{" "}
            <span className="inline-block rounded-full bg-[#f5c765] px-3 py-0.5 md:px-4">
              299 €/месяц
            </span>
          </h2>
          <p className="mb-4 text-zinc-700">Мы полностью берем эту задачу на себя</p>
          <button className="flex items-center gap-2 rounded-full bg-[#acc2fd] px-5 py-3 text-lg transition-colors duration-300 hover:bg-[#9fb8fc] md:px-4 md:text-base">
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