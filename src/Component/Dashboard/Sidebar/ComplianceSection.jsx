import React from "react";
import Compliance from "../../../assets/Compliance.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";


const ComplianceSection = ({isOpen, toggle}) => {
  
  return (
    <main>
      <div className="mb-2 px-4 py-2 border-b-[1.2px]">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("compliance")}
        >
          <div className="flex justify-center gap-2">
            <img src={Compliance} alt="Compliance" />
            <span className="text-sm">Compliance</span>
          </div>
          {isOpen.compliance ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isOpen.compliance && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <NavLink to="/compliance" className="block py-2">
              Compliance
            </NavLink>
          </div>
        )}
      </div>
    </main>
  );
};

export default ComplianceSection;
