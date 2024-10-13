import React from "react";
import ActivitiesItem from "./ActivitiesItem";

const ActivitiesList = ({ activities }) => {
  return (
    <div className="p-8 bg-gray-50 rounded-[16px]">
      {/* Map over the activities array and display items for specific dates */}
      {activities.map((activityGroup, index) => (
        <div key={index}>
          <h2 className="text-lg font-semibold text-[#515251] p-4 mt-4">
            {activityGroup.date}
          </h2>

          {/* Display all activities under each date */}
          {activityGroup.records.map((record, index) => (
            <ActivitiesItem key={index} activity={record} />
          ))}

          {/* Display any newly added activities for that date */}
          {activityGroup.newActivities &&
            activityGroup.newActivities.map((newActivity, index) => (
              <ActivitiesItem key={index} activity={newActivity} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default ActivitiesList;
