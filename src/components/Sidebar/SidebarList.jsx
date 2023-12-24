import {SideBarItem} from "./SideBarItem";
import {sidebar_list} from "../../config/sidebar";
import {SidebarCollapse} from "../Collapse/SidebarCollapse";
import {List} from "@mui/material";

const SidebarList = () => {

    return (
        <List sx={{px:"10px"}}>
            {
                sidebar_list.map(({ type , title , icon , url, children } , index) => {
                    if (type === "item")
                        return (<SideBarItem title={title} url={url} icon={icon}  key={index} />)
                    else
                    {
                        return (<SidebarCollapse icon={icon} children={children} title={title} key={index} />)
                    }
                })
            }
        </List>
    );
};

export default SidebarList;