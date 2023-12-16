import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import * as React from "react";

export let MenuButton = ({handleMobileMenuOpen , mobileMenuId}) => {
    return <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
        >
            <MoreIcon />
        </IconButton>
    </Box>
}