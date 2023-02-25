import { Box, Container, Typography } from '@mui/material'
import { ApplicationForm } from '../components/ApplicationForm';
import {TertiaryButton } from '../components/Buttons';
import { SubHeading } from '../components/SubHeading';
import { HowRPWorks, ReadyToWorkWithUs, RefferalFaqs } from './sections/referralSections';
import React from 'react';




const subHeading = `Make Introductions, Earn Commissions.`
const subTitle = `Take a trip on us with our Referral Incentive Program and earn a cash bonus for every referral hired with Icon.`

export const Referral = () => {
  return (
    <Box id="referral-program">
      <Box component="section" id="subheading-bg" pt={4} pb={4} sx={{minHeight:{xs:'auto', md:'250px'}, display:'flex', alignItems:'center', color:"whiteColor.main" }}>
          <Container maxWidth="lg">
          <Box sx={{ display: { xs: 'flex' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: { sx: 'space-around', sm: 'space-between' },alignItems:'center'}}>
              <SubHeading subHeading={subHeading} subTitle={subTitle} subTitleWidth='50%' subHeadingWidth='50%' sx={{marginBottom:{xs:'20px',sm:'auto'}}} />
            <TertiaryButton buttonText='Referral Form' href='#referral-form' sx={{ marginTop: { xs: '20px', sm: '0px' } }} />
            </Box>
          </Container>
      </Box>
      <Box component="section" sx={{ backgroundColor: 'whiteColor.main', padding:{xs:'64px 20px 20px 20px', md:'64px'} }}  color="secondary.main">
        <HowRPWorks />
      </Box>
      <Box component="section" sx={{ backgroundColor: 'primary.main', padding:{xs:'64px 20px 20px 20px', md:'64px'} }}  color="secondary.main">
        <ReadyToWorkWithUs />
      </Box>
      <Box component="section" sx={{ backgroundColor: 'primary.light', padding:{xs:'64px 20px 20px 20px', md:'64px'} }}  color="secondary.main">
        <RefferalFaqs />
      </Box>
      <Box component='section' id="referral-form" sx={{ backgroundColor: 'primary.main' }}>
        <Container maxWidth='lg'>
          <Box sx={{ display: 'flex', padding: {xs:'20px',sm:'2rem'},flexDirection:{xs:'column',sm:'row'}, justifyContent:'space-between'}}>
            <Box className='apply-title' sx={{color:'whiteColor.main', minWidth: {xs:'100%',sm:'30%'}, marginBottom:{xs:'20px', sm:'0px'} }}>
              <Typography variant='h1' sx={{ textAlign: { xs: 'center', sm: 'left' } }}>Refer</Typography>
              <Typography variant="body1" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>Please fill out the form for your referral.</Typography>
            </Box>
            <ApplicationForm />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
