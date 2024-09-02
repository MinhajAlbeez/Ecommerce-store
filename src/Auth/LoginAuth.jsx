import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import LogoImage from "../assets/logoimg.png";

const LoginAuth = ({ handleImageClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Static email and password
    const staticEmail = "test@example.com";
    const staticPassword = "password123";

    if (email === staticEmail && password === staticPassword) {
      // Redirect to another page (e.g., "/dashboard")
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="right">
      <div className="container__login">
        <div className="logo">
          <img src={LogoImage} alt="logpng" height={200} width={200} />
        </div>
        <h2 className="welcome">Welcome Back</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="Email"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="Password"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <p>
            Don't have an account?{" "}
            <span className="register-link" onClick={handleImageClick}>
              Register Now
            </span>
          </p>
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAuth;
