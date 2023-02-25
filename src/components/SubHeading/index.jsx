import { Box, Typography } from '@mui/material'
import React from 'react'

export const SubHeading = ({ subHeading, subTitle, subTitleWidth, subHeadingWidth }) => {
    let setSubTitleWidth
    if (subTitleWidth) {
        setSubTitleWidth = subTitleWidth
    }
  return (
      <Box>
          <Typography variant='h2' sx={{ width: {xs:'auto', md:`${subHeadingWidth}`} } }>{subHeading}</Typography>
          <Typography variant='body1' sx={{ width: {xs:'auto', md:`${setSubTitleWidth}`} } } >{subTitle}</Typography>
      </Box>
  )
}
