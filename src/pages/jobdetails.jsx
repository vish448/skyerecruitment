import { Box, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { PrimaryButton, TertiaryButton } from '../components/Buttons'
import { SubHeading } from '../components/SubHeading'
import { LetsTalkSection } from './sections/homeSections'



export const JobDetails = () => {
  const jd = {
      jobId: '1',
      jobTitle: 'Web Developer',
      companyName: 'Microsoft',
      city: 'Toronto',
      state: 'ON',
      country: 'CA',
      shortDesc: 'A Software Engineer, or Computer Software Engineer, is responsible for developing, designing, and creating software applications.',
      salary: '2000',
      payFrequency: 'Monthly',
      currency: 'CAD',
      jobType: 'Full Time',
      companyDesc: {
        name: 'Microsoft',
        logo: 'Company Logo',
        shortDesc:`Microsoft Corporation (NASDAQ: MSFT) is an American public multinational corporation headquartered in Redmond, Washington, USA that devel...
        Get job updates from Microsoft. By selecting Follow, you agree to get updated information and new jobs for this company by email. You can cancel alerts at anytime.`
      }
    }
  return (
    <Box id="job-details">
        <Box component="section" id="subheading-bg" pt={4} pb={4} sx={{minHeight:{xs:'auto', md:'250px'}, display:'flex', alignItems:'center', color:"whiteColor.main" }}>
            <Container maxWidth="lg">
                <SubHeading subHeading='Job Description' subTitleWidth='50%' />
            </Container>
        </Box>
  
  <Box component="section" sx={{ backgroundColor: 'grayColor.light' }}>
    <Container maxWidth="lg" sx={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      
        <Box className='topSection' pb={4} key={jd.jobId} >
          <Box className='top'  sx={{ display:'flex',justifyContent:'space-between', flexDirection:{xs:'column',sm:'row'}}}>
            <Typography variant='h2'>{jd.jobTitle}</Typography>
            <Typography variant="h4" sx={{ marginRight: '20px' }}>${jd.salary} <Box component="span" sx={{color:"greyColor.dark", fontSize:'0.8rem',fontFamily:'DM Sans', fontWeight:'400'}}>/ {jd.payFrequency}</Box></Typography> 
          </Box>
          <Box sx={{ display: 'flex',justifyContent:'space-between', flexDirection:{xs:'column',sm:'row'} }}>
            <Box>
              <Typography variant="h4" sx={{ color: "greyColor.dark", fontFamily: 'DM Sans', fontWeight: '400', fontSize: '1.1rem' }}>{jd.companyName}</Typography>
              <Typography variant="body1">{jd.city},{jd.state}</Typography>
            </Box>
            <PrimaryButton buttonText='Apply Now' href='applynow' />
       

          </Box>
        </Box>
      
      
      <Box className='main' sx={{ display: 'flex', justifyContent:{xs:'center', sm:'space-between'} }}>
            <Box>
              <Typography variant='h4' pb={3}>Job Details</Typography>
              <Box pb={3}>
              <Typography variant='h5'>Job Type</Typography>
              <Typography variant='body1'>Full Time</Typography>
              </Box>
              <Box>
                <Box className='fullDesc' pb={4}>
                  <Typography variant='h5'> Full Job Description </Typography>
                  <Typography variant='body1'>
                  Do you want to work on a product that is used daily by more than 100+ millions of users, used by 91% of Fortune 100 companies, available in 181 markets with support for 44 language, and recognized as fastest growing app in the history of Microsoft.
                  We're working on Microsoft Teams - modern collaboration and productivity hub for the workspace. Microsoft Teams brings together real time audio/video conferencing solutions, chat and Office 365 workloads such as Exchange, SharePoint, OneDrive and OneNote and integrates them in one product creating smooth user experience.
                  
                  Microsoft Teams is built using cutting edge technology leveraging best from Microsoft Research, open source and Azure cloud. Using short development cycles, we ship incremental updates to our customers, collect feedback and metrics and through that iteratively improve the product.
                  Team is distributed across US, Europe and India which gives us a unique operational support. With world class tooling such as Microsoft DevOps and using our own product - Microsoft Teams - we're driving truly global business.
                
                  We are looking for passionate Software Engineer to contribute to design, architecture, build, test, deploy, and operate features in production.
                  This position is with the Microsoft Teams Enterprise Voice team, which focuses on delivering innovative features and delightful experiences on the calling space. We have openings in Vancouver, British Columbia
                    </Typography>
                </Box>
                <Box className="role-responsibilities" pb={4}>
                  <Typography variant='h5'>Roesponsibilites </Typography>
                  <Typography variant='body1'>
                  Do you want to work on a product that is used daily by more than 100+ millions of users, used by 91% of Fortune 100 companies, available in 181 markets with support for 44 language, and recognized as fastest growing app in the history of Microsoft.
                  We're working on Microsoft Teams - modern collaboration and productivity hub for the workspace. Microsoft Teams brings together real time audio/video conferencing solutions, chat and Office 365 workloads such as Exchange, SharePoint, OneDrive and OneNote and integrates them in one product creating smooth user experience.
                  
                  Microsoft Teams is built using cutting edge technology leveraging best from Microsoft Research, open source and Azure cloud. Using short development cycles, we ship incremental updates to our customers, collect feedback and metrics and through that iteratively improve the product.
                  Team is distributed across US, Europe and India which gives us a unique operational support. With world class tooling such as Microsoft DevOps and using our own product - Microsoft Teams - we're driving truly global business.
                
                  We are looking for passionate Software Engineer to contribute to design, architecture, build, test, deploy, and operate features in production.
                  This position is with the Microsoft Teams Enterprise Voice team, which focuses on delivering innovative features and delightful experiences on the calling space. We have openings in Vancouver, British Columbia
                  </Typography>
                
                </Box>

                <Box className="qualifications" pb={4}>
                <Typography variant='h5'> Qualifications </Typography>
                <Typography variant='body1'>
                  1 year of experience in software development
                  BS/MS Degree in Computer Science or related engineering field or equivalent experience
                  Strong communication skills
                  Experience with software development lifecycle and agile methodologies
                  Experience with commercial product development with strong focus on user experiences
                 </Typography>
              
                </Box>
                
                <Box className="extra-jd-notes" pb={4}>
                <Typography variant='body1'>
                    Microsoft is an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to age, ancestry, color, family or medical care leave, gender identity or expression, genetic information, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran status, race, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable laws, regulations and ordinances. We also consider qualified applicants regardless of criminal histories, consistent with legal requirements. If you need assistance and/or a reasonable accommodation due to a disability during the application or the recruiting process, please send a request via the Accommodation request form.
                    </Typography>

                <Typography sx={{fontWeight:'bold'}}>Benefits/perks listed below may vary depending on the nature of your employment with Microsoft and the country where you work.</Typography>
                
                
              
                </Box>
                <PrimaryButton buttonText='Apply Now' href='applynow' />
                
              </Box>
             

            </Box> 
            <Box ml={2} sx={{ minWidth: { xs: '100%', sm: '20%' } }}>
              
              
                  <Box p={4} sx={{ backgroundColor: 'primary.light', borderRadius: '10px' }}>
                  <Typography variant='h4' pb={4}>Company Info</Typography>
                  <CardMedia variant="img" sx={{paddingBottom:'2rem'}}>{jd.companyDesc.logo}</CardMedia>
                <Typography variant='h5'>{jd.companyDesc.name}</Typography>
                  <Typography variant='body1'>{jd.companyDesc.shortDesc}</Typography>
                  </Box>
                
             

            </Box>
      </Box>
    </Container>
  </Box>

  <Box component="section" sx={{ backgroundColor: 'primary.main', padding:{xs:'64px 20px 64px 20px', md:'64px'} }}  color="otherColor.light">
    <LetsTalkSection />
  </Box>
  
  </Box>
  )
}
