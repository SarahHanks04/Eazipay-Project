import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAll } from "../Slice/Slice";

const ArchivedSelector = () => {
  const dispatch = useDispatch();
  const isAllSelected = useSelector((state) => state.team.isAllSelected);

  const handleSelectAll = () => {
    dispatch(selectAll());
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isAllSelected}
        onChange={handleSelectAll}
      />
      Select All
    </div>
  );
};

export default ArchivedSelector;
