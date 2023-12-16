import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {CacheProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import {prefixer} from "stylis";
import {blueGrey} from "@mui/material/colors";
import {useState} from "react";
import {MainContext} from "../context/MainContext";

export const ThemeComponent = ({children}) => {

    const [drawer, setDrawer] = useState(false);
    const handleDrawer = (open) => () => {
        setDrawer(open)
    };

    const [theme, setTheme] = useState(false);
    const handleTheme = (theme) => () => {
        setTheme(theme)
    };

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const darkPalette = {
        mode : "dark",
        primary : {
            main : blueGrey[800],
            dark : blueGrey[900],
            light : blueGrey[400]
        }
    };

    const lightPalette = {
        mode : "light",
        primary : {
            main : blueGrey[400],
            dark : blueGrey[500],
            light : blueGrey[300],
            contrastText : blueGrey[50]
        }
    };

    let mainTheme = createTheme({
        direction: 'rtl',
        palette : theme ? lightPalette : darkPalette ,
        typography : {
            fontFamily : "B Yekan"
        }
    });

    return <>
        <MainContext.Provider value={{
            theme : theme,
            handleTheme : handleTheme,
            drawer : drawer,
            handleDrawer : handleDrawer
        }} >
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={mainTheme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </CacheProvider>
        </MainContext.Provider>
    </>
}