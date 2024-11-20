import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

const ScanQRCode = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setData(result.text);
    }
  };

  const handleError = (err) => {
    setError("Failed to scan QR Code.");
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Scan QR Code</h2>
      {error && <p className="text-red-600">{error}</p>}

      <div className="flex justify-center mb-4">
        <QrScanner
          delay={300}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
      </div>

      {data ? (
        <div className="text-center">
          <p className="text-lg">QR Code Data:</p>
          <p className="font-bold">{data}</p>
        </div>
      ) : (
        <p className="text-center">
          Arahkan kamera ke QR code untuk memindainya.
        </p>
      )}
    </div>
  );
};

export default ScanQRCode;
