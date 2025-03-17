import Image from "next/image";
import Navigation from "../navigation";
import Hero from "../hero";
import ServicesOverview from "../services";
import WhyChooseUs from "../why-us";
import CaseStudy from "../Case-study";
import Testimonials from "../Testimonials";
import CTASection from "../CTASection";
import FooterCTA from "../FooterCTA";
import Footer from "../Footer";
import TopBar from "../topbar";
import AboutUs from "../aboutUs";
import ContactUs from "../contact";

export const metadata = {
  title: "Koch Media Agency | Full-Service Marketing & Development",
  description:
    "Koch Media Agency is a full-service marketing and development firm based in Cape Town. We empower businesses with innovative digital solutions using a sleek, corporate design.",
  keywords:
    "Digital Marketing, Web Development, App Development, Software Development, Cape Town, Corporate, Full Service Agency, SEO, UI/UX",
};

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <Hero />
      <FooterCTA />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
