import SidebarList from "./SidebarList";
import LogoBox from "./SidebarLogo";
import Grid2 from "@mui/material/Unstable_Grid2";

export let Sidebar = () => {
    return <>
        <Grid2 sx={{
            display: {
                sm: 'none',
                xs: 'none',
                md: 'block',
                lg: 'block',
                xl: 'block'
            },
            height : "100vh" , textAlign : "center"
        }} xs={0} sm={0} md={3} lg={2} xl={2}>
            <LogoBox/>
            <SidebarList/>
        </Grid2>
    </>
}