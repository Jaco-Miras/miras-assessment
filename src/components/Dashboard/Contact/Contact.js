import React from "react";
import Map from "../../../assets/map.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      {/* Map */}
      <div className="map">
        <img src={Map} alt="" />
      </div>
      <div className="footer">
        <div className="location">
          <h2>Location:</h2>
          <h3>Greenhills St., Mandug, Davao City</h3>
        </div>
        <div className="contactno">
          <h2>Contact Number:</h2>
          <h3>+63 912 3456 789</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
