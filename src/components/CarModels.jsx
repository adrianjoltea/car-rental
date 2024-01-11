import { useState } from "react";
import useFetchCars from "../services/fetchCars";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";

function CarModels() {
  const [searchParams] = useSearchParams();
  const [cars, setCars] = useState([]);

  useFetchCars(setCars);

  const sortBy = searchParams.get("sortBy") || "price-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCars = cars.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <div className="models-container">
      <div className="models-container-flex">
        {sortedCars.map((car, i) => (
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
