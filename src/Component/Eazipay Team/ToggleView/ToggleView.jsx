import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleView } from './teamSlice';

const ViewToggle = () => {
  const dispatch = useDispatch();
  const isDepartmentView = useSelector((state) => state.team.isDepartmentView);

  const handleToggle = () => {
    dispatch(toggleView());
  };

  return (
    <div className="toggle-buttons">
      <button 
        onClick={handleToggle} 
        className={!isDepartmentView ? "active" : ""}
      >
        All Employees
      </button>
      <button 
        onClick={handleToggle} 
        className={isDepartmentView ? "active" : ""}
      >
        Departments
      </button>
    </div>
  );
};

export default ViewToggle;
