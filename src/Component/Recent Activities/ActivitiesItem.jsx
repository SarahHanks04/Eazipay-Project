import React from "react";

const ActivitiesItem = ({ activity }) => {
  console.log(activity)
  return (
    <div className="flex justify-between items-center p-4 border-b mb-4 bg-white rounded-md shadow-sm">
      <div>
        <p className="text-sm text-gray-500">EMPLOYEE MANAGEMENT</p>
        {/* Display employeeName */}
        <span className="text-[#515251]">
          {activity.employee}
        </span>
      </div>

      <div>
        <p className="text-[#8D8E8D] text-[12px]">ACTIVITY</p>
        <span className="text-gray-800">{activity.activity}</span>
      </div>
      
        <div>
          <p className="text-sm text-gray-500">Employee</p>
          <span className="text-gray-800">{activity.id ? activity.id : "No Id"}</span>
        </div>
      
      <div>
        {activity.bonusName && (
          <div>
            <p className="text-sm text-gray-500">BONUS</p>
            <span className="text-gray-800">{activity.bonusName}</span>
          </div>
        )}
        {activity.amount && (
          <div>
            <p className="text-sm text-gray-500">AMOUNT</p>
            <span className="text-red-600 font-bold">{activity.amount}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-500">TIME</p>
        <span className="text-gray-800">{activity.time}</span>
      </div>
    </div>
  );
};

export default ActivitiesItem;
