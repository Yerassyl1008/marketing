import Header from "../../components/headaer/header";
import Design from "../../components2/design/design";
import Features from "../../components2/feature/features";
import Info from "../../components2/info/info";
import Card from "../../components/card/card";
import Faq from "../../components2/faq/faq";   
import Footer from "../../components/footer/footer";

export default function Team() {
  return (
    <>
    <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-3 sm:gap-10 sm:px-4 md:px-6 lg:max-w-[1400px]">
      <section className="mt-6 rounded-[24px] bg-[var(--team-surface)] px-2 pb-8 pt-2 shadow-sm sm:px-3 md:rounded-[28px] md:px-5 md:pb-10 md:pt-2 lg:rounded-[32px] lg:px-6">
        <Header />
        <Design />
      </section>
      <Features />
      <Info />
        <Card />
      <Faq />
    </main>
      <Footer />
      </>
  );
}