import "./not_found.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
export function NotFound() {
  useDocumentTitle("Page Not Found| FitTV");
  return (
    <div className="page-not-found">
      <div className="page-not-found-box txt-center shadow-white">
        <h2>We cannot find any matches!</h2>
        <p>The page you are looking for is not available within us.</p>
        <Link to="/videos/explore" className="link btn bg-theme txt-white">
          Explore &#8594;
        </Link>
      </div>
    </div>
  );
}
