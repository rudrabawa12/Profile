import "./Home.css";
import { FaChalkboardTeacher,
  FaBookOpen,
  FaLaptopCode,
  FaBrain,
  FaCogs,
  FaTrophy } from "react-icons/fa";
import profile from "../assets/images/profile.jpeg";

function Home() {
  return (
    <section className="home">

      {/* HERO CARD */}
      <div className="home-card">
        <img className="profile-img" src={profile} alt="Profile" />

        <h1>Rudra Bawa</h1>
        <h3>Aspiring Full Stack Developer </h3>

        <p className="tagline">
          Learning new things by self learning and exploring new possibilities.
        </p>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="experience-section">

        <h2 className="section-title">Skills</h2>

        <div className="cards-grid">

          <div className="exp-card">
            <h3>
              <FaChalkboardTeacher style={{ marginRight: "8px" }} />
              Role
            </h3>
            <p>Full Stack Developer</p>
          </div>

          <div className="exp-card">
            <h3>
              <FaLaptopCode style={{ marginRight: "8px" }} />
              Practical Training
            </h3>
            <ul>
              <li>C language</li>
              <li>Ai/ml</li>
              <li>Python</li>
              <li>Java</li>
              <li>Html,css</li>
            </ul>
          </div>

          <div className="exp-card highlight">
            <h3>
              <FaTrophy style={{ marginRight: "8px" }} />
              Current Aspirations
            </h3>
            <br/>
            <p>
              Learning js and react planning on becoming a full fledged versatile engineer who can build things from scratch.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;
