import React from 'react';
import ReactDOM from 'react-dom';

class Ten extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
      console.log('am in constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('am in get derived state from props')
      return {favoritecolor: props.favcol };
    }
    shouldComponentUpdate() {
        console.log('should update?')
      return true;
    }
    changeColor = () => {
        console.log('event triggered')
      this.setState({favoritecolor: "blue"});
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('get snapshot before update')
      document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
        console.log('component updated ')
      document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        <div id="div1"></div>
        <div id="div2"></div>
        </div>
      );
    }
  }
  
export default Ten;

  // Component life cycle - updating 
//   A component is updated whenever there is a change in the component's state or props.

// 1. getDerivedStateFromProps() - first method to call when component updated. you can set the state here based on object initial props. 
// 2. shouldComponentUpdate() - In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
// default for above one is true. if it is false then stop the component rendering at any update
// 3. render() - dom to html
// 4. getSnapshotBeforeUpdate() -method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
// If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
// 5. componentDidUpdate() - writes a div message in div2. The componentDidUpdate method is called after the component is updated in the DOM.



// componentDidUpdate()