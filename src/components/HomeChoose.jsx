import mainImg from "../images/chooseUs/main.png";
import img1 from "../images/chooseUs/icon1.png";
import img2 from "../images/chooseUs/icon2.png";
import img3 from "../images/chooseUs/icon3.png";

function HomeChoose() {
  return (
    <section className="choose-section">
      <img src={mainImg} alt="cars" />
      <div className="choose-section-container">
        <div className="choose-section-container-text">
          <h3>Why Choose Us</h3>
          <h2>Best valued deals you will ever find</h2>
          <p>
            Discover the best deals you ll ever find with our unbeatable
            offers.We re dedicated to providing you with the best value for your
            money, so you can enjoy top-quality services and products without
            breaking the bank. Our deals are designed to give you the ultimate
            renting experience, wo don t miss out on your chance to save big
          </p>
          <a href="#home">Find Details &rsaquo;</a>
        </div>
        <div className="choose-section-container-3cols">
          <div className="choose-section-container-3cols-1col">
            <img src={img1} alt="car image" />
            <div className="choose-section-container-3cols-1col-text">
              <h3>Cross Country Drice</h3>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures
              </p>
            </div>
          </div>
          <div className="choose-section-container-3cols-1col">
            <img src={img2} alt="car image" />
            <div className="choose-section-container-3cols-1col-text">
              <h3>All Inclusive Pricing</h3>
              <p>
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy
              </p>
            </div>
          </div>
          <div className="choose-section-container-3cols-1col">
            <img src={img3} alt="car image" />
            <div className="choose-section-container-3cols-1col-text">
              <h3>No Hidden Charges</h3>
              <p>
                Enjoy peace of mind with our no hidden charges policy, We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeChoose;
