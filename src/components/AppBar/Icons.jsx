
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Button, ButtonGroup} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";
import {useContext} from "react";
import {MainContext} from "../../context/MainContext";
import {LanguageChange} from "./LanguageChange";

export const IconItem = styled(Button)(({ theme }) => ({
    backgroundColor : theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    },
}));
export let Icons = ({menuId, handleProfileMenuOpen}) => {



    const context = useContext(MainContext);

    return <>
        <Box sx={{
            display: { xs: 'none', md: 'flex' } ,
        }}>
            <ButtonGroup variant="contained" aria-label="icons">
                <IconItem size="large" aria-label="show 4 new mails" color="inherit" onClick={context.handleTheme(!context.theme)}>
                    {context.theme ? <LightMode/> : <DarkMode/>}
                </IconItem>
                <LanguageChange/>
                <IconItem size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconItem>
                <IconItem
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconItem>
                <IconItem
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconItem>
            </ButtonGroup>
        </Box>
    </>
}