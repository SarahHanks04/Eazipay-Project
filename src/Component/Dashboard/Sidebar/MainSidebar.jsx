import React, { useState } from "react";
import AziPayColoredLogo from "../../../assets/AziPayColoredLogo.svg";
import DashboardMenu from "./DashboardMenu";
import WalletSection from "./Wallet";
import EmployeeMgt from "./EmployeeMgt";
import PayrollSection from "./PayrollSection";
import ComplianceSection from "./ComplianceSection";
import BookKeeping from "./BookKeeping";
import Loan from "./Loan";
import Support from "./Support";
import Setting from "./Setting";
import "../DashboardLayout/Layout.css";

const MainSidebar = () => {
  const [isOpen, setIsOpen] = useState({
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
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="sidebar w-full md:w-[30%] text-white bg-white min-h-screen flex flex-col">
      {/* Sidebar logo */}
      <div className="">
        <img src={AziPayColoredLogo} alt="Eazypay" width={400} />
      </div>

      {/* Menu Sections */}
      <DashboardMenu toggle={toggle} />

      <WalletSection isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />

      <EmployeeMgt isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />

      <PayrollSection isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />

      <ComplianceSection
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggle={toggle}
      />

      <Loan isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />

      <BookKeeping isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />

      <Support isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />

      <Setting isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
    </section>
  );
};

export default MainSidebar;

// import React, { createContext, useState } from "react";
// import AziPayColoredLogo from "../../../assets/AziPayColoredLogo.svg";

// export const SidebarContext = createContext();

// const SidebarProvider = ({ children }) => {
//   const [isOpen, setIsOpen] = useState({
//     dashboard: false,
//     wallet: false,
//     employeeManagement: false,
//     payroll: false,
//     compliance: false,
//     quickLoan: false,
//     bookKeeping: false,
//     support: false,
//     settings: false,
//   });

//   const toggle = (section) => {
//     setIsOpen((prevState) => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

//   const values = {
//     isOpen,
//     toggle,
//   };

//   return (
//     <div className="sidebar w-full md:w-[30%] text-white bg-white min-h-screen flex flex-col">
//       <SidebarContext.Provider value={values}>
//         <div className="mb-4">
//           <img
//             src={AziPayColoredLogo}
//             alt="Eazypay"
//             className="w-full h-auto"
//           />
//         </div>
//         {children}
//       </SidebarContext.Provider>
//     </div>
//   );
// };

// export default SidebarProvider;
