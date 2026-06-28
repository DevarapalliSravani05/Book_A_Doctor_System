import { Link } from "react-router-dom";
import doctorImg from "../assets/doctor.png";
import "../styles/doctors.css";

function FeaturedDoctors({ doctors }) {
  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Meet Our Specialists</h2>
        <p className="text-muted">
          Experienced doctors dedicated to your healthcare.
        </p>
      </div>

      <div className="row">

        {doctors.slice(0, 3).map((doctor) => (

          <div className="col-lg-4 col-md-6 mb-4" key={doctor._id}>

            <div className="doctor-card">

              <div className="doctor-header">

                <img
                  src={doctor.image || doctorImg}
                  alt={doctor.name}
                />

                <span className="status-badge">
                  {doctor.available ? "🟢 Available" : "🔴 Unavailable"}
                </span>

              </div>

              <div className="doctor-body">

                <h3>{doctor.name}</h3>

                <h6>{doctor.specialization}</h6>

                <div className="rating">
                  ⭐⭐⭐⭐⭐ <span>4.9</span>
                </div>

                <p>🩺 {doctor.experience} Years Experience</p>

                <p>🏥 {doctor.hospital}</p>

                <h4 className="text-success">
                  ₹{doctor.consultationFee}
                </h4>

                <div className="d-grid gap-2 mt-4">

                  <Link
                    to={`/doctor/${doctor._id}`}
                    className="btn btn-outline-primary"
                  >
                    View Profile
                  </Link>

                  <Link
                    to={`/book/${doctor._id}`}
                    className="btn btn-primary"
                  >
                    Book Appointment
                  </Link>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedDoctors;