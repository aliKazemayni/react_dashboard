import SidebarList from "./SidebarList";
import LogoBox from "./SidebarLogo";
import Grid2 from "@mui/material/Unstable_Grid2";
import {desktopDisplay} from "../../utils/container/desktopDisplay";

export let Sidebar = () => {
    return <>
        <Grid2 sx={{
            display: desktopDisplay("block"),
            height : "100vh" , textAlign : "center"
        }} xs={0} sm={0} md={3} lg={2} xl={2}>
            <LogoBox/>
            <SidebarList/>
        </Grid2>
    </>
}