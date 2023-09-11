import { Box,Typography } from "@mui/material";
import { useRouteError } from 'react-router-dom';

const ErrorComponent= ()=>
{
    const error = useRouteError();
    console.log(error);
    return(
        <Box style={{marginLeft:'250px',marginTop:'20px'}}>
            <Typography>
                 There was an error loading the page
            </Typography>
        </Box>
    )
};

export default ErrorComponent;