import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login_main">
      <form>
        <span>
          <h1>LOGIN</h1>
        </span>
        <div className="input_content">
          <div className="input_field">
            <input type="email" required="required"></input>
            <span>Username</span>
          </div>
          <div className="input_field">
            <input type="password" required="required"></input>
            <span>Password</span>
          </div>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
