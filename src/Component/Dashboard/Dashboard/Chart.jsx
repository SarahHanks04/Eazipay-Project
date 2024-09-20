import React, { useState } from "react";
import LineChart from "../../../assets/LineChart.svg";
import DownArrow from "../../../assets/DownArrow.svg";
import UpArrow from "../../../assets/UpArrow.png";

const Chart = () => {
  const [chartVisible, setChartVisible] = useState(false);
  const toggle = () => {
    setChartVisible((prev) => !prev);
  };
  const currentYear = new Date().getFullYear();
  return (
    <section>
      <main className="mt-6">
        <div className="bg-white p-6 rounded-xl mt-4">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-[3rem]">
            <div>
              <p className="text-[#515251]">Inflow</p>
              <h3 className="text-[#219653] font-bold">₦1,567,552</h3>
            </div>
            <div className="mr-8">
              <p className="text-[#515251]">Outflow</p>
              <h3 className="text-[#EF4444] font-bold">₦1,567,552</h3>
            </div>
            <div
              className="flex gap-2 align-middle cursor-pointer"
              onClick={toggle}
            >
              <p className="text-[#11453B]">Inflow/Outflow</p>
              <span>
                <img
                  src={chartVisible ? UpArrow : DownArrow}
                  alt={chartVisible ? "Arrow Up" : "Arrow Down"}
                />
              </span>
            </div>
          </div>

          {chartVisible && (
            <div className="relative mt-4 overflow-hidden">
              <img
                src={LineChart}
                alt="Inflow/Outflow chart"
                className="w-full h-auto"
              />
              <div className="absolute top-[130%] right-[24%] lg:top-[85%] lg:right-[4%]">
                <p className="bg-[#11453B] text-white px-4 py-1 text-xs lg:text-sm">
                  {currentYear}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </section>
  );
};

export default Chart;
