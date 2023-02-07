import React, { useState } from "react";
import "./Register.css";
import Axios from "axios";
function Register() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const checkValidation = () => {
    const regEx = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    if (regEx.test(email)) {
      //
    } else if (email === "") {
      setMessage("Please enter email");
    } else if (!regEx.test(email)) {
      setMessage("Email is not valid");
    } else {
      setMessage("");
    }
  };
  return (
    <div className="register_main">
      <form>
        <span>
          <h1>Register</h1>
        </span>
        <div className="register_form_content">
          <div className="register_form_content_1">
            <div className="input_field">
              <input type="text" required="required"></input>
              <span>Fist Name</span>
            </div>
            <div className="input_field">
              <input type="number" required="required"></input>
              <span>Age</span>
            </div>
            <div className="input_field">
              <input type="number" required="required"></input>
              <span>Phone Number</span>
            </div>
            <div className="input_field">
              <input type="text" required="required"></input>
              <span>Position</span>
            </div>
          </div>
          <div className="register_form_content_2">
            <div className="input_field">
              <input type="text" required="required"></input>
              <span>Last Name</span>
            </div>

            <div className="input_field_gender">
              <input
                type="radio"
                value="gender"
                name="gender"
                required="required"
              ></input>
              Male
              <input
                type="radio"
                value="gender"
                name="gender"
                required="required"
              ></input>
              Female
            </div>

            <div className="input_field">
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                required="required"
              ></input>
              <span>E-Mail</span>
            </div>

            <div className="input_field">
              <input type="password" required="required"></input>
              <span> Password</span>
            </div>
          </div>
        </div>

        <button onClick={checkValidation}>Sign Up</button>
        <label className="mail_validation">{message}</label>
      </form>
    </div>
  );
}

export default Register;
