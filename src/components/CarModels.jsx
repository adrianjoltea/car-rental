import { useState } from "react";
import useFetchCars from "../services/fetchCars";
import Button from "./Button";

function CarModels() {
  const [cars, setCars] = useState([]);

  useFetchCars(setCars);
  console.log(cars);

  return (
    <div className="models-container">
      <div className="models-container-flex">
        {cars.map((car, i) => (
          <ModelsKid car={car} key={i} />
        ))}
      </div>
    </div>
  );
}
function ModelsKid({ car }) {
  return (
    <div className="model-car">
      <img src={car.image} />
      <div className="model-car-text">
        <div className="model-car-text-name">
          <h2>{car.model}</h2>
          <h2>{car.price}$/day</h2>
        </div>
        <div className="model-car-text-info">
          <p>{car.transmission}</p>
          <p>{car.fuel}</p>
          <p>{car.doors}/5</p>
          <p>{car.year}</p>
        </div>
      </div>
      <Button style="model-button">Book Ride</Button>
    </div>
  );
}
export default CarModels;
