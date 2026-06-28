import { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );

      toast.success("Registration Successful 🎉");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h2 className="text-center mb-4">Register</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;