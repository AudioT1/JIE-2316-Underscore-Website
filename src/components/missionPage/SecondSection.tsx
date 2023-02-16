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
        <Box  sx={{ background:`linear-gradient(to bottom,#F2F5FA,#9e9e9e)`, height: 2550,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
            <Grid container spacing={0} alignItems="center" direction="row">
                    <Grid item >
                        <Box sx={{height: 500}} textAlign="left" >
                            <Typography width={smallScreen? "100%": "50%"} pl={smallScreen? 10: medScreen? 20: 30}  pt={15}   sx={{ letterSpacing: 1}} variant={smallScreen ? 'h5' : 'h4'} color="secondary.main">
                            Learning From the Best
                            </Typography> 
                            <Typography  width={smallScreen? "100%": "50%"}  pl={smallScreen? 10: medScreen? 20: 30}  pt={5}  sx={{  }} variant={smallScreen ?  'body2' : 'body1'} color="secondary.main">
                            For centuries, farmers have used their experience to learn and adapt to the needs of their animals. 
                            Their dedication to caring for animals helps to feed the world.
                            </Typography> 
                            <Typography width={smallScreen? "100%": "50%"} pl={smallScreen? 10: medScreen? 20: 30}  pt={5}  sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="secondary.main">
                            The amount of specialized knowledge needed to be a poultry farmer is surprisingly great. Just by 
                            hearing one of their chickens, a poultry farmer can tell if they’re healthy, happy, hungry, or sick. 
                            It may seem instinctual to some, but that level of adaptation is made possible by the supercomputer
                            between our ears -- our brains!
                            </Typography> 
                            <Typography width={smallScreen? "100%": "50%"} pl={smallScreen? 10: medScreen? 20: 30}  pt={5}  pb={15} sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="secondary.main">
                            We can’t replicate what farmers do, but we can strive toke ma their work easier in this rapidly changing world.
                            </Typography> 
                            
                            <Grid item width="100%" px={10}>
                                <Box  py={smallScreen? 3 :xsmallScreen? 5: medScreen? 10: 12} sx={{backgroundColor: "text.primary", borderRadius: '30px'}} px={smallScreen? 1: medScreen? 5: 10} height={smallScreen? 1000: medScreen? 900: 750}>
                                    <Divider  sx={{backgroundColor: 'white'}}>
                                      
                                    </Divider>

                                    <Typography width="100%" textAlign="left" pt={2} sx={{  }} variant={smallScreen ? 'h5' : 'h4'} color="primary.main">
                                    Poultry Farming in a Modern Age
                                    </Typography> 
                                    <Typography width="100%" textAlign="left" pt={5} sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="white">
                                    Over the past 50 years, the average size of broiler houses has doubled to compensate for increased demand from retailers
                                     in the poultry industry. Year by year, commercial poultry farmers are expected to produce more meat to fulfill that demand,
                                      which necessitates the ability to care for more chickens.
                                    </Typography> 
                                    <Grid container spacing={1} direction={smallScreen? "column": "row"}>
                                        <Grid item md={6} xs={10}>
                                            <Typography width={smallScreen? "100%":"100%"} textAlign="left" pt={5} sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="white">
                                            This dramatic increase in production has made it more difficult for poultry farmers to actively monitor the welfare of 
                                            their chickens. Modern poultry farms can house birds numbering in the tens of thousands -- in a setting like this, it’s 
                                            hard, even for skilled farmers, to pay attention to the needs of any particular chicken. 
                                            </Typography> 
                                            <Typography width={smallScreen? "100%":"100%"} textAlign="left" pt={5} pb={5} sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="white">
                                            Additionally, contract growers are often obligated to submit a detailed report on their welfare practices and outcomes 
                                            to their integrators in order to keep their jobs. There’s a lot of pressure on farmers to do their absolute best to satisfy 
                                            the industry and to take good care of their animals at the same time, which is a difficult balancing act to achieve.
                                        </Typography>

                                        </Grid>
                                        <Grid item md={6} xs={10}>
                                            <Box py={smallScreen? 1: 1} px={xsmallScreen? 10:smallScreen? 20: medScreen? 0: 10}>
                                                <img 
                                                style={{aspectRatio: '11/9', width:'90%', height: 'auto'}}
                                                src="/audiotstat1.png" />
                                            </Box>  

                                        </Grid>
                                       
                                       
                                    </Grid>
                                    <Divider  sx={{backgroundColor: 'white'}}>
                                      
                                      </Divider>
                                      
                                    
                                    

                                </Box>
                                <Grid container spacing={1} direction={smallScreen? "column": "row"}>
                                    <Grid item md={6} xs={10}>
                                        <Box py={smallScreen? 1: medScreen? 30: 40} px={medScreen? 5:smallScreen? 50: 10}>
                                                <img 
                                                style={{aspectRatio: '1/1', width:'90%', height: 'auto'}}
                                                src="/audiotcams1.png" />
                                        </Box>  

                                    </Grid>
                                    <Grid item md={6} xs={10}>
                                    <Typography  width={smallScreen? "100%":"100%"} textAlign="left" pt={smallScreen? 5: medScreen? 15: 35} pb={1} sx={{ letterSpacing: 1 }} variant={smallScreen ? 'h5' : medScreen? "h5": 'h4'} color="secondary.main">
                                             Setting a New Welfare Standard
                                        </Typography>
                                        <Typography  pr={medScreen? 0:smallScreen? 0:10} width={smallScreen? "100%":"100%"} textAlign="left" pt={3} pb={1} sx={{ letterSpacing: 1 }} variant={smallScreen ? 'body2' : medScreen? "body2": 'body1'} color="secondary.main">
                                        Currently, common welfare practices for taking care of chickens include regulating environmental 
                                        factors such as temperature and tracking water and feed consumption. These types of statistics are
                                        helpful to gain some insight into how a house is functioning as a whole, they do a poor job in actively 
                                        monitoring the animals. For example, when looking solely at the aggregate water consumption of a house, 
                                        there isn’t a way to tell whether all the birds are hydrated properly or if some are drinking too much or 
                                        too little.
                                        </Typography>
                                        <Typography pr={medScreen? 0:smallScreen? 0:10} width={smallScreen? "100%":"100%"} textAlign="left" pt={3} pb={1} sx={{ letterSpacing: 1 }} variant={smallScreen ? 'body2' :  medScreen? "body2":'body1'} color="secondary.main">
                                        Recent advancements in the agricultural technology community have led to the creation of new, 
                                        more powerful welfare monitoring systems for poultry farmers, which utilize machine learning 
                                        to gather and organize welfare data. Camera-based solutions have been making waves in the industry: 
                                        they’re a step in the right direction, but cameras are expensive to implement and aren’t optimal 
                                        for monitoring every type of welfare outcome.
                                        </Typography>



                                    </Grid>
                                </Grid>
                            </Grid>

                        </Box>

                        
                        
                    </Grid>
                    
                </Grid>
               
        </Box>
    )
}