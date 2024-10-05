import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../MobileNavBar/MobileNavbar.css";
import AziPayLogo from "../../../assets/AziPayLogo.svg";
import DesktopNavbar from "../DestktopNavBar/DesktopNavbar";
import Bars3 from "../../../assets/Bars3.svg";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <nav className="w-full fixed top-0 z-10 bg-gradient-to-r from-[#e6f0e5] to-[#fdf2f7] shadow-md">
      <div className="w-full px-4 flex justify-between items-center md:hidden">
        <img src={AziPayLogo} alt="Logo" width={100} />
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={Bars3} alt="Hamburger Menu" width={50} />
        </button>
      </div>
      <DesktopNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="md:hidden bg-navy px-6 pb-4 w-full">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/individual"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Individual
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard-layout"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Business
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sidebar"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold" : "text-black"
                }
              >
                Set Your Payroll
              </NavLink>
            </li>
          </ul>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-950 text-white px-4 py-2 rounded-[16px] w-full mt-4"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-950 text-white px-4 py-2 rounded-[16px] w-full mt-4"
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default MobileNavBar;
