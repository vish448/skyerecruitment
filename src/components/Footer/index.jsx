import { AppBar, Container, Toolbar, Typography, Stack, Box, Paper, Grid,styled, Link } from '@mui/material'
import React from 'react'
import { Footernav } from '../Navigation';
import { Logo } from '../Logo'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});


export const Footer = () => {
    return (
      
        <AppBar position='sticky' color='quaternary' sx={{boxShadow: 'none'}}>
            <StyledToolbar>
                <Container maxWidth="lg">
                    <Box className="footer" pt={4} pb={4} sx={{display:"flex",flexDirection: {xs:'column', md:'row'}, justifyContent:"space-between"}}>
                        <Box className="footer-left" sx={{flexGrow:3}}>
                            <Logo />
                            <Box sx={{display: { xs: 'none', md: 'flex' }}}>
                                <Footernav textColor="#FFFFFF" id="footer" />
                            </Box>
                            <Box sx={{display:"flex"}} mt={2}>
                                <Typography variant='body2'  mb={2} mr={4} sx={{
                                        color: "whiteColor.main", fontFamily: "DM Sans", fontWeight: '400'
                                    }} >
                                        <Link href="mailto:info@skyetechnologies.ca" underline='none' color='whiteColor.main'>info@skyetechnologies.ca</Link><br />
                                        (123)-322-0987
                                </Typography>
                                <Typography variant='body2' mb={2} sx={{
                                    color: "whiteColor.main", fontFamily: "DM Sans", fontWeight: '400'
                                }} >
                                
                                        180 John St.<br />
                                        Toronto, On, M5T 1X5<br />
                                        Canada
                            </Typography>
                            </Box>
                        </Box>
                        <Box className='footer-right' sx={{ flexGrow: 0, width: { md: '460px' } }} >
                            <Typography variant='body2' sx={{
                                color: "whiteColor.main", fontFamily: "DM Sans", fontWeight: '400'}} >We are Skye Technologies, making ever lasting placements.</Typography><br/>
                            <Typography variant='body2' sx={{ color: "whiteColor.main", fontFamily:"DM Sans", fontWeight: '400'}}>Based out of Toronto, ON, Icon is and equal partner agency.</Typography>
                            <Stack direction="row" mt={4} spacing={3} sx={{ color: "whiteColor.main" }}>
                                <Link href="https://www.facebook.com"><Facebook /></Link>
                                <Link href="https://www.instagram.com"><Instagram /></Link>
                                <Link href="https://www.twitter.com"><Twitter /></Link>
                                <Link href="https://www.linkedin.com"><LinkedIn /></Link>
                            </Stack>
                            <Typography variant='copyright' mb={2} sx={{ color: "whiteColor.main", fontFamily:"DM Sans" }}>Skye Technologies &copy; All rights reserved 2023</Typography>

                        </Box>
                    </Box>
                </Container>
            </StyledToolbar>
        </AppBar>
  
     
  )
}

export const Footer1 = () => {
    return (
            <footer>
                <Paper elevation={3}>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <h2>Contact Us</h2>
                            <p>
                                Phone: 555-555-5555<br />
                                Email: info@example.com
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h2>Follow Us</h2>
                            <p>
                                Facebook: www.facebook.com/example<br />
                                Twitter: www.twitter.com/example
                            </p>
                        </Grid>
                    </Grid>
                </Paper>
            </footer>
    )
}