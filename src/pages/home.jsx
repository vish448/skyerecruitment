import {Container, Typography,Box } from '@mui/material'
import { OurStoryCardOne,OurStoryCardTwo, OurStoryCardThree, OurStorySectionTitles,TestimonialCardOne,TestimonialSectionTitles,GrowthSection, WhyUsSection, TopSliderSection, LetsTalkSection } from '../pages/sections/homeSections'
import React from 'react';


const Home = () => {
  return (
    <>
      <Box component="section" className='slider'>
        <TopSliderSection />
      </Box>
     
      
      <Box component="section" id="section-bg" sx={{ backgroundColor: 'primary.main', padding:{xs:'64px 20px 0px 20px', md:'64px'} }}  color="otherColor.light">
        <WhyUsSection /> 
      </Box>
      
      <Box component="section" className="growth-section-top" sx={{ backgroundColor: 'otherColor.light' , padding:{xs:'20px', md:'160px'} }} >
        <Container maxWidth="lg" sx={{textAlign:'center'}} >
          <Typography variant='h1' color="secondary.main" sx={{ fontSize: { xs: '2.5rem', md: '4.5rem' } }}>Growth is only as big as the talent around it.</Typography>
        </Container>
      </Box>
      
      <Box component="section" id="section-bg" sx={{ backgroundColor: 'primary.main', padding:{xs:'64px 20px 0px 20px', md:'64px'}}}  color="otherColor.light">
        <GrowthSection />
      </Box>
        
      <Box component="section" sx={{ backgroundColor: 'otherColor.light', padding:{xs:'64px 20px 0px 20px', md:'64px'} }}  color="secondary.main">
        <Container maxWidth="lg" sx={{ textAlign: 'center' }} >
          <Box sx={{ display:'flex', flexDirection:'column', alignItems: 'center' }}> 
            <OurStorySectionTitles/>
          </Box>
      
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
            <OurStoryCardOne />
            <OurStoryCardTwo />
            <OurStoryCardThree />
          </Box>
      </Container>
      </Box>
      
      <Box component="section" sx={{ backgroundColor: '#FBFBFB', padding:{xs:'64px 20px 20px 20px', md:'64px'} }}  color="secondary.main">
        <Container maxWidth="lg" sx={{ textAlign: 'center', display:'flex', flexDirection: {xs:'column', md:'row'} }}  >
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: '0', justifyContent: 'center', width: { xs: 'auto', md: '300px' } }}> 
            <TestimonialSectionTitles title="What Our Candidates Say About Us"/>
          </Box>
        
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TestimonialCardOne />
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ backgroundColor: 'primary.main', padding:{xs:'64px 20px 64px 20px', md:'64px'} }}  color="otherColor.light">
        <LetsTalkSection />
      </Box>
    </>

  )
}

export default Home
