import {styled} from "@mui/system";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import {NavLink} from "react-router-dom";
import React from "react";

export let SideBarItem = ({url , title , icon}) => {

    const ListItemWrapper = styled(ListItem)
    (
        ({ theme }) => (
            {
                borderRadius: '10px',
                marginTop : "5px",
                '&.active': {
                    backgroundColor: blueGrey[700],
                },
                '&:hover': {
                    backgroundColor: blueGrey[900],
                },
            }
        )
    );

    return <>
        <ListItemWrapper button component={NavLink} to={url}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItemWrapper>
    </>
}