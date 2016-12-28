import React from 'react';
import Header  from './Header';
//import SchedulePreview from './SchedulePreview';
import ContestList from './ContestList';
import axios from 'axios';

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

       //set the selected schedule name
       this.setState({
           pageHeader:this.state.schedules[contestId].contestName,
           currentContestId: contestId
       });
   };
    render() {
     
    return (
        <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
       <ContestList contests={this.state.schedules} onContestClick={this.fetchContest} />
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