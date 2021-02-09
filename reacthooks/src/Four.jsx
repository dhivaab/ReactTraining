import React from 'react';
import { HeadMaster } from './useContext/HeadMaster';

export const StudentContext  = React.createContext("");

const Four = () => {

    return (
        <StudentContext.Provider value = {"testing"}>
        <HeadMaster/>
        </StudentContext.Provider>
    );
}
export default Four
