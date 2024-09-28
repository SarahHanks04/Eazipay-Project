import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompanySize } from "./Slice";


const CompanySize = () => {
  const dispatch = useDispatch();
  const companySize = useSelector((state) => state.form.companySize);

  return (
    <div className="relative mb-4">
        <label htmlFor="companySize" className="absolute -top-2 left-3 bg-white px-1 text-sm text-green-600">Company Size</label>
        <select
          id="companySize"
          className="block w-full px-4 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={companySize}
          onChange={(e) => dispatch(setCompanySize(e.target.value))}
        >
          <option value="">Select size</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-100">51-100</option>
          <option value="100 and above">100 and above</option>
        </select>
      </div>
  );
};

export default CompanySize;
