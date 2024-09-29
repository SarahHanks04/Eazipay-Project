import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AbstractCompany from "../../assets/AbstractCompany.svg";
import { setLogo } from "./Slice";

const CompanyInfo = () => {
  const dispatch = useDispatch();
  const logo = useSelector((state) => state.form.logo);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setLogo(URL.createObjectURL(file)));
    }
  };

  return (
    <main>
      <div className="flex gap-10 mb-6">
        <img src={AbstractCompany} alt="Abstract Company" />
        <input
          type="file"
          id="logoUpload"
          placeholder="Change logo"
          onChange={handleLogoChange}
        />
        {logo && <img src={logo} alt="Company Logo" />}
      </div>
    </main>
  );
};

export default CompanyInfo;
