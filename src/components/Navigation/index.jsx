import { Box, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'


const headerPages = [
  { name: 'Services', to: '/services' },
  { name: 'Job Seekers', to: '/jobseekers', },
  { name: 'Referral Program', to: '/referral',  },
  { name: 'About Us', to: '/aboutus',  },
];
const footerPages = ['Home','Services', 'Job Seekers', 'Referral Program', 'About Us']



export const Headernav = ({ textColor, id }) => {

  const [open, setOpen] = useState(false)
    return (
      <>
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } , alignItems:'center'}} id={id}>
          {headerPages.map(page => (
                <MenuItem key={page.name}>
                    <Typography color={textColor} textAlign="center" sx={{ fontFamily: "poppins", fontWeight: "600" }}>
                <Link href={page.to} to={page.to} color="inherit" underline='none'>
                            {page.name}
                </Link>
                    
                    </Typography>
                </MenuItem>
            ))}
          <Typography textAlign="center" sx={{ fontFamily: "poppins", fontWeight: "400", color: "primary.main", border: "2px solid", borderColor:'primary.main' }} ml={4}  pt={1.4} pb={1.4} pl={4} pr={4}>
          <Link href="/letstalk" underline='none'>Let's Talk</Link></Typography>
        </Box>
            
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }} id={id}>
                <IconButton onClick = {()=>setOpen(true)} size="large">
            <MenuIcon />
                </IconButton>
                <Menu id="menu-appbar"
            
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                
                open={open}
                onClose={(e) => setOpen(false)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }} >
            {headerPages.map((page) => (
                <MenuItem key={page.name}>
                        <Typography color={textColor} textAlign="center" sx={{ fontFamily: "poppins", fontWeight: "600" }}>
                            <Link href={page.to} color="inherit" underline='none'>
                                {page.name}
                            </Link>
                        </Typography>
                    </MenuItem>
                ))}
                    <Typography textAlign="center" sx={{ fontFamily: "poppins", fontWeight: "400", color: "primary.main", border: "2px solid primary.main" }}  pt={1.4} pb={1.4} pl={4} pr={4}> <Link href="/letstalk" underline='none'>Let's Talk</Link></Typography>
                    </Menu>
            </Box>
    
    </>
  )
}

export const Footernav = ({ textColor, id }) => {
  return (
    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } , alignItems:'center'}} id={id}>
        {footerPages.map((page) => (
            <MenuItem key={page}>
                <Typography color={textColor} textAlign="center" sx={{ fontFamily: "DM Sans", fontWeight: "500", fontSize:"1rem"}}>{page}</Typography>
            </MenuItem>
        ))}
        <Typography textAlign="center" sx={{ fontFamily: "DM Sans", fontWeight: "500", color: "whiteColor.main", fontSize:"1rem"}} pl={2}>Let's Talk</Typography>
     </Box>
  )
}

