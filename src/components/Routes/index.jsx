
import {createHashRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { Styleguide } from '../Styleguide';
import Home from '../../pages/home';
import { AboutUs } from '../../pages/aboutus'
import { JobSeekers } from '../../pages/jobseekers';
import { JobDetails } from '../../pages/jobdetails';
import { ApplyNow } from '../../pages/apply';
import { Referral } from '../../pages/referral';
import { Services } from '../../pages/services';
import { Letstalk } from '../../pages/letstalk';

import React from 'react';



export const Router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/:aboutus",
        element: <AboutUs />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/:styleguide",
        element: <Styleguide />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/:jobseekers",
        element: <JobSeekers />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/jobdetails",
        element: <JobDetails />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/applynow",
        element: <ApplyNow />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/referral",
        element: <Referral />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/services",
        element: <Services />,
        errorElement:<ErrorPage />,
    },
    {
        path: "/letstalk",
        element: <Letstalk />,
        errorElement:<ErrorPage />,
    },



  
    ]);