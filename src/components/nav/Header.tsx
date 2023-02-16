import { AppBar, Box, Grid, Toolbar, Typography, IconButton, useMediaQuery,
  Drawer, } from "@mui/material";
import Link from "next/link";
import { OrangePrimaryButton, RedOrangePrimaryButton, RedOrangePrimaryDenseButton } from "../misc/buttons";



export default function Header() {

  return (
    
    <Box>
      <AppBar position="fixed" sx={{backgroundColor: "secondaryBg.header"}}>
          <Toolbar>
            <Grid container spacing={0} alignItems="center" direction="row">
              <Grid item>
                <img 
                style={{aspectRatio: '1/1', width: '100%', height: '50px'}}
                src="/audiotlogo.png" />
              </Grid>
              <Grid item>
                <Box sx={{ pl: 2.5 }}>
                  <Typography variant="h4" color="#f57c00">
                      <Link href="/" >audioT</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item flex={1} />
              <Grid item mx={3}>
                <Box sx={{ width:'50', height:'3', p: 2 }} borderRadius={3}>
                  <Typography variant="body1" color="text.primary">
                        <Link href="/our-mission">Our Mission</Link>
                      </Typography>
                  </Box>
              </Grid>
              <Grid item mx={3}>
                <Box  sx={{ width:'50', height:'3', p: 2 }} borderRadius={3}>
                  <Typography variant="body1" color="text.primary">
                    <Link href="/">Technology</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item mx={3}>
                <Box  sx={{ width:'50', height:'3', p: 2 }} borderRadius={3}>
                  <Typography variant="body1" color="text.primary">
                    <Link href="/about-us">About Us</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item mx={3} my={1}>
                <Link href="/contact-us">
                  <RedOrangePrimaryDenseButton>
                    Contact Us
                  </RedOrangePrimaryDenseButton>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
      <Box sx={{height: 65}}/>
  </Box>

  )
}