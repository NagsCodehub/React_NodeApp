import React from 'react';
import Header  from './Header';
import SchedulePreview from './SchedulePreview';

class App extends React.Component
{
    // constructor(props)
    // {
    //  super(props);
    //  this.state={test: 42};     
    // }

    state = {
        pageHeader:'Code Camp'
    };
    componentDidMount()
    {
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
        <div classname="App">
        <Header message={this.state.pageHeader} />
        <div>
        <SchedulePreview  {...this.props.schedules[0]} />
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