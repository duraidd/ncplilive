import {React, useEffect} from 'react'
import { styled } from '@mui/system';
import { Typography, Breadcrumbs, Link, Card, CardContent, Divider, Box, Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import AppbarHead from '../SubComponents/AppbarHead';
import { ScrollToTop } from 'react-simple-scroll-up';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FormSubmit from '../SubComponents/FormSubmit';
import Footer from '../SubComponents/Footer';
import { useNavigate } from 'react-router-dom';
import { Colors } from '../../constants';
import about1 from "../../images/allPageBanner/abouts-03.png"
import BannerAll from '../SubComponents/BreadCrumbComponent';


const Root = styled("div")(({ theme }) => ({
  width: "70%" ,

  [theme.breakpoints.down("md")]: {
    width: "95%"
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%"
  },
  [theme.breakpoints.up("lg")]: {},
}));


const cartitem1 = (theme) => ({
    width: "49%",padding:"10px 0px",
    [theme.breakpoints.between("md", "lg")]: {
      flexWrap:"wrap",
      width:"100%"
     },
    [theme.breakpoints.down("md")]: {
  width:"100%",marginBottom:"10px"
    },
  
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {},
  });


  const DivStyle4 = styled("div")(({ theme }) => ({
    margin: "0 auto",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  }));


export default function AssessmentTool() {

  const navigate = useNavigate();

  const BreadcrumbStyle = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Products" }} />

       
      <BannerAll
        dataParent={{
          title: "Assessment Tool",
          subTitle: "",
          path: ["Home", "Projects", "Assessment Tool"],
        }}
      />



     

      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Root>

          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h4" style={{ borderBottom: "4px solid green",color:Colors.MAIN_COLOR }}>ASSESSMENT TOOL</Typography>
            </div>
            <Divider></Divider>
            <br />
            <Typography variant='subtitle1' style={{ textAlign: "justify" }} gutterBottom><ArrowForwardIcon fontSize="small"  style={{verticalAlign:"middle",marginBottom:"5px"}}/>Netcom Assessment is the process of gathering and discussing information from multiple  and diverse sources in order to develop a deep understanding of what students know, understand,  and can do with their knowledge as a result of their educational experiences. Netcom process  culminates when assessment results are used to improve subsequent learning. Assessment is the  systematic basis for making inferences about the learning and development of students.  Netcom process is about defining, selecting, designing, collecting, analyzing, interpreting, and  using information to increase students' learning and development. Assessment is the systematic  collection, review, and use of information about educational programs undertaken for the purpose  of improving student learning and development. </Typography>

          </div>
          <br/>

          <div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h4" style={{ borderBottom: "4px solid green",color:Colors.MAIN_COLOR }}>Purpose of Assessment</Typography>
            </div>
            <Divider></Divider>
            <br />
            <Typography variant='subtitle1' style={{ textAlign: "justify" }} gutterBottom><ArrowForwardIcon fontSize="small"  style={{verticalAlign:"middle",marginBottom:"5px"}}/> Two common phrases surrounding assessment recently are assessment for improvement and  assessment for accountability. While assessment for accountability's is an important reason to  initiate and conduct assessment, the real benefit to an institution and its students come from the  discussions and changes that happen as a result of assessment for improvement. Many staff are  motivated by the benefits of focusing on assessment for improving the quality of teaching,  learning, programs and services, and planning and decision-making. The purpose of assessment  for accountability is to demonstrate the effectiveness of programs and services across the  institution to various audiences, including parents. An assessment cycle effectively addressing  assessment for improvement will also provide the necessary evidence for accountability. </Typography>
            <Typography variant='subtitle1' style={{ textAlign: "justify" }} gutterBottom><ArrowForwardIcon fontSize="small"  style={{verticalAlign:"middle",marginBottom:"5px"}}/> Netcom Assessment methods define the nature of the assessor actions and include: </Typography>
            



<div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap",gap:"15px"}}>

<Card elevation={5}  sx={cartitem1}>
  <div style={{display:"flex"}}><Typography variant='h6' style={{ margin: "0px 20px",color:Colors.MAIN_COLOR}}>Examine method:</Typography></div>
  <br />
  <Typography variant='body1' style={{ textAlign: "justify", margin: "0px 20px" }} gutterBottom>  The process of reviewing, inspecting, observing, studying, or analyzing one  or more assessment objects (i.e., specifications, mechanisms, or activities). The purpose of the  examine method is to facilitate assess or understanding, achieve clarification, or obtain evidence.</Typography>
</Card>

<Card elevation={5}  sx={cartitem1}>
<div style={{display:"flex"}}>
  <Typography variant='h6' style={{ margin: "0px 20px",color:Colors.MAIN_COLOR}}>Interview method:</Typography>
  </div>
  <br />
  <Typography variant='body1' style={{ textAlign: "justify", margin: " 0px 20px" }} gutterBottom>The process of holding discussions with individuals or groups of individuals  within an organization to, once again, facilitate assessor understanding, achieve clarification, or  obtain evidence. </Typography>
</Card>

<Card elevation={5} sx={cartitem1}>
<div style={{display:"flex"}}>
  <Typography variant='h6' style={{ margin: "0px 20px",color:Colors.MAIN_COLOR}}>Test method:</Typography>
  </div>
  <br />
  <Typography variant='body1' style={{ textAlign: "justify", margin: "0px 20px" }} gutterBottom>The process of exercising one or more assessment objects (i.e., activities or  mechanisms) under specified conditions to compare actual with expected behavior. </Typography>
  <br/>
  <Typography variant='body1' style={{ textAlign: "justify", margin: "0px 20px" }} gutterBottom>Netcom Assessment is the ongoing process of gathering, analysing and interpreting  evidence, reflecting on findings, making informed and consistent judgements to improve student  learning.  </Typography>
  <br/>
  <Typography variant='body1' style={{ textAlign: "justify", margin: "0px 20px" }} gutterBottom>Assessment for improved student learning and deep understanding requires a range of assessment  practices to be used with three overarching purposes:</Typography>

</Card>

<Card elevation={5} sx={cartitem1}>
<div style={{display:"flex"}}>
  <Typography variant='h6' style={{ margin: "0px 20px",color:Colors.MAIN_COLOR}}><ArrowForwardIcon fontSize="small"  style={{verticalAlign:"middle",marginBottom:"5px",color:Colors.MAIN_COLOR}}/>Assessment for learning:</Typography>
  </div>
  <Typography variant='body1' style={{ textAlign: "justify", margin: "0px 20px" }} gutterBottom>occurs when teachers use inferences about student progress to inform  their teaching </Typography>
  <br/>
  <div style={{display:"flex"}}>
  <Typography variant='h6' style={{ margin: "0px 20px",color:Colors.MAIN_COLOR}}><ArrowForwardIcon fontSize="small"  style={{verticalAlign:"middle",marginBottom:"5px",color:Colors.MAIN_COLOR}}/>Assessment as learning: </Typography>
  </div>
  <Typography variant='body1' style={{ textAlign: "justify", margin: "0px 20px" }} gutterBottom>occurs when students reflect on and monitor their progress to inform  their future learning goals </Typography>
  <br/>
  <div style={{display:"flex"}}>
  <Typography variant='h6' style={{ margin: "0px 20px",color:Colors.MAIN_COLOR}}><ArrowForwardIcon fontSize="small"  style={{verticalAlign:"middle",marginBottom:"5px",color:Colors.MAIN_COLOR}}/>Assessment of learning:</Typography>
  </div>
  <Typography variant='body1' style={{ textAlign: "justify", margin: "0px 20px" }} gutterBottom>occurs when teachers use evidence of student learning to make  judgements on student achievement against goals and standards</Typography>
</Card>

</div>

</div>
 </div>

<br/>
<br/>
</Root>
      </div>


      <div style={{ width: "100%", marginTop: 25 }}>
        <DivStyle4>
          <Typography
            variant="h4"
            style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito",color:Colors.MAIN_COLOR }}
          >
            Need this Product? Contact us:
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
          >
            {" "}
            If you like and want this product, Please feel free to contact us.
            Also we can add/update new features and design changes in this
            product if you want.
          </Typography>

          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
          >
            To discuss about this product and our other services, please mail us
            on
            <span
              style={{ color: " #3B7CFE", cursor: "pointer" }}
              onClick={() => {
                window.open("mailto:info@ncpli.com");
              }}
            >
              {" "}
              info@ncpli.com
            </span>{" "}
            or call
            <span style={{ cursor: "pointer", color: " #3B7CFE" }} onClick={() => { window.open("tel:753886286", "_self"); }} > +91 753 886 286 </span>
          </Typography>
          <Button
            style={{
              backgroundColor: "#ED514A",
              color: "white",
              fontWeight: "600",
              fontFamily: "nunito",
              marginTop: 15,
              textTransform: "none",
              width: 150,
            }}

            onClick={()=>navigate('/form-submit',{state:{productName:'Assessment Tool'}})} 

          >
            Request a Demo
          </Button>
        </DivStyle4>
      </div>
      
<Footer/>
    </>
  )
}
