import { useState } from "react";
import axios from "axios";
import { Container, Card, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://book-a-doctor-system.onrender.com/api/users/login",
        {
          email,
          password,
        }
      );
      console.log("Login Response:", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      console.log("Saved Token:", localStorage.getItem("token"));
      console.log("Saved User:", localStorage.getItem("user"));
      toast.success("Login Successful 🎉");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed");
    }
  };
  
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h2 className="text-center">Login</h2>

        <Form onSubmit={login}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;