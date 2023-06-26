import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useTheme = () => {
    useContext(ThemeContext)
}

export const useThemeUpdate = () => {
    useContext(ThemeUpdateContext)
}

const AuthProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    // const themeStyle = {
    //     backgroundColor: darkTheme ? '#242424' : '#ffffff',
    //     color: darkTheme ? '#242424' : '#ffffff'
    // }
    
    console.log("latest console",children);

    return (
        <ThemeContext.Provider value={darkTheme} >
            <ThemeUpdateContext.Provider value={toggleTheme} >
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )

}

export default AuthProvider;