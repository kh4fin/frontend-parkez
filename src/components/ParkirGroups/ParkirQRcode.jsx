import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";

const ParkirQRcode = () => {
  const { id } = useParams();
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const storedQrCode = localStorage.getItem(`qr_code_${id}`);

        if (storedQrCode) {
          setQrCodeUrl(storedQrCode);
        } else {
          const response = await axiosInstance.get(
            `/api/generate-qrcode/${id}/`
          );
          const qrCodeBase64 = response.data.qr_code_base64;

          localStorage.setItem(`qr_code_${id}`, qrCodeBase64);

          setQrCodeUrl(qrCodeBase64);
        }
      } catch (error) {
        console.error("Error fetching QR code:", error);
        setError("Failed to load QR Code.");
      }
    };

    fetchQRCode();
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">QR Code for Paket</h2>
      {error ? (
        <p>{error}</p>
      ) : qrCodeUrl ? (
        <div className="flex justify-center">
          <img
            src={`data:image/png;base64,${qrCodeUrl}`}
            alt="QR Code"
            className="w-64 h-64"
          />
        </div>
      ) : (
        <p>Loading QR Code...</p>
      )}
    </div>
  );
};

export default ParkirQRcode;
