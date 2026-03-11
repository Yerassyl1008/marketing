import Header from "../components/headaer/header";
import Hero from "../components/hero/hero";
import Workers from "../components/workers/workers";
import Services from "../components/services/services";
import Card from "../components/card/card";
import Work from "../components/work/work";
import Projects from "../components/projects/projects";
import Comment from "../components/comment/comment";
import Footer from "../components/footer/footer";

export default function MainPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1900px] flex-col gap-10 px-6">
      <Header />
      <Hero />
      <Workers />
      <Services />
      <Card />
      <Work />
      <Projects />
      <Comment />
      <Footer />
    </div>
  );
}