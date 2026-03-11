import Image from "next/image";

type Step = {
  id: number;
  title: string;
  text: string;
  color: "blue" | "yellow";
  desktopPos: string;
  mobilePos: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "анализ",
    text: "глубокий анализ полученной информации аналитиком",
    color: "yellow",
    desktopPos: "md:left-1/2 md:top-8 md:-translate-x-1/2",
    mobilePos: "left-1/2 top-2 -translate-x-1/2",
  },
  {
    id: 2,
    title: "позиция",
    text: "выделение сильных сторон компании и УТП среди конкурентов",
    color: "blue",
    desktopPos: "md:right-8 md:top-1/2 md:-translate-y-[88%]",
    mobilePos: "right-0 top-1/2 -translate-y-[85%]",
  },
  {
    id: 3,
    title: "стратегия",
    text: "создание плана продвижения компании",
    color: "yellow",
    desktopPos: "md:right-16 md:bottom-16",
    mobilePos: "right-0 bottom-14",
  },
  {
    id: 4,
    title: "запуск",
    text: "запуск и тестирование рекламных активностей",
    color: "yellow",
    desktopPos: "md:left-12 md:bottom-16",
    mobilePos: "left-0 bottom-24",
  },
  {
    id: 5,
    title: "рост",
    text: "масштабирование рекламных кампаний",
    color: "blue",
    desktopPos: "md:left-12 md:top-1/2 md:-translate-y-[88%]",
    mobilePos: "left-0 top-1/2 -translate-y-[95%]",
  },
];

function StepCard({ step }: { step: Step }) {
  const bgClass = step.color === "blue" ? "bg-[#9ab5f6]" : "bg-[#f2d48c]";

  return (
    <article
      className={`absolute z-20 w-[180px] rounded-2xl p-3 shadow-sm md:w-[230px] md:p-4 ${bgClass} ${step.mobilePos} ${step.desktopPos}`}
    >
      <span className="absolute -right-1 -top-2 rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-semibold text-white md:px-2.5 md:py-1 md:text-xs">
        шаг {step.id}
      </span>
      <p className="mb-1 text-xs font-semibold text-zinc-800 md:text-sm">{step.title}</p>
      <p className="text-[11px] leading-4 text-zinc-800 md:text-sm md:leading-5">
        {step.text}
      </p>
    </article>
  );
}

export default function Work() {
  return (
    <section className="mt-10 rounded-[32px] px-2 py-8 shadow-sm md:px-8 md:py-12">
      <h2 className="mb-8 text-center text-4xl font-bold text-zinc-800 md:mb-10 md:text-5xl">
        Как мы работаем?
      </h2>

      <div className="relative mx-auto h-[620px] w-full max-w-[950px] md:h-[700px]">
        <div className="absolute left-1/2 top-[56%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-400 md:top-1/2 md:h-[470px] md:w-[470px]" />

        <span className="absolute left-[78%] top-[33%] z-10 text-zinc-500">→</span>
        <span className="absolute left-[76%] top-[70%] z-10 text-zinc-500">→</span>
        <span className="absolute left-[29%] top-[80%] z-10 text-zinc-500">→</span>
        <span className="absolute left-[12%] top-[56%] z-10 text-zinc-500">→</span>
        <span className="absolute left-[33%] top-[28%] z-10 text-zinc-500">→</span>

        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}

        <div className="absolute bottom-[75px] left-1/2 z-10 w-[210px] -translate-x-1/2 md:bottom-[40px] md:w-[350px]">
          <Image
            src="/img/Group%2076%20(1)%201.png"
            alt="Маркетолог"
            width={512}
            height={768}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}