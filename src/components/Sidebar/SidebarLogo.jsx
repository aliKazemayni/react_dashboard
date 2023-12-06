import Box from "@mui/material/Box";
import {Avatar} from "@mui/material";

const LogoBox = () => {
    return (
        <Box>
            <Avatar
                variant={"rounded"}
                src={require('../../assets/img/site-logo.png')}
                sx={{
                    height : 140 ,
                    width : 140,
                    mx : "auto",
                    my : 2
                }}
            />
        </Box>
    );
};

export default LogoBox;