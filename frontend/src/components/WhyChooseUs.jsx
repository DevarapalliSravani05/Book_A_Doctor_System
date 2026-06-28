import hospital from "../assets/hospital.jpg";

function WhyChooseUs() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <img
              src={hospital}
              alt="Hospital"
              className="img-fluid rounded shadow-lg"
            />
          </div>

          <div className="col-lg-6">

            <h2 className="fw-bold mb-4">
              Why Choose Our Hospital?
            </h2>

            <p className="lead">
              We provide world-class healthcare with modern
              facilities and highly experienced doctors.
            </p>

            <ul className="list-group list-group-flush">

              <li className="list-group-item">
                ✅ Experienced Specialists
              </li>

              <li className="list-group-item">
                ✅ 24×7 Emergency Support
              </li>

              <li className="list-group-item">
                ✅ Advanced Medical Equipment
              </li>

              <li className="list-group-item">
                ✅ Easy Online Appointment Booking
              </li>

              <li className="list-group-item">
                ✅ Affordable Healthcare
              </li>

            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;