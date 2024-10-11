import React from "react";
import activitiesData from "../Recent Activities/ActivitiesDataArray";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import Activities from "./Activities";

const RecentActivities = () => {
  const handleSearch = (query) => {
    if (!query) {
      setFilteredActivities(activitiesData);
    } else {
      const result = filteredActivities
        .map((day) => ({
          ...day,
          records: day.records.filter((record) =>
            record.employee.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((day) => day.records.length > 0);
      setFilteredActivities(result);
    }
  };

  // Filter Functionality
  const handleFilter = (filterType) => {
    if (!filterType) {
      setFilteredActivities(activitiesData);
    } else {
      const result = filteredActivities
        .map((day) => ({
          ...day,
          records: day.records.filter((record) =>
            record.activity.toLowerCase().includes(filterType)
          ),
        }))
        .filter((day) => day.records.length > 0);
      setFilteredActivities(result);
    }
  };

  return (
    <div className="p-4">
      <div>
        <h1 className="text-[#292A29] text-[28px] font-[400] py-5">
          Recent Activities
        </h1>
        <div className="flex  items-center mb-4 w-full">
          <SearchBar onSearch={handleSearch} />
          <FilterBar onFilter={handleFilter} />
        </div>
        <Activities />
      </div>
    </div>
  );
};

export default RecentActivities;
