import React from 'react'

const ActivitiesItem = ({activity}) => {
    return (
        <div className="flex justify-between items-center py-4 border-b">
          <div>
            <span className="font-bold">{activity.employee}</span>
            <p>{activity.activity}</p>
          </div>
          <div>
            <span>{activity.time}</span>
            {activity.bonusName && <span>Bonus: {activity.bonusName}</span>}
            {activity.amount && <span>Amount: {activity.amount}</span>}
          </div>
        </div>
      );
}

export default ActivitiesItem
