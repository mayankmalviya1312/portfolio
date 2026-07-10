import { Link } from "react-router-dom";
import "./notFound.css";

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-content">

        <span>404</span>

        <h1>Page Not Found</h1>

        <p>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/">
          Return to Homepage
        </Link>

      </div>
    </main>
  );
}

export default NotFound;