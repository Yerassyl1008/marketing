import Footer from "../../components/footer/footer";
import Header from "../../components/headaer/header";
import Features from "../../components2/feature/features";
import Sales from "../../components2/sales/sales";
import Gallery from "../../components2/gallery/gallery";
import Info from "../../components2/info/info";
import Comment from "../../components/comment/comment";
import Faq from "../../components2/faq/faq";

export default function ProjectsPage() {
  return (
    <>
    
    
    <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-3 sm:gap-8 sm:px-4 md:px-6 lg:max-w-[1400px]">
      <section className="rounded-[24px] bg-[var(--team-surface)] px-2 pb-8 pt-2 shadow-sm sm:px-3 md:rounded-[28px] md:px-5 md:pb-10 md:pt-2 mt-4 lg:rounded-[32px] lg:px-6">
        <Header />
        <Sales />
      </section>
      <Features />
      
      <Gallery />
      <Info />
      <Comment />
      <Faq />
    </main>
      <Footer />
    </>

  );
}
