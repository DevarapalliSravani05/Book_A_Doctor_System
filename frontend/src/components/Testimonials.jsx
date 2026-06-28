function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          What Our Patients Say
        </h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 p-4 text-center">
              <h5>⭐⭐⭐⭐⭐</h5>

              <p>
                Booking an appointment was very easy.
                The doctors were professional and friendly.
              </p>

              <h6 className="text-primary">
                — Priya Sharma
              </h6>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 p-4 text-center">
              <h5>⭐⭐⭐⭐⭐</h5>

              <p>
                Excellent healthcare service with modern
                facilities.
              </p>

              <h6 className="text-primary">
                — Rahul Kumar
              </h6>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 p-4 text-center">
              <h5>⭐⭐⭐⭐⭐</h5>

              <p>
                Highly recommend this hospital.
                Quick appointment booking and
                experienced doctors.
              </p>

              <h6 className="text-primary">
                — Sneha Reddy
              </h6>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;