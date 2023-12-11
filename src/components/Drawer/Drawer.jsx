import LogoBox from "../Sidebar/SidebarLogo";
import SidebarList from "../Sidebar/SidebarList";
import {Button, SwipeableDrawer} from "@mui/material";
import {useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {MenuRounded} from "@mui/icons-material";
import {grey} from "@mui/material/colors";
import {MobileContainer} from "../Container/MobileContainer";

export let Drawer = () => {

    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = (open) => () => {
        setDrawer(open)
    };

    return <>
        <Grid2
            sx={{
                display: MobileContainer("block"),
            }}
        >
            <Button onClick={toggleDrawer(true)}>
                <MenuRounded
                    color="action"
                    sx={{
                        fontSize : 30
                    }}
                />
            </Button>
        </Grid2>
        <SwipeableDrawer
            anchor={"left"}
            open={drawer}
            variant={"temporary"}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <Grid2 sx={{
                backgroundColor:grey[900],
                boxShadow : " 20px 20px 60px #202020, -20px -20px 60px #2c2c2c",
                width:250 , height:1 , textAlign : "center"
            }}>
                <LogoBox/>
                <SidebarList/>
            </Grid2>
        </SwipeableDrawer>
    </>
}