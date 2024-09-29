import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOfficeAddress } from "./Slice";

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
    <main className="px-4 sm:px-8">
      {/* COMPANY ADDRESS */}
      <div className="relative my-4 sm:my-8">
        <label
          htmlFor="address"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          Office Address
        </label>
        <input
          type="text"
          id="officeAddress"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={officeAddress}
          onChange={(e) => dispatch(setOfficeAddress(e.target.value))}
        />
      </div>

      {/* Proof Of Address */}
      <div className="relative flex items-center flex-wrap sm:flex-nowrap gap-3 my-[2rem] sm:my-[3rem]">
        <div>
          <input
            type="file"
            id="uploadAddress"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleOfficeChange}
          />
          <label
            htmlFor="uploadAddress"
            className="bg-[#F0F7EB] border-[1.5px] border-[#11453B] px-4 py-2 rounded-[8px] cursor-pointer shadow-sm text-[#11453B] hover:bg-[#4E4E4E] hover:text-white transition"
          >
            Upload Proof of Address
          </label>
        </div>
        <span className="text-[12px] sm:text-[13px] text-[#4E4E4E]">
          e.g Nepa Bill, etc
        </span>
        {officeAddress && <p>{officeAddress.name}</p>}
      </div>
    </main>
  );
};

export default CompanyAddress;
