import "./About.css";
import { FaUserGraduate, FaCogs, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-card">

        <h2>About Me</h2>

        <p className="about-text">
          Second year Cse student pursuing Full-Stack Ai Development specailization From Upes .
        </p>

        <div className="about-grid">

          <div className="about-item">
            <FaCogs />
            <span>Problem-driven engineering mindset</span>
          </div>

          <div className="about-item">
            <FaLaptopCode />
            <span>exploring new possibilities</span>
          </div>

          <div className="about-item">
            <FaChalkboardTeacher />
            <span>Self Learning approach </span>
          </div>

          <div className="about-item">
            <FaUserGraduate />
            <span>aspiring Full-Stack Developer</span>
          </div>

        </div>

        <div className="about-tags">
          <span>React</span>
          <span>Flutter</span>
          <span>.NET</span>
          <span>DevOps</span>
          <span>AI/ML</span>
        </div>

      </div>

    </section>
  );
}

export default About;
