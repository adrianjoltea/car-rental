import BookBanner from "../components/BookBanner";
import CarModels from "../components/CarModels";
import CarOperations from "../components/CarOperations";
import Footer from "../components/Footer";
import HeroVehicleModels from "../components/HeroVehicleModels";
import SortBy from "../components/SortBy";

function Models() {
  return (
    <div>
      <HeroVehicleModels />
      <CarOperations />
      <CarModels />
      <BookBanner />
      <Footer />
    </div>
  );
}

export default Models;
