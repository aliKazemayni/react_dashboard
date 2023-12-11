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
                '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f0f0f0',
                },
                borderRadius: '10px',
                marginTop : "5px",
                '&.active': {
                    backgroundColor: blueGrey[700],
                    borderLeft : "5px solid",
                    borderColor : blueGrey[100] ,
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