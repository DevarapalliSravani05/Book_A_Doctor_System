import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import AdminDashboard from "./pages/AdminDashboard";
import AddDoctor from "./pages/AddDoctor";
import EditDoctor from "./pages/EditDoctor";
import AllAppointments from "./pages/AllAppointments";
import Users from "./pages/Users";
import ManageDoctors from "./pages/ManageDoctors";
import ManageAppointments from "./pages/ManageAppointments";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/book/:id" element={<BookAppointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-doctor" element={<AddDoctor />} />
        <Route path="/admin/edit-doctor/:id" element={<EditDoctor />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/appointments" element={<AllAppointments />} />
        <Route path="/admin/manage-doctors" element={<ManageDoctors />} />
        <Route
          path="/admin/manage-appointments"
          element={<ManageAppointments />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;