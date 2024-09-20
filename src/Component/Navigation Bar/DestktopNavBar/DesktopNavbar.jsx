import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AziPayLogo from "../../../assets/AziPayLogo.svg";
import "../DestktopNavBar/DesktopNavBar.css";

const DesktopNavbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <main className="navbar bg-gradient-to-r from-[#e6f0e5] to-[#fdf2f7] flex justify-between w-full max-w-[1280px] py-[16px] px-[20px]">
      
      <div className="logo-links hidden md:flex space-x-10 items-center text-[18px] w-[70%]">
        
        <img
          src={AziPayLogo}
          alt="AziPay Logo"
          width={122}
          height={32}
          className="mr-[3rem]"
        />
        
        <NavLink
          to="/sidebar"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-bold whitespace-nowrap"
              : "text-black whitespace-nowrap"
          }
        >
          Individual
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-bold whitespace-nowrap"
              : "text-black whitespace-nowrap"
          }
        >
          Business
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-bold whitespace-nowrap"
              : "text-black whitespace-nowrap"
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/set-your-payroll"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-bold whitespace-nowrap"
              : "text-black whitespace-nowrap"
          }
        >
          Set your payroll
        </NavLink>
      </div>

      
      <div className="register-buttons hidden md:flex gap-[20px] w-[30%] mr-[3rem] justify-end">
        <button
          onClick={() => navigate("/login")}
          className="bg-transparent text-[#11453B] font-[14px] border-[#11453B] px-[34px] py-[6px] rounded-[24px] border-[1px] whitespace-nowrap"
        >
          Log in
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-[#11453B] text-white font-[14px] px-[34px] py-[6px] rounded-[24px] whitespace-nowrap"
        >
          Register
        </button>
      </div>
    </main>
  );
};

export default DesktopNavbar;
