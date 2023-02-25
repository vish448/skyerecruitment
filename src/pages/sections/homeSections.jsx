import {Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import {PrimaryButton, TertiaryButton } from '../../components/Buttons'
import penIcon from '../../images/pen_icn.png'
import chatIcon from '../../images/chat_icn.png'
import cloudIcon from '../../images/cloud_icn.png'
import searchIcon from '../../images/search_icn.png'
import settingsIcon from '../../images/settings_icn.png'
import improveIcon from '../../images/improve_icn.png'
import slider1 from '../../images/slider1.png'
import { Fragment } from 'react'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import React from 'react';

const PrimaryCardStyles = styled(Card)({
  borderRadius: "0px !important",
  borderStyle: "solid !important",
  borderWidth: "2px !important",
  boxShadow: " -5px 5px 1px 1px #334C84 !important",
  borderColor: "#334C84 !important",
  textTransform: "none !important",
})

const SecondaryCardStyles = styled(Card)({
  borderRadius: "0px !important",
  borderStyle: "solid !important",
  borderWidth: "2px !important",
  boxShadow: " 5px 5px 1px 1px #334C84 !important",
  borderColor: "#334C84 !important",
  textTransform: "none !important",
})


export const OurStoryCardOne = () => {
  return (
    <PrimaryCardStyles sx={{ boxShadow: 'none',margin: '10px', flexGrow: '1',flexShrink:'1', width: { xs: 'auto', md:'380px' },padding:{xs:'10px'}, borderRadius:'8px'}}>
      <CardContent  color="secondary.main" sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
        <Typography variant='h3' pt={1} pb={1} color="primary.main">1500+</Typography>
        <Typography variant='body1'>Since we opened in 2017 we've connected with over 1500+ IT candidates.</Typography>
      </CardContent>
    </PrimaryCardStyles>
  )
}

export const OurStoryCardTwo = () => {
  return (
    <PrimaryCardStyles sx={{ boxShadow: 'none',margin: '10px', flexGrow: '1',flexShrink:'1', width: { xs: 'auto', md:'380px' },padding:{xs:'10px'}, borderRadius:'8px'}}>
      <CardContent  color="secondary.main" sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
        <Typography variant='h3' pt={1} pb={1} color="primary.main">100%+</Typography>
        <Typography variant='body1'>If our candidates don't succeed, then we haven't done our job.<br/><br/>

        Our candidates have a 100% satisfaction and acceptance rate!</Typography>
      </CardContent>
    </PrimaryCardStyles>
  )
}

export const OurStoryCardThree = () => {
  return (
    <SecondaryCardStyles sx={{ boxShadow: 'none',margin: '10px', flexGrow: '1',flexShrink:'1', width: { xs: 'auto', md:'380px' },padding:{xs:'10px'}, borderRadius:'8px'}}>
      <CardContent  color="secondary.main" sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
        <Typography variant='h3' pt={1} pb={1} color="primary.main">3</Typography>
        <Typography variant='body1'>Year on year we have consistently produced the results you are looking for 3 consecutive years.</Typography>
      </CardContent>
    </SecondaryCardStyles>
  )
}

export const TestimonialCardOne = () => {
  return (
    <PrimaryCardStyles sx={{ boxShadow: 'none',margin: '10px', flexGrow: '3',padding:{xs:'10px'}, borderRadius:'8px'}}>
      <CardContent  color="secondary.main" sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant='h3' pt={1} color="primary.main" sx={{textAlign:'left'}}>"</Typography>
        <Typography variant='body1' sx={{textAlign:'left'}} pb={1}>The team at SKYE was a pleasure to work with, and helped me find the perfect candidate for the job.</Typography>
        <Typography variant='h6' sx={{textAlign:'right'}}>- Luka Tompson</Typography>
        <Typography variant='body1' sx={{textAlign:'right'}}>Synergy Software</Typography>
      </CardContent>
    </PrimaryCardStyles>
  )
}
export const WhyUsSection = () => {
  return (
    <Container maxWidth="lg" sx={{textAlign:'center'}} >
    <Typography variant="h3" color="otherColor.light"> Why SKYE?</Typography>
    <Typography variant='body1' color="otherColor.light" mb={2} pt={2} pb={2}>We are dedicated IT recruiters who are immersed in the tech market and have a deep understanding of what's required to attract the best IT talent. </Typography>
    <Box sx={{ display: 'flex', justifyContent:'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
      <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', width: { xs: 'auto', md: '380px' } }}>
        <CardContent color="otherColor.light" sx={{display:'flex', alignItems:'center',flexDirection:'column',}}>
          <CardMedia component="img" src={searchIcon} alt="searchIcon" sx={{ maxWidth: '80px', height: 'auto' }} />
          <Typography variant='h4' color="otherColor.light" pt={1} pb={1}>Reduce Time-per-hire</Typography>
          <Typography variant='body1' color="otherColor.light">Hire target candidates faster and more efficiently through active sourcing</Typography>
        </CardContent>
      </Card>
      <Card sx={{ backgroundColor: 'transparent', boxShadow:'none',  width: { xs: 'auto', md: '380px' } }}>
        <CardContent  color="otherColor.light" sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
          <CardMedia component="img" src={improveIcon} alt="searchIcon" sx={{ maxWidth: '80px', height: 'auto' }} />
          <Typography variant='h4' color="otherColor.light" pt={1} pb={1}>Improve Scalability</Typography>
          <Typography variant='body1' color="otherColor.light">Get recruiting manpower right when you need it and grow your team.</Typography>
        </CardContent>
      </Card>
      <Card sx={{ backgroundColor: 'transparent', boxShadow:'none' , width: { xs: 'auto', md: '380px' } }}>
        <CardContent  color="otherColor.light" sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
          <CardMedia component="img" src={settingsIcon} alt="searchIcon" sx={{ maxWidth: '80px', height: 'auto' }} />
          <Typography variant='h4' color="otherColor.light" pt={1} pb={1}>No more Tedious Work</Typography>
          <Typography variant='body1' color="otherColor.light">Focus on your high-value tasks. Engage only with pre-qualified candidates.</Typography>
        </CardContent>
      </Card>
    </Box>
    <Box pt={8} pb={8} >
      <TertiaryButton buttonText="Learn More About Our services" href="\services" />
    </Box>
  </Container>
  )
  
}

export const GrowthSection = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }} >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
        <Card sx={{ backgroundColor: '#ffffff38', boxShadow: 'none',margin: '10px', flexGrow: '1',flexShrink:'1', width: { xs: 'auto', md:'380px' },padding:{xs:'10px', md:'24px'}, borderRadius:'8px'}}>
          <CardContent  color="otherColor.light" sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
            <CardMedia component="img" src={chatIcon} alt="chatIcon" sx={{ maxWidth: '80px', height: 'auto' }} />
            <Typography variant='h4' color="otherColor.light" pt={1} pb={1}>Client and Candidate Relationships</Typography>
            <Typography variant='body1' color="otherColor.light">From understanding your specific hiring needs to connecting with candidates to learning their specific wants. It's a matchmake in heaven.</Typography>
          </CardContent>
    </Card>
    <Card sx={{ backgroundColor: '#ffffff38', boxShadow: 'none', margin:'10px', flexGrow:'1',flexShrink:'1',width: { xs: 'auto', md:'380px' },padding:{xs:'10px', md:'24px'}, borderRadius:'8px'}}>
      <CardContent  color="otherColor.light" sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
        <CardMedia component="img" src={cloudIcon} alt="cloudIcon" sx={{ maxWidth: '80px', height: 'auto' }} />
        <Typography variant='h4' color="otherColor.light" pt={1} pb={1}>Proprietary Database and Network</Typography>
        <Typography variant='body1' color="otherColor.light">With our proprietary database of over 2000+ candidates, we have access to talent that isn't out there online. Not to mention our 20+ years of experience in recruitment we have a current and growing network of IT relationships.</Typography>
      </CardContent>
    </Card>
    <Card sx={{ backgroundColor: '#ffffff38', boxShadow: 'none', margin:'10px', flexGrow:'1',flexShrink:'1',width: { xs: 'auto', md:'380px' },padding:{xs:'10px', md:'24px'}, borderRadius:'8px'}}>
      <CardContent  color="otherColor.light" sx={{display:'flex', alignItems:'center',flexDirection:'column'}}>
        <CardMedia component="img" src={penIcon} alt="penIcon" sx={{ maxWidth: '80px', height: 'auto' }} />
        <Typography variant='h4' color="otherColor.light" pt={1} pb={1}>Pre-Assessment Screening</Typography>
        <Typography variant='body1' color="otherColor.light">We take a thorough and strategic approach to our screening assessment to ensure we are getting the right candidates in front of you. This process is no fluff. We meet all our candidates in person and ask the right questions.</Typography>
      </CardContent>
        </Card>
       
       
      </Box>
      <Box pt={8} pb={8} >
     
      <TertiaryButton buttonText="Let's Connect" href="/letstalk" />
      </Box>
    </Container>
  )
}

