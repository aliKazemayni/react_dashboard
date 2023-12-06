import React from 'react';
import { styled } from '@mui/system';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {HomeRounded, SettingsRounded} from "@mui/icons-material";
import { indigo} from "@mui/material/colors";

const SidebarList = () => {
    const ListItemWrapper = styled(ListItem)(({ theme }) => ({
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f0f0f0',
        },
        borderRadius: '10px',
        marginTop : "5px",
        '&.active': {
            backgroundColor: indigo[300],
        },
    }));

    return (
        <List sx={{px:"10px"}}>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button className="active">
                <ListItemIcon>
                    <SettingsRounded/>
                </ListItemIcon>
                <ListItemText primary="تنظیمات" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper><ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            <ListItemWrapper button>
                <ListItemIcon>
                    <HomeRounded/>
                </ListItemIcon>
                <ListItemText primary="خانه" />
            </ListItemWrapper>
            {/* Add more list items as needed */}
        </List>
    );
};

export default SidebarList;