import React from "react";
import Banner from "../../../assets/BANNER.jpg";
import "./Menu.css";
import Video from "../../../assets/ManganDaKita.mp4";

function Menu() {
  return (
    <div className="menu">
      <div className="banner">
        <h3>Business Banner</h3>
        <img src={Banner} alt="" />
      </div>

      <div className="animation">
        <h3>Business Advertisement</h3>
        <video
          src={Video}
          width={500}
          height={500}
          autoPlay
          loop={true}
          muted={true}
        ></video>
      </div>
    </div>
  );
}

export default Menu;
