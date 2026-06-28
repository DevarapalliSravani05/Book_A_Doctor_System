import { useEffect, useState } from "react";
import API from "../services/api";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function ManageDoctors() {
    const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await API.get("/doctors");
      setDoctors(res.data.doctors);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch doctors");
    }
  };
  const deleteDoctor = async (id) => {
    if (!window.confirm("Are you sure you want to delete this doctor?")) {
  return;
}
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this doctor?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/doctors/${id}`);

    toast.success("Doctor Deleted Successfully 🗑️");

    fetchDoctors();

  } catch (error) {
    toast.error(error.response?.data?.message || "Delete Failed");
  }
};

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Manage Doctors</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Hospital</th>
            <th>Fee</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td>{doctor.name}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.experience} Years</td>
              <td>{doctor.hospital}</td>
              <td>₹{doctor.consultationFee}</td>

              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => navigate(`/admin/edit-doctor/${doctor._id}`)}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteDoctor(doctor._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ManageDoctors;