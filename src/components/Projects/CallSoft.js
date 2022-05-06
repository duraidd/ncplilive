import {React, useEffect} from "react";
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
import Lab1 from "../../images/projectPageImages/assessment/lab1.svg";
import Lab2 from "../../images/projectPageImages/assessment/lab2.svg";
import AppbarHead from "../SubComponents/AppbarHead";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from '../SubComponents/Footer';
import { Colors } from '../../constants';
import about1 from "../../images/allPageBanner/abouts-03.png"

import callSoftContent from "../StaticTextContents/projectContents/callSoftContents";
import BannerAll from '../SubComponents/BreadCrumbComponent';


export default function CallSoft() {
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
        padding: "20px",
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


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Projects" }} />

      <BannerAll
        dataParent={{
          title: "Call Soft",
          subTitle: "",
          path: ["Home", "Projects", "Call Soft"],
        }}
      />



      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle4>
            {callSoftContent.callSoftMainPoints.map((text)=>(
            <Typography
              variant="body1"
              style={{ textAlign: "justify", fontFamily: "nunito", }}
            >
             {text.firstPoint}
              <br />
              <br />
              {text.secondPoint}
            </Typography>
            ))}
          </DivStyle4>
          {/* Ride Side */}
          <DivStyle4>
            {callSoftContent.callSoftPoints.map((text) => (
              <Typography
                variant="body1"
                style={{ textAlign: "justify", paddingBottom: 10, fontFamily: "nunito", }}
              >
                {text}
              </Typography>
            ))}

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 5%" }}></div>
            {/* React Player Div */}
          </DivStyle4>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        {/* 67% middle of page */}
        <DivStyle1>
        {callSoftContent.callSoftFeatures.map((text)=>(
          <DivStyle4>
            <Typography variant="h6" style={{ marginBottom: 10, fontFamily: "nunito", marginTop: "10px", color:Colors.MAIN_COLOR }}>
              {text.title}
            </Typography>

            <Typography variant="body1" style={{ textAlign: "justify", marginTop: 10, fontFamily: "nunito", }} >
              {text.content}
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
                        boxShadow: "10px 13px 11px 5px rgba(0,0,0,0.61)",
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
        {callSoftContent.callSoftCallLabProjects.map((text)=>(
          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",color:Colors.MAIN_COLOR
              }}
            >
              {text.title}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >
              {text.content1}
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
                        boxShadow: "10px 13px 11px 5px rgba(0,0,0,0.61)",
                      }}
                    >
                      Art of Conversation
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >
              {text.content2}
            </Typography>
          </DivStyle4>
        ))}
        </DivStyle1>
      </div>

      <Footer/>
    </>
  );
}