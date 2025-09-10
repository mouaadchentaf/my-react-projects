// eslint-disable-next-line react/prop-types

import {useContext} from "react"
import {ThemeContext} from "./ThemeContext.jsx"
export default function Pub({children}) {

const theme = useContext(ThemeContext)

    return (
        <div className={theme}>
            {children}
        </div>
    );
}