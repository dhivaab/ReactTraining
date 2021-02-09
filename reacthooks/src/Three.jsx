import React, { useEffect, useState } from 'react';

const Three = () => {

        const [values, setValues] = useState([]);
        const [name, setName] = useState('');
        
        // use effect for get all kind of method to call one time in flow. 
        useEffect(() => {
            console.log('calling usefecct')
            fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then(response => response.json())
            .then(json=> setValues([json]))
        },[name]);
    // nothing - this will call n number of times in loop and this is wrong. 
    // [] - will call only one time rather than calling n number times.  you can use this at getAll() to call one time. 
    // [name] - when there is a change in name state then this will call this. 
    return (
        <div>
           <h1> {values.map(e=> <p>{e.title}</p>)}</h1>
            <button onClick = {()=> setName('test')}>Click </button> 
        </div>
    );
}
export default Three