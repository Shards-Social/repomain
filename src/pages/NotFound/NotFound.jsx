import React from "react";
import { useNavigate } from "react-router";
import "./notfound.css";

import CatErrorImage from "../../assets/caterror.png"; // Adjusted import path

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <img src={CatErrorImage} alt="Cat Error" /> {/* Display the image */}
      <h1>404 the requested page was not Found</h1>
      <button onClick={() => navigate("/")}>Head back Home</button>
    </div>
  );
};

export default NotFound;
