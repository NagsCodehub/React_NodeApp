import React from 'react';

const SchedulePreview = (contest) =>(
<div className="schedulePreview">
<div>
{ contest.categoryName }
</div>
<div>
{ contest.contestName }
</div>
</div>
);

export default SchedulePreview

