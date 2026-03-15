import Footer from "../components/footer/footer";
import Header from "../components/headaer/header";
import PrivacyContent from "../components/privacy/privacy-content";
import Confidentel from "../components2/confidental/confidental";

export default function Privacy() {
  return (
    <>
    
    <div className="mx-auto flex w-full max-w-[1900px] flex-col gap-10 px-6">
      <section className="rounded-[36px] bg-[#F1F0EE] px-3 pb-8 pt-2 mt-3 shadow-sm md:px-6 md:pb-10 md:pt-2">
        <Header />
        <Confidentel />
      </section>
      <PrivacyContent />
    </div>
      <Footer />
    </>

  );
}