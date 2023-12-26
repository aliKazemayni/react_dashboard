import {createContext} from "react";

export const MainContext = createContext(
    {
        theme : localStorage.getItem('theme'),
        handleTheme : () => {} ,
        drawer : false,
        handleDrawer : () => {} ,
        direction : false,
        handleDirection : () => {} ,
    }
);