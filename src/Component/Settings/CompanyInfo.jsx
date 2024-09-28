import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogo } from "./Slice";


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
      <input type="file" id="logoUpload" placeholder="Change logo" onChange={handleLogoChange} />
      {logo && <img src={logo} alt="Company Logo" />}
    </div>
  );
};

export default LogoUpload;
