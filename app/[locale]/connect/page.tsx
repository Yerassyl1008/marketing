import Header from "../../components/headaer/header";
import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";


export default function SiteMapPage() {
  return (
    <>  
    
    <main className="mx-auto flex w-full max-w-[1900px] flex-col gap-10 px-6">
      <section className=" mt-4 rounded-[36px] bg-[var(--team-surface)] px-3 pb-6 pt-2 shadow-sm md:px-6 md:pb-8 md:pt-4">
        <Header />
        <Card />
      </section>
    </main>
      <Footer />
    </>

  );
}

