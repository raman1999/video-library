import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import PasswordField from "../PasswordField";
import { useAuthenticationContext } from "../../../Context";
import axios from "axios";

export function Login() {
  const initialFormData = { email: "", password: "" };
  const navigate = useNavigate();
  const { setLogin } = useAuthenticationContext();

  const [loginForm, setLoginForm] = useState(initialFormData);
  const [errorData, setErrorData] = useState("");
  const { email, password } = loginForm;

  function loginFormHandler(e) {
    const { name, value } = e.target;
    if (errorData) setErrorData("");

    setLoginForm((oldFormData) => ({ ...oldFormData, [name]: value }));
  }

  function loginSubmitHandler(e) {
    e.preventDefault();

    (async () => {
      try {
        const {
          data: { encodedToken },
        } = await axios.post("/api/auth/login", { email, password });
        if (encodedToken) {
          localStorage.setItem("token", encodedToken);
          setLogin(true);
          navigate("/");
        }
      } catch (err) {
        err.response.status === 500
          ? setErrorData("Can't connect to server ,Try again later")
          : setErrorData("Email or Password is  invalid");
      }
    })();
  }
  return (
    <section className="section-login txt-center flex-box j-center">
      <form
        className="form-container flex-column"
        onSubmit={loginSubmitHandler}
      >
        <h3 className="title txt-gray">Login</h3>

        <div className="input-container">
          <div className="input-box">
            <span className="txt-icon txt-gray">
              <i className="fas fa-envelope fa-lg"></i>
            </span>
            <input
              className="txt-input"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={loginForm.email}
              onChange={loginFormHandler}
            />
          </div>
          <div className="input-box">
            <span className="txt-icon txt-gray">
              <i className="fas fa-lock fa-lg"></i>
            </span>
            <PasswordField
              name="password"
              placeholder={"Enter your password"}
              formHandler={loginFormHandler}
              value={loginForm.password}
            />
          </div>
        </div>
        {errorData && (
          <div className="error-text">
            <i className="fas fa-exclamation-circle"></i>
            {errorData}{" "}
          </div>
        )}

        <div className="flex-column">
          <button type="submit" className="link btn bg-theme txt-gray l-sp-2">
            LOGIN
          </button>
          <p className="login-txt">
            <span className="txt-gray">Not a user yet ? </span>
            <Link to="/signup" className="txt-white">
              Create your account
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
