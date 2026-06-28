import { useEffect, useState } from "react";
import API from "../services/api";
import { Container, Card, Row, Col, Badge, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import doctorImg from "../assets/doctor.png";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.get(`/appointments/${user.id}`);

      setAppointments(res.data.appointments);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch appointments");
    }
  };

  const cancelAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?")) {
  return;
}
    try {
      await API.delete(`/appointments/${id}`);

      toast.success("Appointment Cancelled ❌");

      fetchAppointments();
    } catch (err) {
      console.log(err);
      toast.error("Failed to cancel appointment");
    }
  };

  const getBadgeColor = (status) => {
    switch (status) {
      case "Pending":
        return "warning";
      case "Confirmed":
        return "primary";
      case "Completed":
        return "success";
      case "Cancelled":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <Container className="my-5">

      <h2 className="text-center text-primary fw-bold mb-5">
        📅 My Appointments
      </h2>

      {appointments.length === 0 ? (
        <Card className="shadow p-5 text-center">
          <h4>No Appointments Found</h4>
        </Card>
      ) : (
        appointments.map((appointment) => (
          <Card
            key={appointment._id}
            className="shadow-lg border-0 mb-4"
          >
            <Card.Body>

              <Row className="align-items-center">

                <Col md={3} className="text-center">

                  <img
                    src={appointment.doctor.image || doctorImg}
                    alt={appointment.doctor.name}
                    style={{
                      width: "140px",
                      height: "140px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />

                </Col>

                <Col md={9}>

                  <h3 className="text-primary">
                    {appointment.doctor.name}
                  </h3>

                  <h5 className="text-secondary">
                    {appointment.doctor.specialization}
                  </h5>

                  <p>
                    <strong>🏥 Hospital:</strong>{" "}
                    {appointment.doctor.hospital}
                  </p>

                  <p>
                    <strong>📅 Date:</strong>{" "}
                    {new Date(
                      appointment.appointmentDate
                    ).toLocaleDateString()}
                  </p>

                  <p>
                    <strong>🕒 Time:</strong>{" "}
                    {appointment.timeSlot}
                  </p>

                  <p>
                    <strong>📝 Reason:</strong>{" "}
                    {appointment.reason || "Not Provided"}
                  </p>

                  <Badge
                    bg={getBadgeColor(appointment.status)}
                    className="mb-3"
                  >
                    {appointment.status}
                  </Badge>

                  <br />

                  {appointment.status !== "Cancelled" && (
                    <Button
                      variant="danger"
                      onClick={() =>
                        cancelAppointment(appointment._id)
                      }
                    >
                      Cancel Appointment
                    </Button>
                  )}

                </Col>

              </Row>

            </Card.Body>
          </Card>
        ))
      )}

    </Container>
  );
}

export default MyAppointments;