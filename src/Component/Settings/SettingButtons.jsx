import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetForm } from "./Slice";

const SettingButtons = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  // Handle Cancel Button
  const handleCancel = () => {
    dispatch(resetForm());
  };

  // Handle Save Button
  const handleSave = () => {
    console.log("Saved Data:", formData);
    // dispatch(resetForm());
  };

  return (
    <div className="flex justify-between w-full space-x-4 mt-4 mb-8 px-5 sm:px-8">
      <button
        onClick={handleCancel}
        className="bg-white border-[1.7px] border-[#11453B] text-[#11453B] py-3 px-4 w-full rounded-full hover:bg-[#11453B] hover:text-white transition"
      >
        Cancel
      </button>
      <button
        onClick={handleSave}
        className="bg-white border-[1.7px] border-[#11453B] text-[#11453B] py-3 px-4 w-full rounded-full hover:bg-[#11453B] hover:text-white transition"
      >
        Save
      </button>
    </div>
  );
};

export default SettingButtons;
