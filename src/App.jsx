import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Test from "./Pages/Test";
import { Routes, Route,Navigate } from "react-router-dom";
import Register from "./Pages/Register";
export default function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Test" element={<Test/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
