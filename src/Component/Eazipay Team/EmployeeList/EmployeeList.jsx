import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckIcon from "../../../assets/CheckIcon.svg";

const EmployeeList = () => {
  const employees = useSelector((state) => state.team.employees);

  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const handleSelectEmployee = (id) => {
    setSelectedEmployees((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((employeeId) => employeeId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="employee-list">
      {employees.map((employee) => {
        const isSelected = selectedEmployees.includes(employee.id);

        return (
          <div
            key={employee.id}
            onClick={() => handleSelectEmployee(employee.id)}
            className={`employee-card mb-6 p-4 border-b border-[#E7E8E7] cursor-pointer relative transition-all duration-300 ${
              isSelected ? "bg-[#F0F7EB] rounded-[16px]" : ""
            }`}
          >
            <div className="flex items-center gap-6 pb-4">
              <img
                src={employee.image}
                alt={employee.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="employee-info flex flex-col">
                <h4 className="text-[#292A29] text-[20px] font-medium">
                  {employee.name}
                </h4>
                <p className="text-[14px] text-[#515251]">
                  {employee.department}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center text-[#515251] text-[12px] pl-[5rem] pr-4">
              <p className="flex-1">
                {employee.sex} | {employee.type}
              </p>
              <div className="salary text-[#11453B] font-bold text-[16px]">
                {employee.salary}
              </div>
            </div>

            {/* Tick icon */}
            {isSelected && (
              <div className="absolute inset-0 left-[1.4%] top-[11.4%] justify-center ">
                <div className="bg-[#11453B] bg-opacity-50 rounded-full w-16 h-16 flex justify-center items-center">
                  <img src={CheckIcon} alt="Selected" className="w-5 h-5" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
// import React from "react";
// import { useSelector } from "react-redux";

// const EmployeeList = () => {
//   const employees = useSelector((state) => state.team.employees);

//   return (
//     <div className="employee-list">
//       {employees.map((employee) => (
//         <div
//           key={employee.id}
//           className="employee-card mb-6 p-4 border-b border-[#E7E8E7]"
//         >
//           <div className="flex items-center gap-6 pb-4">
//             <img
//               src={employee.image}
//               alt={employee.name}
//               className="w-16 h-16 rounded-full object-cover"
//             />
//             <div className="employee-info flex flex-col">
//               <h4 className="text-[#292A29] text-[20px] font-medium">
//                 {employee.name}
//               </h4>
//               <p className="text-[14px] text-[#515251]">
//                 {employee.department}
//               </p>
//             </div>
//           </div>
//           <div className="flex justify-between items-center text-[#515251] text-[12px] pl-[5rem] pr-4">
//             <p className="flex-1">
//               {employee.sex} | {employee.type}
//             </p>
//             <div className="salary text-[#11453B] font-bold text-[16px]">
//               {employee.salary}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EmployeeList;
