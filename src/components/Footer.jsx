function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-content">
          <li className="footer-content-title">
            <span>CAR</span> Rental
          </li>
          <li>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
          </li>
          <li>
            <a href="tel:123456789">&nbsp; (123) -456-789</a>
          </li>

          <li>
            <a
              href="mailto: 
                carrental@gmail.com"
            >
              &nbsp; carrental@gmail.com
            </a>
          </li>

          <li>
            <a
              style={{ fontSize: "14px" }}
              target="_blank"
              rel="noreferrer"
              href="https://xpeedstudio.com/"
            >
              Design by XpeedStudio
            </a>
          </li>
        </ul>

        <ul className="footer-content">
          <li className="footer-content-title">Company</li>
          <li>
            <a href="#home">New York</a>
          </li>
          <li>
            <a href="#home">Careers</a>
          </li>
          <li>
            <a href="#home">Mobile</a>
          </li>
          <li>
            <a href="#home">Blog</a>
          </li>
          <li>
            <a href="#home">How we work</a>
          </li>
        </ul>

        <ul className="footer-content">
          <li className="footer-content-title">Working Hours</li>
          <li>Mon - Fri: 9:00AM - 9:00PM</li>
          <li>Sat: 9:00AM - 19:00PM</li>
          <li>Sun: Closed</li>
        </ul>

        <ul className="footer-content">
          <li className="footer-content-title">Subscription</li>
          <li>
            <p>Subscribe your Email address for latest news & updates.</p>
          </li>
          <li>
            <input type="email" placeholder="Enter Email Address"></input>
          </li>
          <li>
            <button className="submit-email">Submit</button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
