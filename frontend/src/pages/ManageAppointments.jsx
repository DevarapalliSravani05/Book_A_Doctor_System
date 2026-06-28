import { useEffect, useState } from "react";
import API from "../services/api";
import {
  Container,
  Table,
  Badge,
  Button,
  Form,
} from "react-bootstrap";
import { toast } from "react-toastify";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/appointments/all");
      setAppointments(res.data.appointments);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load appointments");
    }
  };

  const updateStatus = async (id, status) => {
    if (
    !window.confirm(`Are you sure you want to mark this appointment as ${status}?`)
  ) {
    return;
  }

    try {
      await API.put(`/appointments/${id}/status`, { status });

      toast.success(`Appointment ${status}`);

      fetchAppointments();
    } catch (error) {
      toast.error(error.response?.data?.message || "Update Failed");
    }
  };

  const getBadgeColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "primary";
      case "Completed":
        return "success";
      case "Cancelled":
        return "danger";
      default:
        return "warning";
    }
  };

  const filteredAppointments = appointments.filter((appointment) => {
    return (
      appointment.patient?.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      appointment.doctor?.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <Container className="mt-5">

      <h2 className="text-primary fw-bold mb-4">
        📋 Manage Appointments
      </h2>

      <Form.Control
        className="mb-4"
        placeholder="🔍 Search Patient or Doctor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table striped bordered hover responsive>

        <thead className="table-dark">
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            <th>Status</th>
            <th width="320">Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredAppointments.map((appointment) => (

            <tr key={appointment._id}>

              <td>{appointment.patient?.name}</td>

              <td>{appointment.doctor?.name}</td>

              <td>
                {new Date(
                  appointment.appointmentDate
                ).toLocaleDateString()}
              </td>

              <td>{appointment.timeSlot}</td>

              <td>{appointment.reason || "-"}</td>

              <td>
                <Badge bg={getBadgeColor(appointment.status)}>
                  {appointment.status}
                </Badge>
              </td>

              <td>

                <Button
                  size="sm"
                  variant="primary"
                  className="me-2 mb-2"
                  onClick={() =>
                    updateStatus(
                      appointment._id,
                      "Confirmed"
                    )
                  }
                >
                  Confirm
                </Button>

                <Button
                  size="sm"
                  variant="success"
                  className="me-2 mb-2"
                  onClick={() =>
                    updateStatus(
                      appointment._id,
                      "Completed"
                    )
                  }
                >
                  Complete
                </Button>

                <Button
                  size="sm"
                  variant="danger"
                  className="mb-2"
                  onClick={() =>
                    updateStatus(
                      appointment._id,
                      "Cancelled"
                    )
                  }
                >
                  Cancel
                </Button>

              </td>

            </tr>

          ))}

        </tbody>

      </Table>

    </Container>
  );
}

export default ManageAppointments;