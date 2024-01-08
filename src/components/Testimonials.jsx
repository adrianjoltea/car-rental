import Title from "./Title";
import pfp1 from "../images/testimonials/pfp1.jpg";

function Testimonials() {
  return (
    <section className="testimonials">
      <Title>
        <h3>Reviewed by People</h3>
        <h2>Client s Testimonials</h2>
        <p>
          Discover the positive impact we ve made on the clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they re eager to share their positive experiences
          with you
        </p>
      </Title>
      <div className="testimonials-box">
        <div className="testimonials-box-container">
          <p>
            We rented a car from this website and had an amazing experience! The
            booking was easy and the reantal rates were very affordable.
          </p>
          <div className="testimonials-box-container-profile">
            <img src={pfp1} alt="profile picture" />
            <div>
              <h3>Parry Hotter</h3>
              <span>Belgrade</span>
            </div>
          </div>
        </div>
        <div className="testimonials-box-container">
          <p>
            We rented a car from this website and had an amazing experience! The
            booking was easy and the reantal rates were very affordable.
          </p>
          <div className="testimonials-box-container-profile">
            <img src={pfp1} alt="profile picture" />
            <div>
              <h3>Parry Hotter</h3>
              <span>Belgrade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
