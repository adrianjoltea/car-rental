import { useForm } from "react-hook-form";
import Button from "./Button";
import { FaCalendar, FaCar } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

import FormOption from "./FormOption";
import { useState } from "react";
import Modal from "react-modal";
import ErrorForm from "./ErrorForm";
import HomeMainForm from "./HomeMainForm";
import useFetchCars from "../services/fetchCars";

function HomeForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const [cars, setCars] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [modal, setModal] = useState(false);

  useFetchCars(setCars);

  const { errors } = formState;

  function handleModal() {
    setModal(false);
    document.body.style.overflow = "unset";
  }

  function onSubmit(data) {
    console.log(data);
    setModal(true);
    document.body.style.overflow = "hidden";
  }
  function onError(error) {
    console.error(error);
  }

  const currectCar = cars.find(car => car.name === getValues().carType);

  return (
    <>
      <section className="form-body" id="form">
        <div className="form-body-container">
          <div className="form-body-container-text">
            <h2>Book a car</h2>
          </div>
          <form
            className="form-body-container-grid"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div className="form-body-container-grid-child">
              <label>
                <FaCar />
                Select your Car Type
              </label>
              <ErrorForm>{errors?.carType?.message}</ErrorForm>
              <select
                id="carType"
                {...register("carType", {
                  required: "This field is required",
                })}
              >
                <option></option>
                {cars.map(car => (
                  <FormOption carName={car.name} key={car.id} />
                ))}
              </select>
            </div>
            <div className="form-body-container-grid-child">
              <label>
                <FaMapMarkerAlt /> Pick-up
              </label>
              <ErrorForm>{errors?.pickUpLocation?.message}</ErrorForm>
              <select
                {...register("pickUpLocation", {
                  required: "This field is required",
                })}
              >
                <option></option>
                <option>Suceava</option>
                <option>Radauti</option>
                <option>Iasi</option>
              </select>
            </div>
            <div className="form-body-container-grid-child">
              <label>
                <FaMapMarkerAlt />
                Drop-of
              </label>
              <ErrorForm>{errors?.dropOfLocation?.message}</ErrorForm>
              <select
                {...register("dropOfLocation", {
                  required: "This field is required",
                })}
              >
                <option></option>
                <option>Suceava</option>
                <option>Radauti</option>
                <option>Iasi</option>
              </select>
            </div>
            <div className="form-body-container-grid-child">
              <label>
                <FaCalendar /> Pick-up
              </label>
              <ErrorForm>{errors?.dropOfLocation?.message}</ErrorForm>
              <input
                {...register("picktime", {
                  required: "This field is required",
                })}
                id="picktime"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                type="date"
              ></input>
            </div>
            <div className="form-body-container-grid-child">
              <label>
                <FaCalendar />
                Drop-of
              </label>
              <ErrorForm>{errors?.dropOfLocation?.message}</ErrorForm>
              <input
                {...register("droptime", {
                  required: "This field is required",
                })}
                id="droptime"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                type="date"
              ></input>
            </div>
            <Button style={"main-btn btn-color-orange btn-form main-btn-width"}>
              Search
            </Button>
          </form>
        </div>
      </section>

      <Modal
        isOpen={modal}
        className="modal-body"
        ariaHideApp={false}
        overlayClassName="overlay"
      >
        <div className="modal-title">
          <h2>Complete Rerservation</h2>
          <span onClick={handleModal}>X</span>
        </div>
        <div className="modal-info">
          <h3>Upon completing this reservation enquiry, you will recieve</h3>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <div className="modal-car-selected-body">
          <div className="modal-car-selected-body-info">
            <h4>Location & Date</h4>
            <div className="modal-car-selected-body-info-child">
              <FaMapMarkerAlt className="modal-car-selected-body-info-child-marker" />
              <div className="modal-car-selected-body-info-child-text">
                <span>Pick-up Date</span>
                <p>{getValues().picktime}</p>
              </div>
            </div>
            <div className="modal-car-selected-body-info-child">
              <FaMapMarkerAlt className="modal-car-selected-body-info-child-marker" />
              <div className="modal-car-selected-body-info-child-text">
                <span>Drop-off Date</span>
                <p>{getValues().droptime}</p>
              </div>
            </div>
            <div className="modal-car-selected-body-info-child">
              <FaMapMarkerAlt className="modal-car-selected-body-info-child-marker" />
              <div className="modal-car-selected-body-info-child-text">
                <span>Pick-up Location</span>
                <p>{getValues().pickUpLocation}</p>
              </div>
            </div>
            <div className="modal-car-selected-body-info-child">
              <FaMapMarkerAlt className="modal-car-selected-body-info-child-marker" />
              <div className="modal-car-selected-body-info-child-text">
                <span>Drop-off Location</span>
                <p>{getValues().dropOfLocation}</p>
              </div>
            </div>
          </div>
          <div className="modal-car-selected-body-car">
            <div className="modal-car-selected-body-car-title">
              <h4>Car:</h4>
              <span>{getValues().carType}</span>
            </div>
            <img src={currectCar?.image} />
          </div>
        </div>
        <HomeMainForm setModal={setModal} />
      </Modal>
    </>
  );
}

export default HomeForm;
