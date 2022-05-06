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

import service from "../../images/servicePageImages/MobApplicationDevelopment/service.svg";
import serviceMob from "../../images/servicePageImages/MobApplicationDevelopment/serviceMob.jpg";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import mobFirstScreen from "../../images/servicePageImages/MobApplicationDevelopment/mobFirstScreen.png";

import desktopAppImg from "../../images/servicePageImages/WebApplicationDevlopment/Desktop_app.svg";
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
import mobAppDevContents from "../StaticTextContents/serviceContents/mobAppDevContents";
import BannerAll from "../SubComponents/BreadCrumbComponent";

export default function MobileApplicationDevelopment() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const MobAppDevStepsSection = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingLeft: "15%",
    paddingRight: "15%",
    [theme.breakpoints.down("xl")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
  }));

  const MobAppDevStepsCards = (theme) => ({
    height: 300,
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 5,

    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
      height: 280,
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: 380,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      height: 300,
    },

    [theme.breakpoints.up("xl")]: {
      height: 300,
    },
  });

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
      height: 420,
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

  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Services" }} />

      <BannerAll
        dataParent={{
          title: "Mobile Application Development",
          subTitle: "",
          path: ["Home", "Services", "Mobile Application Development"],
        }}
      />

      <div style={{ width: "100%", marginTop: "5%" }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Typography
              variant="body1"
              style={{ textAlign: "justify", marginTop: 20 }}
            >
              Mobile App Development is the process of developing and helping to
              implement apps that run on{" "}
              <span style={{ fontWeight: "bold" }}>Android</span> and{" "}
              <span style={{ fontWeight: "bold" }}> iOS</span> Powered Mobile
              devices and a typical mobile application utilizes a network
              connection to work with remote computing resources.
            </Typography>
            <Typography
              variant="body1"
              style={{ textAlign: "justify", marginTop: 7 }}
            >
              Many of you will think that ―Our business style doesn't need an
              app to sell products to our clients! And maybe that would have
              been the case in the past. But if you want to prepare for the
              future and start seeing the massive benefits right out the gate,
              you'll definitely need a mobile app for your business development.
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            {/* React Player Div */}
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "300px" }}
                src={mobFirstScreen}
              ></img>
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        <DivStyle1 style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            style={{
              textAlign: "justify",
              marginTop: 7,
              color: Colors.MAIN_COLOR,
            }}
          >
            {" "}
            What does a Mobile App actually do?{" "}
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: "justify", marginTop: 7 }}
          >
            Mobile Applications would permit the users to have functional access
            to any products, information, process or services that they would
            demand in real-time.
            <br />
            It enables the business to send notifications about changes in
            products and services or something new.
          </Typography>
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <MobAppDevStepsSection>
        {mobAppDevContents.appProcess.map((obj) => (
          <Card elevation={3} sx={MobAppDevStepsCards}>
            <CardContent>
              <Typography variant="h6" style={{ color: Colors.MAIN_COLOR }}>
                {obj.title}
              </Typography>
              <Typography
                variant="body1"
                style={{ marginTop: 10, textAlign: "justify" }}
              >
                {obj.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </MobAppDevStepsSection>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        <DivStyle1>
          <img
            src={width < 800 ? serviceMob : service}
            width="100%"
            height={width < 800 ? "350px" : "400px"}
          />
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        <DivStyle1>
          <DivStyle2>
            <Typography
              variant="h6"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color: Colors.MAIN_COLOR,
              }}
            >
              {" "}
              What you can achieve by that?{" "}
            </Typography>
            <ul>
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 7,
                  fontFamily: "nunito",
                }}
              >
                Through that regular contact with your target clients, you're
                fostering their trust.
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 2,
                  fontFamily: "nunito",
                }}
              >
                The more your clients trust you, the more likely they'll be to
                listen to later sales pitches and would commit to your products
                and services.
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 2,
                  fontFamily: "nunito",
                }}
              >
                Netcom will create you a highly customized, client-friendly
                mobile application for making all your business operations and
                promotions easier.
              </Typography>
            </ul>
          </DivStyle2>

          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                textAlign: "justify",
                marginTop: 7,
                color: Colors.MAIN_COLOR,
              }}
            >
              {" "}
              Our Developing Strategies for Brand & Online Presence{" "}
            </Typography>
            <ul>
              <Typography
                variant="body1"
                style={{ textAlign: "justify", marginTop: 7 }}
              >
                Android Mobile & Tablet Application Development
              </Typography>
              <Typography
                variant="body1"
                style={{ textAlign: "justify", marginTop: 2 }}
              >
                iOS Application Development
              </Typography>
              <Typography
                variant="body1"
                style={{ textAlign: "justify", marginTop: 2 }}
              >
                E-commerce Development
              </Typography>
            </ul>
          </DivStyle3>
        </DivStyle1>
      </div>

      <Footer />
    </>
  );
}
