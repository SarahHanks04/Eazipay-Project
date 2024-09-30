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
          <div className="flex justify-center items-center">
            <div className="bg-white p-6 shadow-lg rounded-[16px] w-full max-w-6xl">
              <div className="">
                <table className="w-full table-fixed border rounded-tl-[16px] border-spacing-2">
                  <tbody className="rounded-[16px]">
                    <tr className="border-t-2 border-[#E7E8E7] rounded-bl-[16px]">
                      <td className="border-r-2 p-4 text-center text-[#515251] text-[16px] font-normal hover:bg-[#F0F7EB]">
                        <NavLink to="/company">Company</NavLink>
                      </td>
                      <td className="p-4 text-center text-[#515251] text-[16px] font-normal hover:bg-[#F0F7EB]">
                        <NavLink to="/ceo-founder">CEO/Founder</NavLink>
                      </td>
                    </tr>
                    <tr className="border-t-2 border-[#E7E8E7] rounded-bl-[16px]">
                      <td className="border-r-2 p-4 text-center text-[#515251] text-[16px] font-normal hover:bg-[#F0F7EB]">
                        <NavLink to="/company-director">
                          Company Director
                        </NavLink>
                      </td>
                      <td className="p-4 text-[#515251] text-[16px] text-center font-normal hover:bg-[#F0F7EB]">
                        <NavLink to="/account-info">
                          Account Information
                        </NavLink>
                      </td>
                    </tr>
                    <tr className="border-t-2 border-[#E7E8E7] rounded-bl-[16px]">
                      <td className="p-4 border-r-2 text-center text-[#515251] text-[16px] font-normal whitespace-normal break-words hover:bg-[#F0F7EB]">
                        <NavLink to="/branch-department">
                          Branch/Department
                        </NavLink>
                      </td>
                      <td className="p-4 text-center text-[#515251] text-[16px] font-normal hover:bg-[#F0F7EB]">
                        <NavLink to="/kyc-info">KYC Information</NavLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessProfile;
