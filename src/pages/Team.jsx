import BookBanner from "../components/BookBanner";
import Footer from "../components/Footer";
import HeroTeam from "../components/HeroTeam";
import TeamPeople from "../components/TeamPeople";

function Team() {
  return (
    <div>
      <HeroTeam />
      <TeamPeople />
      <BookBanner />
      <Footer />
    </div>
  );
}

export default Team;
