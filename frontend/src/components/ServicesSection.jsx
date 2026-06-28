import { FaUserMd, FaHeartbeat, FaAmbulance } from "react-icons/fa";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import "../styles/services.css";

function ServicesSection() {
  return (
    <section className="container py-5">

      <h2 className="text-center fw-bold mb-5">
        Our Medical Services
      </h2>

      <div className="row">

        <div className="col-md-4 mb-4">

          <div className="card service-card">

            <img
              src={service1}
              className="card-img-top"
              alt="Expert Doctors"
            />

            <div className="card-body text-center">

              <FaUserMd
                size={45}
                className="text-primary mb-3"
              />

              <h4>Expert Doctors</h4>

              <p>
                Consult highly qualified specialists
                with years of experience.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card service-card">

            <img
              src={service2}
              className="card-img-top"
              alt="Health Checkups"
            />

            <div className="card-body text-center">

              <FaHeartbeat
                size={45}
                className="text-danger mb-3"
              />

              <h4>Health Checkups</h4>

              <p>
                Complete health checkups using
                modern diagnostic technology.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card service-card">

            <img
              src={service3}
              className="card-img-top"
              alt="Emergency Care"
            />

            <div className="card-body text-center">

              <FaAmbulance
                size={45}
                className="text-success mb-3"
              />

              <h4>Emergency Care</h4>

              <p>
                24×7 emergency services with
                quick response teams.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;