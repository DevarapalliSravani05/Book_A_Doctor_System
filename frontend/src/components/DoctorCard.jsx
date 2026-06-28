import { Link } from "react-router-dom";
import doctorImg from "../assets/doctor.png";

function DoctorCard({ doctor }) {
  console.log("Doctor Object:", doctor);

  const imageSrc =
    doctor.image && doctor.image.trim() !== ""
      ? doctor.image
      : doctorImg;

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow border-0">

        <div className="text-center mt-4">
          <img
            src={imageSrc}
            alt={doctor.name}
            onLoad={() => console.log("Loaded:", imageSrc)}
            onError={() => console.log("Failed:", imageSrc)}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid red",
            }}
          />
        </div>

        <div className="card-body text-center">
          <h3 className="text-primary fw-bold">{doctor.name}</h3>

          <div className="mb-3">
            <span
              className={`badge ${
                doctor.available ? "bg-success" : "bg-danger"
              }`}
            >
              {doctor.available ? "Available" : "Unavailable"}
            </span>
          </div>

          <p>
            <strong>Specialization:</strong><br />
            {doctor.specialization}
          </p>

          <p>
            <strong>Experience:</strong><br />
            {doctor.experience} Years
          </p>

          <p>
            <strong>Hospital:</strong><br />
            {doctor.hospital}
          </p>

          <h5 className="text-success">
            ₹{doctor.consultationFee}
          </h5>

          <div className="d-grid gap-2 mt-3">
            <Link
              to={`/doctor/${doctor._id}`}
              className="btn btn-outline-primary"
            >
              View Details
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
  );
}

export default DoctorCard;