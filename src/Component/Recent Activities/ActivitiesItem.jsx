import React from "react";

const ActivitiesItem = ({ activity }) => {
  return (
    <div className="flex gap-[4rem] items-center py-4 border-b mb-4 px-4 bg-white rounded-[16px]">
      <div>
        <p className="text-[#8D8E8D] text-[12px]">EMPLOYEE MANAGEMENT</p>
        <span className="text-[16px] text-[#515251] font-medium">{activity.employee}</span>
      </div>
      <div>
        <p className="text-[#8D8E8D] text-[12px]">ACTIVITY</p>
        <span className="text-[#515251]">{activity.activity}</span>
      </div>
      <div>
        {activity.bonusName && (
          <div>
            <p className="text-[#8D8E8D] text-[12px]">BONUS</p>{" "}
            <span className="text-[#515251]">{activity.bonusName}</span>{" "}
          </div>
        )}
        {activity.amount && (
          <div className="flex gap-[4rem] items-center">
            {" "}
            <div>
            <p className="text-[#8D8E8D] text-[12px]">AMOUNT</p>{" "}
            <span className="text-[#EA4E4B]">{activity.amount}</span>
            </div>
            <div>
              <p className="text-[#8D8E8D] text-[12px]">TIME</p>
              <span className="text-[#515251]">{activity.time}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitiesItem;
