

import React from 'react';

function Five() {

    function sayHello() {
        alert('Hello!');
    }

    return (
        <div>
            <button onClick={sayHello}>
                Click me!
    </button>
            <button onClick={() => alert('hello')}>Hit me!</button>
        </div>
    );
}

export default Five;