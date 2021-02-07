import { useState } from "react";

function Four(){

	const [date, setDate] = useState(new Date())
	const [name, setName] = useState("reactJS");

	return <div> your name is {name} and your date is {date.toLocaleDateString()} </div>
}

export default  Four

