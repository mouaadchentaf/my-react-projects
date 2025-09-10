import Pub from "./Pub.jsx";
import {useContext} from "react"
import {LogStateContext} from "./LogStateContext.jsx"
export default function Pubs() {

    const {isLogged} = useContext(LogStateContext);
    return (
        <>
            { !isLogged && (
            <div className={"pub"}>
                <Pub prix={5}>pub 1</Pub>
                <Pub prix={3}>pub 2</Pub>
            </div>
            )}
        </>
    );


}