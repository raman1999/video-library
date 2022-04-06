import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./sidebar.css";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  function getActiveStyle({ isActive }) {
    return isActive ? "link btn active-link" : "link btn";
  }
  const updateSidebarDisplay = () => {
    if (window.innerWidth >= 768) {
      setShowSidebar(true);
    }
  };

  useEffect(() => {
    updateSidebarDisplay();
    window.addEventListener("resize", updateSidebarDisplay);
    return () => window.removeEventListener("resize", updateSidebarDisplay);
  }, []);
  return (
    <>
      <span
        className="nav-list-btn"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <i className="fas fa-bars fa-lg"></i>
      </span>
      {showSidebar && (
        <ul
          className="sidebar"
          style={{ display: showSidebar ? "block" : "none" }}
        >
          <li className="list-item">
            <NavLink to="/" className={getActiveStyle}>
              <i className=" fas fa-home"></i>
              <span className="sidebar-icon-text">Home</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/videos/explore" className={getActiveStyle}>
              <i className=" fas fa-compass"></i>
              <span className="sidebar-icon-text">Explore</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/videos/playlists" className={getActiveStyle}>
              <i className=" fas fa-folder-plus"></i>
              <span className="sidebar-icon-text">Playlists</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/videos/liked" className={getActiveStyle}>
              <i className=" fas fa-thumbs-up"></i>
              <span className="sidebar-icon-text">Likes</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/videos/watchlater" className={getActiveStyle}>
              <i className=" fas fa-bookmark"></i>
              <span className="sidebar-icon-text">Watch Later</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/videos/history" className={getActiveStyle}>
              <i className=" fas fa-clock"></i>
              <span className="sidebar-icon-text">History</span>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};
