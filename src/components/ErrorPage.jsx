import { IoIosWarning } from "react-icons/io";
function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page-container">
        <IoIosWarning className="error-page-container-warning" />
        <p>Something went wrong please check your internet conection</p>
      </div>
    </div>
  );
}

export default ErrorPage;
