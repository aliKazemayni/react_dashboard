import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import * as React from "react";
import {blueGrey} from "@mui/material/colors";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

export let Icons = ({menuId, handleProfileMenuOpen}) => {

    const IconBox = styled('div')(({ theme }) => ({
        display: { xs: 'none', md: 'flex' } ,
        width : 200,
        p : 3,
        justifyContent:"center",
        borderRadius : theme.shape.borderRadius
    }));

    const IconItem = styled(IconButton)(({ theme }) => ({
        display: { xs: 'none', md: 'flex' } ,
        backgroundColor : blueGrey[900] ,
        justifyContent:"center",
        margin : 3,
        '&:hover': {
            backgroundColor: blueGrey[500],
        },
        borderRadius : theme.shape.borderRadius
    }));

    return <>
        <Box sx={{
            display: { xs: 'none', md: 'flex' } ,
        }}>
            <IconBox>
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
            </IconBox>
        </Box>
    </>
}