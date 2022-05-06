import {React, useEffect} from "react";
import { styled } from "@mui/system";
import { Typography, Breadcrumbs, Link, Card, CardContent, colors, } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";
import ReactPlayer from "react-player";
import location from "../../images/projectPageImages/smart-Classroom/location.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import smartClassImg2 from "../../images/projectPageImages/smart-Classroom/skill2.jpg";
import smartClassImg3 from "../../images/projectPageImages/smart-Classroom/skill5.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Style } from "@mui/icons-material";
import Footer from '../SubComponents/Footer';
import { Colors } from '../../constants';
import about1 from "../../images/allPageBanner/abouts-03.png"
import skillDevelopmentContents from "../StaticTextContents/projectContents/skillDevelopmentContents";
import BannerAll from '../SubComponents/BreadCrumbComponent';

export default function SkillDevelopmentAndTraining() {
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
      width: "92%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("lg")]: {
      width: "95%",
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

       ".image":{
          top: 0,
          left: 0,
          display: "block",
          width: "100%",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
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
      "&:hover": {
        opacity: 1,
      },
      [theme.breakpoints.up("lg")]: {
        padding: "20px"
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Projects" }} />


      <BannerAll
        dataParent={{
          title: "Skill Development & Training",
          subTitle: "",
          path: ["Home", "Projects", "Skill Development & Training"],
        }}
      />


      

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            {skillDevelopmentContents.skillDeveloper.map((text)=>(
              <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              {text}
            </Typography>
            ))}
            
            {skillDevelopmentContents.skillNetcom.map((text)=>(
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              <span style={{ color: "green", fontWeight: "bolder" }}>
                Netcom
              </span>{" "}
              {text.content1}
              <br />
              <br />
              {text.content2}
              <br />
              <br />
              {text.content3}
            </Typography>
            ))}
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            {/* React Player Div */}
            <div>
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
                height="360px"
                src={smartClassImg2}
              ></img>
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
                  className="image"
                  height="170%"

                  src={smartClassImg3}
                />

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

          {skillDevelopmentContents.skills.map((text)=>(
          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title1}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              {text.content1}
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title2}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",

                fontFamily: "nunito",
              }}
            >
              {text.content2}
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title3}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              {text.content3}
            </Typography>
          </DivStyle3>
          ))}
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25, marginBottom: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          {skillDevelopmentContents.tbeSkills.map((text)=>(
          <DivStyle2>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title1}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              {text.content1}
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title2}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",

                fontFamily: "nunito",
              }}
            >
             {text.content2}
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title3}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              {text.content3}
            </Typography>
          </DivStyle2>
          ))}
          {/* Ride Side */}
          {skillDevelopmentContents.ourProjects.map((text)=>(
          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title1}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              {text.content1}
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "nunito",
                fontWeight: "bold",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title2}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",

                fontFamily: "nunito",
              }}
            >
              {text.content2}
            </Typography>
          </DivStyle3>
          ))}
        </DivStyle1>
      </div>

      <Footer />
    </>
  );
}