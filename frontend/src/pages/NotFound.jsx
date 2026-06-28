import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
      }}
    >
      <h1
        className="display-1 fw-bold text-primary"
      >
        404
      </h1>

      <h2 className="mb-3">
        Page Not Found
      </h2>

      <p className="text-muted mb-4">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="btn btn-primary btn-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;