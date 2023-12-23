import {HomeRounded, MenuRounded, SettingsRounded, TableChart} from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export let sidebar_list = [
    {
        type : "item",
        title : "home",
        icon : <HomeRounded/> ,
        url : "/home"
    },
    {
        type : "item",
        title : "setting",
        icon : <SettingsRounded/> ,
        url : "/setting"
    },
    {
        type: "collapse",
        title: "more",
        icon: <MenuRounded/>,
        isOpen: false,
        children : [
            {
                type : "item",
                title : "account",
                url : "/account",
                icon : <AccountCircle/>
            },
            {
                type : "item",
                title : "table",
                url : "/table",
                icon : <TableChart/>
            }
        ]
    }
]