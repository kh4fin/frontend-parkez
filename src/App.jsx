import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import Lokasi from "./pages/Lokasi";
import ParkezChardList from "./pages/Home/ParkezChardList";
import Beranda from "./pages/Beranda";
import About from "./pages/About";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import EmailVerification from "./pages/Auth/EmailVerification";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/dj-rest-auth/registration/account-confirm-email/:key/"
          element={<EmailVerification />}
        /> */}

        {/* <Route path="/" element={<HomeBefore />} /> */}
        <Route
          path="/dj-rest-auth/registration/account-confirm-email/:key/"
          element={<EmailVerification />}
        />
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/parkez-lists" element={<ParkezChardList />} />
        <Route path="/lokasi" element={<Lokasi />} />
      </Routes>
    </Router>
  );
}

export default App;
