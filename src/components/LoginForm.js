import React, { useState } from "react";
import "./loginForm.css";
import Logo from "../assets/LOGO.png";
import { useAuthContext } from "../AuthContext";

function LoginForm() {
  const { login } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }
  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
          <img className="img" src={Logo} alt="" />
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="name">Email: </label>
            <input
              className="form-input"
              type="text"
              name="name"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-btn">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
