import { Box, Card, CardMedia, styled, Typography } from '@mui/material'
import { Fragment } from 'react'
import aboutUsOne from '../../images/meet-skye-1.png'
import aboutUsTwo from '../../images/meet-skye-2.png'
import aboutUsThree from '../../images/meet-skye-3.png'
import React from 'react';

import { theme } from '../../theme'

const blackColor = theme.palette.blackColor.main
const whiteColor = theme.palette.whiteColor.main

const primaryColor = theme.palette.primary.main
const CardMediaStyles = styled(CardMedia)({
    borderRadius: "0px !important",
    borderStyle: "solid !important",
    borderWidth: "2px !important",
    boxShadow: `5px 5px 1px 1px ${blackColor} !important`,
    borderColor: `${blackColor} !important`,
    textTransform: "none !important",
})

const CardStyles = styled(Card)({
    borderRadius: "15px !important",
    backgroundColor: `${primaryColor}`,
    color: `${whiteColor}`,
    textAlign: 'center',
    padding: '10px 40px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    'img':{
        borderRadius: '50%',
        width: '150px',
        height: '150px'
    },
    [theme.breakpoints.down("md")]: {
        marginBottom: "1rem",
    },
    [theme.breakpoints.up("xs")]: {
        marginRight: "1rem",
    },

})

export const AboutSkye = () => {
    return (
      <Fragment>
            <Typography variant='h2'>About <Typography variant='span' sx={{color:'primary.main', fontFamily:'poppins'}} >SKYE.</Typography></Typography>
            <Typography variant='body1'>Started in 2017, with one idea in mind, to bring Technology + Talent together to create an unparalleled hiring experience for our partners. <br /> <br />Three partners coming together from different IT and recruitment backgrounds, we saw the gap between Technology + Talent and this is where our journey began.</Typography>
            <Box p={4} sx={{ flexGrow: '1', display: 'flex', flexDirection:{xs:'column',sm:'row'} }} spacing={2}>
                <CardMediaStyles component="img" src={aboutUsOne} alt="aboutUsOne" sx={{ margin: { xs: 'auto', md: '60px 20px' } }} />
                <CardMediaStyles component="img" src={aboutUsTwo} alt="aboutUsTwo" sx={{ margin: { xs: 'auto', md: '40px 20px' }, display:{xs:'none',sm:'block'} }} />
                <CardMediaStyles component="img" src={aboutUsThree} alt="aboutUsThree" sx={{ margin: { xs: 'auto', md: '20px 20px' }, display:{xs:'none',sm:'block'} }} />
            </Box>
      </Fragment>
  )
}

export const AboutSkyeTeam = () => {
    return (
        <>
          <Typography variant="body1" sx={{textAlign:'center'}}>The talent market is more competitive than it has ever been. That is why our candidates are our number one priority. We strive to create long lasting relationships with our talent to better understand their wants and needs. In return, this helps us deliver… for you! <br/><br/>

          We sacrifice quantity for quality. We understand your time is important. The technology industry is fast and changing everyday. We want to support your growth to reach your full potential and have you focus on the important stuff.
            </Typography>
            <Typography variant="h4" pt={4} pb={4} sx={{textAlign:'center'}}>
            We are a lean and agile agency which allows us to be
cost-effective while providing top tier talent solutions.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center' },flexDirection: {xs:'column', md:'row'} }}>
                <CardStyles>
                    <CardMedia component="img" src='https://material-ui.com/static/images/avatar/1.jpg' alt="Sam"/>
                    <Typography variant='h6' pt={1}>Sam Patrick</Typography>
                    <Typography variant="body1">Director, Recruitment</Typography>
                </CardStyles>
                <CardStyles>
                    <CardMedia component="img" src='https://material-ui.com/static/images/avatar/2.jpg' alt="david"/>
                    <Typography variant='h6' pt={1}>Jason Beaver</Typography>
                    <Typography variant="body1">Partner</Typography>
                </CardStyles>
            </Box>
        </>
    )

 }
