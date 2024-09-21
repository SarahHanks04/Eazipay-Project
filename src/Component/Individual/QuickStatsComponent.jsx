import React from "react";

const QuickStatsComponent = () => {
  return (
    <section className="mx-auto py-8 bg-[#F2F1F1]">
      <h1 className="text-[#515251] text-lg ml-[2rem] mb-6">QUICK STATS</h1>
      <div className="flex justify-between text-[#515251] mx-[2rem]">
        <div className="rounded-xl shadow-md p-6">
          <p>Total Payroll</p>
          <h3 className="text-lg font-semibold pt-5">₦2,293,044,345.05</h3>
        </div>
        <div className="rounded-xl shadow-md p-6">
          <p>Total Employees</p>
          <h3 className="text-lg font-semibold pt-5">10,000</h3>
        </div>
      </div>
    </section>
  );
};

export default QuickStatsComponent;
