import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home/Home.jsx";
import Weather from "./pages/Weather/Weather.jsx";
import OTP from "./pages/OTP/OTP.jsx";
import WeatherDetail from "./pages/WeatherDetail/WeatherDetail.jsx";
import CRUD from "./pages/CRUD/CRUD.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/weather" element={<Weather />} />
        <Route path="/weather/:locationName" element={<WeatherDetail />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/crud" element={<CRUD />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
