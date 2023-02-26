import { Box, Button, Card, styled, Typography } from "@mui/material"
import React from 'react';


import { theme } from '../../theme'
const blackColor = theme.palette.blackColor.main
const whiteColor = theme.palette.whiteColor.main
//const primaryColor = theme.palette.primary.main



const CardStyles = styled(Card)({
    backgroundColor: `${whiteColor}`,
    color: `${blackColor}`,
    padding: '10px',
    [theme.breakpoints.down("md")]: {
        margin: "0.5rem",
    },
    [theme.breakpoints.up("xs")]: {
        margin: "0.5rem",
    },

})

export const JobPostingSections = ({ jobDetails }) => {
    //const jobRelativePath = '../../jobs/';
  return (
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: { xs: 'auto', sm: 'wrap' }, flex:'auto' }}>
          {jobDetails.map(jd => (
              
              <CardStyles sx={{ width: { xs:'auto',sm:'auto',md:'30%' } } } key={jd.jobId}>
                  <Typography variant="h4">{jd.jobTitle}</Typography> 
                  <Typography variant="h4" pb={4} sx={{color:"greyColor.dark", fontFamily:'DM Sans', fontWeight:'400', fontSize:'1.1rem'}}>{jd.companyName} | {jd.city},{jd.state}</Typography>
                  <Typography variant="body1" pb={4} sx={{ color: "blackColor.light" }}>{jd.shortDesc}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'row' }, justifyContent:'space-between'}}>
                      <Typography variant="h4" sx={{ marginRight: '20px' }}>${jd.salary} <Box component="span" sx={{color:"greyColor.dark", fontSize:'0.8rem',fontFamily:'DM Sans', fontWeight:'400'}}>/ {jd.payFrequency}</Box></Typography> 
                      <Button variant="contained" sx={{ borderRadius: '0px', padding: '10px 20px' }} href='jobdetails' data={jobDetails}>Apply</Button>
                      </Box>
                  </CardStyles>
            
          ))}
          </Box>
      
  )
}
