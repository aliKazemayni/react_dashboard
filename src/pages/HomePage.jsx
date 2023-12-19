import {Helmet} from "react-helmet-async";
import {Typography} from "@mui/material";

export let HomePage = () => {
    return <>
        <Helmet>
            <title>رزومه من | صفحه اصلی</title>
        </Helmet>
        <Typography variant="h3">home</Typography>
    </>
}