import React from 'react'
import { styled } from '@mui/system';
import { Typography, Breadcrumbs, Link, Card, CardContent, } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import { ScrollToTop } from 'react-simple-scroll-up'
import AppbarHead from './SubComponents/AppbarHead';

export default function Services() {
  const BreadcrumbStyle  = styled('div')(({ theme }) => ({
    display:"flex",
    justifyContent:"center",
  }));
return (
<> 
<ScrollToTop bgColor="green"  symbol="&#8593;"  strokeFillColor="white"/>
<AppbarHead dataParent={{ appBtnText: "Services" }}/>
  <BreadcrumbStyle>
<Card sx={{width:200,height:50}} >
  <CardContent>
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/"  sx={{ display: 'flex', alignItems: 'center'}}> <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />{" "} Home{" "} </Link>
      <Typography color="text.primary">Services</Typography>
    </Breadcrumbs>
  </CardContent>
</Card>
</BreadcrumbStyle></>
)
}
