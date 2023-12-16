import LogoBox from "../Sidebar/SidebarLogo";
import SidebarList from "../Sidebar/SidebarList";
import { SwipeableDrawer} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {MainContext} from "../../context/MainContext";
import {useContext} from "react";

export let Drawer = () => {

    let context = useContext(MainContext)

    return <>
        <SwipeableDrawer
            anchor={"left"}
            open={context.drawer}
            variant={"temporary"}
            onClose={context.handleDrawer(false)}
            onOpen={context.handleDrawer(true)}
        >
            <Grid2 sx={{
                boxShadow : " 20px 20px 60px #202020, -20px -20px 60px #2c2c2c",
                width:250 , height:1 , textAlign : "center"
            }}>
                <LogoBox/>
                <SidebarList/>
            </Grid2>
        </SwipeableDrawer>
    </>
}