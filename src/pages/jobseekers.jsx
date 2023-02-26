import { Box, Container, Typography } from "@mui/material"
import { SubHeading } from "../components/SubHeading"
import { LetsTalkSection } from "./sections/homeSections"
import { JobPostingSections } from "./sections/jobPostingSections"
import React from 'react';

const subHeading = `Find a Job for you`
const subTitle = `We offer a range of services to help you find that next opportunity. We strive to connect you with the right opportunity by understanding your skills and experience.`

// Array of Job postings
/**
 * Details
 * Job Title
 * Company Name
 * Location
 * Short Description
 * Salary
 * 
 */

const jobs = [
  {
    jobId:'1',
    jobTitle: 'Web Developer',
    companyName: 'Microsoft',
    city: 'Toronto',
    state: 'ON',
    country: 'CA',
    shortDesc: 'A Software Engineer, or Computer Software Engineer, is responsible for developing, designing, and creating software applications.',
    salary: '2000',
    payFrequency: 'Monthly',
    currency:'CAD'
  },
  {
    jobId:'2',
    jobTitle: 'Front End Developer',
    companyName: 'Skye Tech',
    city: 'Toronto',
    state: 'ON',
    country: 'CA',
    shortDesc: 'A Software Engineer, or Computer Software Engineer, is responsible for developing, designing, and creating software applications.',
    salary: '3000',
    payFrequency: 'Monthly',
    currency:'CAD'
  },
  {
    jobId:'3',
    jobTitle: 'Full Stack Developer',
    companyName: 'Skye Tech',
    city: 'Toronto',
    state: 'ON',
    country: 'CA',
    shortDesc: 'A Software Engineer, or Computer Software Engineer, is responsible for developing, designing, and creating software applications.',
    salary: '4000',
    payFrequency: 'Monthly',
    currency:'CAD'
  },
  {
    jobId:'4',
    jobTitle: 'Dev Ops Engineer',
    companyName: 'Skye Tech',
    city: 'Toronto',
    state: 'ON',
    country: 'CA',
    shortDesc: 'A Software Engineer, or Computer Software Engineer, is responsible for developing, designing, and creating software applications.',
    salary: '6000',
    payFrequency: 'Monthly',
    currency:'CAD'
  },
  {
    jobId:'5',
    jobTitle: 'Dev Ops Engineer',
    companyName: 'Skye Tech',
    city: 'Toronto',
    state: 'ON',
    country: 'CA',
    shortDesc: 'A Software Engineer, or Computer Software Engineer, is responsible for developing, designing, and creating software applications.',
    salary: '2000',
    payFrequency: 'Bi-weekly',
    currency:'CAD'
  }
];

export const JobSeekers = () => {
  return (
      <Box id="job-seekers">
        <Box component="section" id="subheading-bg" pt={4} pb={4} sx={{minHeight:{xs:'auto', md:'250px'}, display:'flex', alignItems:'center', color:"whiteColor.main" }}>
          <Container maxWidth="lg">
              <SubHeading subHeading={subHeading} subTitle={subTitle} subTitleWidth='50%' />
          </Container>
      </Box>
      
      <Box component="section" sx={{ backgroundColor: 'grayColor.light' }}>
        <Container maxWidth="lg" sx={{paddingTop: '4rem', paddingBottom: '4rem'}}>
          <Typography variant="h5">Recent Job Postings</Typography>
          <JobPostingSections jobDetails={jobs} />
        </Container>
      </Box>

      <Box component="section" sx={{ backgroundColor: 'primary.main', padding:{xs:'64px 20px 64px 20px', md:'64px'} }}  color="otherColor.light">
        <LetsTalkSection />
      </Box>
      
      </Box>
  )
}
