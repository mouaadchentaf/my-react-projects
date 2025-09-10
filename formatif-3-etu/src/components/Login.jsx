import {useContext} from "react";
import {LogStateContext} from "./LogStateContext.jsx";

export default function Login() {
    const {setIsLogged} = useContext(LogStateContext);
    
    return (
        <button onClick={() => setIsLogged(true)}>Login</button>
    );
}