import { useEffect, useState } from "react";
import API from "../services/api";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppointmentPieChart from "../components/AppointmentPieChart";
import OverviewBarChart from "../components/OverviewBarChart";
import { Table, Badge } from "react-bootstrap";
import MonthlyAppointmentsChart from "../components/MonthlyAppointmentsChart";
import "../styles/dashboard.css";

function AdminDashboard() {
    const navigate = useNavigate();
    const [recentAppointments, setRecentAppointments] = useState([]);
    const [monthlyStats, setMonthlyStats] = useState([]);
  const [stats, setStats] = useState({
    users: 0,
    doctors: 0,
    appointments: 0,
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/stats");

      setStats({
        users: res.data.users,
        doctors: res.data.doctors,
        appointments: res.data.appointments,
        pending: res.data.pending,
        confirmed: res.data.confirmed,
        completed: res.data.completed,
        cancelled: res.data.cancelled,
      });
      setRecentAppointments(res.data.recentAppointments);
      setMonthlyStats(res.data.monthlyStats);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">

      <h1 className="text-center mb-5">
        🏥 Admin Dashboard
      </h1>

      <Row>

        <Col md={3}>
          <Card className="dashboard-card shadow text-center text-white bg-primary mb-4">
            <Card.Body>
              <h5>👥 Users</h5>
              <h2>{stats.users}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="dashboard-card shadow text-center text-white bg-success mb-4">
            <Card.Body>
              <h5>👨‍⚕️ Doctors</h5>
              <h2>{stats.doctors}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="dashboard-card shadow text-center text-white bg-warning mb-4">
            <Card.Body>
              <h5>📅 Appointments</h5>
              <h2>{stats.appointments}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="dashboard-card shadow text-center text-white bg-danger mb-4">
            <Card.Body>
              <h5>⏳ Pending</h5>
              <h2>{stats.pending}</h2>
            </Card.Body>
          </Card>
        </Col>

    </Row>

<Row>

  <Col md={6}>
    <Card className="chart-card shadow text-center mb-4">
      <Card.Body>
        <h4 className="text-primary">✅ Confirmed</h4>
        <h2>{stats.confirmed}</h2>
      </Card.Body>
    </Card>
  </Col>

  <Col md={6}>
    <Card className="chart-card shadow text-center mb-4">
      <Card.Body>
        <h4 className="text-success">✔ Completed</h4>
        <h2>{stats.completed}</h2>
      </Card.Body>
    </Card>
  </Col>

</Row>


<Row className="mb-4">

  <Col lg={6}>
    <Card className="chart-card shadow p-4 h-100">

      <h4 className="text-center mb-3">
        Appointment Status
      </h4>

      <AppointmentPieChart stats={stats} />

    </Card>
  </Col>

  <Col lg={6}>
    <Card className="chart-card shadow p-4 h-100">

      <h4 className="text-center mb-3">
        Hospital Overview
      </h4>

      <OverviewBarChart stats={stats} />

    </Card>
  </Col>

</Row>


<Card className="table-card shadow p-4 mb-4">
  <h4 className="mb-3">🕒 Recent Appointments</h4>

  <Table striped hover responsive>
    <thead>
      <tr>
        <th>Patient</th>
        <th>Doctor</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      {recentAppointments.map((appointment) => (
        <tr key={appointment._id}>
          <td>{appointment.patient?.name}</td>
          <td>{appointment.doctor?.name}</td>
          <td>
            {new Date(appointment.appointmentDate).toLocaleDateString()}
          </td>
          <td>
            <Badge
              bg={
                appointment.status === "Confirmed"
                  ? "primary"
                  : appointment.status === "Completed"
                  ? "success"
                  : appointment.status === "Cancelled"
                  ? "danger"
                  : "warning"
              }
            >
              {appointment.status}
            </Badge>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
</Card>

<Row className="mb-4">

  <Col>
    <Card className="dashboard-card shadow p-4">

      <h4 className="text-center mb-3">
        📈 Monthly Appointments
      </h4>

      <MonthlyAppointmentsChart
        monthlyStats={monthlyStats}
      />

    </Card>
  </Col>

</Row>

      <Card className="dashboard-card shadow p-4 mt-4">

  <h3 className="mb-4">Quick Actions</h3>

  <Row className="g-3 quick-action">

    <Col md={3}>
      <Link to="/admin/add-doctor" className="d-grid text-decoration-none">
        <Button variant="primary" size="lg">
          ➕ Add Doctor
        </Button>
      </Link>
    </Col>

    <Col md={3}>
      <Link to="/admin/manage-doctors" className="d-grid text-decoration-none">
        <Button variant="info" size="lg">
          👨‍⚕️ Manage Doctors
        </Button>
      </Link>
    </Col>

    <Col md={3}>
      <Link to="/admin/users" className="d-grid text-decoration-none">
        <Button variant="success" size="lg">
          👥 Users
        </Button>
      </Link>
    </Col>

    <Col md={3}>
      <Link
        to="/admin/manage-appointments"
        className="d-grid text-decoration-none"
      >
        <Button variant="warning" size="lg">
          📅 Appointments
        </Button>
      </Link>
    </Col>

  </Row>

</Card>

    </Container>
  );
}

export default AdminDashboard;