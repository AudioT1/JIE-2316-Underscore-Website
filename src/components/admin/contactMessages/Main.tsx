import { Box, Typography, Grid } from "@mui/material";

export default function Main() {

    return (
        <Box ml={3}>
            <Grid container height="98px" alignItems="center" >
                <Grid item>
                    <Typography variant="h4">
                        Contact Messages
                    </Typography>
                </Grid>
            </Grid> 
        </Box>
    )
}