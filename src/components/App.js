import React from 'react';
import Header  from './Header';

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
render()
{
    return (
        <div classname="App">
        <Header message={this.state.pageHeader} />
        <div>
        {this.state.test}
        </div>
        </div>
    );
}
}
export default App;