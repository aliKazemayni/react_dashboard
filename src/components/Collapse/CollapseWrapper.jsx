import {styled} from "@mui/system";
import {Collapse} from "@mui/material";

export const CollapseWrapper = styled(Collapse)
(
    ({ theme }) => (
        {
            backgroundColor : theme.palette.primary.dark,
            borderBottomLeftRadius : '10px',
            borderBottomRightRadius : '10px',
        }
    )
);