import React from 'react';
import  SchedulePreview from './SchedulePreview';


const ContestList=({ contests,onContestClick }) => (
    <div className="ContestList">
    {
        contests.map(contest => 
        <SchedulePreview key={contest.id} {...contest} onClick={onContestClick} />
        )
    }
    </div>

);

ContestList.propTypes={
    contests:   React.PropTypes.array,
    onContestClick : React.PropTypes.func.isRequired
};

export default ContestList;