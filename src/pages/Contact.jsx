import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-card">

        <h2>Contact Me</h2>

        <div className="contact-item">
          <FaEnvelope />
          <span>rudrabawa12@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaPhone />
          <span>+91-9877334257</span>
        </div>

        <div className="social">
          <a href="https://www.linkedin.com/feed/" target="_blank" className="social-btn">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://github.com/rudrabawa12" target="_blank" className="social-btn">
            <FaGithub /> GitHub
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;
