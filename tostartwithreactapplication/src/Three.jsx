
import React from 'react'

class Three extends React.Component {
	constructor(props){
		super(props);
		this.state = { date: new Date(), name: 'reactJS'};	
	}

	render() {
        return <div> your name is {this.state.name} and your date is {this.state.date.toLocaleDateString()} </div>
    }
}

export default Three;