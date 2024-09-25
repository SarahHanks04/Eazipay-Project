import React from "react";
import { useSelector } from "react-redux";

const ArchivedEmployee = () => {
  const archivedEmployees = useSelector(
    (state) => state.team.archivedEmployees
  );

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
