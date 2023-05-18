import { useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";
import Course from "./Pages/CoursePage";
import Test from "./Pages/Test";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import { useLocation } from "react-router-dom";

import CourseProvider from './helper/Courses/CourseProvider';

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-gray-50">
      <CourseProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Course/:courseId" element={<Course />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </CourseProvider>
      <Footer />
    </div>
  );
}
