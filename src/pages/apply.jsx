import { Box, Container, Grid, styled, TextField, Typography } from '@mui/material'
import { PrimaryButton } from '../components/Buttons';
import React from 'react';



const FormStyles = styled(Box)(({ theme }) => ({
  borderRadius: "0px !important",
  borderStyle: "solid !important",
  textTransform: "none !important",
  backgroundColor: "#FFFFFF",
  boxShadow:
      `#FFFFFF 1px 0px 0px -2px inset, ${theme.palette.blackColor.main} -7px 7px 0px -2px, #FFFFFF -7px 7px !important`,

  
  [theme.breakpoints.up('sm')]: {
    marginLeft: '20px',
    padding: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '20px',
    padding: '0.5rem',
  },


}));

export const ApplyNow = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.light' }}>
      <Container maxWidth='lg'>
        <Box sx={{ display: 'flex', padding: {xs:'0px',sm:'2rem'},flexDirection:{xs:'column',sm:'row'}, justifyContent:'space-between'}}>
        <Box className='apply-title' sx={{ minWidth: {xs:'100%',sm:'30%'}, marginBottom:{xs:'20px', sm:'0px'} }}>
          <Typography variant='h1' sx={{color:'secondary.main'}}>Apply</Typography>
          <Typography variant="body1">Please fill out the fomr for your application.</Typography>
        </Box>
          <FormStyles className='applyForm' sx={{ minWidth: {xs:'80%',sm:'50%'} }}>
            <form>
            <Grid container spacing={2}>
                <Grid item xs={11} sm={6}>
                <TextField fullWidth helperText="Enter Your First Name" id="first-name" label="First Name" variant="standard" />
              </Grid>
              
              <Grid item xs={11} sm={6}>
              <TextField fullWidth helperText="Enter Your Last Name" id="last-name" label="Last Name" variant="standard" />
              </Grid>
              <Grid item xs={11}>
              <TextField helperText="Enter Your Email" fullWidth type="email" id="email" label="Email" variant="standard" />
                </Grid>
                
                <Grid item xs={11}>
                  <TextField fullWidth helperText="Enter Your Phone Number"  id="phone-number" label="Phone Number" variant="standard"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>

                </Grid>
                
                <Grid item xs={11} sm={6}>
                <TextField fullWidth helperText="Enter Your LinkeIn Profile" id="linkedin-profile" label="LinkedIn Profile" variant="standard" />
                </Grid>
                
                <Grid item xs={11} sm={6}>
                <TextField fullWidth helperText="Enter your Referal(if any)" id="referal" label="Referal" variant="standard" />
                </Grid>
                
                <Grid item xs={6}>
                  <Typography variant='h6' pb={1}>Upload Resume</Typography>
                  <input type="file" id="resume" name="filename" />
                </Grid>
                
                <Grid item xs={11}>
                  <Box sx={{ width: '100%', textAlign:'center' }} pt={4}>
                    <PrimaryButton buttonText="Submit" />
                  </Box>
                 
                  </Grid>
            
          </Grid>
            </form>
          </FormStyles>
        </Box>
      </Container>
    </Box>
  )
}
