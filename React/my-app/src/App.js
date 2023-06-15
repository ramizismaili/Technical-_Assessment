import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import SelectedItem from "./components/SelectedItem";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/selected/:selectedName" element={<SelectedItem />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
