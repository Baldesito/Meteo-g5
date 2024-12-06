import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container-fluid px-4">
        <Routes>
          <Route path="/" element={<WeatherDetails />} />
          <Route path="/details/:city" element={<WeatherDetails />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
