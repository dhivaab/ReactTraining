import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// constants
const OneAgainRepeat = <h1>Welcome One Repeat</h1>

// functions
function One() {
  return <h1>Welcome One</h1>
}

// class
class OneAgain extends React.Component {
  render() {
    return <div>Welcome ONe Again </div>
  }
}

// arrow func 
const ExportOne = () => {
  return (<div>
    <One></One>
    <OneAgain></OneAgain>
  </div>);

};



// Basics of JSX and Javascript rendering 

const myElement = React.createElement("h2",null, "hi good morning ");

const h1tag = React.createElement("h1",null,"something new");
const ptag = React.createElement("p",null, "test ");
const divtag = React.createElement("div",null,h1tag,ptag);


// reactDom.render(
//   <div>
//     {/* static text to render in root elemment  */}
//     balamurugan    
//     {/* const variable to render in root element  */}
//     {OneAgainRepeat}
//     {/* function variable to render in root element */}
//     {One()}
//      {/* function as component to render in root element  */}
//     <One></One>
//     {/* javascript of creating simple html elements  */}
//     {myElement}

//     {/* javascript way of creating multiple elemnets and tagging  */}
//     {divtag}
//   </div>,
//   document.getElementById("root")
// );
