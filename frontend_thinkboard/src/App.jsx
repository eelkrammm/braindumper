import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage.jsx";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
