import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import CartPage from "./pages/CartPage.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

import "./App.css";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>
    );
}

export default App;
