import React from 'react';
import { List} from '@mui/material';
import {SideBarItem} from "./SideBarItem";
import {sidebar_list} from "../../config/sidebar";

const SidebarList = () => {

    return (
        <List sx={{px:"10px"}}>
            {
                sidebar_list.map((item) => {
                    return (<SideBarItem title={item.title} url={item.url} icon={item.icon}/>)
                })
            }
        </List>
    );
};

export default SidebarList;