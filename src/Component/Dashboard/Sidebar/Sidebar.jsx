import React, { useState } from "react";
import AziPayColoredLogo from "../../../assets/AziPayColoredLogo.svg";
import { NavLink } from "react-router-dom";
import DashboardColored from "../../../assets/DashboardColored.svg";
import Wallet from "../../../assets/Wallet.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import User from "../../../assets/User.svg";
import Payroll from "../../../assets/Payroll.svg";
import Compliance from "../../../assets/Compliance.svg";
import Quickloan from "../../../assets/Quickloan.svg";
import Openbook from "../../../assets/Openbook.svg";
import Call from "../../../assets/Call.svg";
import Settings from "../../../assets/Settings.svg";


const Sidebar = () => {
  // State to manage the collapse of each section
  const [openSections, setOpenSections] = useState({
    dashboard: false,
    wallet: false,
    employeeManagement: false,
    payroll: false,
    compliance: false,
    quickLoan: false,
    bookKeeping: false,
    support: false,
    settings: false,
  });

  const toggle = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="w-full md:w-1/6 text-white bg-white min-h-screen flex flex-col">
      {/* User info */}
      <div className="mb-6">
        <img src={AziPayColoredLogo} alt="Eazypay" />
      </div>

      {/* Dashboard */}
      <div className="mb-4">
        <div
          className="text-[#11453B]  bg-[#F0F7EB80] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("dashboard")}
        >
          <div className="flex justify-center gap-4 py-4">
            <img src={DashboardColored} alt="dashboard" />
            <span>Dashboard</span>
          </div>
          {/* {openSections.dachboard ? <FiChevronUp /> : <FiChevronDown />} */}
        </div>
        {/* {openSections.dashboard && (
          <div className="ml-4 mt-2">
            <NavLink to="/dashboard" className="block py-2 text-[#515251]">
              Open Dashboard
            </NavLink>
          </div>
        )} */}
      </div>

      {/* Wallet Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer text-[#515251]"
          onClick={() => toggle("wallet")}
        >
          <div className="flex justify-center gap-2">
            <img src={Wallet} alt="wallet" />
            <span>Wallet</span>
          </div>
          {openSections.wallet ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.wallet && (
          <div className="ml-4 mt-2">
            <NavLink to="/wallet" className="block py-2 text-[#515251]">
              Wallet Balance
            </NavLink>
          </div>
        )}
      </div>

      {/* Employee Management */}
      <div className="mb-4">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("employeeManagement")}
        >
          <div className="flex justify-center gap-2">
            <img src={User} alt="Users" />
            <span className="text-sm flex-shrink-0">Employee Management</span>
          </div>
          {openSections.employeeManagement ? (
            <FiChevronUp />
          ) : (
            <FiChevronDown />
          )}
        </div>
        {openSections.employeeManagement && (
          <div className="ml-4 mt-2 text-[#515251]">
            <NavLink to="/add-employee" className="block py-2">
              Add Employee
            </NavLink>
            <NavLink to="/employee-list" className="block py-2">
              Employee List
            </NavLink>
          </div>
        )}
      </div>

      {/* Payroll */}
      <div className="mb-4">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("payroll")}
        >
          <div className="flex justify-center gap-2">
            <img src={Payroll} alt="Payroll" />
            <span>Payroll</span>
          </div>
          {openSections.payroll ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.payroll && (
          <div className="ml-4 mt-2 text-[#515251]">
            <NavLink to="/payroll" className="block py-2">
              Payroll Details
            </NavLink>
          </div>
        )}
      </div>

      {/* Compliance */}
      <div className="mb-4">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("compliance")}
        >
          <div className="flex justify-center gap-2">
            <img src={Compliance} alt="Compliance" />
            <span>Compliance</span>
          </div>
          {openSections.compliance ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.compliance && (
          <div className="ml-4 mt-2 text-[#515251]">
            <NavLink to="/compliance" className="block py-2">
              Compliance
            </NavLink>
          </div>
        )}
      </div>

      {/* Quick Loan */}
      <div className="mb-4">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("quickLoan")}
        >
          <div className="flex justify-center gap-2">
            <img src={Quickloan} alt="QuickLoan" />
            <span>Quick Loan</span>
          </div>
          {openSections.quickLoan ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.quickLoan && (
          <div className="ml-4 mt-2 text-[#515251]">
            <NavLink to="/quick-loan" className="block py-2">
              Apply for Loan
            </NavLink>
          </div>
        )}
      </div>

      {/* Book Keeping */}
      <div className="mb-4">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("bookKeeping")}
        >
          <div className="flex justify-center gap-2">
            <img src={Openbook} alt="Openbook" />
            <span>Book Keeping</span>
          </div>
          {openSections.bookKeeping ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.bookKeeping && (
          <div className="ml-4 mt-2 text-[#515251]">
            <NavLink to="/book-keeping" className="block py-2">
              Manage Books
            </NavLink>
          </div>
        )}
      </div>

      {/* Support */}
      <div className="mb-4">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("settings")}
        >
          <div className="flex justify-center gap-2">
            <img src={Call} alt="Settings" />
            <span>Support</span>
          </div>
          {openSections.support ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.support && (
          <div className="ml-4 mt-2 text-[#515251]">
            <NavLink to="/account-center" className="block py-2">
              Account Center
            </NavLink>
            <NavLink to="/contact-us" className="block py-2">
              Contact Us
            </NavLink>
          </div>
        )}
      </div>

      {/* Settings */}
      <div className="mb-4">
        <div
          className="text-[#515251] flex justify-between items-center cursor-pointer"
          onClick={() => toggle("settings")}
        >
          <div className="flex justify-center gap-2">
            <img src={Settings} alt="Settings" />
            <span>Settings</span>
          </div>
          {openSections.settings ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.settings && (
          <div className="ml-4 mt-2 text-[#515251]">
            <NavLink to="/settings" className="block py-2">
              Account Settings
            </NavLink>
            <NavLink to="/support" className="block py-2">
              Support
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
