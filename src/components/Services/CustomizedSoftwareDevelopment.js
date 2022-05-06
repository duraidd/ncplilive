import { React, useState, useMemo, useEffect } from "react";
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
import "animate.css/animate.min.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import csdImg from "../../images/servicePageImages/customSoftwareDevelopment/csd.png";
import frontEndArchitecture from "../../images/servicePageImages/WebApplicationDevlopment/front-end-architecture.svg";
import testing from "../../images/servicePageImages/WebApplicationDevlopment/testing-performance.svg";
import responsive from "../../images/servicePageImages/WebApplicationDevlopment/responsive.svg";
import uiuxdesign from "../../images/servicePageImages/WebApplicationDevlopment/uiuxdesign.svg";
import cmsEcommerce from "../../images/servicePageImages/WebApplicationDevlopment/cms-ecommerce.svg";
import javascriptSolutions from "../../images/servicePageImages/WebApplicationDevlopment/javascript-solutions.svg";

import ComputerIcon from "@mui/icons-material/Computer";

import Footer from "../SubComponents/Footer";

import { Colors } from "../../constants";
import about1 from "../../images/allPageBanner/abouts-03.png";
import BannerAll from "../SubComponents/BreadCrumbComponent";

export default function CustomizedSoftwareDevelopment() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    paddingLeft: "5%",
    paddingRight: "5%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("xl")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: "15%",
      paddingRight: "15%",
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
    [theme.breakpoints.only("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("lg")]: {
      width: "47%",
    },
  }));
  const DivStyle3 = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.only("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "47%",
    },
  }));

  const cardStyle = (theme) => ({
    [theme.breakpoints.only("sm")]: {
      height: 530,
      marginTop: 3,
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: 710,
      marginTop: 3,
    },
    [theme.breakpoints.only("md")]: {
      height: 500,
    },
    [theme.breakpoints.up("md")]: {
      height: 650,
    },

    [theme.breakpoints.up("lg")]: {
      height: 720,
    },
    [theme.breakpoints.up("xl")]: {
      height: 720,
    },
  });

  const DevelopmentServiceCards = styled("div")(({ theme }) => ({
    height: 300,
    width: "30%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,

    [theme.breakpoints.down("sm")]: {
      width: "100%",

      height: 200,
    },

    [theme.breakpoints.only("md")]: {
      width: "100%",

      height: 250,
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: 250,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      height: 250,
    },

    [theme.breakpoints.up("xl")]: {
      height: 250,
    },
  }));

  const customSoftBenefit = [
    {
      imageUrl: frontEndArchitecture,
      text: "Efficiency",
    },
    {
      imageUrl: testing,
      text: "Scalability",
    },
    {
      imageUrl: responsive,
      text: "Lower Integration Costs",
    },
    {
      imageUrl: uiuxdesign,
      text: "Profitability",
    },
    {
      imageUrl: cmsEcommerce,
      text: "User-Friendly",
    },
    {
      imageUrl: javascriptSolutions,
      text: "Independence",
    },
  ];

  const customSoftCard = [
    " Custom Software is specifically designed for the company or a business, according to the company's way of doing business or a work.",
    "While Off-the-shelf software is readily available and not customize, hence it often falls short of meeting according to specific needs as there will be a lot of unused features in this software.",
    "It is where we need Custom Software Development Services and to obtain such services, require a company to develop software applications that cater to its sole needs and requirements.",
    "In short, Custom software is adapted to meet your business needs, whereas off-the-shelf software requires your business to adapt to its capabilities.",
  ];

  const customSoftDeliver = [
    " We build software that automates enterprise-wide processes and covers interdepartmental information flows, and may also include transactions with customers, vendors and partners.",
    "For Instance in Educational Institutions, generic software called as EMIS (Educational Management Information System) is used for their management functions. EMIS aims to collect, integrate, process, maintain and disseminate data and information to support decision-making, policy-analysis and formulation, planning, monitoring and management at all levels of an education system.",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Services" }} />

      <BannerAll
        dataParent={{
          title: "Custom Software Development",
          subTitle: "",
          path: ["Home", "Services", "Custom Software Development"],
        }}
      />

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: "2%" }}>
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
              Custom software development is the process of designing, creating,
              deploying and maintaining software for a specific set of users,
              functions or organizations.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              Our skilled specialists know the game of business and deliver
              successful solutions that accord with all the specified
              requirements while invariably staying within time and budget
              limits. Along with full-cycle custom software development, we
              provide software maintenance and platform-based customization.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              In contrast to the conventional method of using Commercial
              Off-The-Shelf Software (COTS), Custom Software development aims at
              a narrowly defined set of requirements. Our team of excellent and
              proficient Software Developers will customize, create and test
              your software from start to finish.{" "}
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            {/* React Player Div */}
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "280px" }}
                src={csdImg}
              ></img>
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "2%" }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Card
              sx={cardStyle}
              style={{
                paddingLeft: 30,
                paddingRight: 30,
                borderTopRightRadius: 30,
                borderBottomLeftRadius: 30,
              }}
              elevation={3}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 30,
                    fontFamily: "nunito",
                    color: Colors.MAIN_COLOR,
                    marginTop: 15,
                  }}
                >
                  Why Custom Software and not COTS?
                </Typography>

                {customSoftCard.map((text) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 7,
                    }}
                  >
                    <ComputerIcon style={{ color: Colors.MAIN_COLOR }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "nunito",
                        paddingLeft: 1,
                        textAlign: "justify",
                        marginBottom: 1,
                      }}
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
            <Card
              sx={cardStyle}
              style={{
                paddingLeft: 30,
                paddingRight: 30,
                borderTopRightRadius: 30,
                borderBottomLeftRadius: 30,
              }}
              elevation={3}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 30,
                    fontFamily: "nunito",
                    color: Colors.MAIN_COLOR,
                    marginTop: 15,
                  }}
                >
                  Custom Software we deliver
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 30,
                    fontFamily: "nunito",
                    color: Colors.MAIN_COLOR,
                  }}
                >
                  1. Corporate & Inter-Organizational Software Systems{" "}
                </Typography>

                {customSoftDeliver.map((text) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 7,
                    }}
                  >
                    <CheckCircleIcon style={{ color: Colors.MAIN_COLOR }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "nunito",
                        paddingLeft: 1,
                        textAlign: "justify",
                        marginBottom: 1,
                      }}
                    >
                      {" "}
                      {text}
                    </Typography>
                  </div>
                ))}

                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 30,
                    fontFamily: "nunito",
                    color: Colors.MAIN_COLOR,
                  }}
                >
                  2. Departmental Software{" "}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <CheckCircleIcon style={{ color: Colors.MAIN_COLOR }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "nunito",
                      paddingLeft: 1,
                      textAlign: "justify",
                      marginBottom: 1,
                    }}
                  >
                    {" "}
                    We built software with features that are unmet by
                    Mass-market commercial or freesoftware to cover the needs of
                    a particular department within our organization.we can build
                    any customized software upon your request for easing the
                    Day-to-Day Operations of your crucial departments.{" "}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "5%" }}>
        {/* 67% middle of page */}
        <DivStyle1 style={{ flexDirection: "column" }}>
          <Typography
            variant="h4"
            style={{
              display: "flex",
              margin: "0 auto",
              color: Colors.MAIN_COLOR,
            }}
          >
            Overall Benefits of Netcom Custom Software Development
          </Typography>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "7%",
              flexWrap: "wrap",
              gap: 15,
            }}
          >
            {customSoftBenefit.map((obj) => (
              <DevelopmentServiceCards>
                <img src={obj.imageUrl} width="50%" />
                <Typography variant="h6">{obj.text}</Typography>
              </DevelopmentServiceCards>
            ))}
          </div>
        </DivStyle1>
      </div>

      <Footer />
    </>
  );
}
