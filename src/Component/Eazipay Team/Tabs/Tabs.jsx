import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs-container flex justify-center gap-4">
      <button
        className={`tab-btn ${activeTab === "employees" ? "active" : ""}`}
        onClick={() => setActiveTab("employees")}
      >
        All Employees
      </button>
      <button
        className={`tab-btn ${activeTab === "departments" ? "active" : ""}`}
        onClick={() => setActiveTab("departments")}
      >
        Departments
      </button>
    </div>
  );
};

export default Tabs;
