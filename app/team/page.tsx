import Header from "../components/headaer/header";
import Design from "../components2/design/design";
import Features from "../components2/feature/features";
import Info from "../components2/info/info";
import Card from "../components/card/card";
import Faq from "../components2/faq/faq";   
import Footer from "../components/footer/footer";

export default function Team() {
  return (
    <main className="mx-auto flex w-full max-w-[1900px] flex-col gap-16 px-6">
      <Header />
      <Design />
      <Features />
      <Info />
        <Card />
      <Faq />
      <Footer />
    </main>
  );
}