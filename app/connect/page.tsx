import Header from "../components/headaer/header";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";


export default function SiteMapPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1900px] flex-col gap-10 px-6">
      <Header />
      <Card />
      <Footer />
    </main>
  );
}

