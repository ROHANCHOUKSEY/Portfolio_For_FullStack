import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ContextProvider = (props) => {

    const [screenMode, setScreenMode] = useState(() => {
        const storeMode = localStorage.getItem("screenMode")
        return storeMode ? JSON.parse(storeMode) : "light"
    });

    const darkMode = () => {
        setScreenMode('dark');
    }

    const lightMode = () => {
        setScreenMode('light');
    }

    useEffect(() => {
        localStorage.setItem("screenMode", JSON.stringify(screenMode));
    }, [screenMode]);

    return (
        <ThemeContext.Provider value={{ screenMode, darkMode, lightMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ContextProvider;