import {useContext} from "react"
import Pub from "./Pub.jsx";
import {ThemeContext} from "./ThemeContext.jsx"

export default  function Header(){

    const theme = useContext(ThemeContext)
    return (
        <header>
            <h1>Application Web II</h1>
            <h2 className={theme} >Formatif 3  REF - CSS - Local storage - Context</h2>
            <Pub>Section principale</Pub>
        </header>
    );
}
