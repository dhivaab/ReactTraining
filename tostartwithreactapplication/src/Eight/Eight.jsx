import React from 'react'
import './Eight.css'

function Eight() {
    const initState = [
        { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
        { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
        { id: 3, name: "water", quantitiy: 10, location: "fridge" }
    ];
    const [stockitems, setState] = React.useState(initState);

    return (
        <table>
            <tr key={"header"}>
                {Object.keys(stockitems[0]).map((key) => (
                    <th>{key}</th>
                ))}
            </tr>
            {stockitems.map((item) => (
                <tr key={item.id}>
                    {Object.values(item).map((val) => (
                        <td>{val}</td>
                    ))}
                </tr>
            ))}
            </table>
    );
}

export default Eight;