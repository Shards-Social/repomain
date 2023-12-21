import React from "react";
import { useNavigate } from "react-router";
import "./notfound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <h1>404 the requested page was not Found</h1>
      <button onClick={() => navigate("/")}>Head back Home</button>
    </div>
  );
};

export default NotFound;
