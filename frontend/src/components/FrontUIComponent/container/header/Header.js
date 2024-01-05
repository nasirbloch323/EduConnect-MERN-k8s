import React, { Component } from "react";
import Slider from "./Slider";
import Topbar from "./Topbar";

function Header() {
  return (
    <header id="home" className="header-styles">
      <Topbar />
      <Slider />
    </header>
  );

}

export default Header;
