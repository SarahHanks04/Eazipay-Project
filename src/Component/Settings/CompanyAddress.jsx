import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsRegistered, setOfficeAddress } from "./Slice";

const CompanyAddress = () => {
  const dispatch = useDispatch();

  const officeAddress = useSelector((state) => state.form.officeAddress);

  const handleOfficeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setOfficeAddress(file));
    }
  };

  return (
    <main>
      {/* COMPANY ADDRESS */}
      <div className="relative mb-4">
        <label
          htmlFor="industry"
          className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#8D8E8D]"
        >
          Office Address
        </label>
        <input
          type="text"
          id="officeAddress"
          className="block w-full px-4 py-2 border border-[#B5B6B5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={officeAddress}
          onChange={(e) => dispatch(setOfficeAddress(e.target.value))}
        />
      </div>
      {/* Proof Of Adress */}
      <div>
        <label htmlFor="cacUpload">
          Upload Proof of Adress <span>e.g Nepa Bill, etc.</span>
        </label>
        <input type="file" id="cacUpload" onChange={handleOfficeChange} />
        {officeAddress && <p>{officeAddress.name}</p>}
      </div>
    </main>
  );
};

export default CompanyAddress;
