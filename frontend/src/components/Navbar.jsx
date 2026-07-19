import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaUserCircle, FaSignOutAlt, FaHospital } from "react-icons/fa";
import "../styles/Navbar.css";

function CustomNavbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="premium-navbar"
    >
      <Container>

        {/* Logo */}

        <Navbar.Brand
          as={Link}
          to="/"
          className="brand-logo"
        >
          <div className="brand-icon">
            🏥
          </div>

          <div className="brand-text">

            <span>Doctor</span>

            <small>Appointment System</small>

          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar"
          className="bg-light"
        />

        <Navbar.Collapse id="navbar">

          {/* Center Links */}

          <Nav className="mx-auto">

            <Nav.Link
              as={NavLink}
              to="/"
              className="nav-link-custom"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/doctors"
              className="nav-link-custom"
            >
              Doctors
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/my-appointments"
              className="nav-link-custom"
            >
              My Appointments
            </Nav.Link>

          </Nav>

          {/* User */}

          <div className="d-flex align-items-center gap-3">

            <div className="user-box">

              <FaUserCircle size={32} />

              <span>{user?.name}</span>

            </div>

            <Button
              className="logout-btn"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="me-2" />
              Logout
            </Button>

          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;