import { Link, Outlet } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import Logout from "../components/Logout";

function AppLayout() {
  const [navOpen, setNavOpen] = useState(false);

  function handleShow() {
    setNavOpen(nav => !nav);
  }

  function handleLink() {
    setNavOpen(false);
  }

  return (
    // <div style={{ width: "100vw" }}>
    //   <nav className="main-nav">
    //     <div className="app-logo">
    //       <Link to="/" onClick={() => window.scrollTo(0, 0)}>
    //         <FaCarSide color="orange" />
    //       </Link>{" "}
    //     </div>
    //     <ul className={`main-nav-ul${navOpen ? "-hidden" : ""} `}>
    //       <li>
    //         <Link to="/" className="main-nav-ul-text">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/about" className="main-nav-ul-text">
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/models" className="main-nav-ul-text">
    //           Vehicle Models
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/testimonials" className="main-nav-ul-text">
    //           Testimonials
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/team" className="main-nav-ul-text">
    //           Our Team
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/contact" className="main-nav-ul-text">
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //     <div className="main-nav-buttons">
    //       <Link className="main-nav-buttons-sign-in">Sign in</Link>
    //       <Link className="main-nav-buttons-register">Register</Link>
    //     </div>
    //     <div className="nav-mobile">
    //       {navOpen ? (
    //         <GiHamburgerMenu onClick={() => setNavOpen(!navOpen)} />
    //       ) : (
    //         <FaX onClick={() => setNavOpen(!navOpen)} />
    //       )}
    //     </div>
    //   </nav>
    //   <Outlet />
    // </div>
    <>
      <nav className="main-nav">
        <label className="main-nav-logo">RentNZoom</label>
        <a href="#" onClick={handleShow} className="toggle-mobile">
          {navOpen ? "X" : <GiHamburgerMenu />}
        </a>
        <ul className={navOpen ? "active" : ""}>
          <li>
            <Link to="/" className="main-nav-ul-text" onClick={handleLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="main-nav-ul-text" onClick={handleLink}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/models"
              className="main-nav-ul-text"
              onClick={handleLink}
            >
              Vehicle Models
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="main-nav-ul-text"
              onClick={handleLink}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/team" className="main-nav-ul-text" onClick={handleLink}>
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="main-nav-ul-text"
              onClick={handleLink}
            >
              Contact
            </Link>
          </li>
          <Logout />
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default AppLayout;
