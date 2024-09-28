import React from "react";
import Settings from "../../../assets/Settings.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
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
          {isOpen.settings ? <FiChevronRight /> : <FiChevronDown />}
        </div>
        {isOpen.settings && (
          <div className="ml-4 mt-2 text-[#515251] text-sm">
            <ul role="list" className="marker:text-black list-disc">
              <li>
                <NavLink to="/profile" className="block py-2">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage-account" className="block py-2">
                  Manage Account
                </NavLink>
              </li>
              <li>
                <NavLink to="/security" className="block py-2">
                  Security
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings" className="block py-2">
                  Manage Settings
                </NavLink>
              </li>
              <li>
                <NavLink to="/support" className="block py-2">
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

export default Setting;
