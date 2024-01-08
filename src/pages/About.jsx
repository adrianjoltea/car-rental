import AboutMain from "../components/AboutMain";
import BookBanner from "../components/BookBanner";
import Footer from "../components/Footer";
import Hero from "../components/HeroAbout";
import HomePlan from "../components/HomePlan";

function About() {
  return (
    <div>
      <Hero />
      <AboutMain />
      <HomePlan />
      <BookBanner />
      <Footer />
    </div>
  );
}

export default About;
