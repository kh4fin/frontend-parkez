import React from "react";
import "./SandK.scss";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const SandK = () => {
  return (
    <div className="font-roboto SandK">
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <NavLink
          to="/profile"
          className="flex items-center text-gray-800 hover:text-gray-600 text-2xl mb-4"
        >
          <IoMdArrowRoundBack />
        </NavLink>

        <h1 className="text-center text-3xl font-bold mb-6">
          Syarat dan Ketentuan <span className="text-red-500">parkEZ</span>
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Ketentuan Umum</h2>
          <div className="border border-gray-300 p-4 rounded-lg mb-6">
            <h3 className="text-red-500 font-bold mb-2">1.1 parkEZ</h3>
            <p className="mb-4">
              Platform digital yang menyediakan layanan manajemen dan reservasi
              parkir, termasuk:
            </p>
            <ul className="list-disc list-inside mb-2 ps-8">
              <li>Aplikasi mobile ParkEZ</li>
              <li>Website ParkEZ</li>
              <li>Sistem manajemen parkir ParkEZ</li>
              <li>Infrastruktur parkir ParkEZ</li>
            </ul>
            <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-600">
              Contoh: Saat Anda menggunakan aplikasi ParkEZ untuk memesan tempat
              parkir atau melakukan pembayaran.
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-red-500 font-bold mb-2">
              1.2 Persyaratan Pengguna
            </h3>
            <ul className="list-disc list-inside ps-8">
              <li>Berusia minimal 17 tahun atau memiliki SIM yang valid</li>
              <li>Memiliki identitas yang valid (KTP/Passport)</li>
              <li>Memiliki kendaraan yang terdaftar secara resmi</li>
              <li>
                Menyetujui penggunaan data pribadi sesuai kebijakan privasi
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Ketentuan Layanan</h2>
          <div className="border border-gray-300 p-4 rounded-lg mb-6">
            <h3 className="text-red-500 font-bold mb-2">
              2.1 Reservasi dan Pembayaran
            </h3>
            <ul className="list-disc list-inside ps-8">
              <li>
                Reservasi harus dilakukan minimal 30 menit sebelum waktu parkir
              </li>
              <li>Pembayaran harus dilakukan sebelum menggunakan layanan</li>
              <li>
                Reservasi dan pembayaran tidak dapat dibatalkan atau diubah
              </li>
              <li>
                ParkEZ berhak menolak reservasi jika sistem mengalami kendala
                teknis
              </li>
            </ul>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-red-500 font-bold mb-2">
              2.2 Penggunaan Fasilitas
            </h3>
            <ul className="list-disc list-inside ps-8">
              <li>
                Pengguna wajib mematuhi batas waktu parkir yang telah ditentukan
              </li>
              <li>
                ParkEZ tidak bertanggung jawab atas kehilangan atau kerusakan
                kendaraan
              </li>
              <li>
                Pengguna harus mematuhi aturan dan kebijakan yang berlaku di
                area parkir
              </li>
              <li>
                ParkEZ berhak menolak akses kendaraan yang tidak terdaftar
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            3. Tanggung Jawab dan Asuransi
          </h2>
          <div className="border border-gray-300 p-4 rounded-lg mb-6">
            <h3 className="text-red-500 font-bold mb-2">
              3.1 Cakupan Asuransi
            </h3>
            <p className="mb-2">Setiap paket parkEZ meliputi asuransi dasar:</p>
            <ul className="list-disc list-inside bg-gray-100 p-3 rounded-lg text-sm text-gray-600 ps-8">
              <li>Perlindungan terhadap kerusakan akibat kelalaian petugas</li>
              <li>Perlindungan terhadap kehilangan kendaraan</li>
              <li>Maksimal klaim sesuai dengan paket yang dipilih</li>
            </ul>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-red-500 font-bold mb-2">
              3.2 Batasan Tanggung Jawab
            </h3>
            <p>parkEZ tidak bertanggung jawab atas:</p>
            <ul className="list-disc list-inside ps-8">
              <li>Kehilangan barang pribadi di dalam kendaraan</li>
              <li>Kerusakan yang disebabkan oleh pengguna</li>
              <li>Force majeure (bencana alam, huru-hara, dll)</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            4. Peraturan Khusus EZ Garage
          </h2>
          <div className="border border-gray-300 p-4 rounded-lg mb-6">
            <h3 className="text-red-500 font-bold mb-2">
              4.1 Akses dan Keamanan
            </h3>
            <ul className="list-disc list-inside ps-8">
              <li>Pengguna wajib menggunakan QR Code untuk akses</li>
              <li>Dilarang memberikan akses kepada pihak lain</li>
              <li>Pelanggaran keamanan akan dikenakan sanksi</li>
            </ul>
          </div>

          <div className="border border-gray-300 p-4 rounded-lg">
            <h3 className="text-red-500 font-bold mb-2">4.2 Pemantauan</h3>
            <ul className="list-disc list-inside ps-8">
              <li>Area parkir dipantau CCTV 24 jam</li>
              <li>Data rekaman disimpan sesuai kebijakan privasi</li>
              <li>Akses rekaman hanya untuk kepentingan keamanan</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">5. Penutup</h2>
          <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-600 mb-4">
            <p className="text-red-500 mb-2">
              Pelanggaran terhadap syarat dan ketentuan dapat mengakibatkan:
            </p>
            <ul className="list-disc list-inside mb-4 ps-8">
              <li>Pengenaan denda atau penghentian layanan</li>
              <li>Denda sesuai tingkat pelanggaran</li>
              <li>Tuntutan hukum jika diperlukan</li>
            </ul>
          </div>
          <p className="text-gray-400 italic ps-2">
            parkEZ berhak mengubah syarat dan ketentuan sewaktu-waktu. Perubahan
            akan diinformasikan melalui aplikasi dan email terdaftar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SandK;
