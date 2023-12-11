import Grid2 from "@mui/material/Unstable_Grid2";

export let DesktopContainer = (display) => {
    return  {
        sm: 'none',
        xs: 'none',
        md: display,
        lg: display,
        xl: display
    }
}