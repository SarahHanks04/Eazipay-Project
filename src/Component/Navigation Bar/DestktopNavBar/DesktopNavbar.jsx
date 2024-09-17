import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AziPayLogo from "../../../assets/AziPayLogo.svg";
import "../DestktopNavBar/DesktopNavBar.css"

const DesktopNavbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <main className="navbar flex justify-between w-full max-w-[1280px] py-[16px] px-[20px]">
      {/* Left section: Logo + Links */}
      <div className="logo-links hidden md:flex space-x-10 items-center text-[18px] w-[70%]">
        {/* Logo */}
        <img
          src={AziPayLogo}
          alt="AziPay Logo"
          width={122}
          height={32}
          className="mr-[3rem]"
        />
        {/* Links */}
        <NavLink
          to="/individual"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-bold whitespace-nowrap"
              : "text-black whitespace-nowrap"
          }
        >
          Individual
        </NavLink>
        <NavLink
          to="/business"
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

      {/* Right section: Login + Register Buttons */}
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

// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import AziPayLogo from "../../../assets/AziPayLogo.svg";

// const DesktopNavbar = ({ isOpen, setIsOpen }) => {
//   const navigate = useNavigate();

//   return (
//     <main className="bg-navy flex justify-between w-full md:w-[1280px] mx-auto py-[16px] px-4 md:px-0">
//       <div className="hidden md:flex space-x-10 items-center w-[634px]">
//         <img
//           src={AziPayLogo}
//           alt="AziPay Logo"
//           width={122}
//           // height={32}
//           className="mr-[3rem]"
//         />
//         <NavLink
//           to="/individual"
//           className={({ isActive }) =>
//             isActive ? "text-red-700 font-bold" : "text-black"
//           }
//         >
//           Individual
//         </NavLink>
//         <NavLink
//           to="/business"
//           className={({ isActive }) =>
//             isActive ? "text-red-700 font-bold" : "text-black"
//           }
//         >
//           Business
//         </NavLink>

//         <NavLink
//           to="/pricing"
//           className={({ isActive }) =>
//             isActive ? "text-red-700 font-bold" : "text-black"
//           }
//         >
//           Pricing
//         </NavLink>
//         <NavLink
//           to="/set-your-payroll"
//           className={({ isActive }) =>
//             isActive ? "text-red-700 font-bold" : "text-black"
//           }
//         >
//           Set your payroll
//         </NavLink>
//       </div>
//       <div className="hidden md:flex gap-[20px] w-[360px]">
//         <button
//           onClick={() => navigate("/login")}
//           className="bg-transparent text-[#11453B] font-[14px] border-[#11453B] px-[34px] py-[6px] rounded-[24px] border-[1px]"
//         >
//           Log in
//         </button>
//         <button
//           onClick={() => navigate("/register")}
//           className="bg-[#11453B] text-white font-[14px] px-[34px] py-[6px] rounded-[24px]"
//         >
//           Register
//         </button>
//       </div>
//     </main>
//   );
// };

// export default DesktopNavbar;




// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import AziPayLogo from "../../../assets/AziPayLogo.svg"

// const DesktopNavbar = ({ isOpen, setIsOpen }) => {
//   const navigate = useNavigate();

//   return (
//     <main className="bg-navy flex justify-between w-[1280px] mx-auto py-[16px]">
//       <div className="hidden md:flex space-x-10 items-center w-[634px]">
//         <img src={AziPayLogo} alt="Laundry logo" width={122} height={32} className="mr-[3rem]" />
//         <NavLink
//           to="/individual"
//           className={({ isActive }) =>
//             isActive ? "text-red-700 font-bold" : "text-black"
//           }
//         >
//           Individual
//         </NavLink>
//         <NavLink
//           to="/business"
//           className={({ isActive }) =>
//             isActive ? "text-red-700 font-bold" : "text-black"
//           }
//         >
//           Business
//         </NavLink>

//         <NavLink
//           to="/pricing"
//           className={({ isActive }) =>
//             isActive ? "text-red-700 font-bold" : "text-black"
//           }
//         >
//           Pricing
//         </NavLink>
//         <NavLink
//           to="/set-your-payroll"
//           className={({ isActive }) =>
//             isActive ? "text-red-700 font-bold" : "text-black"
//           }
//         >
//           Set your payroll
//         </NavLink>
//       </div>
//       <div className="flex gap-[20px] w-[360px] ">
//         <button
//           onClick={() => navigate("/login")}
//           className="hidden md:block bg-transparent text-[#11453B] font-[14px] border-[#11453B] px-[34px] py-[6px] rounded-[24px] border-[1px]"
//         >
//           Log in
//         </button>
//         <button
//           onClick={() => navigate("/register")}
//           className="hidden md:block bg-[#11453B] text-white font-[14px] border-[#11453B] px-[34px] py-[6px] rounded-[24px]"
//         >
//           Register
//         </button>
//       </div>
//       <div className="flex justify-between w-full md:w-auto">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="block md:hidden text-black focus:outline-none ml-2"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//       </div>
//     </main>
//   );
// };

// export default DesktopNavbar;
