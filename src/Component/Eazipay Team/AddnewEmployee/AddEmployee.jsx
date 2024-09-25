import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../Slice/Slice";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    sex: "Male",
    type: "Monthly",
    salary: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(newEmployee));
    navigate("/employee");
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-center text-2xl font-bold text-[#11453B] mb-6">
        Add New Employee
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 text-[#292A29]">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-2">
            Employee Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleChange}
            placeholder="Enter employee name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B] focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="department" className="text-sm font-medium mb-2">
            Department
          </label>
          <input
            id="department"
            type="text"
            name="department"
            value={newEmployee.department}
            onChange={handleChange}
            placeholder="Enter department"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B] focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex flex-col w-full">
            <label htmlFor="sex" className="text-sm font-medium mb-2">
              Gender
            </label>
            <select
              id="sex"
              name="sex"
              value={newEmployee.sex}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B] focus:border-transparent"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="flex flex-col w-full mt-4 sm:mt-0">
            <label htmlFor="type" className="text-sm font-medium mb-2">
              Employment Type
            </label>
            <select
              id="type"
              name="type"
              value={newEmployee.type}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B] focus:border-transparent"
              required
            >
              <option value="Monthly">Monthly</option>
              <option value="Hourly">Hourly</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="salary" className="text-sm font-medium mb-2">
            Salary
          </label>
          <input
            id="salary"
            type="number"
            name="salary"
            value={newEmployee.salary}
            onChange={handleChange}
            placeholder="Enter salary"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B] focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-sm font-medium mb-2">
            Profile Image
          </label>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, image: e.target.files[0] })
            }
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B] focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#11453B] text-white py-3 rounded-md font-semibold hover:bg-[#0d3b32] transition-colors duration-300"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
