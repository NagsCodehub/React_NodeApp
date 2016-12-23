import React from 'react';

const SchedulePreview = (contest) =>(
<div className="schedulePreview">
<div className="category-name">
{ contest.categoryName }
</div>
<div className="schedule-name">
{ contest.contestName }
</div>
</div>
);

export default SchedulePreview

