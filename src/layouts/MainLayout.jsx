import {Sidebar} from "../components/Sidebar/Sidebar";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Outlet} from "react-router-dom";

export  let MainLayout = ({children}) => {
    return (
        <Grid2 container>
            <Sidebar/>
            <Grid2 sx={{ backgroundColor : "primary." , height : "100vh" }} xs={12} sm={12} md={12-3} lg={12-2} xl={12-2}>
                <Outlet />
            </Grid2>
        </Grid2>
    );
}
