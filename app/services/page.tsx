import Footer from "../components/footer/footer";
import Header from "../components/headaer/header";
import Smm from "../components2/smm/smm";
import Services from "../components/services/services";
import Card from "../components/card/card";
import Faq from "../components2/faq/faq";
export default function ServicesPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1900px] flex-col gap-16 px-6">
    <Header />
    <Smm />
    <Services />
    <Card />
    <Faq />
    <Footer />
    </main>
  );
}

