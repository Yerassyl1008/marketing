import Footer from "../../components/footer/footer";
import Header from "../../components/headaer/header";
import Smm from "../../components2/smm/smm";
import Services from "../../components/services/services";
import Card from "../../components/card/card";
import Faq from "../../components2/faq/faq";
export default function ServicesPage() {
  return (
    <>  
    <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-3 sm:gap-10 sm:px-4 md:px-6 lg:max-w-[1400px]">
    <section className="mt-6 rounded-[24px] bg-[var(--team-surface)] px-2 pb-8 pt-2 shadow-sm sm:px-3 md:rounded-[28px] md:px-5 md:pb-10 md:pt-2 lg:rounded-[32px] lg:px-6">
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

