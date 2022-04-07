import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import "./video-grid.css";
export const VideoGrid = () => {
  return (
    <div className="video-grid-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};
