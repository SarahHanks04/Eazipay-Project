import React, { useState } from "react";
import { useSelector } from "react-redux"; // For Redux state
import SearchBar from "../SearchBar/SearchBar";
import ArchivedSelector from "../Archived/ArchivedSelector";
import EmployeeList from "../EmployeeList/EmployeeList";
import FloatingButton from "../FloatingButton/FloatingButton";
import Tabs from "../Tabs/Tabs";

const TeamContainer = () => {
  const [activeTab, setActiveTab] = useState("employees"); // Tracks tab state

  const employees = useSelector((state) => state.employees); // Redux selector
  const departments = useSelector((state) => state.departments);

  return (
    <div className="team-container w-full">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar />
      <ArchivedSelector />
      {activeTab === "employees" ? (
        <EmployeeList employees={employees} />
      ) : (
        <DepartmentList departments={departments} />
      )}
      <FloatingButton />
    </div>
  );
};

export default TeamContainer;
