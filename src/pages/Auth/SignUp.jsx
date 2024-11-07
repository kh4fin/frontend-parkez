import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import imgGoogle from "../../assets/images/google.png";
import "./styles.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
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
        "http://localhost:8000/accounts/registration/",
        {
          email,
          first_name: firstName,
          last_name: lastName,
          password1,
          password2,
        }
      );
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <div className="login-welcome-row">
        <NavLink to="/" className="logo">
          park<span>EZ</span>
        </NavLink>
        <h1>SIGN UP</h1>
      </div>

      <div className="socials-row">
        <NavLink to="/google">
          <img src={imgGoogle} alt="Google" />
          Sign up with Google
        </NavLink>
      </div>

      <div className="lines">
        <div className="line"></div>
        OR
        <div className="line"></div>
      </div>

      <div className="text-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="text-field">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div className="text-field">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div className="text-field">
        <label htmlFor="password1">Password</label>
        <input
          id="password1"
          type={showPassword ? "text" : "password"}
          name="password1"
          placeholder="Your password"
          title="Minimum 6 characters, at least 1 letter and 1 number"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          required
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <div className="text-field">
        <label htmlFor="password2">Confirm Password</label>
        <input
          id="password2"
          type={showPassword ? "text" : "password"}
          name="password2"
          placeholder="Confirm your password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="my-form__button">
        Sign Up
      </button>

      <div className="my-form__actions">
        <div className="my-form__row">
          <span>
            Already have an account?
            <NavLink to="/login" className="form-link">
              Log In
            </NavLink>
          </span>
          <NavLink to="/" className="form-link">
            Back
          </NavLink>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default SignUp;

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password1, setPassword1] = useState("");
//   const [password2, setPassword2] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password1 !== password2) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/accounts/registration/",
//         {
//           email,
//           first_name: firstName,
//           last_name: lastName,
//           password1,
//           password2,
//         }
//       );
//       alert("Registration successful!");
//       navigate("/login");
//     } catch (error) {
//       console.error("Error:", error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password1}
//           onChange={(e) => setPassword1(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={password2}
//           onChange={(e) => setPassword2(e.target.value)}
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
