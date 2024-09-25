import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAll } from "../Slice/Slice";
import Bars3 from "../../../assets/Bars3.svg";
import More from "../../../assets/More.svg";

const ArchivedSelector = () => {
  const dispatch = useDispatch();
  const isAllSelected = useSelector((state) => state.team.isAllSelected);

  const handleSelectAll = () => {
    dispatch(selectAll());
  };

  return (
    <main className="archived-selector-container cursor-pointer">
      <div className="w-full h-[1px] bg-gray-100 mb-6 sm:mb-8"></div>
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center">
            <img src={Bars3} alt="Hamburger" />{" "}
          </span>
          <span className="text-[#8D8E8D]">|</span>
          <span className="flex items-center">
            <img src={More} alt="More" />{" "}
          </span>
          <span className="text-[#8D8E8D]">|</span>
          <span className="flex items-center text-[#B5B6B5] text-sm">
            <p>Archived</p>
          </span>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
            className="mr-2 w-4 h-4"
          />
          <span className="text-[#8D8E8D]">Select All</span>
        </div>
      </div>
    </main>
  );
};

export default ArchivedSelector;
