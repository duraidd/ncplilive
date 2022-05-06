import {React, useEffect} from "react";
import { styled } from "@mui/system";
import { Typography, Breadcrumbs, Link, Card, CardContent } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";
import { Colors } from '../../constants';
import about1 from "../../images/allPageBanner/abouts-03.png"

import { AnimationOnScroll } from "react-animation-on-scroll";

import Lab1 from "../../images/projectPageImages/assessment/lab1.svg";
import Lab2 from "../../images/projectPageImages/assessment/lab2.svg";
import Lab3 from "../../images/projectPageImages/assessment/lab3.svg";
import Footer from '../SubComponents/Footer';
import languageLabContents from "../StaticTextContents/projectContents/languageLabContents";
import BannerAll from '../SubComponents/BreadCrumbComponent';


export default function LanguageLab() {
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


  const DivStyle4 = styled("div")(({ theme }) => ({
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
      "&:hover": {
        opacity: 1,
      },
      [theme.breakpoints.up("lg")]: {
        padding:"20px"
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
  }));




  const softwareIclude = [
    "• Coverage of key grammar areas",
    "• Integrated Vocabulary",
    "• Dictionary ",
    "• Synonyms, Antonyms ",
    "• Sentence Making ",
    "• Spell Check ",
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Projects" }} />


      <BannerAll
        dataParent={{
          title: "Language Lab",
          subTitle: "",
          path: ["Home", "Projects", "Language Lab"],
        }}
      />


     

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle4>
            {languageLabContents.languageLabMainPoints.map((text)=>(
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                fontFamily: "nunito",
              }}
            >
              {text.firstPoint}
              <br />
              <br />
              {text.secondPoint}
              <br />
              <br />
             {text.thirdPoint}
            </Typography> 
            ))}
          </DivStyle4>
          {/* Ride Side */}
          {languageLabContents.languageLabSoftware.map((text)=>(
          <DivStyle4>
            <Typography
              variant="h6"
              style={{  fontFamily: "nunito",fontWeight:'bold', color:Colors.MAIN_COLOR }}
            >
              {text.title}
            </Typography>
            {languageLabContents.languageLabContent.map((text)=>(
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 20,
                  fontFamily: "nunito",
                }}
              >
                {text}
              </Typography>
            ))}
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                fontFamily: "nunito",
              }}
            >
              {text.content}
            </Typography>

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 5%" }}></div>
            {/* React Player Div */}
          </DivStyle4>
          ))}
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
        {languageLabContents.languageLabHowItWorks.map((text)=>(
          <DivStyle4>
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
                  src={"https://netcomcomputersindia.com/img/lang.jpg"}
                ></img>
                <div className="overlay">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontFamily: "nunito",
                        borderRadius: 5,
                        backgroundColor: "white",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        boxShadow:'10px 13px 11px 5px rgba(0,0,0,0.61)'
                      }}
                    >
                      Using the Teacher Computer or Server
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",
                fontWeight:'bold',
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              {text.content1}
              <br />
              <br />
              {text.content2}
            </Typography>
          </DivStyle4>
            ))}
        {languageLabContents.languageLabUsing.map((text)=>(
          <DivStyle4>
            <Typography
              variant="h6"
              style={{ marginBottom: 10, fontFamily: "nunito", color:Colors.MAIN_COLOR }}
            >
              {text.teacherTitle}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              {text.teacherContent}
            </Typography>
            <Typography
              variant="h6"
              style={{ marginBottom: 5, marginTop: 10, fontFamily: "nunito", color:Colors.MAIN_COLOR }}
            >
             {text.studentTitle}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 2,
                fontFamily: "nunito",
              }}
            >
             {text.studentContent}
            </Typography>
            <Typography
              variant="h6"
              style={{ marginBottom: 5, marginTop: 10, fontFamily: "nunito", color:Colors.MAIN_COLOR }}
            >
              Features
            </Typography>

            {languageLabContents.languageFeaturesContent.map((text) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 2,
                  alignItems: "center",
                }}
              >
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
          </DivStyle4>
        ))}
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
        {languageLabContents.languageGrammarLevel1.map((text) => (
          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title1}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              {text.content1}
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                marginTop: "10px",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title2}
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
                
              }}
            >
              <span style={{ fontWeight: "bold",color:Colors.MAIN_COLOR }}>Level I - Grammar </span>
              {text.content2}
            </Typography>
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
                  src={Lab1}
                ></img>
                <div className="overlay">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      variant="h6"
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontFamily: "nunito",
                        borderRadius: 5,
                        backgroundColor: "white",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        boxShadow:'10px 13px 11px 5px rgba(0,0,0,0.61)'
                      }}
                    >
                      Digital Multimedia Language Lab
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle4>
        ))}
        {languageLabContents.languageGrammarLevel2.map((text) => (
          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title1}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >
              <span style={{ fontWeight: "bold", color:Colors.MAIN_COLOR }}>Skill Generation </span>
              {text.content1}
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >
              <span style={{ fontWeight: "bold",color:Colors.MAIN_COLOR }}>Art Of Conversation </span>
              <br />
              {text.content2}
            </Typography>
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
                  src={Lab2}
                ></img>
                <div className="overlay">
                  <div style={{ display: "flex", flexDirection: "row" }}>

                    <Typography
                      variant="h6"
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontFamily: "nunito",
                        borderRadius: 5,
                        backgroundColor: "white",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        boxShadow:'10px 13px 11px 5px rgba(0,0,0,0.61)'
                      }}
                    >
                      Art of Conversation
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle4>
        ))}
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25, marginBottom: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
        {languageLabContents.languageGrammarLevel3.map((text) => (
          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",
                color:Colors.MAIN_COLOR
              }}
            >
             {text.title1}
            </Typography>

            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                marginTop: "10px",
                color:Colors.MAIN_COLOR
              }}
            >
              {text.title2}
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              {text.content}
            </Typography>
          </DivStyle4>
        ))}

          <DivStyle4>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
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
                  src={Lab3}
                ></img>
                <div className="overlay">
                  <div style={{ display: "flex", flexDirection: "row" }}>

                    <Typography
                      variant="h6"
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontFamily: "nunito",
                        borderRadius: 5,
                        backgroundColor: "white",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        boxShadow:'10px 13px 11px 5px rgba(0,0,0,0.61)'
                      }}
                    >
                      Letter Writing
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle4>
        </DivStyle1>
      </div>
      <Footer />
    </>
  );
}