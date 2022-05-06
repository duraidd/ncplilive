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
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import webAppDevImg from "../../images/servicePageImages/WebApplicationDevlopment/webAppDevelopment.png";

import frontEndArchitecture from "../../images/servicePageImages/WebApplicationDevlopment/front-end-architecture.svg";
import testing from "../../images/servicePageImages/WebApplicationDevlopment/testing-performance.svg";
import responsive from "../../images/servicePageImages/WebApplicationDevlopment/responsive.svg";
import uiuxdesign from "../../images/servicePageImages/WebApplicationDevlopment/uiuxdesign.svg";
import cmsEcommerce from "../../images/servicePageImages/WebApplicationDevlopment/cms-ecommerce.svg";
import javascriptSolutions from "../../images/servicePageImages/WebApplicationDevlopment/javascript-solutions.svg";

import ReactPlayer from "react-player";

import ComputerIcon from "@mui/icons-material/Computer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import location from "../../images/projectPageImages/smart-Classroom/location.svg";
import Footer from "../SubComponents/Footer";
import bgImg from "../../images/projectPageImages/smart-Classroom/grey-washed-wall.png";
import { Colors } from "../../constants";
import about1 from "../../images/allPageBanner/abouts-03.png";
import StarsIcon from "@mui/icons-material/Stars";

import reactLogo from "../../images/servicePageImages/WebApplicationDevlopment/mernLogo/reactLogo.svg";
import nodeLogo from "../../images/servicePageImages/WebApplicationDevlopment/mernLogo/nodeLogo.svg";
import expressLogo from "../../images/servicePageImages/WebApplicationDevlopment/mernLogo/expressLogo.svg";
import jsLogo from "../../images/servicePageImages/WebApplicationDevlopment/mernLogo/js.svg";
import mongoLogo from "../../images/servicePageImages/WebApplicationDevlopment/mernLogo/mango db.svg";

import muiLogo from "../../images/servicePageImages/WebApplicationDevlopment/mernLogo/mui.svg";
import htmlLogo from "../../images/servicePageImages/WebApplicationDevlopment/mernLogo/HTML.svg";
import cssLogo from "../../images/servicePageImages/WebApplicationDevlopment/mernLogo/Css.svg";
import AWSLogo from "../../images/servicePageImages/WebApplicationDevlopment/mernLogo/AWS.svg";
import BannerAll from "../SubComponents/BreadCrumbComponent";

