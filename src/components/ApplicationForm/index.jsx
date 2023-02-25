import { CloudUpload } from '@mui/icons-material';
import { Box, Grid, IconButton, styled, TextField, Typography } from '@mui/material';
import { PrimaryButton } from '../Buttons';
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

export const ApplicationForm = () => {
  return (
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
          <Typography variant='h6' pb={1} color='primary.main'>Upload Resume</Typography>
            <IconButton color="primary" id="resume" aria-label="upload resume" component="label">
              <input hidden accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" type="file" />
              <CloudUpload sx={{ fontSize:40 }} />
            </IconButton>
        </Grid>
        
        <Grid item xs={11}>
          <Box sx={{ width: '100%', textAlign:'center' }} pt={4} pb={4}>
            <PrimaryButton buttonText="Submit" />
          </Box>
         
          </Grid>
    
  </Grid>
    </form>
    </FormStyles>
  )
}
