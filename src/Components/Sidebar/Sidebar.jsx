import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li className="list-item">
        <Link to="/" className="link btn">
          <i className=" fas fa-home"></i>
          <span className="sidebar-icon-text ">Home</span>
        </Link>
      </li>
      <li className="list-item">
        <Link to="/videos/explore" className="link btn ">
          <i className=" fas fa-compass"></i>
          <span className="sidebar-icon-text">Explore</span>
        </Link>
      </li>
      <li className="list-item">
        <Link to="/videos/playlists" className="link btn ">
          <i className=" fas fa-folder-plus"></i>
          <span className="sidebar-icon-text">Playlists</span>
        </Link>
      </li>
      <li className="list-item">
        <Link to="/videos/liked" className="link btn ">
          <i className=" fas fa-thumbs-up"></i>
          <span className="sidebar-icon-text">Likes</span>
        </Link>
      </li>
      <li className="list-item">
        <Link to="/videos/watchlater" className="link btn ">
          <i className=" fas fa-bookmark"></i>
          <span className="sidebar-icon-text">Watch Later</span>
        </Link>
      </li>
      <li className="list-item">
        <Link to="/videos/history" className="link btn ">
          <i className=" fas fa-clock"></i>
          <span className="sidebar-icon-text">History</span>
        </Link>
      </li>
    </ul>
  );
};
