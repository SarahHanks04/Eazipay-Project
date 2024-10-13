import React, { useState } from "react";
import activitiesData from "../Recent Activities/ActivitiesDataArray";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import Activities from "./Activities";

const RecentActivities = () => {
  const [filteredActivities, setFilteredActivities] = useState(activitiesData);

  const handleSearch = (query) => {
    filterActivities(query, "");
  };

  const handleFilter = (filterType) => {
    filterActivities("", filterType);
  };

  const openModal = () => {
    // Open modal function to be passed to FilterBar
  };

  return (
    <div className="p-4">
      <div>
        <h1 className="text-[#292A29] text-[28px] font-[400] py-5">
          Recent Activities
        </h1>
        <div className="flex items-center mb-4">
          <SearchBar onSearch={handleSearch} />
          <FilterBar onOpenModal={openModal} />
        </div>
      </div>

      <Activities activities={filteredActivities} />
    </div>
  );
};

export default RecentActivities;

