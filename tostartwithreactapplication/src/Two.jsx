import React from 'react';
import ReactDOM from 'react-dom';

//props

const Two = () => {
    return (<div>
        <Table name ="first" id ="1"/>
    </div>);

};


export const Table =(props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.id}</h2>
        </div>
    );
}

export default Two;