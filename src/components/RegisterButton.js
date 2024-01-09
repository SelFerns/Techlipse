import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterButton.css";

export default function RegisterBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Register");
  };

  return (
    <button className="Btn btn-text" onClick={handleClick}>
      REGISTER
    </button>
  );
}
