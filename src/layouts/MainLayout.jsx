import {Sidebar} from "../components/Sidebar/Sidebar";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Outlet} from "react-router-dom";
import {Drawer} from "../components/Drawer/Drawer";
import PrimarySearchAppBar from "../components/AppBar/AppBar";
import {MainContext} from "../context/MainContext";
import {useState} from "react";
import Box from "@mui/material/Box";

export  let MainLayout = ({children}) => {

    const [drawer, setDrawer] = useState(false);
    const handleDrawer = (open) => () => {
        setDrawer(open)
    };

    return (
        <Grid2 container>
            <MainContext.Provider value={{
                drawer: drawer,
                handleDrawer : handleDrawer
            }} >
                <Sidebar/>
                <Drawer />
                <Grid2
                    sx={{ height : "100vh" }}
                    xs={12} sm={12} md={12-3} lg={12-2} xl={12-2}
                >
                    <PrimarySearchAppBar/>
                    <Box sx={{
                        p : 2
                    }}>
                        <Outlet />
                    </Box>
                </Grid2>
            </MainContext.Provider>
        </Grid2>
    );
}
