import { useState } from "react";
import API from "../services/api";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddDoctor() {

  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    hospital: "",
    consultationFee: "",
    about: "",
    image: null, 
  });

  const handleChange = (e) => {
  const { name, value, files } = e.target;

  setDoctor({
    ...doctor,
    [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData();

        formData.append("name", doctor.name);
        formData.append("specialization", doctor.specialization);
        formData.append("experience", doctor.experience);
        formData.append("hospital", doctor.hospital);
        formData.append("consultationFee", doctor.consultationFee);
        formData.append("about", doctor.about);

        if (doctor.image) {
          formData.append("image", doctor.image);
        }

        await API.post("/doctors", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

      toast.success("Doctor Added Successfully 🎉");
          setDoctor({
          name: "",
          specialization: "",
          experience: "",
          hospital: "",
          consultationFee: "",
          about: "",
        });

        navigate("/admin");
    } catch (err) {

      toast.error(err.response?.data?.message || "Failed");

    }
  };

  return (

    <Container className="mt-5">

      <Card className="shadow p-4">

        <h2 className="mb-4">
          Add Doctor
        </h2>

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
              name="experience"
              type="number"
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
              name="consultationFee"
              type="number"
              value={doctor.consultationFee}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Doctor Image</Form.Label>

            <Form.Control
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>About Doctor</Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              name="about"
              placeholder="Write a short description about the doctor..."
              value={doctor.about}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit">
            Add Doctor
          </Button>

        </Form>

      </Card>

    </Container>
  );
}

export default AddDoctor;