import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";
import imgGoogle from "../../assets/images/google.png";
import "./styles.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Kirim permintaan login menggunakan axiosInstance
      const response = await axiosInstance.post("/accounts/login/", {
        email,
        password,
      });

      // Ambil access token dan simpan ke localStorage
      const { access, refresh } = response.data;

      localStorage.setItem("authToken", access); // Simpan access token
      localStorage.setItem("refreshToken", refresh); // Simpan refresh token
      // localStorage.setItem("user", JSON.stringify(user)); // Simpan informasi pengguna

      // Arahkan pengguna ke halaman Home
      navigate("/home");
    } catch (err) {
      // Jika terjadi error, set pesan error
      setError("Invalid email or password.");
    }
  };

  return (
    <form className="auth-my-form" onSubmit={handleLogin}>
      <div className="auth-login-welcome-row">
        <NavLink to="/" className="auth-logo">
          park<span>EZ</span>
        </NavLink>
        <h1>LOGIN</h1>
      </div>
      <div className="auth-socials-row">
        <NavLink to="/google">
          <img src={imgGoogle} alt="Google" />
          Sign in with Google
        </NavLink>
      </div>
      <div className="auth-lines">
        <div className="auth-line"></div>
        OR
        <div className="auth-line"></div>
      </div>
      <div className="auth-text-field">
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
        <div className="auth-error-message">Email in incorrect format</div>
      </div>
      <div className="auth-text-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Your password"
          title="Minimum 6 characters at least 1 Alphabet and 1 Number"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="auth-error-message">
          Minimum 6 characters at least 1 Alphabet and 1 Number
        </div>
      </div>
      <button type="submit" className="auth-my-form__button">
        Login
      </button>
      <div className="auth-my-form__actions">
        <div className="auth-my-form__row">
          <span>
            Don't have an account?
            <NavLink to="/register" className="auth-form-link">
              Sign Up
            </NavLink>
          </span>
          <NavLink to="/" className="auth-form-link">
            Back
          </NavLink>
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../axiosConfig";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Kirim permintaan login menggunakan axiosInstance
//       const response = await axiosInstance.post("/dj-rest-auth/login/", {
//         email,
//         password,
//       });

//       // Ambil access token dan simpan ke localStorage
//       const { access, refresh, user } = response.data;

//       localStorage.setItem("authToken", access); // Simpan access token
//       localStorage.setItem("refreshToken", refresh); // Simpan refresh token
//       localStorage.setItem("user", JSON.stringify(user)); // Simpan informasi pengguna

//       // Arahkan pengguna ke halaman Home
//       navigate("/");
//     } catch (err) {
//       // Jika terjadi error, set pesan error
//       setError("Invalid email or password.");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>

//       {/* Tampilkan pesan error jika ada */}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;
