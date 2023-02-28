import { createContext } from "react";


const UserContext = createContext({userName : "", auth: false});

export default UserContext;