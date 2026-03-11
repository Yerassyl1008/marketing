const workers = [
  { name: "Анастасия Яковлева", role: "Дизайнер", experience: "3 года опыта" },
  { name: "Алексей Петров", role: "Таргетолог", experience: "5 лет опыта" },
  { name: "Мария Соколова", role: "SMM-специалист", experience: "4 года опыта" },
  { name: "Арина Кузнецова", role: "SEO-специалист", experience: "7 лет опыта" },
  { name: "Вячеслав Макушев", role: "Таргетолог", experience: "4 года опыта" },
];

export default function Workers() {
  return (
    <section className="mt-8 px-8 py-10">
      <h2 className="mb-8 text-center text-5xl font-bold text-zinc-800">
        Специалисты
      </h2>

      <div className="relative">
        <div className="grid grid-cols-5 gap-4">
          {workers.map((worker, index) => (
            <article
              key={worker.name}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="relative h-40 bg-zinc-200">
                <span className="absolute right-3 top-3 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
                  {worker.experience}
                </span>
              </div>

              <div className="p-4">
                <p className="text-sm text-zinc-500">{worker.name}</p>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="text-3xl font-semibold text-zinc-800">
                    {worker.role}
                  </p>
                  {index === 0 && (
                    <button
                      type="button"
                      className="grid h-9 w-9 place-items-center rounded-full bg-[#acc2fd] text-lg text-zinc-800"
                      aria-label="Открыть профиль"
                    >
                      ↗
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Следующий слайд"
          className="absolute -right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-zinc-200 bg-white text-xl text-zinc-700 shadow"
        >
          →
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="h-2.5 w-6 rounded-full bg-zinc-900" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-400" />
      </div>
    </section>
  );
}