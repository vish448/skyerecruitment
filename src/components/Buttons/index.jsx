import { Button, styled, Typography } from "@mui/material"
import { theme } from '../../theme'
import React from 'react';

const PrimaryColor = theme.palette.primary.main 
//const SecondaryColor = theme.palette.secondary.main
//const TertiaryColor = theme.palette.tertiary.main

const PrimaryButtonStyles = styled(Button)({
    borderRadius: "0px !important",
    borderStyle: "solid !important",
    textTransform: "none !important",
    boxShadow:
        `${PrimaryColor} 1px 0px 0px -2px inset, #ffffff -7px 7px 0px -2px, ${PrimaryColor} -7px 7px !important`,
    
})

const SecondaryButtonStyles = styled(Button)({
    borderRadius: "0px !important",
    borderStyle: "solid !important",
    borderWidth: "2px !important",
    boxShadow: " -5px 5px 1px 1px #334C84 !important",
    borderColor: "#334C84 !important",
    textTransform: "none !important",
})

const TertiaryButtonStyles = styled(Button)({
    borderRadius: "0px !important",
    borderStyle: "solid !important",
    textTransform: "none !important",
    backgroundColor: "#FFFFFF",
    boxShadow:
        `#FFFFFF 1px 0px 0px -2px inset, ${PrimaryColor} -7px 7px 0px -2px, #FFFFFF -7px 7px !important`,
    '&:hover': {
        border:'1px solid',
        color:'#FFFFFF',
        },
})


export const PrimaryButton = ({ buttonText, href }) => {
    return (
        <PrimaryButtonStyles variant='contained' color='primary' size='medium' href={href}>
            <Typography sx={{ fontFamily: "DM Sans" }} pl={4} pr={4}>
                { buttonText }
            </Typography>
        </PrimaryButtonStyles>
    )
}

export const SecondaryButton = ({ buttonText,  href }) => {
    return (
        <SecondaryButtonStyles variant='outlined' color='secondary' pl={4} pr={4}  href={href}>
            <Typography sx={{ fontFamily: "DM Sans" }} >
                {buttonText}
            </Typography>
        </SecondaryButtonStyles>
    )
}

export const TertiaryButton = ({ buttonText, href }) => {
    return (
        <TertiaryButtonStyles variant='outlined' color='primary' sx={{backgroundColor: '#FFFFFF'}} href={href}>
            <Typography sx={{ fontFamily: "DM Sans"}} pl={4} pr={4}>
                {buttonText}
            </Typography>
        </TertiaryButtonStyles>
    )
}
