import {ThemeProvider} from "@mui/material";
import {cacheRtl, mainTheme} from "../themes/mainTheme";
import {CacheProvider} from "@emotion/react";
import CssBaseline from '@mui/material/CssBaseline';
import {HelmetProvider} from "react-helmet-async";

export  let MainLayout = ({children}) => {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={mainTheme}>
                <CssBaseline />
                <HelmetProvider>
                    {children}
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}
