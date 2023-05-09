import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import LandingPage from "../pages/LandingPage";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRouter;
