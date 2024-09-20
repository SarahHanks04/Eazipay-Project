import React from "react";
import DashboardColored from "../../../assets/DashboardColored.svg";
import { NavLink } from "react-router-dom";

const DashboardMenu = ({ toggle }) => {
  return (
    <main>
      <div className="mb-2 border-l-[5px] border-[#11453B] bg-[#F0F7EB80] rounded-sm pl-3">
        <div
          className="text-[#11453B] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("dashboard")}
        >
          <NavLink
            to="/dashboard-layout"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-bold whitespace-nowrap"
                : "text-black whitespace-nowrap"
            }
          >
            <div className="flex items-center gap-4 py-4">
              <img
                src={DashboardColored}
                alt="dashboard"
                className="flex-shrink-0"
              />
              <span>Dashboard</span>
            </div>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default DashboardMenu;
