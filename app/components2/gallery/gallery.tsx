import Image from "next/image";

const images = [
  "/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png",
  "/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png",
  "/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png",
  "/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png",
  "/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png",
  "/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png",
  // "/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1 (2) 1.png",
  // "/img/Mask group.png",
  // "/img/Frame189(1)1.png",
  // "/img/Group 76 (1) 1.png",
  // "/img/beautifull-caucasian-woman-with-curly-hair-smiles-isolated 1.png",
];

export default function Gallery() {
  return (
    <section className="mt-10 rounded-[32px]  p-4 md:p-10">
      <h2 className="mb-6 text-left text-4xl font-bold text-zinc-800 md:mb-8 md:text-center md:text-5xl">
        Lorem Ipsum
      </h2>

      <div className="hidden gap-4 md:grid md:grid-cols-[1.35fr_1fr_1fr] md:grid-rows-2">
        <article className="relative row-span-2 min-h-[520px] overflow-hidden rounded-3xl bg-zinc-200">
          <Image src={images[0]} alt="gallery 1" fill className="object-cover" />
        </article>
        <article className="relative min-h-[250px] overflow-hidden rounded-3xl bg-zinc-200">
          <Image src={images[1]} alt="gallery 2" fill className="object-cover" />
        </article>
        <article className="relative min-h-[250px] overflow-hidden rounded-3xl bg-zinc-200">
          <Image src={images[2]} alt="gallery 3" fill className="object-cover" />
        </article>
        <article className="relative min-h-[250px] overflow-hidden rounded-3xl bg-zinc-200">
          <Image src={images[3]} alt="gallery 4" fill className="object-cover" />
        </article>
        <article className="relative min-h-[250px] overflow-hidden rounded-3xl bg-zinc-200">
          <Image src={images[4]} alt="gallery 5" fill className="object-cover" />
        </article>
      </div>

      <div className="grid grid-cols-2 gap-3 md:hidden">
        {images.map((src, idx) => (
          <article
            key={`${src}-${idx}`}
            className="relative min-h-[170px] overflow-hidden rounded-3xl bg-zinc-200"
          >
            <Image src={src} alt={`gallery mobile ${idx + 1}`} fill className="object-cover" />
          </article>
        ))}
      </div>
    </section>
  );
}
