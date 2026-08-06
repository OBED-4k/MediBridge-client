import Footer from "../../components/Footer";
import AboutHero from "../../components/AboutUsComponent/AboutHero";
import OurStory from "../../components/AboutUsComponent/OurStory";
import MissionVision from "../../components/AboutUsComponent/MissionVision";
import WhyMediBridge from "../../components/AboutUsComponent/WhyMedibridge";
import CoreValues from "../../components/AboutUsComponent/CoreValues";
import HowItWorks from "../../components/AboutUsComponent/HowItWorks";
import Statistics from "../../components/AboutUsComponent/Statistics";
import CTA from "../../components/AboutUsComponent/CTA";

const About = () => {
  return (
    <>
      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <WhyMediBridge />
        <CoreValues />
        <HowItWorks />
        <Statistics />
        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default About;
