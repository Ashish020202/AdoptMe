import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdoptionPage from "./pages/AdoptionPage";
import DonationPage from "./pages/DonationPage";
import EmergencyPage from "./pages/EmergencyPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
