import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogo } from "../Eazipay Team/Slice/Slice";
import AbstractCompany from "../../assets/AbstractCompany.svg";


const LogoUpload = () => {
  const dispatch = useDispatch();
  const logo = useSelector((state) => state.form.logo);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setLogo(URL.createObjectURL(file)));
    }
  };

  return (
    <div>
      <label htmlFor="logoUpload">Change Logo</label>
      <input type="file" id="logoUpload" onChange={handleLogoChange} />
      {logo && <img src={AbstractCompany} alt="Company Logo" />}
    </div>
  );
};

export default LogoUpload;
