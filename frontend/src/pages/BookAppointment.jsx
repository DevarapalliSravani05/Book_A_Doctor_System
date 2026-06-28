import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { Container, Card, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    appointmentDate: "",
    timeSlot: "",
    reason: "",
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await API.post("/appointments", {
        patient: user.id,
        doctor: id,
        appointmentDate: appointment.appointmentDate,
        timeSlot: appointment.timeSlot,
        reason: appointment.reason,
      });

      toast.success("Appointment Booked Successfully 📅");

      navigate("/my-appointments");
    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <Container className="mt-5">
      <Card className="shadow p-4">
        <h2 className="mb-4 text-center">
          📅 Book Appointment
        </h2>

        <Form onSubmit={bookAppointment}>

          <Form.Group className="mb-3">
            <Form.Label>Appointment Date</Form.Label>

            <Form.Control
              type="date"
              name="appointmentDate"
              value={appointment.appointmentDate}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Time Slot</Form.Label>

            <Form.Select
              name="timeSlot"
              value={appointment.timeSlot}
              onChange={handleChange}
              required
            >
              <option value="">Choose Time</option>
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 PM</option>
              <option>02:00 PM</option>
              <option>03:00 PM</option>
              <option>04:00 PM</option>
              <option>05:00 PM</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Reason for Visit</Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              name="reason"
              placeholder="Describe your health problem..."
              value={appointment.reason}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100"
            variant="primary"
          >
            Book Appointment
          </Button>

        </Form>
      </Card>
    </Container>
  );
}

export default BookAppointment;