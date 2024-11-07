import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EmailVerification = () => {
  const { key } = useParams(); // Menangkap key dari URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleVerifyEmail = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:8000/dj-rest-auth/registration/verify-email/",
        {
          key: key, // Mengirim key yang didapat dari URL
        }
      );

      setSuccess("Email verified successfully!");
      setLoading(false);

      // Redirect ke halaman login atau dashboard setelah verifikasi berhasil
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect setelah 2 detik
    } catch (error) {
      setLoading(false);
      setError("Failed to verify email. Please try again.");
    }
  };

  return (
    <div>
      <h1>Email Verification</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      {!success && (
        <button onClick={handleVerifyEmail} disabled={loading}>
          {loading ? "Verifying..." : "Verify Email"}
        </button>
      )}
    </div>
  );
};

export default EmailVerification;
