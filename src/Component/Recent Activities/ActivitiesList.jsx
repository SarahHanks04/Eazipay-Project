// import React from "react";
// import ActivitiesItem from "./ActivitiesItem";

// const ActivitiesList = ({activities}) => {
//   return (
//     <div className="bg-[#F2F1F1] px-[1rem]">
//       {activities.map((day, index) => (
//         <div key={index} className="mb-4">
//           <h2 className="text-lg font-medium text-[#515251] mb-4">{day.date}</h2>
//           {day.records.map((activity, index) => (
//             <ActivitiesItem key={index} activity={activity} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ActivitiesList;


// import React from "react";
// import ActivitiesItem from "./ActivitiesItem";

// const ActivitiesList = ({ activities }) => {
//   return (
//     <div className="bg-gray-100 px-4 py-6">
//       {activities.map((day, index) => (
//         <div key={index} className="mb-6">
//           <h2 className="text-xl font-bold text-gray-700 mb-4">{day.date}</h2>
//           {day.records.map((activity, index) => (
//             <ActivitiesItem key={index} activity={activity} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ActivitiesList;


import React from "react";
import ActivitiesItem from "./ActivitiesItem";

const ActivitiesList = ({ activities }) => {
  return (
    <div>
      {/* Map over the activities array and display items for specific dates */}
      {activities.map((activityGroup, index) => (
        <div key={index}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">{activityGroup.date}</h2>
          
          {/* Display all activities under each date */}
          {activityGroup.records.map((record, index) => (
            <ActivitiesItem key={index} activity={record} />
          ))}

          {/* Display any newly added activities for that date */}
          {activityGroup.newActivities && activityGroup.newActivities.map((newActivity, index) => (
            <ActivitiesItem key={index} activity={newActivity} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ActivitiesList;
