import React from "react";
import AddPlus from "../../../assets/AddPlus.svg";
import { useNavigate } from "react-router-dom";

const FloatingButton = () => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/add-employee");
    console.log("Add new employee");
  };

  return (
    <button
      className="fixed bottom-[110px] right-7 bg-[#11453B] text-white p-3 rounded-full shadow-lg"
      onClick={handleAddNew}
    >
      <img src={AddPlus} alt="Add new Employee" />
    </button>
  );
};

export default FloatingButton;
