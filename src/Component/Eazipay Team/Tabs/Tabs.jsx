import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs-container flex justify-around w-full mx-auto my-8 p-2 border-[1.15px] border-[#E7E8E7] rounded-[16px] gap-2">
      <button
        className={`tab-btn flex-1 px-4 py-2 rounded-lg whitespace-nowrap text-center transition-all duration-300 ease-out ${
          activeTab === "employees"
            ? "bg-[#11453B] text-white shadow-lg"
            : "bg-[#F2F1F1] text-[#11453B] border-[#11453B] hover:scale-105"
        }`}
        onClick={() => setActiveTab("employees")}
      >
        All Employees
      </button>
      <button
        className={`tab-btn flex-1 px-4 py-2 rounded-lg whitespace-nowrap text-center transition-all duration-300 ease-out ${
          activeTab === "departments"
            ? "bg-[#11453B] text-white shadow-lg"
            : "bg-[#F2F1F1] text-[#11453B] border-[#11453B] hover:scale-105"
        }`}
        onClick={() => setActiveTab("departments")}
      >
        Departments
      </button>
    </div>
  );
};

export default Tabs;
