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
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";

export const ThemeComponent = ({children}) => {

    const [drawer, setDrawer] = useState(false);
    const handleDrawer = (open) => () => {
        setDrawer(open)
    };
    const { i18n} = useTranslation();
    const [direction, setDirection] = useState(false);
    const handleDirection = (dir) => () => {
        if (dir)
        {
            i18n.changeLanguage("fa");
        }else{
            i18n.changeLanguage("en");
        }
        setDirection(dir)
    };

    const [theme, setTheme] = useState(false);
    const handleTheme = (theme) => () => {
        setTheme(theme)
    };

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const emptyCash = createCache({
        key : "meaningless-key"
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
        direction: 'ltr',
        palette : theme ? lightPalette : darkPalette ,
        typography : {
            fontFamily : "B Yekan"
        }
    });

    return <>
        <Helmet> { direction ? <html lang="fa" dir="rtl" /> : <html lang="en" dir="ltr" />} </Helmet>
        <MainContext.Provider value={{
            theme : theme,
            handleTheme : handleTheme,
            drawer : drawer,
            handleDrawer : handleDrawer,
            direction : direction,
            handleDirection : handleDirection
        }} >
            <CacheProvider value={direction ? cacheRtl : emptyCash}>
                <ThemeProvider theme={mainTheme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </CacheProvider>
        </MainContext.Provider>
    </>
}