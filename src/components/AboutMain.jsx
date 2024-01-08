import imgMain from "../images/about/about-main.jpg";
import img1 from "../images/about/icon1.png";
import img2 from "../images/about/icon2.png";
import img3 from "../images/about/icon3.png";

function AboutMain() {
  return (
    <section className="about">
      <div className="about-container">
        <img src={imgMain} alt="car-rental-people" />
        <div className="about-container-text">
          <h3>About Company</h3>
          <h2>You start the engine and your adventure begins</h2>
          <p>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="about-container-text-flex">
            <div className="about-container-text-flex-kid">
              <img src={img1} alt="car" />
              <span>
                <h4>20</h4>
                <p>Car Types</p>
              </span>
            </div>
            <div className="about-container-text-flex-kid">
              <img src={img2} alt="car" />
              <span>
                <h4>85</h4>
                <p>Rental Outlets</p>
              </span>
            </div>
            <div className="about-container-text-flex-kid">
              <img src={img3} alt="car" />
              <span>
                <h4>75</h4>
                <p>Repair Shops</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMain;
