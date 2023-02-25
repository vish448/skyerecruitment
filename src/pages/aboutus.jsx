import { Container,Box } from "@mui/material"
import { SubHeading } from "../components/SubHeading"
import { AboutSkye, AboutSkyeTeam } from "./sections/aboutSections"
import { LetsTalkSection } from "./sections/homeSections"
import React from 'react';


const subHeading = `Our Mission`
const subTitle = `As technology experts, we use modern tools to source, attract and match the right talent for you. We have a deep and broad understanding of the market, helping us succeed where others can't.`

export const AboutUs = () => {
  return (
      <Box id="about-us">
          <Box component="section" id="subheading-bg" pt={4} pb={4} sx={{minHeight:{xs:'auto', md:'250px'}, display:'flex', alignItems:'center', color:"whiteColor.main" }}>
            <Container maxWidth="lg">
                <SubHeading subHeading={subHeading} subTitle={subTitle} subTitleWidth='50%' />
            </Container>
          </Box>

          <Box component="section"  pt={4} pb={4} sx={{ }}>
            <Container maxWidth="lg">
                <AboutSkye />
            </Container>
          </Box>
          
          <Box component="section" id="section-bg" sx={{ backgroundColor: 'primary.main', padding: { xs: '64px 20px 0px 20px', md: '64px' } }} color="otherColor.light">
            <Container maxWidth="lg">
                <AboutSkyeTeam />
            </Container>
          </Box>

          <Box component="section" sx={{ backgroundColor: 'primary.light', boxShadow:'0px -2px 1px #eee;', padding:{xs:'64px 20px 64px 20px', md:'64px'} }}  color="blackColor.main">
              <LetsTalkSection />
          </Box>


          
      </Box>
  )
}
