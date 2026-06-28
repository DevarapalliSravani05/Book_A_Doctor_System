function ContactSection() {
  return (
    <section className="container py-5">

      <h2 className="text-center fw-bold mb-5">
        Contact Us
      </h2>

      <div className="row">

        <div className="col-md-6">

          <h4>🏥 Doctor Appointment System</h4>

          <p>We are always ready to help you.</p>

          <p>📍 Vijayawada, Andhra Pradesh</p>

          <p>📞 +91 9876543210</p>

          <p>📧 support@doctorappointment.com</p>

          <p>🕒 Mon - Sun : 24 Hours</p>

        </div>

        <div className="col-md-6">

          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps?q=Vijayawada&output=embed"
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: "10px",
            }}
            loading="lazy"
            allowFullScreen
          />

        </div>

      </div>

    </section>
  );
}

export default ContactSection;