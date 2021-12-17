
import React, { Component } from "react";
import logo from "./logo.png"

const  Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
            {/* <p></p> */}
        </div>
        <div className="login">
            LOGIN
        </div>
    </div>
  );
}

export default Navbar;
