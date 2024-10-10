import React, { useState, useEffect } from "react";
import activitiesData from "../Recent Activities/ActivitiesDataArray";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ActivitiesList from "./ActivitiesList";
import AddActivityForm from "./AddActivitiesForm";


const RecentActivities = () => {
  const [filteredActivities, setFilteredActivities] = useState(() => {
    // Retrieve Already Saved Activities From LS
    const savedActivities = localStorage.getItem("activities");
    return savedActivities ? JSON.parse(savedActivities) : activitiesData;
  });

  // Save Activities To LS 
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(filteredActivities));
  }, [filteredActivities]);

  // Search Functionality
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

  // Add New Activity Functionality
  const handleAddActivity = (date, newActivity) => {
    const existingDateIndex = filteredActivities.findIndex(
      (day) => day.date === date
    );

    if (existingDateIndex !== -1) {
      const updatedActivities = [...filteredActivities];
      updatedActivities[existingDateIndex].records.push(newActivity);
      setFilteredActivities(updatedActivities);
    } else {
      const newDay = {
        date,
        records: [newActivity],
      };
      setFilteredActivities([...filteredActivities, newDay]);
    }
  };

  return (
    <div className="p-4">
    <h1 className="text-[#292A29] text-[28px] font-[400] pt-10">Recent Activities</h1>
      <div className="flex justify-between items-center mb-4">
        <SearchBar onSearch={handleSearch} />
        <FilterBar onFilter={handleFilter} />
      </div>
      <AddActivityForm onAddActivity={handleAddActivity} />
      <ActivitiesList activities={filteredActivities} />
    </div>
  );
};

export default RecentActivities;
