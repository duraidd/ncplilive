import { React, useEffect } from "react";
import { styled } from "@mui/system";
import { Typography, Breadcrumbs, Link, Card, CardContent } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";
import ReactPlayer from "react-player";
import location from "../../images/projectPageImages/smart-Classroom/location.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import smartClassImg2 from "../../images/projectPageImages/smart-Classroom/smart_class_2.svg";
import Footer from '../SubComponents/Footer';
import { Colors } from '../../constants';
import about1 from "../../images/allPageBanner/abouts-03.png"
import kioskContent from "../StaticTextContents/projectContents/kioskContents";
import FirstImage from "../../images/projectPageImages/kiosk/1.png"
import SecondImage from "../../images/projectPageImages/kiosk/2.png"
import BannerAll from '../SubComponents/BreadCrumbComponent';

export default function Kiosk() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    margin:"0 auto",
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
      width: "50%",
    },
  }));
  const DivStyle3 = styled("div")(({ theme }) => ({
    position: "relative",
    marginTop: 10,
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
      boxShadow: "0px 0px 30px 13px rgba(114,255,141,0.6)",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 260,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: 260,
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: 260,
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      height: 260,
    },
  });
  const cardStyle1 = (theme) => ({
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      boxShadow: "0px 0px 30px 13px rgba(114,255,141,0.6)",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",

      marginTop: 3,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      height: 260,
    },

    [theme.breakpoints.up("lg")]: {
      width: "100%",
      height: 260,
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      height: 260,
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Projects" }} />

      <BannerAll
        dataParent={{
          title: "Kiosk Projects",
          subTitle: "",
          path: ["Home", "Projects", "Kiosk Projects"],
        }}
      />


     

      {/* Full vertical page */}
      
      <div style={{ width: "100%", marginTop: 25,}}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            {kioskContent.kioskMainPoints.map((text) => (
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
            <br />

            {kioskContent.kioskPuropseOfKiosk.map((text) => (
              <div>
                <Typography variant="h6" style={{ marginBottom: 10, fontFamily: "nunito", fontWeight: "bold", color: Colors.MAIN_COLOR }}>
                  {text.title}
                </Typography>

                <Typography variant="body1" style={{ textAlign: "justify", marginTop: 10, fontFamily: "nunito" }}>
                  {text.content}
                </Typography>
              </div>
            ))}

          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
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
                height="170%"
                src={FirstImage}
              ></img>
            </div>
          </DivStyle3>
        </DivStyle1>

      </div>


<div style={{ width: "100%", marginTop: 25,}}>
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
                  src={SecondImage}
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
            <br />
            {kioskContent.kioskKioskProject.map((text) => (
              <div>
                <Typography
                  variant="h6"
                  style={{
                    marginTop: 10,
                    fontFamily: "nunito",
                    fontWeight: "bold",
                    color: Colors.MAIN_COLOR
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
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 10,
                    fontFamily: "nunito",
                  }}
                >
                  {text.content2}
                </Typography>
              </div>
            ))}
          </DivStyle2>

          <DivStyle3>
            {kioskContent.kioskKioskForYourBank.map((text) => (
              <div>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 5,
                    marginTop: 10,
                    fontFamily: "nunito",
                    fontWeight: "bold",
                    color: Colors.MAIN_COLOR
                  }}
                >
                  {text.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 2,
                    fontFamily: "nunito",
                  }}
                >
                  {text.content}
                </Typography>
              </div>
            ))}
            {kioskContent.kioskKioskForYourBankReason.map((text) => (
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

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 2,
                fontFamily: "nunito",
              }}
            >
              Netcom can give this project to Aranilayathurai, Agriculture,
              health care, travel desk, tourism department.
            </Typography>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25, marginBottom: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            {kioskContent.kioskKioskInHealthCare.map((text) => (
              <div>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 5,
                    fontFamily: "nunito",
                    fontWeight: "bold",
                    color: Colors.MAIN_COLOR
                  }}
                >
                  {text.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 2,
                    fontFamily: "nunito",
                  }}
                >
                  {text.content}
                </Typography>
              </div>
            ))}
            <br />
            {kioskContent.kioskKioskInTravelDesk.map((text) => (
              <div>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "nunito",
                    fontWeight: "bold",
                    color: Colors.MAIN_COLOR
                  }}
                >
                  {text.title}
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    marginTop: 5,
                    textAlign: "justify",
                    fontFamily: "nunito",
                  }}
                >
                  {text.content}
                </Typography>
              </div>
            ))}
            <br />
            {kioskContent.kioskKioskAtAirport.map((text) => (
              <div>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "nunito",
                    fontWeight: "bold",
                    color: Colors.MAIN_COLOR
                  }}
                >
                  {text.title}
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    marginTop: 5,
                    textAlign: "justify",
                    fontFamily: "nunito",
                  }}
                >
                  {text.content}
                </Typography>
              </div>
            ))}
            <br />
            {kioskContent.kioskkioskInTourismDepartment.map((text) => (
              <div>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "nunito",
                    fontWeight: "bold",
                    color: Colors.MAIN_COLOR
                  }}
                >
                  {text.title}
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    marginTop: 5,
                    textAlign: "justify",
                    fontFamily: "nunito",
                  }}
                >
                  {text.content}
                </Typography>
              </div>
            ))}

          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            {kioskContent.kioskOurKiosk.map((text) => (
              <Typography
                variant="body1"
                style={{
                  marginTop: 5,
                  textAlign: "justify",
                  fontFamily: "nunito",
                }}
              >
                {text}
              </Typography>
            ))}
            <br />
            {kioskContent.kioskKioskInAgriculture.map((text) => (
              <div>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 5,
                    fontFamily: "nunito",
                    fontWeight: "bold",
                    color: Colors.MAIN_COLOR
                  }}
                >
                  {text.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 2,
                    fontFamily: "nunito",
                  }}
                >
                  {text.content}
                </Typography>
              </div>
            ))}

            <br />

            <Typography
              variant="h6"
              style={{
                marginTop: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
                color: Colors.MAIN_COLOR
              }}
            >
              Common Reasons for using KIOSK:
            </Typography>
            {kioskContent.reasonForKiosk.map((text) => (
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
          </DivStyle3>
        </DivStyle1>
      </div>

<Footer/>
    </>
  );
}