import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AbstractCompany from "../../assets/AbstractCompany.svg";
import { setLogo } from "./Slice";

const CompanyInfo = () => {
  const dispatch = useDispatch();
  const logo = useSelector((state) => state.form.logo);
  const [fileName, setFileName] = useState("Change Logo");

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      dispatch(setLogo(URL.createObjectURL(file)));
    }
  };

  return (
    <main className="px-8">
      <div className="flex items-baseline gap-8 mb-6">
        <img
          src={AbstractCompany}
          alt="Abstract Company"
          className="object-contain"
        />

        <div className="relative">
          <input
            type="file"
            id="logoUpload"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleLogoChange}
          />
          <label
            htmlFor="logoUpload"
            className="bg-[#F0F7EB] border-[1.5px] border-[#11453B] px-4 py-2 rounded-[8px] cursor-pointer shadow-sm text-[#11453B] hover:bg-gray-100 transition"
          >
            {fileName}
          </label>
        </div>

        {/* Display the logo */}
        {logo && (
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 h-24 object-cover"
          />
        )}
      </div>
    </main>
  );
};

export default CompanyInfo;
