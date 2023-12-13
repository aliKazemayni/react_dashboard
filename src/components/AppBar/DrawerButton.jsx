import {mobileDisplay} from "../../utils/container/mobileDisplay";
import IconButton from "@mui/material/IconButton";
import {MenuRounded} from "@mui/icons-material";
import Box from "@mui/material/Box";
import * as React from "react";

export let DrawerButton = ({handleDrawer}) => {
    return <Box
        sx={{
            display: mobileDisplay("block"),
        }}
    >
        <IconButton
            size="large"
            onClick={handleDrawer(true)}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
        >
            <MenuRounded
                color="action"
                sx={{
                    fontSize : 30
                }}
            />
        </IconButton>
    </Box>
}