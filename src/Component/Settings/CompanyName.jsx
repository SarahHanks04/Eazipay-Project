import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyName } from "../Eazipay Team/Slice/Slice";

const CompanyName = () => {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.form.companyName);

  return (
    <div>
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        value={companyName}
        onChange={(e) => dispatch(setCompanyName(e.target.value))}
      />
    </div>
  );
};

export default CompanyName;
