import { useNavigate, NavLink } from "react-router-dom";
import "./navigation.css";
import { useAuthenticationContext, useUserContext } from "../../Context";
import { toast } from "react-toastify";

export function Navbar() {
  const { login, setLogin } = useAuthenticationContext();
  const { userDispatch } = useUserContext();
  const navigate = useNavigate();

  function logOutHandler() {
    userDispatch({ type: "SET_PLAYLISTS", payload: [] });
    userDispatch({ type: "SET_LIKES", payload: [] });
    userDispatch({ type: "SET_HISTORY", payload: [] });
    userDispatch({ type: "SET_WATCH_LATER", payload: [] });
    setLogin(false);
    localStorage.clear();
    toast.success("Logged out successfully");
    navigate("/login");
  }
  function getActiveStyle({ isActive }) {
    return isActive
      ? "link nav-link txt-bold txt-theme"
      : "link nav-link txt-white";
  }
  return (
    <>
      <nav className="nav bg-color">
        <div className="nav-logo">
          <NavLink to="/" className="link">
            <span className="nav-header  heading-1 txt-white l-sp-3">
              FIT
              <span className="txt-white bg-theme heading-2 txt-bold">
                TV
              </span>{" "}
            </span>
          </NavLink>
        </div>
        <ul className="nav-list">
          <li className="list-item">
            &nbsp;
            <NavLink to="/" className={getActiveStyle}>
              HOME
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/videos/explore" className={getActiveStyle}>
              EXPLORE
            </NavLink>
          </li>
          {!login && (
            <li className="list-item  txt-bold">
              <NavLink to="/login" className="link btn bg-theme txt-white">
                LOGIN
              </NavLink>
            </li>
          )}
          {login && (
            <li className="list-item  txt-bold">
              {" "}
              <NavLink to="/login" className="link txt-white">
                <i
                  className="fas fa-lg fa-sign-out-alt"
                  onClick={logOutHandler}
                ></i>
              </NavLink>{" "}
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
