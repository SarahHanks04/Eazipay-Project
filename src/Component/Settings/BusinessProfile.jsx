import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const BusinessProfile = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="business-profile">
      <div className="profile-header bg-white p-[1rem] flex justify-between items-center text-[#515251] text-[18px] font-medium rounded-full" onClick={toggleDetails}>
        <h2>BUSINESS PROFILE</h2>
        <span className="dropdown-icon"><FiChevronDown /></span>
      </div>
      {showDetails && (
        <div className="profile-details">
          <div className="profile-row">
            <span>Company</span>
            <span>CEO/Founder</span>
          </div>
          <div className="profile-row">
            <span>Company Director</span>
            <span>Account Information</span>
          </div>
          <div className="profile-row">
            <span>Branch/Department</span>
            <span>KYC Information</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessProfile;
