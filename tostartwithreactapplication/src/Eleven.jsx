import React from 'react';
import ReactDOM from 'react-dom';


class Eleven extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
      console.log('am in constructor')
    }
    delHeader = () => {
        console.log('delet eheader ')
      this.setState({show: false});
    }
    render() {
        console.log('render')
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    componentWillUnmount() {
        console.log('comp unmount')
      alert("The component named Header is about to be unmounted.");
    }
    render() {
        console.log('child render ')
      return (
        <h1>Hello World!</h1>
      );
    }
  }

export default Eleven

  
  //The componentWillUnmount method is called when the component is about to be removed from the DOM.

