import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const FAQ = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <NavLink
        to="/profile"
        className="flex items-center text-gray-800 hover:text-gray-600 text-2xl mb-4"
      >
        <IoMdArrowRoundBack />
      </NavLink>
      <h1 className="text-3xl font-bold text-center mb-8">
        Halaman Bantuan parkEZ
      </h1>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Apa Masalah yang Kamu Alami?
      </h2>
      <ul className="list-none">
        <li className="bg-gray-200 p-4 rounded-lg mb-3">
          <a href="#daftar-akun" className="text-blue-600 hover:underline">
            Pendaftaran dan Akun
          </a>
        </li>
        <li className="bg-gray-200 p-4 rounded-lg mb-3">
          <a
            href="#berlangganan-tarif"
            className="text-blue-600 hover:underline"
          >
            Berlangganan dan Tarif
          </a>
        </li>
        <li className="bg-gray-200 p-4 rounded-lg mb-3">
          <a
            href="#pemesanan-penggunaan"
            className="text-blue-600 hover:underline"
          >
            Pemesanan dan Penggunaan
          </a>
        </li>
        <li className="bg-gray-200 p-4 rounded-lg mb-3">
          <a href="#pembayaran" className="text-blue-600 hover:underline">
            Pembayaran
          </a>
        </li>
        <li className="bg-gray-200 p-4 rounded-lg mb-3">
          <a
            href="#layanan-pelanggan"
            className="text-blue-600 hover:underline"
          >
            Layanan Pelanggan
          </a>
        </li>
        <li className="bg-gray-200 p-4 rounded-lg mb-3">
          <a href="#keamanan-privasi" className="text-blue-600 hover:underline">
            Keamanan dan Privasi
          </a>
        </li>
      </ul>

      <h2 id="daftar-akun" className="text-2xl font-semibold mt-6">
        Pendaftaran dan Akun
      </h2>
      <ul className="list-disc list-inside">
        <li>
          Bagaimana cara mengubah informasi akun seperti nama, email, atau nomor
          telepon?
        </li>
        <li>Apa yang harus saya lakukan jika lupa kata sandi?</li>
        <li>Apakah saya bisa memiliki lebih dari satu akun di parkEZ?</li>
        <li>Bagaimana cara mengganti kata sandi akun saya?</li>
        <li>Bagaimana cara menutup akun saya di parkEZ?</li>
        <li>Apa yang harus saya lakukan jika akun saya diretas?</li>
        <li>
          Apakah akun saya akan dinonaktifkan jika saya tidak aktif untuk waktu
          yang lama?
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">
        Bagaimana cara mengubah informasi akun seperti nama, email, atau nomor
        telepon?
      </h2>
      <p className="text-gray-700 mt-2">
        Anda dapat mengubah informasi akun Anda melalui aplikasi parkEZ dengan
        mengikuti langkah-langkah berikut:
      </p>
      <ol className="list-decimal list-inside ml-4 mt-2">
        <li>
          Buka aplikasi parkEZ di perangkat Anda dan pastikan Anda sudah masuk
          ke akun Anda.
        </li>
        <li>Pada beranda, klik ikon Profil atau Pengaturan Akun.</li>
        <li>Pilih menu Pengaturan Akun atau Edit Profil.</li>
        <li>
          Pilih informasi yang ingin Anda ubah, seperti Nama, Email, atau Nomor
          Telepon.
        </li>
        <li>Masukkan informasi baru sesuai keinginan Anda.</li>
        <li>
          Masukkan kata sandi atau kode verifikasi jika diminta untuk keamanan.
        </li>
        <li>Klik tombol Simpan atau Perbarui untuk menyelesaikan perubahan.</li>
      </ol>

      <p className="text-gray-700 mt-4">Catatan:</p>
      <ul className="list-disc list-inside ml-4 mt-2">
        <li>
          Pastikan Anda memasukkan email atau nomor telepon yang aktif untuk
          memastikan Anda dapat menerima notifikasi atau kode verifikasi.
        </li>
        <li>
          Jika Anda mengalami masalah saat mengubah informasi, silakan hubungi
          Layanan Pelanggan parkEZ.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">
        Apa yang harus saya lakukan jika lupa kata sandi?
      </h2>
      <p className="text-gray-700 mt-2">
        Jika Anda lupa kata sandi akun parkEZ, Anda dapat mengatur ulang kata
        sandi dengan langkah-langkah berikut:
      </p>
      <ol className="list-decimal list-inside ml-4 mt-2">
        <li>Buka aplikasi parkEZ atau masuk ke situs web resmi parkEZ.</li>
        <li>
          Pada halaman login, klik tautan Lupa Kata Sandi? di bawah kolom kata
          sandi.
        </li>
        <li>
          Masukkan alamat email atau nomor telepon yang terdaftar di akun Anda.
        </li>
        <li>
          Periksa email atau SMS untuk mendapatkan kode verifikasi atau tautan
          pemulihan.
        </li>
        <li>
          Masukkan kode verifikasi ke aplikasi atau klik tautan yang diberikan.
        </li>
        <li>
          Buat kata sandi baru yang aman, lalu konfirmasi dengan memasukkannya
          kembali.
        </li>
        <li>Klik Simpan atau Perbarui untuk menyelesaikan proses.</li>
      </ol>

      <p className="text-gray-700 mt-4">Tips untuk Membuat Kata Sandi Aman:</p>
      <ul className="list-disc list-inside ml-4 mt-2">
        <li>Gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol.</li>
        <li>
          Hindari menggunakan informasi pribadi seperti nama atau tanggal lahir.
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
