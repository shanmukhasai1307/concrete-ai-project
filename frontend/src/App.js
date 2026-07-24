import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Sustainability from "./pages/Sustainability";
import CostAnalysis from "./pages/CostAnalysis";
import Report from "./pages/Report";
import About from "./pages/About";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* ANALYTICS */}
        <Route
          path="/analytics"
          element={<Analytics />}
        />

        {/* SUSTAINABILITY */}
        <Route
          path="/sustainability"
          element={<Sustainability />}
        />

        {/* COST ANALYSIS */}
        <Route
          path="/cost-analysis"
          element={<CostAnalysis />}
        />

        {/* REPORT */}
        <Route
          path="/report"
          element={<Report />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;