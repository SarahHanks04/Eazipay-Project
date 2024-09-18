import React, { useState } from "react";
import AziPayColoredLogo from "../../../assets/AziPayColoredLogo.svg";
import { NavLink } from "react-router-dom";
import DashboardColored from "../../../assets/DashboardColored.svg";
import Wallet from "../../../assets/Wallet.svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Sidebar = () => {
  // State to manage the collapse of each section
  const [openSections, setOpenSections] = useState({
    wallet: false,
    employeeManagement: false,
    payroll: false,
    compliance: false,
    quickLoan: false,
    bookKeeping: false,
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
          {openSections.wallet ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.wallet && (
          <div className="ml-4 mt-2">
            <NavLink to="/dashboard" className="block py-2">
              Wallet Balance
            </NavLink>
          </div>
        )}
      </div>

      {/* Wallet Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer text-black"
          onClick={() => toggle("wallet")}
        >
          <div className="flex justify-center gap-4">
            <img src={Wallet} alt="wallet" />
            <span>Wallet</span>
          </div>
          {openSections.wallet ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.wallet && (
          <div className="ml-4 mt-2">
            <NavLink to="/wallet" className="block py-2">
              Wallet Balance
            </NavLink>
          </div>
        )}
      </div>

      {/* Employee Management */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle("employeeManagement")}
        >
          <span>Employee Management</span>
          {openSections.employeeManagement ? (
            <FiChevronUp />
          ) : (
            <FiChevronDown />
          )}
        </div>
        {openSections.employeeManagement && (
          <div className="ml-4 mt-2">
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
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle("payroll")}
        >
          <span>Payroll</span>
          {openSections.payroll ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.payroll && (
          <div className="ml-4 mt-2">
            <NavLink to="/payroll" className="block py-2">
              Payroll Details
            </NavLink>
          </div>
        )}
      </div>

      {/* Compliance */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle("compliance")}
        >
          <span>Compliance</span>
          {openSections.compliance ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.compliance && (
          <div className="ml-4 mt-2">
            <NavLink to="/compliance" className="block py-2">
              Compliance
            </NavLink>
          </div>
        )}
      </div>

      {/* Quick Loan */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle("quickLoan")}
        >
          <span>Quick Loan</span>
          {openSections.quickLoan ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.quickLoan && (
          <div className="ml-4 mt-2">
            <NavLink to="/quick-loan" className="block py-2">
              Apply for Loan
            </NavLink>
          </div>
        )}
      </div>

      {/* Book Keeping */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle("bookKeeping")}
        >
          <span>Book Keeping</span>
          {openSections.bookKeeping ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.bookKeeping && (
          <div className="ml-4 mt-2">
            <NavLink to="/book-keeping" className="block py-2">
              Manage Books
            </NavLink>
          </div>
        )}
      </div>

      {/* Settings */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggle("settings")}
        >
          <span>Settings</span>
          {openSections.settings ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.settings && (
          <div className="ml-4 mt-2">
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
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// const Sidebar = () => {
//   // State to manage the collapse of each section
//   const [openSections, setOpenSections] = useState({
//     wallet: false,
//     employeeManagement: false,
//     payroll: false,
//     compliance: false,
//     quickLoan: false,
//     bookKeeping: false,
//     settings: false,
//   });

//   const toggleSection = (section) => {
//     setOpenSections((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

//   return (
//     <div className="w-full md:w-1/4 p-4 text-white bg-[#00473e] min-h-screen flex flex-col">
//       {/* User info */}
//       <div className="flex items-center mb-6">
//         <img
//           src="https://via.placeholder.com/50"
//           alt="User Avatar"
//           className="w-12 h-12 rounded-full mr-4"
//         />
//         <div>
//           <h3 className="text-lg font-bold">Username</h3>
//           <p className="text-sm">Dashboard</p>
//         </div>
//       </div>

//       {/* Wallet Section */}
//       <div className="mb-4">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={() => toggleSection("wallet")}
//         >
//           <span>Wallet</span>
//           {openSections.wallet ? <FiChevronUp /> : <FiChevronDown />}
//         </div>
//         {openSections.wallet && (
//           <div className="ml-4 mt-2">
//             <NavLink to="/wallet" className="block py-2">
//               Wallet Balance
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {/* Employee Management */}
//       <div className="mb-4">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={() => toggleSection("employeeManagement")}
//         >
//           <span>Employee Management</span>
//           {openSections.employeeManagement ? (
//             <FiChevronUp />
//           ) : (
//             <FiChevronDown />
//           )}
//         </div>
//         {openSections.employeeManagement && (
//           <div className="ml-4 mt-2">
//             <NavLink to="/add-employee" className="block py-2">
//               Add Employee
//             </NavLink>
//             <NavLink to="/employee-list" className="block py-2">
//               Employee List
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {/* Payroll */}
//       <div className="mb-4">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={() => toggleSection("payroll")}
//         >
//           <span>Payroll</span>
//           {openSections.payroll ? <FiChevronUp /> : <FiChevronDown />}
//         </div>
//         {openSections.payroll && (
//           <div className="ml-4 mt-2">
//             <NavLink to="/payroll" className="block py-2">
//               Payroll Details
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {/* Compliance */}
//       <div className="mb-4">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={() => toggleSection("compliance")}
//         >
//           <span>Compliance</span>
//           {openSections.compliance ? <FiChevronUp /> : <FiChevronDown />}
//         </div>
//         {openSections.compliance && (
//           <div className="ml-4 mt-2">
//             <NavLink to="/compliance" className="block py-2">
//               Compliance
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {/* Quick Loan */}
//       <div className="mb-4">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={() => toggleSection("quickLoan")}
//         >
//           <span>Quick Loan</span>
//           {openSections.quickLoan ? <FiChevronUp /> : <FiChevronDown />}
//         </div>
//         {openSections.quickLoan && (
//           <div className="ml-4 mt-2">
//             <NavLink to="/quick-loan" className="block py-2">
//               Apply for Loan
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {/* Book Keeping */}
//       <div className="mb-4">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={() => toggleSection("bookKeeping")}
//         >
//           <span>Book Keeping</span>
//           {openSections.bookKeeping ? <FiChevronUp /> : <FiChevronDown />}
//         </div>
//         {openSections.bookKeeping && (
//           <div className="ml-4 mt-2">
//             <NavLink to="/book-keeping" className="block py-2">
//               Manage Books
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {/* Settings */}
//       <div className="mb-4">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={() => toggleSection("settings")}
//         >
//           <span>Settings</span>
//           {openSections.settings ? <FiChevronUp /> : <FiChevronDown />}
//         </div>
//         {openSections.settings && (
//           <div className="ml-4 mt-2">
//             <NavLink to="/settings" className="block py-2">
//               Account Settings
//             </NavLink>
//             <NavLink to="/support" className="block py-2">
//               Support
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
