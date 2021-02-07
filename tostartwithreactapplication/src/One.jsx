import React from 'react';

// different ways of creating components and exporting them 

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

export default ExportOne;
