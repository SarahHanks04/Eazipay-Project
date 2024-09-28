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
    <main>
      {/* COMPANY NAME */}
      <div className="relative mb-4">
      <label htmlFor="companyName" className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#8D8E8D]">Company Name</label>
      <input
        type="text"
        id="companyName"
        className="block w-full px-4 py-2 border border-[#B5B6B5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B]"
        value={companyName}
        onChange={(e) => dispatch(setCompanyName(e.target.value))}
      />
      </div>

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
    </main>
  );
};

export default CompanyName;
