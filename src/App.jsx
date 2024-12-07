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
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Kontak from "./pages/Kontak";
import Waiting from "./pages/Auth/Waiting";
import Parkir from "./pages/Parkir";
import History from "./pages/History";
import Profile from "./pages/Profile";
import QRcode from "./pages/QRcode";
import SandK from "./components/ProfileGroups/SandK";
import LokasiDetail from "./components/LokasiGroups/LokasiDetail";
import Rute from "./components/LokasiGroups/Rute";
import ScanQRCode from "./components/ParkirGroups/ScanQRCode";
import ParkirQRcode from "./components/ParkirGroups/ParkirQrcode";
import UserDetail from "./pages/Profile/UserDetail";
import EditUser from "./components/ProfileGroups/EditUser";
import PrivacyPolicy from "./components/ProfileGroups/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Beranda />} />
        <Route path="/about" element={<About />} />
        <Route path="/harga" element={<Pricing />} />
        <Route path="/kontak" element={<Kontak />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route
          path="/dj-rest-auth/registration/account-confirm-email/:key/"
          element={<EmailVerification />}
        />

        {/* Users Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/parkez-lists" element={<ParkezChardList />} />
        <Route path="/ezgarage-lists" element={<ParkezChardList />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/lokasi/:id" element={<LokasiDetail />} />
        <Route path="/rute/:id" element={<Rute />} />
        <Route path="/parkir" element={<Parkir />} />
        <Route path="/qrcode/:id" element={<ParkirQRcode />} />
        <Route path="/scan" element={<ScanQRCode />} />
        <Route path="/riwayat" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/kebijakan-privasi" element={<PrivacyPolicy />} />
        <Route path="/profile/user-info" element={<UserDetail />} />
        <Route path="/edit-profile" element={<EditUser />} />
        <Route path="/Syarat-dan-ketentuan" element={<SandK />} />
        <Route
          path="https://example.com/?order_id=order-43&status_code=200&transaction_status=settlement"
          element={<EmailVerification />}
        />

        {/* Dashboard Admin Routes */}
        <Route path="/dashboard-admin/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
