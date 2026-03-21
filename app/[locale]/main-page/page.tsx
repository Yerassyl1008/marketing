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
    
    
    <div className="mx-auto flex w-full max-w-[1900px] flex-col gap-10 px-2 sm:px-4 lg:px-6">
      <section className="mt-4 rounded-[28px] bg-[var(--team-surface)] px-2 pb-8 pt-2 shadow-sm sm:mt-6 sm:px-3 md:px-6 md:pb-10 md:pt-4 lg:rounded-[36px]">
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