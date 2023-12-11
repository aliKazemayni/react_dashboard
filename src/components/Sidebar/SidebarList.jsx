import React from 'react';
import { List} from '@mui/material';
import {SideBarItem} from "./SideBarItem";
import {sidebar_list} from "../../config/sidebar";

const SidebarList = () => {

    return (
        <List sx={{px:"10px"}}>
            {
                sidebar_list.map(({ title , icon , url }) => {
                    return (<SideBarItem title={title} url={url} icon={icon} />)
                })
            }
        </List>
    );
};

export default SidebarList;