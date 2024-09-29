import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCACDocument, setCompanyName, setIsRegistered } from "./Slice";

const CompanyName = () => {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.form.companyName);
  const isRegistered = useSelector((state) => state.form.isRegistered);
  const cacDocument = useSelector((state) => state.form.cacDocument);

  const [fileName, setFileName] = useState("Upload CAC Doc.");

  const handleCACChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      dispatch(setCACDocument(file));
    }
  };

  return (
    <main className="px-8">
      {/* COMPANY NAME */}
      <div className="relative my-8">
        <label
          htmlFor="companyName"
          className="absolute -top-3 left-5 bg-white px-[16px] text-[16px] text-[#8D8E8D]"
        >
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          className="block w-full px-4 py-2 border-[1.3px] border-[#B5B6B5] rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={companyName}
          onChange={(e) => dispatch(setCompanyName(e.target.value))}
        />
      </div>

      {/* COMPANY REGISTRATION */}
      <div>
        <label className="text-[#515251] text-[16px] font-[400]">
          Is your company registered?
        </label>{" "}
        <br />
        <div className="mt-[1rem]">
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
      </div>

      {/* CAC DOCUMENT */}
      <div className="relative flex items-baseline gap-3 my-[3rem]">
        <div>
          <input
            type="file"
            id="cacDocument"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleCACChange}
          />
          <label
            htmlFor="cacDocument"
            className="bg-[#F0F7EB] border-[1.5px] border-[#11453B] px-4 py-2 rounded-[8px] cursor-pointer shadow-sm text-[#11453B] hover:bg-gray-100 transition"
          >
            {fileName}
          </label>
        </div>
        <span className="text-[13px] text-[#4E4E4E] items-baseline">Jpeg and Png Only (2mb max)</span>
        {cacDocument && <p>{cacDocument.name}</p>}
      </div>
    </main>
  );
};

export default CompanyName;
