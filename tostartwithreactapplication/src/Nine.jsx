import React from 'react';


class Nine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favcol: "red"};
        console.log("am in constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("get derived state from props")
        return {favoritecolor: props.favcol };
      }
    render() {
        console.log("am in render");
        return       <h1>My Favorite Color is {this.state.favcol}</h1>

    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({favcol: "yellow"})
        }, 1000)
      }
}

export default Nine;

//component did mount
//ReactDOM.render(<One />, document.getElementById("root"));

//getDerivedStateFromProps 
//ReactDOM.render(<One favcol="Orange"/>, document.getElementById("root"));


//Mounting means putting elements into the DOM.
// Mounting has constructor(), getDerivedStatefromProps(), render() and componentDidMount()
    // constructor() - first one to call. component initialized, good place to call the state 
    // render() - send the actual output html to the DOM. 
    // componentDidMount() - called after the component is rendered. Run the statements that require that the component is already placed in Dom. 
            // in the example initially it will show red then yellow. 
    // getDerivedStateFromProps() -> called before the rendering the element in DOM. this is the natual place to set the state based on the props. 
    // It takes state as an argument, and returns an object with changes to the state.

