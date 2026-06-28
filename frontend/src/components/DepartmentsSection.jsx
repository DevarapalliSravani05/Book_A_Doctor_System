import {
  FaHeart,
  FaBrain,
  FaBone,
  FaTooth,
  FaEye,
  FaBaby,
} from "react-icons/fa";

import "../styles/departments.css";

function DepartmentsSection() {
  const departments = [
    {
      icon: <FaHeart />,
      title: "Cardiology",
      color: "#ef4444",
      desc: "Heart care and cardiovascular treatments.",
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      color: "#8b5cf6",
      desc: "Brain and nervous system specialists.",
    },
    {
      icon: <FaBone />,
      title: "Orthopedics",
      color: "#0ea5e9",
      desc: "Bone, joint and muscle treatments.",
    },
    {
      icon: <FaTooth />,
      title: "Dental",
      color: "#14b8a6",
      desc: "Complete dental care and surgery.",
    },
    {
      icon: <FaEye />,
      title: "Ophthalmology",
      color: "#3b82f6",
      desc: "Advanced eye care and vision treatments.",
    },
    {
      icon: <FaBaby />,
      title: "Pediatrics",
      color: "#f97316",
      desc: "Healthcare services for children.",
    },
  ];

  return (
    <section className="departments-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Departments</h2>
          <p className="text-muted">
            Comprehensive healthcare across multiple specialties
          </p>
        </div>

        <div className="row g-4">
          {departments.map((dept, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="department-card">

                <div
                  className="department-icon"
                  style={{ background: dept.color }}
                >
                  {dept.icon}
                </div>

                <h4>{dept.title}</h4>

                <p>{dept.desc}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DepartmentsSection;