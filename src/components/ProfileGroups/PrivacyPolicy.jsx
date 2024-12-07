import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <NavLink
              to="/profile"
              className="flex items-center text-gray-800 hover:text-gray-600 text-2xl mb-4"
            >
              <IoMdArrowRoundBack />
            </NavLink>
            <h1 className="text-2xl font-bold text-blue-600">
              Kebijakan Privasi
            </h1>
            <p className="text-xl font-semibold text-gray-800 mt-2">
              parkEZ - Solusi Modern Parkir Anda
            </p>
            <p className="text-gray-500 mt-1">
              Terakhir Diperbarui: November 2024
            </p>
          </div>

          <div className="bg-white rounded-lg shadow mt-6 p-6">
            <h2 className="text-lg font-bold text-gray-800">Pendahuluan</h2>
            <p className="text-gray-600 mt-2">
              Di era digital yang semakin kompleks, parkEZ memahami bahwa
              privasi data pribadi adalah hak fundamental setiap pengguna.
              Sebagai platform teknologi parkir modern, kami tidak sekadar
              menyediakan layanan, tetapi juga menjamin keamanan dan kerahasiaan
              informasi Anda.
            </p>
            <p className="text-gray-600 mt-2">
              Komitmen kami terhadap perlindungan data bukan sekadar pernyataan,
              melainkan landasan dalam setiap operasi operasional parkEZ. Kami
              mengimplementasikan desain keamanan dan internasional praktik
              terbaik dalam pengelolaan data untuk melindungi informasi pribadi
              Anda dengan ketat.
            </p>
            <p className="text-gray-600 mt-2">
              Melalui kebijakan privasi ini, kami berkomitmen untuk:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Melindungi informasi pribadi Anda dari akses tidak sah</li>
              <li>Menggunakan data Anda hanya untuk tujuan yang sah</li>
              <li>Memastikan bahwa Anda selalu mengontrol data pribadi Anda</li>
              <li>
                Memperbarui kebijakan sesuai perkembangan hukum dan regulasi
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow mt-6 p-6">
            <h2 className="text-lg font-bold text-gray-800">
              Informasi yang Dikumpulkan
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Data Pribadi Pengguna</li>
              <li>Informasi Kendaraan</li>
              <li>Riwayat Parkir</li>
              <li>Data Pembayaran</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow mt-6 p-6">
            <h2 className="text-lg font-bold text-gray-800">Keamanan Data</h2>
            <p className="text-gray-600 mt-2">
              Kami mengimplementasikan teknologi enkripsi dan perlindungan
              canggih untuk menjamin keamanan data Anda.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow mt-6 p-6">
            <h2 className="text-lg font-bold text-gray-800">Hak Pengguna</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Mengakses Data Pribadi</li>
              <li>Menghapus Informasi</li>
              <li>Meminta penghapusan Data</li>
            </ul>
            <div className="mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Hubungi Kami
              </button>
            </div>
          </div>

          <footer className="text-center text-gray-500 mt-6">
            © 2024 parkEZ. Seluruh Hak Dilindungi.
          </footer>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
