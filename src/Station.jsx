import React, { Component, useState } from "react";
import Switch from "react-switch";

const Station = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const [checked2, setChecked2] = useState(false);
  const handleChange2 = (nextChecked) => {
    setChecked2(nextChecked);
  };
  return (
    <div className="station">
      <div className="container">
        <div className="checkBar">
          <div className="areYou">
            <label>
              <span>Are You ?</span>
              <Switch
                onChange={handleChange}
                checked={checked}
                onColor="#64d17b"
                backgroud="#64d17b"
                onHandleColor="#f6f6f6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={30}
                width={100}
                className="react-switch"
                id="material-switch"
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 15,
                      color: "white",
                      width: "100px",
                      fontSize: 20
                    }}
                  >
                    EV 
                  </div>
                }
                checkedIcon={
                  <p className="carOwner">Owner</p>
                  // <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
                  //   <circle r={3} cx={5} cy={5} />
                  // </svg>
                }
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background:"rgb(100, 209, 123)",
                      borderRadius:"23px",
                      height: "100%",
                      color:"white",
                      fontSize: 20,
                    }}
                  >
                    ♥
                  </div>
                }
                checkedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "red",
                      fontSize: 18,
                    }}
                  >
                    ♥
                  </div>
                }
                className="react-switch"
                id="small-radius-switch"
              />
            </label>
          </div>
          <div className="location">
            <label>
              <span>Location</span>
              <Switch
                onChange={handleChange2}
                checked2={checked2}
                onColor="#64d17b"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
              />
            </label>
          </div>
        </div>
        <div className="map"></div>
      </div>
    </div>
  );
};

export default Station;
