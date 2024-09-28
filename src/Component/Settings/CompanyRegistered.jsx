import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsRegistered } from './Slice';


const CompanyRegistered = () => {
  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.form.isRegistered);

  return (
    <div>
      <label>Is your company registered?</label>
      <button 
        onClick={() => dispatch(setIsRegistered(true))} 
        className={isRegistered === true ? 'active' : ''}
      >
        Yes
      </button>
      <button 
        onClick={() => dispatch(setIsRegistered(false))} 
        className={isRegistered === false ? 'active' : ''}
      >
        No
      </button>
    </div>
  );
};

export default CompanyRegistered;
