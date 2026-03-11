export default function Info() {
  return (
    <section className="mt-10 p-4 md:p-6">
      <h2 className="mb-8 text-center text-6xl font-bold text-zinc-800 md:mb-16 md:text-5xl">
        Lorem Ipsum
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {[1, 2, 3, 4].map((item) => (
          <article key={item} className="border-l border-zinc-500 pl-3 md:pl-4">
            <h3 className="mb-3 text-3xl font-bold text-zinc-800 md:text-4xl">
              What is Lorem Ipsum?
            </h3>
            <p className="text-2xl leading-8 text-zinc-700 md:text-2xl md:leading-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}