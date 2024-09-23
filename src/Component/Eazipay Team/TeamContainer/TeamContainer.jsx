import React, { useState } from "react";
import { useSelector } from "react-redux"; // For Redux state
import SearchBar from "../SearchBar/SearchBar";
import ArchivedSelector from "../Archived/ArchivedSelector";
import EmployeeList from "../EmployeeList/EmployeeList";
import FloatingButton from "../FloatingButton/FloatingButton";
import Tabs from "../Tabs/Tabs";
import DepartmentList from "../DepartmentList/DepartmentList";
import { setDepartments, setEmployees } from "../Slice/Slice";
import CalebNwafor from "../../../assets/CalebNwafor.svg";

const TeamContainer = () => {
  const [activeTab, setActiveTab] = useState("employees"); // Tracks tab state

  const employees = useSelector((state) => state.employees); // Redux selector
  const departments = useSelector((state) => state.departments);

  useEffect(() => {
    // Simulate API call to fetch employees and departments
    dispatch(
      setEmployees([
        {
          id: 1,
          name: "Caleb Nwafor",
          department: "Accounting",
          sex: "Female",
          type: "Monthly",
          salary: "₦250,600.78",
          image: CalebNwafor,
        },
        {
            id: 2,
            name: "Caleb Nwafor",
            department: "Accounting",
            sex: "Female",
            type: "Monthly",
            salary: "₦250,600.78",
            image: ToyinFaleke,
          },
          {
            id: 3,
            name: "Caleb Nwafor",
            department: "Accounting",
            sex: "Female",
            type: "Monthly",
            salary: "₦250,600.78",
            image: Wasiu,
          },
          {
            id: 4,
            name: "Caleb Nwafor",
            department: "Accounting",
            sex: "Female",
            type: "Monthly",
            salary: "₦250,600.78",
            image: KaluAbasiama,
          },
          {
            id: 5,
            name: "Caleb Nwafor",
            department: "Accounting",
            sex: "Female",
            type: "Monthly",
            salary: "₦250,600.78",
            image: ToyinFaleke,
          },
          {
            id: 6,
            name: "Caleb Nwafor",
            department: "Accounting",
            sex: "Female",
            type: "Monthly",
            salary: "₦250,600.78",
            image: CalebNwafor,
          },
          {
            id: 7,
            name: "Caleb Nwafor",
            department: "Accounting",
            sex: "Female",
            type: "Monthly",
            salary: "₦250,600.78",
            image: Wasiu,
          },
          {
            id: 8,
            name: "Caleb Nwafor",
            department: "Accounting",
            sex: "Female",
            type: "Monthly",
            salary: "₦250,600.78",
            image: KaluAbasiama,
          },
          {
            id: 9,
            name: "Caleb Nwafor",
            department: "Accounting",
            sex: "Female",
            type: "Monthly",
            salary: "₦250,600.78",
            image: CalebNwafor,
          },
          {
            id: 10,
            name: "Caleb Nwafor",
            department: "Accounting",
            sex: "Female",
            type: "Monthly",
            salary: "₦250,600.78",
            image: ToyinFaleke,
          },
        
      ])
    );

    dispatch(
      setDepartments([
        { id: 1, name: "Accounting", description: "Handles financial records" },
        {
          id: 2,
          name: "Product Design",
          description: "Creates design for products",
        },
        {
            id: 3,
            name: "Product Manager",
            description: "Creates design for products",
          },
          {
            id: 4,
            name: "DevOps Engineeer",
            description: "Creates design for products",
          },
          {
            id: 5,
            name: "Customer Service",
            description: "Creates design for products",
          },
          {
            id: 6,
            name: "Data Analyst",
            description: "Creates design for products",
          },
          {
            id: 7,
            name: "Frontend Developer",
            description: "Creates design for products",
          },
          {
            id: 8,
            name: "Backend Developer",
            description: "Creates design for products",
          },
          {
            id: 9,
            name: "CyberSecurity",
            description: "Creates design for products",
          },
          {
            id: 10,
            name: "SoftSkills",
            description: "Creates design for products",
          },
      ])
    );
  }, [dispatch]);

  return (
    <div className="team-container w-full">
      <h1>Eazipay’s Team</h1>
      <div className="team-page">
        {/* <ViewToggle />

      {departmentView ? <DepartmentList /> : <EmployeeList />} */}
      </div>
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
