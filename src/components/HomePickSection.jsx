import { useState } from "react";
import useFetchCars from "../services/fetchCars";
import Title from "./Title";

function HomePickSection() {
  const [cars, setCars] = useState([]);
  const [currectCarIndex, setCurrentCarIndex] = useState(1);

  function handleClick(index) {
    setCurrentCarIndex(index);
  }

  useFetchCars(setCars);

  const currentCar = cars[currectCarIndex] || {};

  return (
    <div>
      <Title>
        <h3>Vehicle Models</h3>
        <h2>Our Rental Fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </Title>
      <section className="pick-section-container">
        <div className="pick-section-container-cars">
          {cars.map((car, i) => (
            <span
              className={`pick-section-container-cars-car ${
                i === currectCarIndex ? "active" : ""
              }`}
              key={car.id}
              onClick={() => handleClick(i)}
            >
              {car.name}
            </span>
          ))}
        </div>
        <div className="pick-section-container-image">
          <img className="" src={currentCar.image} />
        </div>
        <div className="pick-section-container-details">
          <h3 className="pick-section-container-details-price">
            <span>${currentCar.price}</span> / rent per day
          </h3>
          <div className="pick-section-container-details-specs">
            {/* <div className="pick-section-container-details-specs-col">
              <span>Model</span>
              <span>{currentCar.name}</span>
            </div> */}
            <div className="pick-section-container-details-specs-col">
              <span>Mark</span>
              <span>{currentCar.model}</span>
            </div>
            <div className="pick-section-container-details-specs-col">
              <span>Year</span>
              <span>{currentCar.year}</span>
            </div>
            <div className="pick-section-container-details-specs-col">
              <span>Doors</span>
              <span>{currentCar.doors}/5</span>
            </div>
            <div className="pick-section-container-details-specs-col">
              <span>AC</span>
              <span>{currentCar.air ? "Yes" : "No"}</span>
            </div>
            <div className="pick-section-container-details-specs-col">
              <span>Transmission</span>
              <span>{currentCar.transmission}</span>
            </div>
            <div className="pick-section-container-details-specs-col">
              <span>Fuel</span>
              <span>{currentCar.fuel}</span>
            </div>
          </div>
          <div className="pick-section-container-details-button">
            <a href="#form">Reserve Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePickSection;
