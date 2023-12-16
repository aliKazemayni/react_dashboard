import {Sidebar} from "../components/Sidebar/Sidebar";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Outlet} from "react-router-dom";
import {Drawer} from "../components/Drawer/Drawer";
import PrimarySearchAppBar from "../components/AppBar/AppBar";
import Box from "@mui/material/Box";
import {ThemeComponent} from "../themes/mainTheme";

export  let MainLayout = () => {

    return (
        <Grid2 container>
            <ThemeComponent>
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
            </ThemeComponent>
        </Grid2>
    );
}
