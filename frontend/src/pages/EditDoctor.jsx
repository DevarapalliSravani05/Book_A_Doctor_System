import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    hospital: "",
    consultationFee: "",
    about: "",
  });

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = async () => {
    try {
      const res = await API.get(`/doctors/${id}`);
      setDoctor(res.data.doctor);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch doctor details");
    }
  };

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/doctors/${id}`, doctor);

      toast.success("Doctor Updated Successfully 🎉");

      navigate("/admin/manage-doctors");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <Container className="mt-5">
      <Card className="shadow p-4">
        <h2 className="mb-4">Edit Doctor</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={doctor.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Specialization</Form.Label>
            <Form.Control
              name="specialization"
              value={doctor.specialization}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="number"
              name="experience"
              value={doctor.experience}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hospital</Form.Label>
            <Form.Control
              name="hospital"
              value={doctor.hospital}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Consultation Fee</Form.Label>
            <Form.Control
              type="number"
              name="consultationFee"
              value={doctor.consultationFee}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>About Doctor</Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              name="about"
              value={doctor.about}
              onChange={handleChange}
              placeholder="Dr. Ramesh is an experienced Cardiologist with 12 years of expertise in diagnosing and treating heart-related conditions. He is dedicated to providing compassionate, personalized care and helping patients achieve better heart health through advanced medical treatment."
            />
          </Form.Group>

          <Button type="submit">
            Update Doctor
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default EditDoctor;