import {useContext} from "react";
import {LogStateContext} from "./LogStateContext.jsx";

export default function Logout() {
    const {setIsLogged} = useContext(LogStateContext);
    
    return (
        <button onClick={() => setIsLogged(false)}>Logout</button>
    );
}