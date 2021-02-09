import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Two = () => {


    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [sex, setSex] = useState(true);
    const [books, setBooks] = useState(['english', 'tamil'])
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    const setBookValues =() => {
        // tihs will clear the old values and add the new values on button click
        setBooks(['test', 'first']);

        // this will add to existing one using spread operator
        setBooks([...books, "second", 'third'])

        // set boolean
        setSex(false);

        // set array of objects
        setTodos([...todos, {text: "hello world"}])
    }
    return (
        <div>
            <p>{age}</p>
            <ol>{books.map(e => <li key = {e}>{e}</li>)}</ol>
            <p>{fruit}</p>
            <p>{String(sex)}</p>
            <ol>{todos.map(e=> <li key = {e}>{e.text}</li>)}</ol>
            <button onClick = {setBookValues}>Change me</button>

        </div>
    );
}

export default Two