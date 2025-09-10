import Pubs from "./Pubs.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Affichage from "./Affichage.jsx";
import {useContext} from "react";
import {LogStateContext} from "./LogStateContext.jsx";

export default  function Content(){
    const {isLogged} = useContext(LogStateContext);
    const mystyle = {
        color : "blue",
        margin : "10px"
    }
    return (
        <div className="content">
            <Pubs/>
            {!isLogged && <Login />}
            {isLogged && <Logout />}
            <h3>Affichage d'un vidéo</h3>
            <Affichage
            style={mystyle}
            />

        </div>
    );
}
