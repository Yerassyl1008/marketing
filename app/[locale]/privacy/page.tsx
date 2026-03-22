import Footer from "../../components/footer/footer";
import Header from "../../components/headaer/header";
import PrivacyContent from "../../components/privacy/privacy-content";
import Confidentel from "../../components2/confidental/confidental";

export default function Privacy() {
  return (
    <>
    
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-3 sm:gap-8 sm:px-4 md:px-6 lg:max-w-[1400px]">
      <section className="mt-3 rounded-[24px] bg-[#F1F0EE] px-2 pb-8 pt-2 shadow-sm sm:px-3 md:rounded-[28px] md:px-5 md:pb-10 md:pt-2 lg:rounded-[32px] lg:px-6">
        <Header />
        <Confidentel />
      </section>
      <PrivacyContent />
    </div>
      <Footer />
    </>

  );
}