import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import ErrorPage from "./components/errorPage"; //import App from './App';
import LoginCard from "./components/signUp";
import UserProfile from "./components/userProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);
