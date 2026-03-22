import Header from "../../components/headaer/header";
import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";


export default function SiteMapPage() {
  return (
    <>  
    <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-3 sm:gap-8 sm:px-4 md:px-6 lg:max-w-[1400px]">
      <section className="mt-4 flex flex-col gap-14 rounded-[24px] bg-[var(--team-surface)] px-2 pb-6 pt-2 shadow-sm sm:px-3 md:rounded-[28px] md:px-5 md:pb-8 md:pt-2 lg:rounded-[32px] lg:px-6">
          <Header />
        <Card embedded />
      </section>
    </main>
      <Footer />
    </>

  );
}

