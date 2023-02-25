

import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography, CardMedia } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import IdentityImage from '../../images/identity.png'
import ReferImage from '../../images/refer.png'
import EarnImage from '../../images/earn.png'
import { TertiaryButton } from '../../components/Buttons'



export const HowRPWorks = () => {
  return (
    <Container maxWidth='lg'>
      <Box id="howRPWorks" pb={4}>
        <Typography variant="h3" color="blackColor.main" sx={{marginBottom:'3rem'}}>How the Program Works</Typography>
      </Box>
      <Box className='identity' pb={4} sx={{ display: 'flex', flexDirection: {xs:'column', md:'row'}, alignItems:'center', justifyContent:'space-between' }} >
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' },paddingBottom: { xs: '20px', md: '0px' }, maxWidth:'500px' }} >
          <Typography variant="h5">Identity</Typography>
          <Typography variant="body1">Click here to view open jobs. Share with your network or invite a friend to directly apply.</Typography>
        </Box>
        <CardMedia component="img" src={IdentityImage} alt="Identity" sx={{maxWidth:'400px', padding:{xs:'1rem',sm:'auto'}}} />
      </Box>

      <Box className='refer' pb={4} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }} >
        <CardMedia component="img" src={ReferImage} alt="Refer" sx={{maxWidth:'400px'}} />
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' },paddingBottom: { xs: '20px', md: '0px' }, maxWidth:'500px' }} >
          <Typography variant="h5">Refer</Typography>
          <Typography variant="body1">If your referral is hired, you'll get paid up to $800 in cash! It's really that easy.</Typography>
        </Box>
      </Box>

      <Box className='refer' pb={4} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }} >
        <Box sx={{ paddingRight: { xs: '0px', md: '20px' },paddingBottom: { xs: '20px', md: '0px' }, maxWidth:'500px' }} >
          <Typography variant="h5">Earn</Typography>
          <Typography variant="body1">After three successful referrals, pack your bags for an all-inclusive vacation trip!</Typography>
        </Box>
        <CardMedia component="img" src={EarnImage} alt="Earn" sx={{maxWidth:'400px'}} />
      </Box>
    </Container>
  )
}

export const ReadyToWorkWithUs = () => {
  return (
    <Container maxWidth='lg'>
      <Box pb={4}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }} >
          <Typography variant="h3" color="whiteColor.main" >Ready to work with us?</Typography>
          <Typography variant='body1' color='whiteColor.main' mb={2} pt={2} pb={2}>Apply or refer a friend now! Click the button to proceed with your application. </Typography> 
          <TertiaryButton buttonText='Apply Now' />
        </Container>
      </Box>
    </Container>
  )
}

export const RefferalFaqs = () => {

    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <Container maxWidth="lg" sx={{textAlign:'center'}} >
        <Typography variant="h3" color="blackColor.main" sx={{marginBottom:'3rem'}}>Frequently Asked Questions</Typography>
        <Box id='referralFaqAccordian'>
          <Accordion sx={{padding:'1rem'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color =  {expanded === 'panel1' ? 'primary' : 'secondary' } />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography color = {expanded === 'panel1' ? 'primary.main' : 'secondary.main' } >How does it work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1' sx={{textAlign:'left'}}>
              Dedicated IT recruiters are immersed in the tech market and have a deep understanding of what’s required to attract the best IT talent. The IT sector is extremely competitive and the highly specialized nature of IT work makes it challenging to recruiting IT professionals if you’re not active in the industry. In-depth knowledge about the tech landscape is invaluable when you’re trying to sign an in demand candidate who has several offers on the table. Our team has a dedicated market intelligence team that provides data and research about the tech landscape across Canada. We can analyze your processes, compensation, and provide consultative support to help you attract the best quality candidates.
              </Typography>
            </AccordionDetails>
          </Accordion>
  
          <Accordion sx={{padding:'1rem'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color = {expanded === 'panel2' ? 'primary' : 'secondary' } />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography color = {expanded === 'panel2' ? 'primary' : 'secondary' }>How will I ger paid?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant='body1' sx={{textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
  
          <Accordion sx={{padding:'1rem'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color = {expanded === 'panel3' ? 'primary' : 'secondary' } />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography color = {expanded === 'panel3' ? 'primary.main' : 'secondary.main' }>What kind of opporunities can I refer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant='body1' sx={{textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion sx={{padding:'1rem'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color = {expanded === 'panel4' ? 'primary' : 'secondary' } />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography color = {expanded === 'panel4' ? 'primary.main' : 'secondary.main' }>What is Skye's expertise</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant='body1' sx={{textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion sx={{padding:'1rem'}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color = {expanded === 'panel5' ? 'primary' : 'secondary' } />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography color = {expanded === 'panel5' ? 'primary.main' : 'secondary.main' }>How do we keep track?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant='body1' sx={{textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    )
  }