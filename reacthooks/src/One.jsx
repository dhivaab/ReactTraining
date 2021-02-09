import React, { useState } from 'react';

const One = () => {

    // instead of 
    // const age= 10;
    // const setAge =() => {
    // a = 20
    //const[age, setAge] = useState(10);
    // useState is a hook here 
    
    const [count, setCount] = useState(100);
    const [name, setName] = useState("Balamurugan")
    return (
        <div>
            <p> your name is { name }</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Increment </button>
            <button onClick={() => setCount(count - 1)}> Decrement </button>

        </div>
    );
}
export default One;