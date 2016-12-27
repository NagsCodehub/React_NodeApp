import React from 'react';
import Header  from './Header';
import SchedulePreview from './SchedulePreview';
import axios from 'axios';

import data from '../testdata';

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
        // axios.get('/api/contests')
        // .then(resp=>{
        //    //console.log(resp.data.contests)
        //      this.setState({
        //      schedules: resp.data.contests
        // });
        // })
        // .catch(console.error);

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

    render() {
     
    return (
        <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
        {this.state.schedules.map(schedule =>
        <SchedulePreview key={schedule.id} {...schedule} />
        )}
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