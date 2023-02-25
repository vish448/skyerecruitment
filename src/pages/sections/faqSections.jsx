import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Container, Typography,styled, CardMedia} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import recruitIcon from '../../images/recruit_icn.png'
import servicesIcon from '../../images/services_icn.png'
import teamIcon from '../../images/team_icn.png'



const PrimaryCardStyles = styled(Card)({
  borderRadius: "0px !important",
  borderStyle: "solid !important",
  borderWidth: "2px !important",
  boxShadow: " -5px 5px 1px 1px #334C84 !important",
  borderColor: "#334C84 !important",
  textTransform: "none !important",
})


export const FaqAccordian = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" sx={{textAlign:'center'}} >
      <Typography variant="h3" color="secondary.main" sx={{marginBottom:'3rem'}}> Find better, brighter, more innovative tech talent for your team.</Typography>
      <Box id='faqAccordian'>
        <Accordion sx={{padding:'1rem'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color =  {expanded === 'panel1' ? 'primary' : 'secondary' } />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
            <Typography color = {expanded === 'panel1' ? 'primary.main' : 'secondary.main' } >Deeper understanding of the labour market</Typography>
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
        <Typography color = {expanded === 'panel2' ? 'primary' : 'secondary' }>Tap into an established network</Typography>
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
          <Typography color = {expanded === 'panel3' ? 'primary.main' : 'secondary.main' }>Fill vacancies quickly</Typography>
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
          <Typography color = {expanded === 'panel4' ? 'primary.main' : 'secondary.main' }>Access quality talent quickly</Typography>
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
          <Typography color = {expanded === 'panel5' ? 'primary.main' : 'secondary.main' }>Focus HR’s time strategically</Typography>
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

export const WhoDoWeWorkWithSection = () => {
  return (
    <Container maxWidth="lg" sx={{textAlign:'center'}} >
      <Typography variant="h3" color="secondary.main" sx={{ marginBottom: '1rem' }}> Who Do We Work With?</Typography>
      <Typography variant="body1" color="secondary.main" sx={{ marginBottom: '3rem' }}>We work with start-ups, mid-size companies, and larger firms with up to 500 employees. We work primarily within the Canadian market, offering services to permanent IT placements. </Typography>
      <Typography variant="h3" color="primary.main" sx={{ marginBottom: '3rem' }}>OUR FOCUS </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }} >
      <PrimaryCardStyles sx={{ boxShadow: 'none',margin: '10px', flexGrow: '1',flexShrink:'1', width: { xs: 'auto', md:'380px' },padding:{xs:'10px'}, borderRadius:'8px'}}>
          <CardContent color="secondary.main" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <CardMedia component="img" src={recruitIcon} alt="recruitIcon" sx={{ maxWidth: '55px', height: 'auto' }} />
          <Typography variant='h5' pt={2} pb={1} color="primary.main">Who Do We Recurit?</Typography>
          <Typography variant='body1'>Software Deveopers<br/>QA<br/>DevOps
          Data Engineering <br/>
          Product Managers <br/>
          Design<br/></Typography>
        </CardContent>
      </PrimaryCardStyles>

      <PrimaryCardStyles sx={{ boxShadow: 'none',margin: '10px', flexGrow: '1',flexShrink:'1', width: { xs: 'auto', md:'380px' },padding:{xs:'10px'}, borderRadius:'8px'}}>
          <CardContent color="secondary.main" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <CardMedia component="img" src={servicesIcon} alt="servicesIcon" sx={{ maxWidth: '55px', height: 'auto' }} />

          <Typography variant='h5' pt={2} pb={1} color="primary.main">Types of Services</Typography>
          <Typography variant='body1'>Permanent searches<br/><br/>

          RPO model, flat fee, varies depending on volume of roles and such.
          </Typography>
        </CardContent>
      </PrimaryCardStyles>

      <PrimaryCardStyles sx={{ boxShadow: 'none',margin: '10px', flexGrow: '1',flexShrink:'1', width: { xs: 'auto', md:'380px' },padding:{xs:'10px'}, borderRadius:'8px'}}>
          <CardContent color="secondary.main" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <CardMedia component="img" src={teamIcon} alt="teamIcon" sx={{ maxWidth: '55px', height: 'auto' }} />

          <Typography variant='h5' pt={2} pb={1} color="primary.main">Scaling your Team </Typography>
          <Typography variant='body1'>We work with start-ups, mid-size companies, and larger firms with up to 500 employees. We work primarily within the Canadian market, offering services to permanent IT placements. 
          </Typography>
        </CardContent>
      </PrimaryCardStyles>
      </Box>
    </Container>
  )
}