export const TopSliderSection = () => {
  return (
    <Container maxWidth="lg" >
    <Box pt={4} pb={4} sx={{ display: 'flex', flexDirection: {xs:'column', md:'row'} }}>
      <Box sx={{flexGrow:'1' ,color:'otherColor.main'}}>
        <Typography variant='h1' color="primary.main" mb={3}>Techology + Talent</Typography>
        <Typography variant='body1' color="quaternary.main" mb={2}>Skye has a nearly 20-year track record of helping some of most well-known North American startups, scaleups and enterprises solve technical talent challenges.</Typography>
        <Typography variant='body1' color="quaternary.main" mb={3}>We help our clients develop a talent strategy, streamline the hiring process, and build qualified, talented and motivated teams.</Typography>
        <PrimaryButton buttonText="Let's Talk" sx={{ display: { xs: 'flex'}, flexDirection: {xs:'column',sm:'row'}, margin: { xs: '0 auto' } }} href="\letstalk" />
      </Box>
      <Box p={4} sx={{ flexGrow: '1' }}>
        <CardMedia component="img" src={slider1} alt="slider1" />
      </Box>
    </Box>
   
  </Container>
  )
}

export const LetsTalkSection = () => { 
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }} >
      <SmsOutlinedIcon fontSize='large' />
      <Typography variant="h3" > We'd love to chat</Typography>
      <Typography variant='body1' mb={2} pt={2} pb={2}>Questions? Chat with a representative now." </Typography> 
      <Box pt={2} pb={2} >
        <TertiaryButton buttonText="Let's Talk" href='letstalk' />
      </Box>
    </Container>
  )
}

export const OurStorySectionTitles = () => {
  return (
    <Fragment> 
        <Typography variant="h3" color="secondary.main">Our Sucess Story</Typography>
        <Typography variant='body1' color="secondary.main" mb={2} pt={2} pb={2} sx={{ width:{xs:'auto', md:'550px'}}}>We are dedicated IT recruiters who are immersed in the tech market and have a deep understanding of what’s required to attract the best IT talent. </Typography>
      </Fragment>
        
  )
}

export const TestimonialSectionTitles = (props) => {

  return (
    <Fragment> 
      <Typography variant="h3" color={props.color} sx={{ textAlign: { xs: 'center', md: 'left' } }}>{props.title}</Typography>
      </Fragment>
        
  )
}

// Setting default value for props
TestimonialSectionTitles.defaultProps = {
  color: 'secondary.main'
};
