import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import data from './testdata';

//console.log(data);

// const color = Math.random() > 0.5 ? 'green' : 'red';

// ReactDOM.render(
//    // React.createElement('h2', null, 'Hello React'),
//    <h2 style ={{color}} className = "text-center"> 
//    Here is JSX == { Math.random ()}
//    </h2>,   
//     document.getElementById('root')
// );

// const App = (props) =>
// {
//     return 
//     (
//         <h2 className="text-center">
//          {  props.headerMessage }
//         </h2>
//     );
//  };

// App.propTypes={
//     headerMessage:React.PropTypes.String.isRequired
// };

// // App.defaultProps={
// //     headerMessage:"Here we go with props"
// // };

//  ReactDOM.render(
//      <App headerMessage="Component Props" />,
//      document.getElementById('root')
//  );
//)
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// setTimeout(() =>
// {
//     ReactDOM.render(
//     <h2> replaced the current component</h2>,
//     document.getElementById('root')
// );
// },4000);