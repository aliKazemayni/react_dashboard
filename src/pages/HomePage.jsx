import {Helmet} from "react-helmet-async";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";
import {Sidebar} from "../components/Sidebar/Sidebar";

export let HomePage = () => {
    return <>
        <Helmet>
            <title>صفحه اصلی | رزومه من</title>
        </Helmet>
        <Grid2 container>
            <Sidebar/>
            <Grid2 sx={{ backgroundColor : "primary." , height : "100vh" }} xs={12} sm={12} md={12-3} lg={12-2} xl={12-2}>
                <Typography variant="h3">main</Typography>
            </Grid2>
        </Grid2>
    </>
}