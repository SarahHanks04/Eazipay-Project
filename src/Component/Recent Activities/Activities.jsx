import React, { useEffect, useState } from 'react'
import activitiesData from "../Recent Activities/ActivitiesDataArray";
import ActivitiesList from "./ActivitiesList";
import AddActivityForm from "./AddActivitiesForm";

const Activities = () => {
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
    <div className="overflow-y-auto h-[17rem] pt-8 bg-[#F2F1F1] rounded-[16px]">
      {/* <AddActivityForm onAddActivity={handleAddActivity} /> */}
      <ActivitiesList activities={filteredActivities} />
    </div>
  )
}

export default Activities
