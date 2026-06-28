import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import doctorImg from "../assets/doctor.png";

function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    try {
      const res = await API.get(`/doctors/${id}`);
      setDoctor(res.data.doctor);
    } catch (error) {
      console.log(error);
    }
  };

  if (!doctor) {
    return (
      <Container className="text-center mt-5">
        <h3>Loading Doctor...</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5">

      <Card className="shadow-lg border-0">

        <Card.Body>

          <Row className="align-items-center">

            <Col md={4} className="text-center">

              <img
                src={doctor.image || doctorImg}
                alt={doctor.name}
                style={{
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "6px solid #0d6efd",
                }}
                />

            </Col>

            <Col md={8}>

              <h2 className="text-primary">
                {doctor.name}
              </h2>

              <h5 className="text-secondary">
                {doctor.specialization}
              </h5>

              <div className="my-3">
                <div className="d-flex align-items-center gap-3 mb-3">
                    <h5 className="text-warning mb-0">
                        ⭐⭐⭐⭐⭐
                    </h5>

                    <Badge
                        bg={doctor.available ? "success" : "danger"}
                        className="fs-6"
                    >
                        {doctor.available ? "Available Today" : "Unavailable"}
                    </Badge>
                </div>
              </div>

              <p>
                <strong>🏥 Hospital:</strong> {doctor.hospital}
              </p>

              <p>
                <strong>💼 Experience:</strong> {doctor.experience} Years
              </p>

              <p>
                <strong>💰 Consultation Fee:</strong> ₹{doctor.consultationFee}
              </p>

              <p>
                <strong>📝 About:</strong>
              </p>

              <div
                className="p-3 rounded"
                style={{
                    background: "#f8f9fa",
                    borderLeft: "5px solid #0d6efd",
                }}>
                <p className="mb-0 text-muted">
                    {doctor.about || "No description available."}
                </p>
                </div>

              <div className="d-flex gap-3 mt-4">

                <Link to={`/book/${doctor._id}`}>
                  <Button variant="primary">
                    📅 Book Appointment
                  </Button>
                </Link>

                <Link to="/doctors">
                  <Button variant="outline-secondary">
                    ← Back
                  </Button>
                </Link>
                <hr />

                    <Row className="mt-4 text-center">

                    <Col md={4}>
                        <h3>10+</h3>
                        <p>Years Experience</p>
                    </Col>

                    <Col md={4}>
                        <h3>500+</h3>
                        <p>Patients Treated</p>
                    </Col>

                    <Col md={4}>
                        <h3>4.9 ★</h3>
                        <p>Patient Rating</p>
                    </Col>

                    </Row>

              </div>

            </Col>

          </Row>

        </Card.Body>

      </Card>

    </Container>
  );
}

export default DoctorDetails;