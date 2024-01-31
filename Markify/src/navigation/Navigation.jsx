import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GithubAuth from "../pages/GithubAuth";
import OneDriveAuth from "../pages/OneDriveAuth";
import Home from "../pages/Home";
import NewPage from "../pages/NewPage";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GithubAuth />} />
        <Route path="/onedrive_auth" element={<OneDriveAuth />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
