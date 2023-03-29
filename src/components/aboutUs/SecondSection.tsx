import { Box, Typography, useMediaQuery, useTheme, NoSsr, Grid } from "@mui/material";
import { useRef,useState } from "react";


export default function SecondSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const xsmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const xlScreen =  useMediaQuery(theme.breakpoints.down('xl'))


    return (
        <Box pt={0} pb={3} textAlign="center" sx={{ backgroundColor:"text.primary",backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
           <Box  pt={10} pb={15}>
                <Typography sx={{ letterSpacing: 1 }} variant={medScreen ? 'h3' : 'h2'} color="primary.main" >
                        Audio T's Leadership Team
                    </Typography> 
            </Box>
            <Box>
            <Grid container spacing={12} direction={smallScreen? "column":"row"} >
                <Grid item md={4} >
                        <Box mt={smallScreen? 15:0} textAlign="center" >
                            <img 
                                style={{aspectRatio: '11/9', width:'auto', height: 'auto'}}
                                src="/sun.png" />
                        </Box>
                </Grid>
                <Grid item md={4} >
                        <Box mt={smallScreen? 15:0} textAlign="center" >
                            <img 
                                style={{aspectRatio: '11/9', width:'auto', height: 'auto'}}
                                src="/sun.png" />
                        </Box>
                </Grid>
                <Grid item md={4} >
                        <Box mt={smallScreen? 15:0} textAlign="center" >
                            <img 
                                style={{aspectRatio: '11/9', width:'auto', height: 'auto'}}
                                src="/sun.png" />
                        </Box>
                </Grid>

            </Grid>
            </Box>
            

        </Box>
    )
}