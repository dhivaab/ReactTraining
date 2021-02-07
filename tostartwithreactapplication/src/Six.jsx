import React, { useState } from 'react';


const Six =() => {
    let [counter, setCounter] = useState(0);

    function add() {
        setCounter(counter +1)
    }
    function sub() {
        setCounter(counter-1)
    }

    return <div><p> {counter} </p><button onClick = {add}>Add One </button> 
    <button onClick = {sub}> Subract One</button></div>;
    
}

export default Six;