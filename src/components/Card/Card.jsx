import React, { useEffect, useState } from "react";
import "./Card.style.css";
import axios from "axios";

const Card = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [device, setDevice] = useState({
    deviceName: "",
    deviceState: false,
  });

  const fetchData = () => {
    setInterval(() => {
      axios
        .get("http://3.110.134.111:8001/users/vinayakaraju46@gmail.com")
        .then((response) => {
          console.log(response.data.data.devices[0]);
          setDevice(response.data.data.devices[0]);
        });
    }, 2000);
  };
  
  return (
    <div className="card-container">
      <h2>Device Name: {device.deviceName}</h2>
      <h3>Device Status:{device.deviceState ? "ON" : "OFF"}</h3>
      <span
        className="status-circle"
        style={
          device.deviceState
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
      >
        {device.deviceState ? "ON" : "OFF"}
      </span>
    </div>
  );
};

export default Card;
