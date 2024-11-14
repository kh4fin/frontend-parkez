import React from "react";

const Waiting = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Verifikasi Email
        </h2>
        <p className="text-gray-600">
          Silakan periksa kotak masuk email Anda untuk melakukan verifikasi.
        </p>
      </div>
    </div>
  );
};

export default Waiting;
