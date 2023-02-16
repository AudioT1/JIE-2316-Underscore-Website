import { Box, Typography, Paper, useMediaQuery, useTheme, Grid } from "@mui/material";
import { useState } from "react";
import { theme } from "../../styles/theme";

export default function SecondSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box  sx={{ background:`linear-gradient(to bottom,#F2F5FA,#9e9e9e)`, height: 2200,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
            <Grid container spacing={0} alignItems="center" direction="row">
                    <Grid item >
                        <Box sx={{height: 500}} textAlign="left" >
                            <Typography width="50%" pl={40}  pt={15}   sx={{ letterSpacing: 1}} variant={smallScreen ? 'h5' : 'h4'} color="secondary.main">
                            Learning From the Best
                            </Typography> 
                            <Typography  width="50%"  pl={40} pt={5}  sx={{  }} variant={smallScreen ?  'body2' : 'body1'} color="secondary.main">
                            For centuries, farmers have used their experience to learn and adapt to the needs of their animals. 
                            Their dedication to caring for animals helps to feed the world.
                            </Typography> 
                            <Typography width="50%" pl={40} pt={5}  sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="secondary.main">
                            The amount of specialized knowledge needed to be a poultry farmer is surprisingly great. Just by 
                            hearing one of their chickens, a poultry farmer can tell if they’re healthy, happy, hungry, or sick. 
                            It may seem instinctual to some, but that level of adaptation is made possible by the supercomputer
                            between our ears -- our brains!
                            </Typography> 
                            <Typography width="50%" pl={40} pt={5}  pb={15} sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="secondary.main">
                            We can’t replicate what farmers do, but we can strive toke ma their work easier in this rapidly changing world.
                            </Typography> 
                            
                            <Grid item width="100%" px={10}>
                                <Box sx={{backgroundColor: "text.primary", height: 750, borderRadius: '30px'}} px={50}>

                                </Box>
                            </Grid>

                        </Box>
                        
                    </Grid>
                    
                    
                </Grid>
        </Box>
    )
}