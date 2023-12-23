import { ListItemIcon, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";
import {ListItemWrapper} from "../List/ListItemWrapper";

export let SideBarItem = ({url , title , icon}) => {

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