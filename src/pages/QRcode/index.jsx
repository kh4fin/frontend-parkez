import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ParkirQRcode from "../../components/ParkirGroups/ParkirQrcode";
import ScanQRCode from "../../components/ParkirGroups/ScanQRCode";
import { FaQrcode, FaBarcode } from "react-icons/fa";
import ParkirHeader from "../../components/ParkirGroups/ParkirHeader";

const QRcode = () => {
  const [isQRCodeVisible, setIsQRCodeVisible] = useState(true);

  const handleQRCodeClick = () => {
    setIsQRCodeVisible(true);
  };

  const handleScannerClick = () => {
    setIsQRCodeVisible(false);
  };

  return (
    <div>
      <Navbar />
      <ParkirHeader />
      {isQRCodeVisible ? <ParkirQRcode /> : <ScanQRCode />}

      <div className="flex justify-center space-x-4 my-4">
        <button onClick={handleQRCodeClick} className="text-xl">
          <FaQrcode
            className={isQRCodeVisible ? "text-blue-500" : "text-gray-500"}
          />
          <p className={isQRCodeVisible ? "text-blue-500" : "text-gray-500"}>
            QR Code
          </p>
        </button>

        <button onClick={handleScannerClick} className="text-xl">
          <FaBarcode
            className={!isQRCodeVisible ? "text-blue-500" : "text-gray-500"}
          />
          <p className={!isQRCodeVisible ? "text-blue-500" : "text-gray-500"}>
            Scan
          </p>
        </button>
      </div>
    </div>
  );
};

export default QRcode;
