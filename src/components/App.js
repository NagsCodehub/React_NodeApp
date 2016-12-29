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

   const onPopState =handler =>{
       window.onpopstate=handler;
   };
   
class App extends React.Component
{
    // constructor(props)
    // {
    //  super(props);
    //  this.state={test: 42};     
    // }
    static propTypes ={
        initialData:React.PropTypes.object.isRequired
    };
    state =this.props.initialData;
    componentDidMount()
    {

        onPopState((event) =>{
            this.setState({
            currentContestId: (event.state || {}).currentContestId
           });
          // console.log(event.state);
        });
        // axios.get('/api/contests')
        // .then(resp=>{
        //    //console.log(resp.data.contests)
        //      this.setState({
        //      contests: resp.data.contests
        // });
        // })=>{}
        // .catch(console.error);

        // this.setState({
        //     schedules: data.contests
        // });
        //ajax loads,timers,listeners to other events
      console.log('component mounted');
    }
    componentWillUnmount()
    {
        onPopState(null);
        //clean timers,listeners,updates
        console.log('had unmounted');
    }
   
   fetchContest=(contestId) =>{
      // debugger;
       pushState(
           { currentContestId: contestId },
           `/contest/${contestId}`
       );
       api.fetchContest(contestId).then(contest =>{
       //set the selected schedule name
       this.setState({
           currentContestId: contest.id,
           //doesn't work due to ... which will show description'
           contests:{
              ...this.state.contests,
               [contest.id]:contest
           }
       });

       });
      
   };
   
    fetchContestList=() =>{
      // debugger;
       pushState(
           { currentContestId: null },
           `/}`
       );
       api.fetchContestList().then(contests =>{
       //set the selected schedule name
       this.setState({
           currentContestId: null,         
           contests
       });

       });
      
   };

   currentContest()
   {
       return this.state.contests[this.state.currentContestId];
   }
   pageHeader()
   {
       if(this.state.currentContestId)
       {
           return this.currentContest().contestName;
       }

       return 'Being Reactive';
   }
     currentContent() {
        
       if(this.state.currentContestId){
           return <Contest contestListClick={this.fetchContestList} {...this.currentContest()}/> 
        }
       
       return  <ContestList contests={this.state.contests} onContestClick={this.fetchContest} />
       
     }

    render() {
     
    return (
        <div className="App">
        <Header message={this.pageHeader()} />
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