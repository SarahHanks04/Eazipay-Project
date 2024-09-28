import React from "react";
import Compliance from "../../../assets/Compliance.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const ComplianceSection = ({ isOpen, toggle }) => {
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
          {isOpen.compliance ? <FiChevronRight /> : <FiChevronDown />}
        </div>
        {isOpen.compliance && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <ul role="list" className="marker:text-black list-disc">
              <li>
                <NavLink to="/register-compliance" className="block py-2">
                  Register Compliance
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-compliance" className="block py-2">
                  Add Compliance
                </NavLink>
              </li>
              <li>
                <NavLink to="/view-compliance" className="block py-2">
                  View Compliance
                </NavLink>
              </li>
              <li>
                <NavLink to="/edit-compliance" className="block py-2">
                  Edit Compliance
                </NavLink>
              </li>
              <li>
                <NavLink to="/pay-compliance" className="block py-2">
                  Pay Compliance
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default ComplianceSection;
