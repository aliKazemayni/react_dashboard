import {styled} from "@mui/system";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";

export let SideBarItem = ({url , title , icon}) => {

    const ListItemWrapper = styled(ListItem)
    (
        ({ theme }) => (
            {
                borderRadius: '10px',
                marginTop : "5px",
                '&.active': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    '& .MuiListItemIcon-root': {
                        color: theme.palette.primary.contrastText,
                    },
                },
                '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                    '& .MuiListItemIcon-root': {
                        color: theme.palette.primary.contrastText,
                    },
                },
            }
        )
    );

    const { t } = useTranslation();
    return <>
        <ListItemWrapper button component={NavLink} to={url}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={t(title)}/>
        </ListItemWrapper>
    </>
}