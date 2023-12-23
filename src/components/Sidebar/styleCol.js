import {styled} from "@mui/material/styles";
import {ListItemButton, ListItemIcon} from "@mui/material";
import {blueGrey} from "@mui/material/colors";

export const StyledItem = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    backgroundColor : blueGrey[800],
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    '&.active': {
        color: 'primary.contrastText',
        fontSize:16,
    },
}));

export const StyledItemIcon = styled(ListItemIcon)({
    width: 22,
    height: 22,
    fontSize:20,
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const activeItemStyle = {

}

export const collapseStyle = {
    px:2,
    py:1,
    backgroundColor : blueGrey[900],
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
}