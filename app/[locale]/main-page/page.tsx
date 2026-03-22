import Header from "../../components/headaer/header";
import Hero from "../../components/hero/hero";
import Workers from "../../components/workers/workers";
import Services from "../../components/services/services";
import Card from "../../components/card/card";
// import Work from "../../components/work/work";
import Projects from "../../components/projects/projects";
import Comment from "../../components/comment/comment";
import Footer from "../../components/footer/footer";

export default function MainPage() {
  return (
    <>  
    
    
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-3 sm:gap-8 sm:px-4 md:px-6 lg:max-w-[1400px]">
      <section className="mt-4 rounded-[24px] bg-[var(--team-surface)] px-2 pb-6 pt-2 shadow-sm sm:mt-6 sm:px-3 md:rounded-[28px] md:px-5 md:pb-8 md:pt-3 lg:rounded-[32px] lg:px-6 lg:pb-10 lg:pt-2">
        <Header />
        <Hero />
      </section>
      <Workers />
      <Services />
      <Card />
      {/* <Work /> */}
      <Projects />
      <Comment />
    </div>
      <Footer />
    </>

  );
}