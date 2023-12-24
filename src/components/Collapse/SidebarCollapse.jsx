import {List, ListItemIcon, ListItemText, useTheme} from "@mui/material";
import {SideBarItem} from "../Sidebar/SideBarItem";
import {useState} from "react";
import {ListItemWrapper} from "../List/ListItemWrapper";
import {ExpandLess, ExpandMore} from "@mui/icons-material"; 
import {useTranslation} from "react-i18next";
import {CollapseWrapper} from "./CollapseWrapper";

export  const SidebarCollapse = ({icon , children , title}) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const { t } = useTranslation();
    const theme = useTheme()
    return <>
        <ListItemWrapper sx={open ? {
            backgroundColor : theme.palette.primary.dark,
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
                        (child , key) => {
                            return <SideBarItem title={child.title} url={child.url} icon={child.icon} key={key}/>
                        }
                    )
                }
            </List>
        </CollapseWrapper>
    </>
}