import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import BottomNavbarComponent from "../../Individual/BottomNavbarComponent";

const TeamContainer = () => {
  const [activeTab, setActiveTab] = useState("employees");

  const employees = useSelector((state) => state.employees);
  const departments = useSelector((state) => state.departments);

  const dispatch = useDispatch();

  useEffect(() => {
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
          name: "kalu Abasiama",
          department: "Product Design",
          sex: "Female",
          type: "Monthly",
          salary: "₦550,600.78",
          image: KaluAbasiama,
        },
        {
          id: 3,
          name: "Wasiu Ayinde",
          department: "Product Manager",
          sex: "Female",
          type: "Monthly",
          salary: "₦700,600.78",
          image: Wasiu,
        },
        {
          id: 4,
          name: "Toyin Faleke",
          department: "Customer Service",
          sex: "Female",
          type: "Monthly",
          salary: "₦150,600.78",
          image: ToyinFaleke,
        },
        {
          id: 5,
          name: "Caleb Nwafor",
          department: "Data Analyst",
          sex: "Female",
          type: "Monthly",
          salary: "₦250,600.78",
          image: CalebNwafor,
        },
        {
          id: 6,
          name: "Caleb Nwafor",
          department: "Frontend Developer",
          sex: "Female",
          type: "Monthly",
          salary: "₦550,600.78",
          image: CalebNwafor,
        },
        {
          id: 7,
          name: "Wasiu Ayinde",
          department: "Backend Developer",
          sex: "Female",
          type: "Monthly",
          salary: "₦700,600.78",
          image: Wasiu,
        },
        {
          id: 8,
          name: "Kalu Abasiama",
          department: "DevOps Engineeer",
          sex: "Female",
          type: "Monthly",
          salary: "₦150,600.78",
          image: KaluAbasiama,
        },
        {
          id: 9,
          name: "Caleb Nwafor",
          department: "CyberSecurity",
          sex: "Female",
          type: "Monthly",
          salary: "₦250,600.78",
          image: CalebNwafor,
        },
        {
          id: 10,
          name: "Toyin Faleke",
          department: "SoftSkills",
          sex: "Female",
          type: "Monthly",
          salary: "₦550,600.78",
          image: ToyinFaleke,
        },
      ])
    );

    dispatch(
      setDepartments([
        {
          id: 1,
          name: "Accounting",
          description:
            "Handles financial records, ensuring accurate tracking of income and expenses. This department prepares financial statements and provides insights into financial health, supporting strategic decisions.",
        },
        {
          id: 2,
          name: "Product Design",
          description:
            "Creates design for products, focusing on user experience and functionality. The team conducts user research and iterates on design prototypes to ensure that products meet user needs and expectations.",
        },
        {
          id: 3,
          name: "Product Manager",
          description:
            "Oversees product development from conception to launch. They collaborate with cross-functional teams, prioritize features based on customer feedback, and ensure that the product aligns with business objectives.",
        },
        {
          id: 4,
          name: "DevOps Engineer",
          description:
            "Bridges the gap between development and operations, focusing on automating and streamlining the software delivery process. This role involves monitoring system performance and managing infrastructure to support continuous integration and deployment.",
        },
        {
          id: 5,
          name: "Customer Service",
          description:
            "Provides support to customers, addressing inquiries and resolving issues related to products and services. This department plays a vital role in ensuring customer satisfaction and fostering long-term relationships.",
        },
        {
          id: 6,
          name: "Data Analyst",
          description:
            "Analyzes data to provide insights that inform business strategies. They utilize statistical tools and techniques to identify trends, generate reports, and support decision-making across the organization.",
        },
        {
          id: 7,
          name: "Frontend Developer",
          description:
            "Responsible for implementing visual elements that users interact with in a web application. They work closely with designers and backend developers to ensure a seamless user experience across various devices.",
        },
        {
          id: 8,
          name: "Backend Developer",
          description:
            "Handles server-side application logic and integration, ensuring that the backend processes data efficiently. They create APIs and manage databases to support frontend functionality.",
        },
        {
          id: 9,
          name: "CyberSecurity",
          description:
            "Protects the organization’s data and systems from cyber threats. This department implements security protocols, conducts risk assessments, and responds to incidents to safeguard sensitive information.",
        },
        {
          id: 10,
          name: "Soft Skills",
          description:
            "Focuses on the interpersonal skills necessary for effective communication and collaboration within the workplace. This department provides training and resources to enhance team dynamics and foster a positive work environment.",
        },
      ])
    );
  }, [dispatch]);

  return (
    <div className="team-container w-full px-4 sm:px-8 lg:px-10 mb-28">
      <h1 className="text-center text-[#292A29] text-[20px] sm:text-[24px] font-semibold p-4 sm:p-6">
        Eazipay’s Team
      </h1>
      <div className="w-full h-[1px] bg-gray-100 mb-10 sm:mb-12"></div>
      <div className="team-total bg-[#11453B] text-white p-6 sm:p-8 lg:p-10 rounded-[24px] w-full mb-8 mx-auto sm:mx-0">
        <div>
          <p className="font-medium">Total Employee</p>
          <h1 className="font-bold text-2xl pt-6 sm:text-3xl lg:text-4xl">
            11264
          </h1>
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
      <BottomNavbarComponent />
    </div>
  );
};

export default TeamContainer;
