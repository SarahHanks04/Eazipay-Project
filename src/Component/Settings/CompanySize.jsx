import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCompanySize,
  setIndustry,
  setNhfCode,
  setPayeId,
  setPayeState,
  setPensionCode,
  setWebsite,
} from "./Slice";

const CompanySize = () => {
  const dispatch = useDispatch();
  const companySize = useSelector((state) => state.form.companySize);
  const pensionCode = useSelector((state) => state.form.pensionCode);
  const payeState = useSelector((state) => state.form.payeState);
  const payeId = useSelector((state) => state.form.payeId);
  const nhfCode = useSelector((state) => state.form.nhfCode);
  const website = useSelector((state) => state.form.website);
  const industry = useSelector((state) => state.form.industry);

  return (
    <main className="px-4 sm:px-8">
      {/* COMPANY SIZE */}
      <div className="relative mt-10 sm:my-8">
        <label
          htmlFor="companySize"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          Company Size
        </label>
        <select
          id="companySize"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={companySize}
          onChange={(e) => dispatch(setCompanySize(e.target.value))}
        >
          <option value="100 and above">100 and above</option>
          <option value="81-99">81-99</option>
          <option value="61-80">61-80</option>
          <option value="41-60">41-60</option>
          <option value="21-40">21-40</option>
          <option value="1-20">1-20</option>
        </select>
      </div>

      {/* PENSION CODE */}
      <div className="relative my-10 sm:my-8">
        <label
          htmlFor="pensionCode"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          Pension Code
        </label>
        <input
          type="text"
          id="pensionCode"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={pensionCode}
          onChange={(e) => dispatch(setPensionCode(e.target.value))}
        />
      </div>

      {/* PAYE STATE */}
      <div className="relative my-10 sm:my-8">
        <label
          htmlFor="payeState"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          PAYE State
        </label>
        <select
          id="payeState"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={payeState}
          onChange={(e) => dispatch(setPayeState(e.target.value))}
        >
          <option value=""></option>
          <option value="lagos">Lagos</option>
          <option value="abuja">Abuja</option>
          <option value="portHarcort">Port Harcort</option>
          <option value="enugu">Enugu</option>
          <option value="kano">Kano</option>
          <option value="ogunState">Ogun State</option>
          <option value="kogiState">Kogi State</option>
          <option value="edoState">Edo State</option>
          <option value="calabar">Calabar</option>
        </select>
      </div>

      {/* PAYE ID */}
      <div className="relative my-10 sm:my-8">
        <label
          htmlFor="payeId"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          PAYE ID
        </label>
        <input
          type="text"
          id="payeId"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={payeId}
          onChange={(e) => dispatch(setPayeId(e.target.value))}
        />
      </div>

      {/* NHF CODE */}
      <div className="relative my-10 sm:my-8">
        <label
          htmlFor="nhfCode"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          NHF Code
        </label>
        <input
          type="text"
          id="nhfCode"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={nhfCode}
          onChange={(e) => dispatch(setNhfCode(e.target.value))}
        />
      </div>

      {/* WEBSITE */}
      <div className="relative my-10 sm:my-8">
        <label
          htmlFor="website"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          Website
        </label>
        <input
          type="text"
          id="website"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={website}
          onChange={(e) => dispatch(setWebsite(e.target.value))}
        />
      </div>

      {/* INDUSTRY */}
      <div className="relative my-10 sm:my-8">
        <label
          htmlFor="industry"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          Industry
        </label>
        <input
          type="text"
          id="industry"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B] mb-6"
          value={industry}
          onChange={(e) => dispatch(setIndustry(e.target.value))}
        />
      </div>
    </main>
  );
};

export default CompanySize;
