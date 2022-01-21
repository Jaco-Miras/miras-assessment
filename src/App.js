import React from "react";
import { useAuthContext } from "./AuthContext";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Menu from "./components/Dashboard/Menu/Menu";
import Contact from "./components/Dashboard/Contact/Contact";
import PlaceOrder from "./components/Dashboard/PlaceOrder/PlaceOrder";

function App() {
  const { user } = useAuthContext();
  console.log("User is: ", user);

  return (
    <div className="App">
      {user ? (
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/placeOrder" element={<PlaceOrder />} />
          </Routes>
        </Router>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
