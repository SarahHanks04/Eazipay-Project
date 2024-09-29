import React, { useState } from "react";
import CompanyName from "./CompanyName";
import CompanyAddress from "./CompanyAddress";
import CompanySize from "./CompanySize";
import CompanyInfo from "./CompanyInfo";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";

const Form = () => {
  const [open, setOpen] = useState({ editCompanyInfo: "false" });

  const toggle = (section) => {
    setOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <form className="main-form bg-white my-6 rounded-[16px]">
      <div>
        <div
          className="text-[#515251] font-medium text-[18px] p-4"
          onClick={() => toggle("editCompanyInfo")}
        >
          <div className="flex gap-6">
            {open.editCompanyInfo ? <FiChevronLeft className="flex justify-center items-center mt-1" /> : <FiChevronDown  className="flex justify-center items-center mt-1" />}
            <h1>Edit Company Information</h1>
          </div>
          <div className="w-full h-[1px] bg-[#E7E8E7] my-6"></div>
        </div>
        {open.editCompanyInfo && (
          <div>
            <CompanyInfo />
            <CompanyName />
            <CompanyAddress />
            <CompanySize />
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
