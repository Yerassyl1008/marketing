import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <section className="mt-10 rounded-[32px] bg-[#f1f1f1] p-6  shadow-sm md:p-10 md:py-30">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-[#f7f7f7] p-4 shadow md:p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="hidden border-r border-dashed border-zinc-300 pr-6 md:block">
            <h3 className="mb-3 text-5xl font-bold leading-tight text-zinc-800">
              <span className="rounded-full bg-[#f5cf7d]">
                Не знаете
              </span>
              <br />с чего начать?
            </h3>
            <p className="max-w-md text-lg text-zinc-500">
              Если вы еще не знаете, кого вам хотелось бы нанять в команду -
              оставьте заявку на общение с маркетологом.
              <span className="font-semibold text-zinc-700"> Это бесплатно.</span>
            </p>

            <div className="mt-8 rounded-2xl  p-4">
              <div className="mb-4 grid h-[210px] place-items-center rounded-xl">
                <Image
                  src="/img/Frame189(1)1.png"
                  alt="Иллюстрация услуг"
                  width={380}
                  height={380}
                  className="mb-6"
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

          <form className="rounded-3xl bg-[#f7f7f7] p-1 md:p-0">
            <h3 className="mb-5 text-5xl font-bold text-zinc-800">
              Свяжитесь с нами
            </h3>

            <label className="mb-2 block text-lg text-zinc-600" htmlFor="name">
              Ваше имя:
            </label>
            <input
              id="name"
              type="text"
              defaultValue="Алекс"
              className="mb-4 w-full rounded-2xl border border-zinc-500 bg-transparent px-4 py-2.5 text-lg outline-none transition focus:border-zinc-700"
            />

            <label className="mb-2 block text-lg text-zinc-600" htmlFor="email">
              Электронная почта:
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="mb-4 w-full rounded-2xl border border-zinc-300 bg-transparent px-4 py-2.5 text-lg outline-none transition focus:border-zinc-500"
            />

            <p className="mb-2 text-lg text-zinc-600">Способ связи</p>
            <div className="mb-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                className="flex items-center justify-between rounded-2xl border border-zinc-500 px-3 py-2.5 text-base text-zinc-800"
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
                className="flex items-center justify-between rounded-2xl border border-zinc-300 px-3 py-2.5 text-base text-zinc-500"
              >
                <span className="flex items-center gap-2">
                  <Image src="/svg/Viber_black.svg" alt="Viber" width={20} height={20} />
                  Вацап
                </span>
                <span className="h-4 w-4 rounded-full border-2 border-zinc-400" />
              </button>
            </div>

            <div className="mb-1 flex items-center justify-between gap-3">
              <label className="block text-lg text-zinc-600" htmlFor="tg">
                Ваш Telegram:
              </label>
              <span className="text-sm text-[#ff6f6f]">
                Пожалуйста заполните поле
              </span>
            </div>
            <input
              id="tg"
              type="text"
              placeholder="@username или номер телефона"
              className="mb-8 w-full rounded-2xl border border-[#ff8f8f] bg-transparent px-4 py-2.5 text-lg text-zinc-500 outline-none transition focus:border-[#ff6f6f]"
            />

            <div className="flex items-end justify-between gap-3 ">
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full border-b-8 border-zinc-900 bg-[#a9bffd] px-6 py-3 text-2xl font-medium text-zinc-900 transition-colors hover:bg-[#98b1fb]"
              >
                <span className="text-2xl">→</span>
                Получить консультацию
              </button>

              <div className="flex items-center text-center justify-center gap-2 ">
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