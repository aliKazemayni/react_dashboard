import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {CacheProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import {prefixer} from "stylis";
import {blueGrey} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {MainContext} from "../context/MainContext";
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";

export const ThemeComponent = ({children}) => {

    const [direction, setDirection] = useState();
    const [theme, setTheme] = useState();
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        setTheme(JSON.parse(localStorage.getItem('theme')));
        i18n.changeLanguage(localStorage.getItem('language'));
        setDirection(localStorage.getItem('language') === "fa");
    }, []);
    const handleDrawer = (open) => () => {
        setDrawer(open)
    };
    const { i18n} = useTranslation();
    const handleDirection = (lang) => () => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language' , lang)
        setDirection(lang === "fa")
    };

    const handleTheme = (theme) => () => {
        localStorage.setItem('theme' , theme)
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

    const darkPalette2 = {
        primary: {
            main: '#FFD700', // Gold color
        },
        secondary: {
            main: '#a98274', // Another complementary color
        },
        background: {
            default: '#121212', // Dark background
            paper: '#1e1e1e', // Darker background for paper-like elements
        },
    };

    const darkPalette3 = {
        primary: {
            main: '#90caf9', // Light blue
        },
        secondary: {
            main: '#ffcc80', // Orange
        },
        background: {
            default: '#121212', // Dark grey
            paper: '#1e1e1e', // Darker grey
        },
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

    console.log(theme , "theme")
    let mainTheme = createTheme({
        direction: 'ltr',
        palette : theme ? lightPalette : darkPalette ,
        typography : {
            fontFamily : i18n.language === "en" ? "arial" : "B Yekan"
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