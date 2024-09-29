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
          {/* <FiChevronDown /> */}
          {showDetails ? <FiChevronDown /> : <FiChevronUp />}
        </span>
      </div>

      {/* Profile Details */}
      {showDetails && (
        <div className="profile-details border mt-4">
          <div className="main-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-[2rem] rounded-[16px] shadow-md text-[#515251] text-[18px] font-medium">
            {/* Card Items */}
            <NavLink
              to="/company"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>Company</span>
            </NavLink>

            <NavLink
              to="/ceo-founder"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>CEO/Founder</span>
            </NavLink>

            <NavLink
              to="/company-director"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>Company Director</span>
            </NavLink>

            <NavLink
              to="/account-info"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>Account Information</span>
            </NavLink>

            <NavLink
              to="/branch-department"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center ${
                  isActive ? "bg-[#F0F7EB]" : ""
                }`
              }
            >
              <span>Branch/Department</span>
            </NavLink>

            <NavLink
              to="/kyc-info"
              className={({ isActive }) =>
                `py-[16px] px-[8px] border-2 rounded-[10px] text-center ${
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
// import React, { useState } from "react";
// import { FiChevronDown } from "react-icons/fi";

// const BusinessProfile = () => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };
//   return (
//     <div className="business-profile max-w-6xl mx-auto mt-6">
//       <div
//         className="profile-header bg-white p-4 flex justify-between items-center text-[#515251] text-[18px] font-medium rounded-md shadow-md cursor-pointer"
//         onClick={toggleDetails}
//       >
//         <h2>BUSINESS PROFILE</h2>
//         <span className="dropdown-icon text-xl">
//           <FiChevronDown />
//         </span>
//       </div>
//       {showDetails && (
//         <div className="profile-details border">
//           <div className="main-grid grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-white mt-4 p-[2rem] rounded-[16px] shadow-md text-[#515251] text-[18px] font-medium">
//             <div className="py-[16px] px-[8px] border-b-2 border-r-2 border-l border-t rounded-[10px] border-[#E7E8E7] text-center">
//               <span>Company</span>
//             </div>
//             <div className="py-[16px] px-[8px] border-b-2 border-r-2 border-l border-t rounded-[10px] border-[#E7E8E7] text-center">
//               <span>CEO/Founder</span>
//             </div>
//             <div className="py-[16px] px-[8px] border-b-2 border-r-2 border-l border-t rounded-[10px] border-[#E7E8E7] text-center">
//               <span>Company Director</span>
//             </div>
//             <div className="py-[16px] px-[8px] border-b-2 border-r-2 border-l border-t rounded-[10px] border-[#E7E8E7] text-center">
//               <span>Account Information</span>
//             </div>
//             <div className="py-[16px] px-[8px] border-b-2 border-r-2 border-l border-t rounded-[10px] border-[#E7E8E7] text-center">
//               <span>Branch/Department</span>
//             </div>
//             <div className="py-[16px] px-[8px] border-b-2 border-r-2 border-l border-t rounded-[10px] border-[#E7E8E7] text-center">
//               <span>KYC Information</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusinessProfile;
