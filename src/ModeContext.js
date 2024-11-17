import React, {  createContext, useContext } from "react";

const ModeContext = createContext()
export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = React.useState(() => {
        const savedMode = localStorage.getItem('mode');
        return savedMode ? JSON.parse(savedMode) : true; // Default to false (light mode)
   
    })

    React.useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode));
    }, [mode]);

    const toggleMode = () => {
        setMode((prevMode) => !prevMode);
    };

    return (
        <ModeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    )
}