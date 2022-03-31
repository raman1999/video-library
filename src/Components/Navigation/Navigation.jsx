import { useNavigate, NavLink } from "react-router-dom";
import "./navigation.css";
import { useAuthenticationContext } from "../../Context";

export function Navbar() {
  const { login, setLogin } = useAuthenticationContext();
  const navigate = useNavigate();

  function logOutHandler() {
    setLogin(false);
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <nav className="nav bg-color">
        <div className="nav-logo">
          <NavLink to="/" className="link">
            <span className="nav-header  heading-1 txt-white l-sp-3">
              FIT
              <span className="txt-white bg-theme heading-2 txt-bold">TV</span>{" "}
            </span>
          </NavLink>
        </div>
        <span id="btn-hamburger" className="nav-btn">
          <i className="fas fa-bars fa-lg"></i>
        </span>

        <ul id="main-list" className="nav-list nav-list-hide">
          <li className="list-item">
            {" "}
            <NavLink to="/" className="link txt-white">
              HOME
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/explore" className="link txt-white">
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
