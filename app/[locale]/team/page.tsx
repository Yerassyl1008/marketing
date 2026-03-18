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
    <main className="mx-auto flex w-full max-w-[1900px] flex-col gap-16 px-6">
      <section className="rounded-[36px] mt-6 bg-[var(--team-surface)] px-3 pb-8 pt-2 shadow-sm md:px-6 md:pb-10 md:pt-4">
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