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
    <main className="relative mb-4">
      {/* company Size */}
      <label
        htmlFor="companySize"
        className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#8D8E8D]"
      >
        Company Size
      </label>
      <select
        id="companySize"
        className="block w-full px-4 py-2 border border-[#B5B6B5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B]"
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
      {/* Pension Code */}
      <div className="relative mb-4">
        <label
          htmlFor="pensionCode"
          className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#8D8E8D]"
        >
          Pension Code
        </label>
        <input
          type="text"
          id="pensionCode"
          className="block w-full px-4 py-2 border border-[#B5B6B5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={pensionCode}
          onChange={(e) => dispatch(setPensionCode(e.target.value))}
        />
      </div>

      {/* PAYE State */}
      <label
        htmlFor="payeState"
        className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#8D8E8D]"
      >
        PAYE State
      </label>
      <select
        id="payeState"
        className="block w-full px-4 py-2 border border-[#B5B6B5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B]"
        value={payeState}
        onChange={(e) => dispatch(setPayeState(e.target.value))}
      >
        <option value="">Lagos</option>
        <option value="abuja">Abuja</option>
        <option value="portHarcort">Port Harcort</option>
        <option value="enugu">Enugu</option>
        <option value="kano">Kano</option>
        <option value="ogunState">Ogun State</option>
        <option value="kogiState">Kogi State</option>
        <option value="edoState">Edo State</option>
        <option value="calabar">Calabar</option>
      </select>

      {/* PAYE ID */}
      <div className="relative mb-4">
        <label
          htmlFor="payeId"
          className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#8D8E8D]"
        >
          PAYE ID
        </label>
        <input
          type="text"
          id="payeId"
          className="block w-full px-4 py-2 border border-[#B5B6B5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={payeId}
          onChange={(e) => dispatch(setPayeId(e.target.value))}
        />
      </div>

      {/* NHF CODE */}
      <div className="relative mb-4">
        <label
          htmlFor="nhfCode"
          className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#8D8E8D]"
        >
          NHF Code
        </label>
        <input
          type="text"
          id="nhfCode"
          className="block w-full px-4 py-2 border border-[#B5B6B5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={nhfCode}
          onChange={(e) => dispatch(setNhfCode(e.target.value))}
        />
      </div>

      {/* WEBSITE */}
      <div className="relative mb-4">
        <label
          htmlFor="website"
          className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#8D8E8D]"
        >
          Website
        </label>
        <input
          type="text"
          id="website"
          className="block w-full px-4 py-2 border border-[#B5B6B5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={website}
          onChange={(e) => dispatch(setWebsite(e.target.value))}
        />
      </div>

      {/* INDUSTRY */}
      <div className="relative mb-4">
        <label
          htmlFor="industry"
          className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#8D8E8D]"
        >
          Industry
        </label>
        <input
          type="text"
          id="industry"
          className="block w-full px-4 py-2 border border-[#B5B6B5] rounded-md focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={industry}
          onChange={(e) => dispatch(setIndustry(e.target.value))}
        />
      </div>
    </main>
  );
};

export default CompanySize;
