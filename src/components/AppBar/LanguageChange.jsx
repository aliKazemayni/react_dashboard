import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Language} from "@mui/icons-material";
import {IconItem} from "./Icons";
import {useContext, useState} from "react";
import {MainContext} from "../../context/MainContext";
import {useTranslation} from "react-i18next";

export const LanguageChange = () => {
    const context = useContext(MainContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const {  t } = useTranslation();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {

        setAnchorEl(null);
    };

    const handleItem = (lang) => {
        context.handleDirection(lang)();
        handleClose()
    }

    return (
        <>
            <IconItem
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                <Language />
            </IconItem>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => handleItem('en')}>{t("en")}</MenuItem>
                <MenuItem onClick={() => handleItem('fa')}>{t("fa")}</MenuItem>
            </Menu>
        </>
    );
}