import './App.css'
import Header from "./components/Header.jsx";
import Aside from "./components/Aside.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import {ThemeContext} from "./components/ThemeContext.jsx";
import {LogStateContext} from "./components/LogStateContext.jsx";
import {useState} from "react";

function App() {

    const [isLogged, setIsLogged] = useState(false);
    
    return (

        <>
            <ThemeContext.Provider value={"theme-yellow"}>
                <LogStateContext.Provider value={{isLogged, setIsLogged}}>
                    <div className="container">
                        <Header/>
                        <Aside/>
                        <Content/>
                        <Footer/>
                    </div>
                </LogStateContext.Provider>
            </ThemeContext.Provider>
        </>
    )

}

export default App
