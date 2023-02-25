import { Box, Stack, Typography } from "@mui/material";
import { PrimaryButton, SecondaryButton, TertiaryButton } from '../../components/Buttons'
import React from "react";
import { Logo } from "../../components/Logo";
import CircleIcon from '@mui/icons-material/Circle';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Styleguide = () => {
    return (
      <Box p={10}>
      <Typography variant='h3' sx={{color:'primary.main', textAlign:"center"}}>
      Design Guide
  </Typography>
            <div>
                <Typography variant='h4' sx={{color:'otherColor.main'}}>
                    Logo
                </Typography>
                <Logo />
        </div>
        <div>
        <Typography variant='h4' mt={8} sx={{color:'otherColor.main'}}>
        Typography
          </Typography>
          <Typography variant="h1" sx={{ color: 'secondary.main', fontFamily:'Poppins'}}>
            H1 Poppins 72pt
          </Typography>
          <Typography variant="h2" sx={{ color: 'secondary.main', fontFamily:'Poppins'}}>
            H2 Poppins 48pt
          </Typography>
          <Typography variant="h3" sx={{ color: 'secondary.main', fontFamily:'Poppins'}}>
            H3 Poppins 36pt
          </Typography>
          <Typography variant="h4" sx={{ color: 'secondary.main', fontFamily:'Poppins'}}>
            H4 Poppins 24pt
          </Typography>
          <Typography variant="h5" sx={{ color: 'secondary.main', fontFamily:'Poppins'}}>
            H5 Poppins 20pt
          </Typography>
          <Typography variant="h6" sx={{ color: 'secondary.main', fontFamily:'Poppins'}}>
            H6 Poppins 18pt
          </Typography>
          <Typography variant="body1" sx={{ color: 'secondary.main', fontFamily:'Poppins'}}>
            Body Text DM Sans 16pt
          </Typography>
          <Typography variant="body2" sx={{ color: 'secondary.main', fontFamily:'Poppins'}}>
           Small Text DM Sans 14pt
          </Typography>
        </div>
        <Typography variant='h4' mt={8} mb={2} sx={{color:'otherColor.main',fontStyle:'italic'}}>
        Buttons
      </Typography>
        <Stack spacing={2} direction="row">
         
          <PrimaryButton buttonText='Primary Button' />
          <SecondaryButton buttonText='Secondary Button' />
          <TertiaryButton buttonText='Tertiary Button' />
        </Stack>

        <Typography variant='h4' mt={8} sx={{color:'otherColor.main',fontStyle:'italic'}}>
          Colors
        </Typography>
        <Stack spacing={2} direction="row">
          <CircleIcon sx={{ color: 'primary.main' }} />
          <CircleIcon sx={{ color: 'secondary.main' }} />
          <CircleIcon sx={{ color: 'tertiary.main' }} />
          <CircleIcon sx={{ color: 'quaternary.main' }} />
        </Stack>
        <Typography variant='h4' mt={8} sx={{color:'otherColor.main',fontStyle:'italic'}}>
          Header
        </Typography>
        <Header />
        <Typography variant='h4' mt={8} sx={{color:'otherColor.main',fontStyle:'italic'}}>
          Footer
        </Typography>
        <Footer />
      </Box>
    );
};
