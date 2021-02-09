import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect, withRouter } from "react-router-dom";

function Firstcomponent(props) {
    return (
        <div>
            <h1>{props.match.params.id}</h1>
            <h1>Users</h1>
            <strong>select a user</strong>
            <ul>
                <li>
                    <Link to="/first/1">User 1 </Link>
                </li>
                <li>
                    <Link to="/first/2">User 2 </Link>
                </li>
                <li>
                    <Link to="/first/3">User 3 </Link>
                </li>
            </ul>
            <Route path="/first/:id" component={Firstcomponent} />
        </div>
    )
}

function Secondcomponent() {
    return <div>second component printing </div>
}

function Thirdcomponent() {
    return <div>third component printing </div>
}
function Basecomponent() {
    return <div>base component printing </div>
}
function Parametercomponent(props) {
    return <div>param comp and value is {props.match.params.id}</div>

}
function Notfound() {
    return <div>Not found bye</div>
}

class Thirteen extends React.Component {

    
    constructor(props) {
        super(props)
    }

    firstclick = (e) => {
        e.preventDefault()
        this.props.history.push('/second')
    }
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Switch>
                            <Route path="/" exact component={Basecomponent} />
                            <Route path="/first" component={Firstcomponent} />
                            <Route path="/second" component={Secondcomponent} />
                            <Route path="/third" component={Thirdcomponent} />
                            <Route path="/parametercomp/:id" exact component={Parametercomponent} />
                            <Route component={Notfound} />
                        </Switch>
                    </nav>
                    <div>
                        <button><Link to="/first">first</Link></button>
                        <button><Link to="/second">second</Link></button>
                        <button><Link to="/third">third</Link></button>
                        <button><Link to="/">Go Back base </Link></button>
                        <button><Link to="/parametercomp/1">parameter component</Link></button>
                    </div>
                    <div>
                        <button onClick={this.firstclick}> First code Route </button>
                    </div>
                </div>
            </Router>
        )
    }
}
export default withRouter(Thirteen);




// 1. direct routeing in <router> and <switch with exact keyword in in app.js
// 2. link the routing to the route from actual page components in main.js
// 3. redirect the values query string and get them in props /match:id 
// 4. nested routing  first load the first compnent then inside that load the subsquent clicks
// 5. two ways of redirecting using HOL withRouter or <redirect> 