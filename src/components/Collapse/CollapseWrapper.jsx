import {styled} from "@mui/system";
import {Collapse} from "@mui/material";
import {blueGrey} from "@mui/material/colors";

export const CollapseWrapper = styled(Collapse)
(
    ({ theme }) => (
        {
            backgroundColor : blueGrey[900],
            borderBottomLeftRadius : '10px',
            borderBottomRightRadius : '10px',
        }
    )
);