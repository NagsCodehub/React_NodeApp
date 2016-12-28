import React from 'react';
import Header  from './Header';
//import SchedulePreview from './SchedulePreview';
import ContestList from './ContestList';
import Contest from './Contest';
import axios from 'axios';
import  * as api from '../api';

import data from '../testdata';

const pushState=(obj,url) =>
   window.history.pushState(obj,'',url);
   
class App extends React.Component
{
    // constructor(props)
    // {
    //  super(props);
    //  this.state={test: 42};     
    // }

    state = {
        pageHeader:'Code Camp',
        schedules:this.props.initialContests
    };
    componentDidMount()
    {
        axios.get('/api/contests')
        .then(resp=>{
           //console.log(resp.data.contests)
             this.setState({
             schedules: resp.data.contests
        });
        })
        .catch(console.error);

        // this.setState({
        //     schedules: data.contests
        // });
        //ajax loads,timers,listeners to other events
      console.log('component mounted');
    }
    componentWillUnmount()
    {
        //clean timers,listeners,updates
        console.log('had unmounted');
    }
   
   fetchContest=(contestId) =>{
      // debugger;
       pushState(
           { currentContestId: contestId },
           '/contest/${contestId}'
       );
       api.fetchContest(contestId).then(contest =>{
       //set the selected schedule name
       this.setState({
           pageHeader:contest.contestName,
           currentContestId: contest.id,
        //    contests:{
        //        this.state.schedules,
        //        [contest.id]:contest
        //    }
       });

       });
      
   };
     currentContent() {
         debugger;
       if(this.state.currentContestId){
           return <Contest {...this.state.schedules[this.state.currentContestId]}/> 
        }
       
       return  <ContestList contests={this.state.schedules} onContestClick={this.fetchContest} />
       
     }

    render() {
     
    return (
        <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
       {this.currentContent()}
        </div>
        </div>
    );
    }
}
// render()
// {
//     return (
//         <div classname="App">
//         <Header message={this.state.pageHeader} />
//         <div>
//         {this.state.test}
//         </div>
//         </div>
//     );
// }

export default App;