import { Link } from "react-router-dom";
import doctorHero from "../assets/doctor-hero.png";
import {
  FaCalendarCheck,
  FaSearch,
  FaShieldAlt,
  FaBolt,
  FaHeadset,
  FaStar,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";
import "../styles/hero.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">

            <div className="hero-badge">
              <span className="badge-dot"></span>
              India's Trusted Healthcare Platform
            </div>

            <h1 className="hero-title">
              Your Health
              <br />
              <span>Our Priority</span>
            </h1>

            <p className="hero-text">
              Book appointments with experienced doctors from the comfort
              of your home. Fast, secure and reliable healthcare.
            </p>

            <div className="hero-buttons">
              <Link to="/doctors" className="btn btn-primary hero-btn">
                <FaCalendarCheck /> Book Appointment
              </Link>

              <Link to="/doctors" className="btn hero-btn-outline">
                <FaSearch /> Find Doctors
              </Link>
            </div>

            <div className="hero-features">

              <div>
                <FaShieldAlt />
                Verified Doctors
              </div>

              <div>
                <FaBolt />
                Instant Booking
              </div>

              <div>
                <FaHeadset />
                24×7 Support
              </div>

            </div>

            <div className="hero-stats">

              <div className="stat-card">
                <FaStar />
                <div>
                  <h3>4.9</h3>
                  <p>Patient Rating</p>
                </div>
              </div>

              <div className="stat-card">
                <FaUserMd />
                <div>
                  <h3>150+</h3>
                  <p>Expert Doctors</p>
                </div>
              </div>

              <div className="stat-card">
                <FaUsers />
                <div>
                  <h3>10K+</h3>
                  <p>Happy Patients</p>
                </div>
              </div>

            </div>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src={doctorHero}
              alt="Doctor"
              className="hero-image"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;