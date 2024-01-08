import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import HomeChoose from "../components/HomeChoose";
import HomeDownload from "../components/HomeDownload";
import HomeFaq from "../components/HomeFaq";
import HomeForm from "../components/HomeForm";
import HomeHero from "../components/HomeHero";
import HomePickSection from "../components/HomePickSection";
import HomePlan from "../components/HomePlan";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <>
      <HomeHero />
      <HomeForm />
      <HomePlan />
      <HomePickSection />
      <HomeBanner />
      <HomeChoose />
      <Testimonials />
      <HomeFaq />
      <HomeDownload />
      <Footer />
    </>
  );
}

export default Home;
