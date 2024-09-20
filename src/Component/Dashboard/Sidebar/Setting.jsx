import React from "react";
import Settings from "../../../assets/Settings.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Setting = ({ toggle, isOpen }) => {
  return (
    <main>
      <div className="px-4 py-2">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("settings")}
        >
          <div className="flex justify-center gap-2">
            <img src={Settings} alt="Settings" />
            <span className="text-sm">Settings</span>
          </div>
          {isOpen.settings ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isOpen.settings && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <NavLink to="/settings" className="block py-2">
              Account Settings
            </NavLink>
            <NavLink to="/support" className="block py-2">
              Support
            </NavLink>
          </div>
        )}
      </div>
    </main>
  );
};

export default Setting;
