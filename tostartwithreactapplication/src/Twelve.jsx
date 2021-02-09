import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Twelve extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      name: ''
    }

  
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }
  submit =() =>{
    const user = {
      id: 1,
      name: this.state.name,
      email: "this@gmail.com"
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, {user  })
    .then(res => {
      console.log(res.data.user)
      this.setState({
        persons: [...this.state.persons, res.data.user]
      })

    })  }
  render() {
    return <div>
      <ul>
      {this.state.persons.map(e=><li>{e.name}</li>)}
      </ul>
      <ul>
      {this.state.persons.map(e=><li>{e.email}</li>)}
      </ul>

      <label>Person Name: </label>
      <input type="text"  onChange={this.handleChange}></input>
      <button type ="submit" onClick = {this.submit}>Add </button>
    </div>;
  }
}

export default Twelve;


// Axios is promise based http client
// We can also intercept and cancel requests,
// one is get request example and other is post request example
