
import { Box, Card, Container, styled, Typography, Link } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React, { Fragment } from 'react'

const PrimaryCardStyles = styled(Card)({
  borderRadius: "0px !important",
  borderStyle: "solid !important",
  borderWidth: "2px !important",
  boxShadow: " -5px 5px 1px 1px #334C84 !important",
  borderColor: "#334C84 !important",
  textTransform: "none !important",
})


export const Letstalk = () => {
  return (
    <Fragment>
    <Box component="section" sx={{ backgroundColor: 'primary.light', padding:{xs:'64px 20px 20px 20px', md:'64px'} }}  color="secondary.main">
      <Container maxWidth="lg">
        <Box className='talk-section' variant="section" sx={{display:'flex', flexDirection:{xs:'column', md:'row'},justifyContent:"space-between" }}>
          <Box>
            <Typography variant='h3' color="secondary.main">Let's Talk</Typography>
            <Typography variant='body1'sx={{maxWidth:'300px', paddingBottom:'1rem'}} >Let's talk about how to drive more exposure, sales, and impact for your brand.</Typography>
            <Box>
              <Typography sx={{ display: 'flex', alignItems: 'center', paddingBottom:'0.5rem' }}><EmailIcon color='primary'/><Link href="mailto:info@skyetechnologies.ca" underline='none' color="secondary.main">info@skyetechnologies.ca</Link></Typography>
              <Typography sx={{display:'flex', alignItems:'center'}}><LocalPhoneIcon color="primary" />(123)-322-0987</Typography>
            </Box>
          </Box>
          <Box>
            <PrimaryCardStyles sx={{ boxShadow: 'none',margin: '10px',padding:{xs:'10px'}, borderRadius:'8px'}}>
             Calendy Plugin
            </PrimaryCardStyles>
          </Box>
        </Box>
        
      
      </Container>
      
      </Box>
      <Box className='maps-section' variant="section">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1807244560687!2d-79.38058354830639!3d43.644408160913656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2c9130db6b%3A0x45c1f4bdb522d80b!2s185%20Bay%20St.%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1674076686020!5m2!1sen!2sca" title="location" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    
    </Fragment>
  )
}
