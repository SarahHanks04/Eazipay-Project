import React from 'react';
import { useSelector } from 'react-redux';

const DepartmentList = () => {
  const departments = useSelector((state) => state.team.departments);

  return (
    <div className="department-list">
      {departments.map((department) => (
        <div key={department.id} className="department-card">
          <h4>{department.name}</h4>
          <p>{department.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
