import { Box, Typography, Paper, useMediaQuery, useTheme, Grid , Divider } from "@mui/material";
import { useState } from "react";
import { theme } from "../../styles/theme";


export default function SecondSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const xsmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const xlScreen =  useMediaQuery(theme.breakpoints.down('xl'))

    return (
        <Box  textAlign="center" sx={{backgroundColor: "text.primary"}}  height={smallScreen? 900: medScreen? 1100: 1450}>
            <Typography width="100%"  pt={5} sx={{ fontWeight: 'bold',  letterSpacing: 2  }} variant={smallScreen ? 'h4' : 'h3'} color="primary.main">
            Using Sound to Scale
           </Typography> 
           <Typography width={smallScreen? "100%":"100%"}  p={10} px={15} sx={{  }} variant={smallScreen ? 'h6' : 'h5'} color="white">
            Through their years of experience, farmers have learned how to listen to their animals.
            We’ve taken that methodology and applied it to a new machine learning model that can help 
            contract growers monitor and record their welfare outcomes on a large scale.
            </Typography> 
            <Box py={smallScreen? 1: 1} px={smallScreen? 20: medScreen? 15: 15}>
                <img 
                   style={{aspectRatio: '11/9', width:'70%', height: 'auto'}}
                    src=" audioTreplaceimage1.png" />
            </Box>  
            <Typography width={smallScreen? "100%":"100%"}  p={10} px={15} sx={{  }} variant={smallScreen ? 'h6' : 'h5'} color="white">
            By using audio data, the AudioT system can detect a variety of different chicken calls to predict both present and future welfare outcomes.
            </Typography> 
           

        </Box>

    )
}