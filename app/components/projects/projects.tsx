import Image from "next/image";

const projects = [
  {
    title: "Сильпо",
    category: "Розничная торговля",
    description: "Комплексное продвижение крупной сети супермаркетов в Instagram и Google",
    price: "300€ в месяц",
  },
  {
    title: "Сильпо",
    category: "Розничная торговля",
    description: "Комплексное продвижение крупной сети супермаркетов в Instagram и Google",
    price: "300€ в месяц",
  },
  {
    title: "Сильпо",
    category: "Розничная торговля",
    description: "Комплексное продвижение крупной сети супермаркетов в Instagram и Google",
    price: "300€ в месяц",
  },
  {
    title: "Сильпо",
    category: "Розничная торговля",
    description: "Комплексное продвижение крупной сети супермаркетов в Instagram и Google",
    price: "300€ в месяц",
  },
];

export default function Projects() {
  return (
    <section className="mt-10  px-4 py-8  md:px-8 md:py-10">
        <h2 className="text-6xl font-bold text-zinc-800 md:text-5xl">Портфолио</h2>
      <div className="mb-6 flex items-center justify-center md:mb-8 md:justify-end">
        <button
          type="button"
          className="hidden items-center gap-2 rounded-full bg-[#f2d48c] px-5 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition-colors hover:bg-[#ebc873] md:inline-flex"
        >
          ↗ Все проекты
        </button>
      </div>

      <div className="relative">
        <div className="flex snap-x  snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="min-w-[260px] snap-start rounded-3xl bg-white shadow md:min-w-0"
            >
              <div className="relative h-44 w-full  rounded-b-3xl rounded-t-3xl">
                <Image
                  src="/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png"
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-3xl"
                />
                <span className="absolute right-2 top-0 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#1e1e1e] px-3 py-1.5 text-xs font-semibold text-[#fde3ac] md:right-3 md:px-4 md:py-2 md:text-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-4 md:p-5">
                <h3 className="mb-2 text-5xl font-bold text-zinc-800 md:text-4xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-zinc-500 md:mb-5">
                  {project.description}
                </p>

                <div className="flex items-end justify-between gap-2">
                  <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 px-4 py-2">
                    <p className="text-2xl text-zinc-400 md:text-sm">Цена</p>
                    <p className="text-2xl font-medium text-zinc-800 md:text-2xl">
                      {project.price}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="grid h-12 w-12 place-items-center rounded-full bg-[#9ab5f6] text-4xl text-zinc-800 md:h-10 md:w-10 md:text-2xl"
                    aria-label="Открыть проект"
                  >
                    ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Предыдущий слайд"
          className="absolute -left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow md:grid"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Следующий слайд"
          className="absolute -right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow md:grid"
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