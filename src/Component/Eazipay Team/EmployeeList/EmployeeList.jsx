import React from 'react';
import { useSelector } from 'react-redux';

const EmployeeList = () => {
  const employees = useSelector((state) => state.team.employees);

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <img src={employee.image} alt={employee.name} />
          <div>
            <h4>{employee.name}</h4>
            <p>{employee.department}</p>
            <p>{employee.sex} | {employee.type}</p>
          </div>
          <div className="salary">{employee.salary}</div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
// import React from "react";
// import EmployeeCard from "../EmployeeCard/EmployeeCard";


// const EmployeeList = ({ employees }) => {
//   return (
//     <div className="employee-list w-full">
//       {employees.map((employee) => (
//         <EmployeeCard key={employee.id} employee={employee} />
//       ))}
//     </div>
//   );
// };

// export default EmployeeList;
