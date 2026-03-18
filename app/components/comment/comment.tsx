export default function Comment() {
  return (
    <section className="mt-10 px-2 py-8 lg:px-8 lg:py-10">
      <div className="relative">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-2 lg:overflow-visible">
          {[1, 2].map((item) => (
            <article
              key={item}
              className="relative min-w-full snap-start rounded-3xl bg-[var(--team-surface)] p-4 shadow lg:min-w-0 lg:p-6"
            >
              <span className="absolute right-3 top-3 translate-y-0 rounded-full bg-zinc-900 px-3 py-1 text-sm font-semibold text-[#f2d48c] lg:right-4 lg:top-0 lg:-translate-y-1/2">
                badge
              </span>

              <div className="mb-4 flex items-center gap-3">
                <div className="h-16 w-16 rounded-full bg-zinc-300" />
                <div>
                  <p className="text-2xl font-semibold text-(var(--foreground)) lg:text-lg">
                    Lorem Ipsum
                  </p>
                  <p className="text-xl text-(var(--foreground)) lg:text-base">Lorem Ipsum</p>
                </div>
              </div>

              <h3 className="mb-2 text-3xl font-bold text-(var(--foreground)) lg:text-4xl">
                Lorem Ipsum
              </h3>
              <p className="text-2xl font-medium text-Light leading-9 text-(var(--foreground)) lg:text-[33px] lg:leading-13">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-5xl font-bold text-(var(--foreground)) lg:text-4xl">5.0</span>
                <span className="text-4xl text-[#f2d48c] lg:text-3xl">★ ★ ★ ★ ★</span>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Предыдущий отзыв"
          className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow lg:grid"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Следующий отзыв"
          className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow lg:grid"
        >
          →
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="h-3 w-8 rounded-full bg-zinc-900" />
        <span className="h-3 w-3 rounded-full border-2 border-zinc-900" />
        <span className="h-3 w-3 rounded-full border-2 border-zinc-900" />
      </div>
    </section>
  );
}