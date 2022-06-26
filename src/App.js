import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import PatientDataset from "./pages/PatientDatabase";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import { useState } from "react";
import NavbarNoAuth from "./components/Navbar/NavbarNoAuth";
import UpdateInfo from "./pages/UpdateInfo";

function App() {
  const [isAuth, setIsAuth] = useState(true); //change state to true to see navbar items, leave blank to see noAuth bar
  return (
    <div className="App">
      {!isAuth & (window.pathname !== "/login") ? <NavbarNoAuth /> : <Navbar />}
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="https://github.com/AbrahimMahmud/heart-disease-prediction-v2/blob/main/heart_disease_prediction.ipynb" />
          <Route path="/patient-database" element={<PatientDataset />} />
          <Route
            path="/settings"
            element={<Settings setIsAuth={setIsAuth} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/update-info" element={<UpdateInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
