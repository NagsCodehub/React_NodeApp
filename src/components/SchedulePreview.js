import React,{ Component} from 'react';



class SchedulePreview extends Component
{
    handleClick = () =>
    {
      console.log(this.props.contestName);
    };
    render()
    {
        return(
            <div className=" link schedulePreview" onClick={this.handleClick}>
            <div className="category-name">
            { this.props.categoryName }
            </div>
            <div className="schedule-name">
            { this.props.contestName }
            </div>
            </div>

        );
    }
}

// const SchedulePreview = (contest) =>(
// <div className="schedulePreview">
// <div className="category-name">
// { contest.categoryName }
// </div>
// <div className="schedule-name">
// { contest.contestName }
// </div>
// </div>
// );
SchedulePreview.propTypes ={
    categoryName:React.PropTypes.string.isRequired,
    contestName:React.PropTypes.string.isRequired
};
export default SchedulePreview

