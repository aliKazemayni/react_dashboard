import { List, ListItemIcon, ListItemText} from "@mui/material";
import {SideBarItem} from "../Sidebar/SideBarItem";
import React, {useState} from "react";
import {ListItemWrapper} from "../List/ListItemWrapper";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {blueGrey} from "@mui/material/colors";
import {useTranslation} from "react-i18next";
import {CollapseWrapper} from "./CollapseWrapper";

export  const SidebarCollapse = ({icon , children , title}) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const { t } = useTranslation();
    return <>
        <ListItemWrapper sx={open ? {
            backgroundColor : blueGrey[900],
            borderBottomLeftRadius : 0,
            borderBottomRightRadius : 0,
        } : {}}
            onClick={() => handleClick() }>
            <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
            <ListItemText primary={t(title)} />
        </ListItemWrapper>
        <CollapseWrapper in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {
                    children.map(
                        (child) => {
                            return <SideBarItem title={child.title} url={child.url} icon={child.icon}/>
                        }
                    )
                }
            </List>
        </CollapseWrapper>
    </>
}