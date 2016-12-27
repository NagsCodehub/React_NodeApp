import React from 'react';
import  SchedulePreview from './SchedulePreview';


const ContestList=({ contests }) => (
    <div className="ContestList">
    {
        contests.map(contest => 
        <SchedulePreview key={contest.id} {...contest} />
        )
    }
    </div>

);

ContestList.propTypes={
    contests:   React.PropTypes.array
};

export default ContestList;