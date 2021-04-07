
import React, { useEffect, useState, setState } from 'react';

const Five = () => {

    const [count, setCount] = useState([1]);
    const [loaded, setLoaded] = useState(true);

    // this will run when the component mounts and anytime the stateful data changes
    useEffect(() => {
        alert('component mounting ');

        setTimeout(
            () => setCount(2), 
            3000
          );
    });

    // this will run, when the component is first initialized
    useEffect(() => {
        alert('component first initalized ');
    }, []);

    // this will run only when count state changes
    useEffect(() => {
        alert('change in state count ')
        fetch('nads').then(() => setLoaded(true));
    }, [count]);

    // this will run when the component is destroyed or before the component is removed from UI.
    useEffect(() => {
        return () => alert('Goodbye Component');
    });
   

    return (
        <div>
        <p>{count}</p>
        </div>
    )
};

export default Five;