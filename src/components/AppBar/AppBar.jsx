import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {useContext} from "react";
import {MainContext} from "../../context/MainContext";
import {Search} from "./Search";
import {Icons} from "./Icons";
import {ProfileMenu} from "./ProfileMenu";
import {MobileMenu} from "./MobileMenu";
import {MenuButton} from "./MenuButton";
import {DrawerButton} from "./DrawerButton";
import MenuItem from "@mui/material/MenuItem";


export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';

    let context = useContext(MainContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <DrawerButton handleDrawer={context.handleDrawer} />
                    <Search />
                    <Box sx={{ flexGrow: 1 }} />
                    <Icons  handleProfileMenuOpen={handleProfileMenuOpen} menuId={menuId}/>
                    <MenuButton handleMobileMenuOpen={handleMobileMenuOpen} mobileMenuId={mobileMenuId} />
                </Toolbar>
            </AppBar>
            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} mobileMoreAnchorEl={mobileMoreAnchorEl} mobileMenuId={mobileMenuId} handleMobileMenuClose={handleMobileMenuClose} handleProfileMenuOpen={handleProfileMenuOpen}/>
            <ProfileMenu handleMenuClose={handleMenuClose} isMenuOpen={isMenuOpen} anchorEl={anchorEl} menuId={menuId}>
                <MenuItem onClick={handleMenuClose}>حساب کاربری</MenuItem>
                <MenuItem onClick={handleMenuClose}>خروج</MenuItem>
            </ProfileMenu>

        </Box>
    );
}