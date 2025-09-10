import {useContext} from 'react'
import {ThemeContext} from "./ThemeContext.jsx"
// eslint-disable-next-line react/prop-types
export default function Link({children}){

    const theme = useContext(ThemeContext);
    return (
        <a className={theme}>
            {children}
        </a>
    );
}