export default function WebApplicationDevelopment() {
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
      height: 480,
      marginTop: 3,
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: 420,
      marginTop: 3,
    },
    [theme.breakpoints.only("md")]: {
      height: 300,
    },
    [theme.breakpoints.up("md")]: {
      height: 300,
    },

    [theme.breakpoints.up("lg")]: {
      height: 380,
    },
    [theme.breakpoints.up("xl")]: {
      height: 380,
    },
  });

  const cardStyle1 = (theme) => ({
    [theme.breakpoints.down("md")]: {
      height: 500,
      marginTop: 3,
    },
    [theme.breakpoints.up("md")]: {
      height: 300,
    },

    [theme.breakpoints.up("lg")]: {
      height: 380,
    },
    [theme.breakpoints.up("xl")]: {
      height: 380,
    },
  });

  const ProductCards = styled("div")(({ theme }) => ({
    height: 300,
    width: "30%",
    display: "flex",
    flexDirection: "column",

    marginBottom: 60,

    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      height: 250,
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: 300,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      height: 300,
    },

    [theme.breakpoints.up("xl")]: {
      height: 310,
    },
  }));

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

  const developmentStack = useMemo(() => {
    return [
      {
        id: 1,
        titleName: "Languages",
        legend: "Languages",
        content: [
          { icon: htmlLogo, name: "HTML" },
          { icon: cssLogo, name: "CSS" },
          { icon: jsLogo, name: "JavaScript" },
        ],
      },
      {
        id: 2,
        titleName: "Front-end",
        legend: "Frameworks & CSS",
        content: [
          { icon: reactLogo, name: "React JS" },
          { icon: muiLogo, name: "MUI" },
        ],
      },
      {
        id: 3,
        titleName: "Back-end",
        legend: "Languages & Framework",
        content: [
          { icon: nodeLogo, name: "Node JS" },
          { icon: expressLogo, name: "Express JS" },
        ],
      },
      {
        id: 4,
        titleName: "Database",
        legend: "Storage & Cloud Storage",
        content: [
          { icon: mongoLogo, name: "MongoDB" },
          { icon: AWSLogo, name: "AWS" },
        ],
      },
    ];
  }, []);

  const handleChange = (event, newValue) => {
    console.log("value:  " + newValue);

    setValue(newValue);

    if (newValue === "1") {
      setcolorTextTab1("green");
    } else {
      setcolorTextTab1("black");
    }

    if (newValue === "2") {
      setcolorTextTab2("green");
    } else {
      setcolorTextTab2("black");
    }

    if (newValue === "3") {
      setcolorTextTab3("green");
    } else {
      setcolorTextTab3("black");
    }

    if (newValue === "4") {
      setcolorTextTab4("green");
    } else {
      setcolorTextTab4("black");
    }

    if (newValue === "5") {
      setcolorTextTab5("green");
    } else {
      setcolorTextTab5("black");
    }
  };

  const [value, setValue] = useState("1");

  const [colorTextTab1, setcolorTextTab1] = useState("green");
  const [colorTextTab2, setcolorTextTab2] = useState("black");
  const [colorTextTab3, setcolorTextTab3] = useState("black");
  const [colorTextTab4, setcolorTextTab4] = useState("black");
  const [colorTextTab5, setcolorTextTab5] = useState("black");

  const services = [
    {
      imageUrl: frontEndArchitecture,
      text: "Front End Architecture & Design",
    },
    {
      imageUrl: testing,
      text: "Testing & Performance Tuning",
    },
    {
      imageUrl: responsive,
      text: "Responsive Design",
    },
    {
      imageUrl: uiuxdesign,
      text: "UI / UX Development",
    },
    {
      imageUrl: cmsEcommerce,
      text: "CMS & eCommerce Theme Development",
    },
    {
      imageUrl: javascriptSolutions,
      text: "Custom JavaScript Solutions",
    },
  ];

  const howWeWork = [
    {
      imageUrl: frontEndArchitecture,
      title: "Analysis",
      text: "The process will involve proper understanding of the project need and requirements, so that both the parties have clear scope and vision of the project and the technologies that will be used to develop the site.",
    },
    {
      imageUrl: testing,
      title: "Design",
      text: "Design will focus on how the site is going to look and feel. In this process only we will decide on the functionalities, utilities and requirements that will make a seamless working website.",
    },
    {
      imageUrl: responsive,
      title: "Responsive Development",
      text: "Development process will involve converting the application design to workable information applications. After this the project cycle will enter the testing phase.",
    },
    {
      imageUrl: uiuxdesign,
      title: "Testing & Bug Fixes",
      text: "This phase will include proper testing of the web application, which will help deciding the capabilities and deficiencies.  ",
    },
    {
      imageUrl: cmsEcommerce,
      title: "Deployment",
      text: "It will be the final step of the development process where we deliver the product to the clients.",
    },
    {
      imageUrl: javascriptSolutions,
      title: "Maintenance & Support",
      text: "This will include software upgrades, repairs and fixes. We will also monitor the performance of the software so you don't face any issues.",
    },
  ];

  const webAppBuss = [
    "Businesses from all corners of the world, offering a huge range of products, have begun migrating from the physical world of handing out leaflets, printing advertisements, and hanging billboards, to the digital realm",
    "The business world is evolving every single day, thus increasing your competitors and hurdles making it hard to sustain like yesterday. So the only solution to standout in the crowd is to attracting clients and new offers by showcasing your work style, products and skills in the light.",
  ];

  const whyNetcom = [
    "NETCOM will help you in developing your company web application that would help increasing the pace and scale of your Business expansion.",
    "We will create and customize your website highlighting all the services and features of your business firms in a cost effective way.",
    "Our strength is our small and highly expertise teams of Web Development Pros, who are in turn complemented by our experience.",
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
          title: "Web Application Development",
          subTitle: "",
          path: ["Home", "Services", "Web Application Development"],
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
              Web Application Development is the creation of application program
              that reside on remote servers and are delivered to the user's
              device over the internet.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              Netcom development process will typically have a short development
              life-cycle lead by a small and efficient development team.
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              Our web development company has been developing web applications
              for the custom business requirements of all our esteemed clients.
              Our developer's skills & experience and cutting-edge technology
              will deliver you with Robust Web Applications.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              As leading Web Development company, delivering quality
              applications is always our priority. Discover our wide range of
              services and work with us!
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            {/* React Player Div */}
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "300px" }}
                src={webAppDevImg}
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
                  Web Application for your Business
                </Typography>

                {webAppBuss.map((text) => (
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
              sx={cardStyle1}
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
                  Why to approach Netcom ?
                </Typography>

                {whyNetcom.map((text) => (
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
            Web Application Development Services
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
            {services.map((obj) => (
              <DevelopmentServiceCards>
                <img src={obj.imageUrl} width="50%" />
                <Typography variant="h6">{obj.text}</Typography>
              </DevelopmentServiceCards>
            ))}
          </div>
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
            How We Work
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: "7%",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {howWeWork.map((obj) => (
              <ProductCards>
                <img src={obj.imageUrl} width="20%" />
                <Typography
                  variant="h6"
                  style={{
                    marginTop: 15,
                    marginBottom: 15,
                    color: Colors.MAIN_COLOR,
                    fontWeight: "bold",
                  }}
                >
                  {obj.title}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ textAlign: "justify", lineHeight: "26px" }}
                >
                  {obj.text}
                </Typography>
              </ProductCards>
            ))}
          </div>
        </DivStyle1>
      </div>

      <div style={{ width: "100%" }}>
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
            Web Application Development Stack
          </Typography>

          <Box sx={{ width:'100%',typography: "body1", marginTop: "7%" }}>
            <TabContext value={value}>
              {" "}
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "green",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Tabs
                  value={value}
                  variant="scrollable"
                  allowScrollButtonsMobile
                  onChange={handleChange}
                  TabIndicatorProps={{ style: { background: "green" } }}
                  textColor="inherit"
                >
                  <Tab
                    sx={{ color: colorTextTab1, textTransform: "none" }}
                    label={
                      <Typography variant="h6" style={{ cursor: "pointer" }}>
                        Languagess{" "}
                      </Typography>
                    }
                    value="1"
                  />
                  <Tab
                    sx={{ color: colorTextTab2, textTransform: "none" }}
                    label={
                      <Typography variant="h6" style={{ cursor: "pointer" }}>
                        Front-end{" "}
                      </Typography>
                    }
                    value="2"
                  />
                  <Tab
                    sx={{ color: colorTextTab3, textTransform: "none" }}
                    label={
                      <Typography variant="h6" style={{ cursor: "pointer" }}>
                        Back-end{" "}
                      </Typography>
                    }
                    value="3"
                  />
                  <Tab
                    sx={{ color: colorTextTab4, textTransform: "none" }}
                    label={
                      <Typography variant="h6" style={{ cursor: "pointer" }}>
                        Database
                      </Typography>
                    }
                    value="4"
                  />
                </Tabs>
              </Box>
              <TabPanel value="1">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <fieldset
                    style={{
                      width: "100%",
                      border: "3px solid #4df752",
                      fontSize: 20,
                    }}
                  >
                    <legend align="center">Languages</legend>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                        >
                          <img src={htmlLogo} width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            HTML
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                        >
                          <img src={cssLogo} width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            CSS
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                        >
                          <img src={jsLogo} width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            JavaScript
                          </Typography>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <fieldset
                    style={{
                      width: "100%",
                      border: "3px solid #4df752",
                      fontFamily: "nunito",
                      fontSize: 20,
                    }}
                  >
                    <legend align="center"> Frameworks & CSS</legend>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                          animateOnce={true}
                        >
                          <img src={reactLogo} width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            React JS
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOnce={true}
                        >
                          <img src={muiLogo} width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            MUI
                          </Typography>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <fieldset
                    style={{
                      width: "100%",
                      border: "3px solid #4df752",
                      fontFamily: "nunito",
                      fontSize: 20,
                    }}
                  >
                    <legend align="center">Languages & Framework</legend>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                          animateOnce={true}
                          duration={2}
                        >
                          <img src={nodeLogo} width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            Node JS
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__zoomOut"
                          animateOnce={true}
                          duration={2}
                        >
                          <img src={expressLogo} width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            Express JS
                          </Typography>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </TabPanel>
              <TabPanel value="4">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                  }}
                >
                  <fieldset
                    style={{
                      width: "100%",
                      border: "3px solid #4df752",
                      fontFamily: "nunito",
                      fontSize: 20,
                    }}
                  >
                    <legend align="center">Storage & Cloud Storage</legend>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__fadeInDown"
                        >
                          <img src={mongoLogo} width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            Mongo DB
                          </Typography>
                        </AnimationOnScroll>
                      </div>

                      <div style={{ textAlign: "center", width: "50%" }}>
                        <AnimationOnScroll
                          animateIn="animate__zoomIn"
                          animateOut="animate__fadeInDown"
                        >
                          <img src={AWSLogo} width="20%" />
                          <Typography variant="h6" style={{ display: "block" }}>
                            AWS
                          </Typography>
                        </AnimationOnScroll>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </DivStyle1>
      </div>

      <Footer />
    </>
  );
}
