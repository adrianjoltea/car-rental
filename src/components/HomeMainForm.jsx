import { useForm } from "react-hook-form";
import Button from "./Button";
import ErrorForm from "./ErrorForm";
import toast from "react-hot-toast";

function HomeMainForm({ setModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  function handleClick() {
    toast("Check your email");
  }

  function onSubmit(data) {
    console.log(data);
    reset();
    setModal(modal => !modal);
    document.body.style.overflow = "unset";
  }
  function onError(err) {
    console.log(err);
  }

  return (
    <div className="modal-form">
      <h3>Personal Information</h3>
      <form
        className="modal-form-info"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="modal-form-info-2col">
          <span className="modal-form-info-2col-child">
            <label> First Name </label>
            <input
              {...register("firstName", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter your first name"
            />
            <ErrorForm>{errors?.firstName?.message}</ErrorForm>
          </span>

          <span className="modal-form-info-2col-child">
            <label> Last Name </label>
            <input
              {...register("lastName", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter your last name"
            />
            <ErrorForm>{errors?.lastName?.message}</ErrorForm>
          </span>

          <span className="modal-form-info-2col-child">
            <label> Phone Number </label>
            <input
              {...register("phoneNumber", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter your phone number"
            />
            <ErrorForm>{errors?.phoneNumber?.message}</ErrorForm>
          </span>

          <span className="modal-form-info-2col-child">
            <label> Age </label>
            <input
              {...register("age", {
                required: "This field is required",
              })}
              type="number"
              placeholder={18}
            />
            <ErrorForm>{errors?.age?.message}</ErrorForm>
          </span>
        </div>
        <div className="modal-form-info-1col">
          <span className="modal-form-info-1col-child">
            <label>Email</label>
            <input
              {...register("emailAddress", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter your email address"
            />
            <ErrorForm>{errors?.emailAddress?.message}</ErrorForm>
          </span>
          <span className="modal-form-info-1col-child">
            <label>Address</label>
            <input
              {...register("streetAddress", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter your street address"
            />
            <ErrorForm>{errors?.streetAddress?.message}</ErrorForm>
          </span>
        </div>
        <div className="modal-form-info-2col">
          <span className="modal-form-info-2col-child">
            <label> City </label>
            <input
              {...register("cityName", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter your city"
            />
            <ErrorForm>{errors?.cityName?.message}</ErrorForm>
          </span>

          <span className="modal-form-info-2col-child">
            <label> Zip Code </label>
            <input
              {...register("zipCode", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter your zip code"
            />
            <ErrorForm>{errors?.zipCode?.message}</ErrorForm>
          </span>
        </div>
        <span className="modal-form-info-checkbox">
          <input type="checkbox" />
          <p>Please send me lastes news and updates</p>
        </span>
        <div className="modal-form-info-btn">
          <Button style="main-btn btn-color-orange" onClick={handleClick}>
            Reserve now
          </Button>
        </div>
      </form>
    </div>
  );
}

export default HomeMainForm;
