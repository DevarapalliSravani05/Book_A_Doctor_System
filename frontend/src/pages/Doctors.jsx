import { useEffect, useState } from "react";
import API from "../services/api";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchDoctors();
  }, []);

 const fetchDoctors = async () => {
  try {
    const res = await API.get("/doctors");
    setDoctors(res.data.doctors);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(search.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "" || doctor.specialization === filter;

    return matchesSearch && matchesFilter;
  });

  if (loading) {
  return (
    <Container className="text-center mt-5">
      <div
        className="spinner-border text-primary"
        style={{ width: "4rem", height: "4rem" }}
      ></div>

      <h4 className="mt-3">Loading Doctors...</h4>
    </Container>
  );
}

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-primary fw-bold">
        👨‍⚕️ Our Doctors
      </h2>

      {/* Search & Filter */}
      <Row className="mb-4">
        <Col md={8} className="mb-3">
          <Form.Control
            type="text"
            placeholder="🔍 Search doctor, specialization or hospital..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>

        <Col md={4}>
          <Form.Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All Specializations</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dentist">Dentist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Pediatrician">Pediatrician</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Doctor Cards */}
      <Row className="justify-content-center">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
            />
          ))
        ) : (
          <Col md={8}>
            <Alert variant="warning" className="text-center">
              No doctors found matching your search.
            </Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Doctors;