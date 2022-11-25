import { Box, Grid, Typography } from "@mui/material";
import { C_Admin } from "../../../database/interfaces/Admin";

interface Props {
    admin: C_Admin;
}

export default function Main({admin}:Props) {

    return (
        <Box ml={3}>
            <Grid container height="98px" alignItems="center" >
                <Grid item>
                    <Typography variant="h4">
                        Welcome back, {admin.data.username}
                    </Typography>
                </Grid>
            </Grid> 
        </Box>
    )
}