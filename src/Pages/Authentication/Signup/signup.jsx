import { useNavigate, Link } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import { useState } from "react";
import ErrorText from "./ErrorText";
import PasswordField from "../PasswordField";
import { signupValidationHandler } from "./signupValidation";
import { useAuthenticationContext } from "../../../Context";

export function Signup() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const initialErrorData = {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    serverError: "",
  };
  const [signupForm, setSignupForm] = useState(initialFormData);
  const [errorData, setErrorData] = useState(initialErrorData);
  const {
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    confirmPasswordError,
    serverError,
  } = errorData;
  const navigate = useNavigate();
  const { setLogin } = useAuthenticationContext();

  function formHandler(e) {
    const { name, value } = e.target;
    if (name === "confirmPassword" && signupForm.password !== value)
      setErrorData((err) => ({
        ...err,
        confirmPasswordError: "Password do not match ",
      }));
    if (name === "password" && signupForm.confirmPassword == value)
      setErrorData((err) => ({ ...err, confirmPasswordError: "" }));
    else {
      setSignupForm((formValues) => ({ ...formValues, [name]: value }));
      setError(`${name}Error`, "");
    }
  }

  function setError(name, value) {
    setErrorData((err) => ({ ...err, [name]: value }));
  }

  function signupHandler(e) {
    e.preventDefault();
    const validData = signupValidationHandler(
      setError,
      setErrorData,
      signupForm
    );
    const { firstName, lastName, email, password } = signupForm;

    if (validData) {
      (async () => {
        try {
          const {
            data: { encodedToken },
          } = await axios.post("/api/auth/signup", {
            firstName,
            lastName,
            email,
            password,
          });
          if (encodedToken) {
            localStorage.setItem("token", encodedToken);
            setLogin(true);
            setSignupForm(initialFormData);
            navigate("/");
          }
        } catch (err) {
          err.response.status === 422
            ? setError("serverError", "Email already exists")
            : setError(
                "serverError",
                "Can't connect to server ! Try again later"
              );
        }
      })();
    }
  }

  return (
    <section className="section-register txt-center flex-box j-center">
      <form className=" form-container flex-column" onSubmit={signupHandler}>
        <h3 className="title txt-gray">Register</h3>
        <div className="input-container">
          <div className="input-box">
            <label className="label">
              First Name<span className="txt-white">*</span>
            </label>
            <span>
              <input
                className="txt-input"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onChange={formHandler}
              />
              <ErrorText errorName={firstNameError} />
            </span>
          </div>

          <div className="input-box">
            <label className="label txt-bgDark">
              Last Name<span className="txt-white">*</span>
            </label>
            <span>
              <input
                className="txt-input"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                onChange={formHandler}
              />
              <ErrorText errorName={lastNameError} />
            </span>
          </div>

          <div className="input-box">
            <label className="label txt-bgDark">
              Email<span className="txt-white">*</span>
            </label>
            <span>
              <input
                className="txt-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={formHandler}
              />
              <ErrorText errorName={emailError} />
            </span>
          </div>

          <div className="input-box">
            <label className="label txt-bgDark">
              Password<span className="txt-white">*</span>
            </label>
            <span>
              <PasswordField
                placeholder="Enter your password"
                name="password"
                formHandler={formHandler}
              />
              <ErrorText errorName={passwordError} />
            </span>
          </div>

          <div className="input-box">
            <label className="label txt-bgDark">
              Confirm Password<span className="txt-white">*</span>
            </label>
            <span>
              <PasswordField
                placeholder="Re-type your password"
                name="confirmPassword"
                formHandler={formHandler}
              />
              <ErrorText errorName={confirmPasswordError} />
            </span>
          </div>
        </div>

        <div className="submit-container">
          <button
            type="submit"
            className="link btn btn-register bg-theme txt-white l-sp-2"
          >
            REGISTER
          </button>
          <p className="txt-gray">
            Already have an account?
            <Link to="/login" className=" txt-white l-sp-1">
              &nbsp; Login here
            </Link>
          </p>
        </div>
        {serverError && (
          <div className="error-text padding-box">{serverError}</div>
        )}
      </form>
    </section>
  );
}
