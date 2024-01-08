import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "./Button";
import mainCar from "../images/hero/main-car.png";
import bgMain from "../images/hero/hero-bg.png";

function HomeHero() {
  return (
    <section className="section-hero" id="home">
      <div className="section-hero-container">
        <div className="section-hero-container-text">
          <h3>Plan your trip now</h3>
          <h1>
            Save <span>big</span> with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more
          </p>
          <div className="section-hero-container-text-buttons">
            <Button style="main-btn btn-color-orange">
              Book a ride <FaRegCircleCheck />
            </Button>
            <Button style="main-btn btn-color-black">Learn more </Button>
          </div>
        </div>
        {/* <div className="absolute">
          <img src={bgMain} />
        </div> */}
        <div className="section-hero-container-image">
          <img
            src={mainCar}
            alt="main car"
            className="section-hero-container-image-car"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
