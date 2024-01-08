import BookBanner from "../components/BookBanner";
import CarModels from "../components/CarModels";
import Footer from "../components/Footer";
import HeroVehicleModels from "../components/HeroVehicleModels";

function Models() {
  return (
    <div>
      <HeroVehicleModels />
      <CarModels />
      <BookBanner />
      <Footer />
    </div>
  );
}

export default Models;
