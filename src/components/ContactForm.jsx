import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { LuMousePointer2 } from "react-icons/lu";

function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-container-text">
        <h2>Need additional information?</h2>
        <p>
          A multifaced professional skilled in multiple fields of research,
          development as well as learning specialist. Over 15 years of
          experience
        </p>
        <span>
          <FaPhone /> (123) 456-7869
        </span>
        <span>
          <IoMdMail /> carrental@carmail.com
        </span>
        <span>
          <LuMousePointer2 /> Suceva,Romania
        </span>
      </div>
      <div className="contact-container-form">
        <form>
          <div className="contact-container-form-name">
            <h3>Full Name</h3>
            <input type="text" placeholder="E.g: Joe Shmoe" />
          </div>
          <div className="contact-container-form-email">
            <h3>Email</h3>
            <input type="text" placeholder="youremail@example.com" />
          </div>
          <div className="contact-container-form-textarea">
            <h3>Tell us about it</h3>
            <textarea placeholder="Write here.." />
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
