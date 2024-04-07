// import { useState } from "react";
import "./App.css";
import "./css/normalize.css";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../src/pages/HomePage";
import ShopPage from "../src/pages/ShopPage.tsx";
import AboutPage from "../src/pages/AboutPage";
import ContactPage from "../src/pages/ContactPage.tsx";
import HowToBuy from "../src/pages/HowToBuy.tsx";
import NotFoundPage from "../src/pages/NotFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/how-to-buy" element={<HowToBuy/>} />
        <Route element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
