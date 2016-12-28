import React from 'react';
import  SchedulePreview from './SchedulePreview';


const ContestList=({ contests,onContestClick }) => (
    <div className="ContestList">
    {
        Object.keys(contests).map(contestId => 
        <SchedulePreview key={contestId} {...contests[contestId]} onClick={onContestClick} />
        )
    }
    </div>

);

ContestList.propTypes={
    contests:   React.PropTypes.object,
    onContestClick : React.PropTypes.func.isRequired
};

export default ContestList;