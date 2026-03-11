import Footer from "../components/footer/footer";
import Header from "../components/headaer/header";
import Features from "../components2/feature/features";
import Sales from "../components2/sales/sales";
import Gallery from "../components2/gallery/gallery";
import Info from "../components2/info/info";
import Comment from "../components/comment/comment";
import Faq from "../components2/faq/faq";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1900px] flex-col gap-10 px-6">
      <Header />
      <Sales />
      <Features />
      
      <Gallery />
      <Info />
      <Comment />
      <Faq />
      <Footer />
    </main>
  );
}
