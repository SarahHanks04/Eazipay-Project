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

const MainSidebar = () => {
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
    <section className="w-full md:w-1/6 text-white bg-white min-h-screen flex flex-col">
      <div className="mb-2">
        <img src={AziPayColoredLogo} alt="Eazypay" />
      </div>

      <DashboardMenu toggle={toggle} />

      <WalletSection
        openSections={openSections}
        setOpenSections={setOpenSections}
        toggle={toggle}
      />

      <EmployeeMgt
        openSections={openSections}
        setOpenSections={setOpenSections}
        toggle={toggle}
      />

      <PayrollSection
        openSections={openSections}
        setOpenSections={setOpenSections}
        toggle={toggle}
      />

      <ComplianceSection
        openSections={openSections}
        setOpenSections={setOpenSections}
        toggle={toggle}
      />

      <Loan
        openSections={openSections}
        setOpenSections={setOpenSections}
        toggle={toggle}
      />

      <BookKeeping
        openSections={openSections}
        setOpenSections={setOpenSections}
        toggle={toggle}
      />

      <Support
        openSections={openSections}
        setOpenSections={setOpenSections}
        toggle={toggle}
      />

      <Setting
        openSections={openSections}
        setOpenSections={setOpenSections}
        toggle={toggle}
      />
    </section>
  );
};

export default MainSidebar;
