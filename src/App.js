import React, { useContext } from "react";
import "./App.css";
import Login from "./Component/Page/Login";
import Home from "./Component/Page/Home";
import DishData from "./Component/Page/DishData";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Authoentication } from "./Component/Context";
import Admin from "./Component/Page/Admin";

function App() {
  const { isLoggedIn } = useContext(Authoentication);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dish" element={<DishData />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
