import Footer from "../../components/footer/footer";
import Header from "../../components/headaer/header";
import Smm from "../../components2/smm/smm";
import Services from "../../components/services/services";
import Card from "../../components/card/card";
import Faq from "../../components2/faq/faq";
export default function ServicesPage() {
  return (
    <>  
    <main className="mx-auto flex w-full max-w-[1900px] flex-col gap-16 px-6">
    <section className="rounded-[36px] mt-6 bg-[var(--team-surface)] px-3 pb-8 pt-2 shadow-sm md:px-6 md:pb-10 md:pt-4">
      <Header />
      <Smm />
    </section>
    <Services />
    <Card />
    <Faq />
    </main>
    <Footer />

    </>

  );
}

