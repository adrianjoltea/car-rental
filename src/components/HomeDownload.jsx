import img1 from "../images/download/appstore.svg";
import img2 from "../images/download/googleapp.svg";
import img3 from "../images/banners/bg02.png";
function HomeDownload() {
  return (
    <section className="download-section">
      <div className="download-section-container">
        <div className="download-section-container-text">
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div>
            <img src={img1} />
            <img src={img2} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeDownload;
