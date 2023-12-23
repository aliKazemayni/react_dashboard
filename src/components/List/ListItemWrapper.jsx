import {styled} from "@mui/system";
import {ListItem} from "@mui/material";

export const ListItemWrapper = styled(ListItem)
(
    ({ theme }) => (
        {
            borderRadius: '10px',
            marginTop : "5px",
            '&.active': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.contrastText,
                },
            },
            '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.contrastText,
                },
            },
        }
    )
);