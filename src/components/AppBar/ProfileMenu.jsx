import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import * as React from "react";

export let ProfileMenu = ({isMenuOpen , handleMenuClose , anchorEl , menuId}) => {
    return <Menu
        anchorEl={anchorEl}
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
        <MenuItem onClick={handleMenuClose}>حساب کاربری</MenuItem>
        <MenuItem onClick={handleMenuClose}>خروج</MenuItem>
    </Menu>
}