import { FaPhone } from "react-icons/fa6";

function BookBanner() {
  return (
    <div className="book-banner">
      <div className="book-banner-container">
        <div className="book-banner-container-text">
          <h2>Book a car by getting in touch with us</h2>
          <span>
            <FaPhone />
            <h3>(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookBanner;
