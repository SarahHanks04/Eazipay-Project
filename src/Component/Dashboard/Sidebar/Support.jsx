import React from "react";
import Call from "../../../assets/Call.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Support = ({ toggle, isOpen }) => {
  return (
    <main>
      <div className="mb-2 px-4 py-2 border-b-[1.2px]">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("settings")}
        >
          <div className="flex justify-center gap-2">
            <img src={Call} alt="Settings" />
            <span className="text-sm">Support</span>
          </div>
          {isOpen.support ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isOpen.support && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <NavLink to="/account-center" className="block py-2">
              Account Center
            </NavLink>
            <NavLink to="/contact-us" className="block py-2">
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </main>
  );
};

export default Support;
