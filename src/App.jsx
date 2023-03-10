import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import { Routes, Route,Navigate } from "react-router-dom";
export default function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
