import { createContext, useState } from "react";

let StudentContext= createContext();

export const StudentProvider=({children}) =>{
    const [student,setStudent]=useState({name : ""})
    return <StudentContext.Provider value={{student,setStudent}}>{children}</StudentContext.Provider>
};

export default StudentContext;