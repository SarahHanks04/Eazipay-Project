// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleView } from './teamSlice';

// const ViewToggle = () => {
//   const dispatch = useDispatch();
//   const isDepartmentView = useSelector((state) => state.team.isDepartmentView);

//   const handleToggle = () => {
//     dispatch(toggleView());
//   };

//   return (
//     <div className="toggle-buttons">
//       <button 
//         onClick={handleToggle} 
//         className={!isDepartmentView ? "active" : ""}
//       >
//         All Employees
//       </button>
//       <button 
//         onClick={handleToggle} 
//         className={isDepartmentView ? "active" : ""}
//       >
//         Departments
//       </button>
//     </div>
//   );
// };

// export default ViewToggle;
import React from "react";
import { useSelector } from "react-redux";

const ArchivedEmployee = () => {
  const archivedEmployees = useSelector((state) => state.team.archivedEmployees);

  return (
    <div className="archived-list">
      {archivedEmployees.length === 0 ? (
        <p>No archived employees</p>
      ) : (
        archivedEmployees.map((employee) => (
          <div key={employee.id} className="archived-employee-card">
            <h4>{employee.name}</h4>
            <p>{employee.department}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ArchivedEmployee;
