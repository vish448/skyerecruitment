import { AppBar,Container,Toolbar,styled } from '@mui/material'
import React from 'react'
import { Logo } from '../Logo';

import { Headernav } from '../Navigation';

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    height: "142px",
    [theme.breakpoints.down("md")]: {
        height: "80px",
    },
}));
  
  

export const Header = () => {
    return (
        <AppBar position='sticky' color="whiteColor" >
            <StyledToolbar>
                <Container maxWidth="xl" sx={{display:"flex", justifyContent:"space-between"}}>
                    <Logo />
                    <Headernav id="header" textColor="quaternary.main" sx={{xs:'none', md:'flex'}} />
                </Container>
            </StyledToolbar>
        </AppBar>
  )
}
