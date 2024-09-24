import React from "react";
import AddPlus from "../../../assets/AddPlus.svg";

const FloatingButton = () => {
  const handleAddClick = () => {
    console.log("Add new employee");
  };

  return (
    <button
      className="fixed bottom-[50px] right-7 bg-[#11453B] text-white p-3 rounded-full shadow-lg"
      onClick={handleAddClick}
    >
      <img src={AddPlus} alt="Add new Employee" />
    </button>
  );
};

export default FloatingButton;
