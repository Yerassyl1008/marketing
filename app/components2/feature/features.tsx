export default function Features() {
  return (
    <section className="mt-10  p-4 md:p-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {[1, 2, 3, 4].map((item) => (
          <article
            key={item}
            className="relative rounded-3xl bg-[#f6f6f6] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)] md:p-5"
          >
            <span className="absolute right-3 top-0 -translate-y-1/2 rounded-full bg-zinc-900 px-3 py-1 text-sm font-semibold text-[#f5d58d]">
              badge
            </span>

            <div className="mb-4 h-7 w-7 rounded-full border-2 border-zinc-700">
              <div className="ml-3 mt-[-2px] h-3 w-3 rounded-full border-2 border-zinc-700 bg-[#f6f6f6]" />
            </div>

            <h3 className="mb-2 text-4xl font-bold leading-10 text-zinc-800 md:text-3xl md:leading-9">
              Lorem Ipsum
            </h3>
            <p className="text-2xl leading-8 text-zinc-800 md:text-xl md:leading-7">
              Is simply dummy text of the printing
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}