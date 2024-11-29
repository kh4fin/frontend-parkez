import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import ParkirHeader from "./ParkirHeader";
import axios from "axios";

const ScanQRCode = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isScannerVisible, setIsScannerVisible] = useState(true);

  const handleScan = (result) => {
    if (result) {
      setData(result.text);
      setIsScannerVisible(false);
      checkInParkir(result.text);
    }
  };

  const handleError = (err) => {
    setError("Gagal memindai QR Code.");
    console.error(err);
  };

  const checkInParkir = async (transaksiId) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.post(transaksiId, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const responseData = response.data;
      setResponse(responseData);
      console.log(responseData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <>
      <ParkirHeader />
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Scan QR Code</h2>
        {error && <p className="text-red-600">{error}</p>}
        {loading && <p className="text-blue-600">Memproses check-in...</p>}

        {isScannerVisible && (
          <div className="flex justify-center mb-4">
            <QrScanner
              delay={300}
              style={previewStyle}
              onError={handleError}
              onScan={handleScan}
            />
          </div>
        )}

        {response && (
          <div className="text-center mt-4">
            <p className="text-green-600">Check-in berhasil!</p>
            <p className="font-bold">User: {response.user}</p>
            <p>Paket: {response.paket}</p>
          </div>
        )}

        {!data && !loading && !response && (
          <p className="text-center">
            Arahkan kamera ke QR code untuk memindainya.
          </p>
        )}
      </div>
    </>
  );
};

export default ScanQRCode;
