// import SimpleMap from "./Gmap";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Station from "./Station";
import Navbar from "./Navbar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Station/>
    </div>
  );
}

export default App;
