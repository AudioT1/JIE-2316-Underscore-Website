import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";

export default function ContactBox() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box sx={{
            backgroundColor: 'secondary.main',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Typography py={0} sx={{ fontWeight: 'bold', letterSpacing: 1 }} variant={smallScreen ? 'h4' : 'h2'} color="primary.main">
                CONTACT US
            </Typography>
            <Box sx={{ 
                backgroundImage: 'url(/vector_chicken.svg)',
                height: 300,
                width: 260,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                margin: 'auto'}}>
            </Box>
            <Typography>
                Get in touch!
            </Typography>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Box sx={{ 
                        backgroundImage: 'url(/location.svg)',
                        margin: 'auto',
                        height: 30,
                        width: 30,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative'}}>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        AudioT Corporate Headquarters
                    </Typography>
                    <Typography>
                        Atlanta, GA
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ 
                        backgroundImage: 'url(/mail.svg)',
                        margin: 'auto',
                        height: 30,
                        width: 30,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative'}}>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        contact@audiot.com
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ 
                        backgroundImage: 'url(/phone.svg)',
                        margin: 'auto',
                        height: 30,
                        width: 30,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative'}}>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        123-456-7890
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}