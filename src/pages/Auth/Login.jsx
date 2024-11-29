import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./styles.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/accounts/login/`,
        {
          email,
          password,
        }
      );
      const { access, refresh } = response.data;

      localStorage.setItem("authToken", access);
      localStorage.setItem("refreshToken", refresh);
      // localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
      navigate("/home");
    } catch (error) {
      setError(error.response?.data?.detail || "Login failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <header className="auth-header">
        <NavLink to="/" className="auth-logo">
          park<span>EZ</span>
        </NavLink>
        <h1 className="auth-title">Login</h1>
      </header>
      <div className="auth-input">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="auth-input">
        <label htmlFor="password">Password</label>
        <div className="password-input-container">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>
      <button type="submit" className="auth-button">
        Login
      </button>
      <div className="auth-actions">
        <span>
          Don't have an account?
          <NavLink to="/register" className="auth-link">
            {" "}
            Sign Up
          </NavLink>
          <NavLink to="/" className="auth-link">
            {" "}
            Back
          </NavLink>
        </span>
      </div>
      {error && <p className="auth-error">{error}</p>}
    </form>
  );
};

export default Login;
