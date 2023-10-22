import Hero from "@/components/hero";
import AboutUs from "@/pages/about-us";
import BackToTopBtn from "@/components/back-to-top-btn";
import Cta from "@/components/cta";
import GetStarted from "@/components/get-started";
import Services from "@/components/services";
import TrustedPartner from "@/components/trusted-partner";
import LocateUs from "@/components/locate-us";
import Contact from "@/components/contact";
import WhyUs from "@/components/why-us";
import ContactUs from "@/components/contact-us";
import HowWeWork from "@/components/how-we-work";

export default function Home() {
  return (
    <>
        <Hero />
        <div className="lg:h-[90px] w-[100vw] bg-[#000]"></div>
        <HowWeWork />
        {/* <GetStarted /> */}
        <div className="h-[90px] w-[100vw] bg-[#000]"></div>
        <Services />
        <TrustedPartner />
        <LocateUs />
        <ContactUs />
        <Contact />
        <WhyUs/>
        <Cta />
        <BackToTopBtn />
    </>
  );
}
