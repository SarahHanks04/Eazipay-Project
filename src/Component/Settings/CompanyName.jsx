import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCACDocument, setCompanyName, setIsRegistered } from "./Slice";

const CompanyName = () => {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.form.companyName);
  const isRegistered = useSelector((state) => state.form.isRegistered);
  const cacDocument = useSelector((state) => state.form.cacDocument);

  const handleCACChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setCACDocument(file));
    }
  };

  
  return (
    <form>
      {/* COMPANY NAME */}
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        value={companyName}
        onChange={(e) => dispatch(setCompanyName(e.target.value))}
      />

      {/* COMPANY REGISTRATION */}
      <div>
        <label>Is your company registered?</label>
        <button
          onClick={() => dispatch(setIsRegistered(true))}
          className={isRegistered === true ? "active" : ""}
        >
          Yes
        </button>
        <button
          onClick={() => dispatch(setIsRegistered(false))}
          className={isRegistered === false ? "active" : ""}
        >
          No
        </button>
      </div>

      {/* CAC DOCUMENT */}
      <div>
        <label htmlFor="cacUpload">Upload CAC Doc</label>
        <input type="file" id="cacUpload" onChange={handleCACChange} />
        {cacDocument && <p>{cacDocument.name}</p>}
      </div>
    </form>
  );
};

export default CompanyName;
