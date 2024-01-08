import Title from "./Title";
import planImg1 from "../images/plan/icon1.png";
import planImg2 from "../images/plan/icon2.png";
import planImg3 from "../images/plan/icon3.png";

function HomePlan() {
  return (
    <div>
      <Title>
        <h3>Plan your trip now</h3>
        <h2>Quick & easy car rental</h2>
      </Title>
      <section className="homeplan-container">
        <div className="homeplan-container-child">
          <img src={planImg1} alt="planImg" />
          <h2>Select Car</h2>
          <p>
            We offer a big range of vehicles for all your driving needs. We have
            the perfect car to meet your needs
          </p>
        </div>
        <div className="homeplan-container-child">
          <img src={planImg2} alt="planImg" />
          <h2>Contact Operator</h2>
          <p>
            Our knowledgeble and friendly operators are always ready to help
            with questions or concerns
          </p>
        </div>
        <div className="homeplan-container-child">
          <img src={planImg3} alt="planImg" />
          <h2>Let s Drive</h2>
          <p>
            Whether you re hitting the open road, we ve got you covered with our
            range of cars
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePlan;
