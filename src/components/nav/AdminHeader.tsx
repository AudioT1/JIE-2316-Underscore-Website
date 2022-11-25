import { AppBar, Box, Grid, Toolbar, Typography, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"

export default function AdminHeader() {

    const theme = useTheme()
    const isBelowMaxScreenSize = useMediaQuery(theme.breakpoints.down("md"))

    if (!isBelowMaxScreenSize) {
        return <div />
    }

    return (
        <Box mb={3}>
            <AppBar position="static" sx={{backgroundColor: "secondaryBg.header"}}>
                <Toolbar>
                    <Grid item flex={1}>
                        <Box py={2}>
                            <Grid container alignItems="start" direction="column">
                                <Grid item>
                                    <Typography variant="h4" color="text.secondary">
                                        AudioT
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" color="text.secondary">
                                        Admin Portal
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <MenuIcon fontSize="large" sx={{color: "text.secondary"}} />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}