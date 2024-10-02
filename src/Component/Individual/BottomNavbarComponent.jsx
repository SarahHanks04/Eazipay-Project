import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../assets/Home.svg";
import User from "../../assets/User.svg";
import Payroll from "../../assets/Payroll.svg";
import Quickloan from "../../assets/Quickloan.svg";
import Group from "../../assets/Group.png";


const BottomNavbarComponent = () => {
  return (
    <nav className="bg-white fixed bottom-0 left-0 right-0 shadow-lg p-4 mt-[5rem]">
      <ul className="flex justify-around text-sm">
        <li>
          <NavLink
            to="/individual"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-[#11453B] font-bold whitespace-nowrap"
                : "flex flex-col items-center text-[#8D8E8D] whitespace-nowrap"
            }
          >
            <span>
              <img src={Home} alt="Home" />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employee"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-[#11453B] font-bold whitespace-nowrap"
                : "flex flex-col items-center text-[#8D8E8D] whitespace-nowrap"
            }
          >
            <span>
              <img src={User} alt="user" />
            </span>
            Employee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/payroll"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-[#11453B] font-bold whitespace-nowrap"
                : "flex flex-col items-center text-[#8D8E8D] whitespace-nowrap"
            }
          >
            <span>
              <img src={Payroll} alt="Payroll" />
            </span>
            Payroll
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/loans"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-[#11453B] font-bold whitespace-nowrap"
                : "flex flex-col items-center text-[#8D8E8D] whitespace-nowrap"
            }
          >
            <span>
              <img src={Quickloan} alt="Loan" />
            </span>
            Loans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/more"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-[#11453B] font-bold whitespace-nowrap"
                : "flex flex-col items-center text-[#8D8E8D] whitespace-nowrap"
            }
          >
            <span>
              <img src={Group} alt="More" />
            </span>
            More
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbarComponent;
