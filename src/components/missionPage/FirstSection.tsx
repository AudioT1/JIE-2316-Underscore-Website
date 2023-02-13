import { Box, Typography, Paper, useMediaQuery, useTheme, Grid } from "@mui/material";
import { RedOrangePrimaryButton } from "../misc/buttons";

export default function FirstSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box sx={{ backgroundImage: 'url(/missionpageImage.png)',height: 800,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
             <Box  textAlign="left" bgcolor="rgba(255,255,255,.50)" px={10} py={1} mt="560px" position="absolute" width="100%" >
                <Typography py={0} sx={{ fontWeight: 'bold', letterSpacing: 1 }} variant={smallScreen ? 'h5' : 'h1'} color="secondary.main">
                    Our Mission
                </Typography>
                <Typography py={0}  sx={{ fontWeight: 'bold' }} variant={smallScreen ? 'h5' : 'h3'} color="secondary.main">
                    Farmers are the backbone of the poultry industry.
                </Typography>
                <Typography py={1}  sx={{ fontWeight: 'bold' }} variant={smallScreen ? 'h5' : 'h3'} color="secondary.main">
                    We want to give them better tools to get the job done.
                </Typography>
            </Box>
            
            
            
        </Box>
    )
}