import Link from "./Link.jsx";
import {useContext} from "react";
import {LogStateContext} from "./LogStateContext.jsx"
import Pub from "./Pub.jsx";

export default function Aside() {
    const {isLogged} = useContext(LogStateContext)


    return (
        <aside className="left">
            <h3>Liens utiles</h3>
            <Link>lien a</Link>
            <Link>lien b</Link>
            <Link>lien c</Link>
            {isLogged && (
                <>
                    <Link>lien privée</Link>
                    <Pub>pub privée</Pub>
                </>
            )}
        </aside>
    );
}
