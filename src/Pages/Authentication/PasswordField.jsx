import { useState } from "react";
export default function PasswordField({ name, value, placeholder, formHandler }) {

    const [showPassword, setShowPassword] = useState(false);

    return (<>
        <span className="input-password-field">
            <input className="txt-input" type={!showPassword ? "password" : "text"} name={name} value={value} placeholder={placeholder} onChange={formHandler} />
            <i className={!showPassword ? "fas fa-eye eye-icon " : "fas fa-eye-slash eye-icon"} onClick={() => setShowPassword(!showPassword)} />
        </span>
    </>
    )
}