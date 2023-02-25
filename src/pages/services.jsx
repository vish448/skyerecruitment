import { Box, Container, Link } from "@mui/material"
import { SubHeading } from "../components/SubHeading"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LetsTalkSection, TestimonialCardOne, TestimonialSectionTitles } from "./sections/homeSections";
import { FaqAccordian, WhoDoWeWorkWithSection } from "./sections/faqSections";
import React from "react";


const subHeading = `Our Services`
const subTitle = `We identify top-tier talent, locate the right candidates with a deep skill set in the IT industry, and use next-gen tools to match you with the best candidates.`
export const Services = () => {
  return (
    <Box id="services">
      <Box component="section" id="subheading-bg" pt={4} pb={4} sx={{minHeight:{xs:'auto', md:'250px'}, display:'flex', alignItems:'center', color:"whiteColor.main" }}>
          <Container maxWidth="lg">
            <Box mb={4}>
            <SubHeading subHeading={subHeading} subTitle={subTitle} subTitleWidth='50%' subHeadingWidth='50%' />
            </Box>
            <Link sx={{display:'flex'}} mt={4} href="/letstalk" underline="none" color='whiteColor.main'>Hiring? Let's Talk <ArrowRightAltIcon/></Link>
          </Container>
      </Box>
      
      <Box component="section" sx={{ backgroundColor: 'primary.light', padding:{xs:'64px 20px 0px 20px', md:'64px'} }}  color="otherColor.light">
        <FaqAccordian />
      </Box>

  
      <Box  component="section" sx={{ backgroundColor: 'whiteColor', padding: { xs: '64px 20px 0px 20px', md: '64px' } }}>
        <WhoDoWeWorkWithSection />
      </Box>

      <Box component="section" sx={{ backgroundColor: 'primary.main', padding:{xs:'64px 20px 20px 20px', md:'64px'} }}  color="secondary.main">
        <Container maxWidth="lg" sx={{ textAlign: 'center', display:'flex', flexDirection: {xs:'column', md:'row'} }}  >
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: '0', justifyContent: 'center', width: { xs: 'auto', md: '300px' } }}> 
            <TestimonialSectionTitles title="Hear From Our Clients" color="whiteColor.main"/>
          </Box>
        
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <TestimonialCardOne />
          </Box>
        </Container>
      </Box>


      <Box component="section" sx={{ backgroundColor: 'primary.main', padding:{xs:'64px 20px 64px 20px', md:'64px'} }}  color="otherColor.light">
        <LetsTalkSection />
      </Box>
    </Box>
  )
}
