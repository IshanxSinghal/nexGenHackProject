import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DonorRegistration from "./pages/DonorRegistration";
import HospitalRequest from "./pages/HospitalRequest";
import DonorResponse from "./pages/DonorResponse";
import Dashboard from "./pages/Dashboard";
import EducationBot from "./pages/EducationBot";
import HospitalRegistration from "./pages/HospitalResgitration";
import HospitalDashBoard from "./pages/HospitalDashBoard";
import { useEffect } from "react";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donor-registration" element={<DonorRegistration />} />
          <Route path="/hospital-request" element={<HospitalRequest />} />
          <Route path="/donor-response" element={<DonorResponse />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/education-bot" element={<EducationBot />} />
          <Route
            path="/hospital-registration"
            element={<HospitalRegistration />}
          />
          <Route path="/hospital-dashboard" element={<HospitalDashBoard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
