import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PublicView from "./components/PublicView";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              token ? (
                <Navigate to="/admin/dashboard" replace />
              ) : (
                <Navigate to="/admin" replace />
              )
            }
          />
          <Route path="/public" element={<PublicView />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
