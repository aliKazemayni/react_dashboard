
import Menu from "@mui/material/Menu";
import * as React from "react";

export let ProfileMenu = ({isMenuOpen , handleMenuClose  , menuId , children}) => {
    return <Menu
        anchorEl={null}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        sx={
            {
                mt: "1px",
                "& .MuiMenu-paper":
                    {
                        borderRadius : 2
                    },
            }
        }
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        {children}
    </Menu>
}