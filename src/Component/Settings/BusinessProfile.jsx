import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const BusinessProfile = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="business-profile max-w-6xl mx-auto mt-6">
      {/* Profile Header */}
      <div
        className="profile-header bg-white p-4 flex justify-between items-center text-[#515251] text-[18px] font-medium rounded-md shadow-md cursor-pointer"
        onClick={toggleDetails}
      >
        <h2>BUSINESS PROFILE</h2>
        <span className="dropdown-icon text-xl">
          {showDetails ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </div>

      {/* Profile Details */}
      {showDetails && (
        <div className="profile-details border mt-4">
          <div className="main-profile grid grid-cols-2 gap-4 bg-white p-[2rem] rounded-[16px] shadow-md text-[#515251] text-[18px] font-medium">
            {/* Card Items */}
            <NavLink
              to="/company"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center overflow-hidden whitespace-nowrap ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>Company</span>
            </NavLink>

            <NavLink
              to="/ceo-founder"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center overflow-hidden whitespace-nowrap ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>CEO/Founder</span>
            </NavLink>

            <NavLink
              to="/company-director"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center overflow-hidden whitespace-nowrap ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>Company Director</span>
            </NavLink>

            <NavLink
              to="/account-info"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center overflow-hidden whitespace-nowrap ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>Account Information</span>
            </NavLink>

            <NavLink
              to="/branch-department"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center overflow-hidden whitespace-nowrap ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>Branch/Department</span>
            </NavLink>

            <NavLink
              to="/kyc-info"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center overflow-hidden whitespace-nowrap ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>KYC Information</span>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessProfile;
