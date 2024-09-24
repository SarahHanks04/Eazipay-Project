import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // For Redux state
import SearchBar from "../SearchBar/SearchBar";
import ArchivedSelector from "../Archived/ArchivedSelector";
import EmployeeList from "../EmployeeList/EmployeeList";
import FloatingButton from "../FloatingButton/FloatingButton";
import Tabs from "../Tabs/Tabs";
import DepartmentList from "../DepartmentList/DepartmentList";
import { setDepartments, setEmployees } from "../Slice/Slice";
import CalebNwafor from "../../../assets/CalebNwafor.svg";
import ToyinFaleke from "../../../assets/ToyinFaleke.svg";
import Wasiu from "../../../assets/Wasiu.svg";
import KaluAbasiama from "../../../assets/KaluAbasiama.svg";

const TeamContainer = () => {
  const [activeTab, setActiveTab] = useState("employees"); // Tracks tab state

  const employees = useSelector((state) => state.employees); // Redux selector
  const departments = useSelector((state) => state.departments);

  const dispatch = useDispatch();

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
          name: "Toyin Faleke",
          department: "Accounting",
          sex: "Female",
          type: "Monthly",
          salary: "₦250,600.78",
          image: ToyinFaleke,
        },
        {
          id: 3,
          name: "Wasiu",
          department: "Accounting",
          sex: "Female",
          type: "Monthly",
          salary: "₦250,600.78",
          image: Wasiu,
        },
        {
          id: 4,
          name: "Kalu Abasiama",
          department: "Accounting",
          sex: "Female",
          type: "Monthly",
          salary: "₦250,600.78",
          image: KaluAbasiama,
        },
        {
          id: 5,
          name: "Toyin Faleke",
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
          name: "Wasiu",
          department: "Accounting",
          sex: "Female",
          type: "Monthly",
          salary: "₦250,600.78",
          image: Wasiu,
        },
        {
          id: 8,
          name: "Kalu Abasiama",
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
          name: "Toyin Faleke",
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
    <div className="team-container w-full px-4 sm:px-8 lg:px-10">
      <h1 className="text-center text-[#292A29] text-[20px] sm:text-[24px] font-semibold p-4 sm:p-6">
        Eazipay’s Team
      </h1>
      <div className="w-full h-[1px] bg-gray-100 mb-10 sm:mb-12"></div>
      <div className="team-total bg-[#11453B] text-white p-6 sm:p-8 lg:p-10 rounded-[24px] w-full mb-8 mx-auto sm:mx-0">
        <div>
          <p className="font-medium">Total Employee</p>
          <h1 className="font-bold text-2xl pt-6 sm:text-3xl lg:text-4xl">11264</h1>
        </div>
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
