import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./styles.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password1 !== password2) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/accounts/registration/`,
        {
          email,
          first_name: firstName,
          last_name: lastName,
          password1,
          password2,
        }
      );
      alert("Registration successful!");
      navigate("/waiting");
    } catch (error) {
      setError(error.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <header className="auth-header">
        <NavLink to="/" className="auth-logo">
          park<span>EZ</span>
        </NavLink>
        <h1 className="auth-title">Sign Up</h1>
      </header>
      <div className="auth-input">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="auth-input">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
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
        <label htmlFor="password1">Password</label>
        <div className="password-input-container">
          <input
            id="password1"
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            required
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>
      <div className="auth-input">
        <label htmlFor="password2">Confirm Password</label>
        <input
          id="password2"
          type="password"
          placeholder="Confirm your password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="auth-button">
        Sign Up
      </button>
      <div className="auth-actions">
        <span>
          Already have an account?
          <NavLink to="/login" className="auth-link">
            {" "}
            Login
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

export default SignUp;
