import React from "react";
import { useSelector } from "react-redux";

const DepartmentList = () => {
  const departments = useSelector((state) => state.team.departments);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {departments.map((department) => (
        <div
          key={department.id}
          className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105"
        >
          <h4 className="text-lg text-[#11453B] font-semibold mb-2">{department.name}</h4>
          <p className="text-[#515251]">{department.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
