import React, { useEffect } from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";
import { Colors } from '../../constants';
import about1 from "../../images/allPageBanner/abouts-03.png"

import ReactPlayer from "react-player";
import location from "../../images/projectPageImages/smart-Classroom/location.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import smartClassImg2 from "../../images/projectPageImages/smart-Classroom/smart_class_2.svg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BannerAll from '../SubComponents/BreadCrumbComponent';
import Footer from "../SubComponents/Footer";


export default function TwDThDAnimations() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));
  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("md")]: {
      width: "67%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("lg")]: {
      width: "82%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("xl")]: {
      width: "67%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  }));
  const DivStyle2 = styled("div")(({ theme }) => ({
    ".container": {
      position: "relative",
      marginTop: 10,
      "&:hover": {
        opacity: 1,
      },
    },

    ".overlay": {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "100%",
      alignItems: "flex-end",
      display: "flex",
      transition: ".5s ease",
      opacity: 0,
      padding: "20px",
      "&:hover": {
        opacity: 1,
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  }));
  const DivStyle3 = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "42%",
    },
  }));
  

  const cardStyle = (theme) => ({
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      boxShadow:
        "0px 0px 30px 13px rgba(114,255,141,0.6)",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height:260
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height:260
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height:260
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      height:260
    },
  });
  const cardStyle1 = (theme) => ({
    boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  "&:hover": {
    transform: "scale3d(1.05, 1.05, 1)",
    boxShadow:
      "0px 0px 30px 13px rgba(114,255,141,0.6)",
  },
    [theme.breakpoints.down("md")]: {
      width: "100%",

      marginTop: 3,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height:260
    },

    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height:260
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      height:260
    },
  });

  const aboutSmartCard = [
    "The project involves the biometric card reader to implement the barcode on student’s smartcard for student’s identification.",
    "The student has the option to view their personal information and view their performance report about their marks, attendance, and overall behavior.",
    "Fees Details such as payable amount and remaining amount to pay also displayed.",
    "Overall performance can be viewed.",
  ];

  const Features = [
    "School Attendance",
    "Student details with BIODATAs",
    "Staff Payroll",
    "Student performance",
    "Hostel/Transport/Canteen & Others Fees Collection details",
    "Student’s marks and Examination Result",
  ];

  const Advantages = [
    " Netcom Smart card will be easier for the students to fill the attendance to enter the school campus.",
    " Smart card allows the system to get student’s identification efficiently and process the information directly on the card.",
    " Each student can use smart card and manage this information more securely, using authentication and user identification procedures.",
  ];

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Projects" }} />

      <BannerAll
        dataParent={{
          title: "EMIS Software Solutions",
          subTitle: "",
          path: ["Home", "Projects", "EMIS Software Solutions"],
        }}
      />




     

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                fontFamily: "nunito",
              }}
            >
              A Netcom Smart Card is a pocket-sized card with embedded
              integrated circuits. It provides strong security authentication.
              Smart card can store lots of information and can perform multiple
              functions in a wide range of industries.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              The Kiosk is integrated with our Netcom Smart Card to access the
              information about the student’s.
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <Typography
              variant="h6"
              style={{ marginBottom: 10, fontFamily: "nunito" ,fontWeight:'bold' ,color:Colors.MAIN_COLOR }}
            >
              EMIS Software Solutions video
            </Typography>

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 56.25%" }}>
              <ReactPlayer
                width="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
                height="100%"
                config={{
                  file: { attributes: { controlsList: "nodownload" } },
                }}
                url={"https://gdurl.com/DSy3"}
                controls
              ></ReactPlayer>
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          <DivStyle2>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOnce={true}
              duration={2}
            >
              <div className="container">
                <img
                  width="100%"
                  style={{
                    top: 0,
                    left: 0,
                    display: "block",
                    width: "100%",
                    boxShadow:
                      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                  }}
                  height="170%"
                  src={smartClassImg2}
                ></img>
                <div className="overlay">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={location} style={{ width: "27px" }} />
                    <Typography
                      variant="h6"
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontFamily: "nunito",
                        textShadow:
                          "2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
                      }}
                    >
                      Govt Hr Sec School, Sitheri, Dharmapuri,TN
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle2>

          <DivStyle3>
            <Typography
              variant="h6"
              style={{ marginBottom: 10, fontFamily: "nunito",fontWeight:'bold',color:Colors.MAIN_COLOR}}
            >
              EMIS Application
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              NETCOM developed an application called EMIS. In this application
              we can analyze overall school day to day process like Teacher's
              information, Student's information like Enroll number, Name,
              Class, community etc., by this application we can easily handle
              all the school process and we can monitor the same.
            </Typography>
            <Typography
              variant="h6"
              style={{ marginBottom: 5, marginTop: 10, fontFamily: "nunito",fontWeight:'bold' ,color:Colors.MAIN_COLOR}}
            >
              About Smart Card
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 2,
                fontFamily: "nunito",
              }}
            >
              Netcom smart card is connected with our project ―School Management
              System‖. This is about the class attendance signing system using
              student’s smart card. The Purpose of our project is to collect the
              student’s class attendance by using student’s smart card and it
              also provides the options for the staff to calculate the student
              attendance percentage to view the attendance report and entry the
              student’s marks for automatically calculating the total,
              percentage, and grade.
            </Typography>

            {aboutSmartCard.map((text) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
                <KeyboardArrowRightIcon
                  fontSize="small"
                  style={{ marginRight: "10px" }}
                />
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 7,
                    fontFamily: "nunito",
                  }}
                >
                  {text}
                </Typography>
              </div>
            ))}
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25, marginBottom: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography
                  variant="h6"
                  style={{ marginBottom: 10, fontFamily: "nunito",fontWeight:'bold',color:Colors.MAIN_COLOR}}
                >
                  Features
                </Typography>

                {Features.map((text) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 7,
                    }}
                  >
                    <KeyboardDoubleArrowRightIcon style={{ marginRight: "10px" }} />
                    <Typography
                      variant="body1"
                      sx={{ fontFamily: "nunito", paddingLeft: 1 }}
                    >
                      {" "}
                      {text}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <Card sx={cardStyle1}>
              <CardContent>
                <Typography
                  variant="h6"
                  style={{ marginBottom: 10, fontFamily: "nunito" ,fontWeight:'bold',color:Colors.MAIN_COLOR}}
                >
                  Advantages
                </Typography>

                {Advantages.map((text) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 7,
                      alignItems: "center",
                    }}
                  >
                    <KeyboardDoubleArrowRightIcon
                      fontSize="small"
                      style={{ marginRight: "10px" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ fontFamily: "nunito", paddingLeft: 1 }}
                    >
                      {" "}
                      {text}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </DivStyle3>
        </DivStyle1>
      </div>
      <Footer/>
    </>
  );
}
