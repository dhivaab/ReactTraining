import { useContext } from "react";
import React  from 'react';
import { StudentContext } from "../Four";

export const Student =() => {

    const students = useContext(StudentContext);
    return (
        <div>
            <h1>{students}</h1>
        </div>
    );
}