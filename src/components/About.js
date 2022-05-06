import AppbarHead from "./SubComponents/AppbarHead";
import React, { useEffect } from "react";

import BannerAll from '../components/SubComponents/BreadCrumbComponent';

import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import Footer from "./SubComponents/Footer";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import mission from "../images/aboutUsImages/mission.svg";
import vision from "../images/aboutUsImages/vision.svg";
import { ScrollToTop } from "react-simple-scroll-up";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { Colors } from "../constants";
import aboutContents from "./StaticTextContents/aboutContents";

export default function About() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const FirstSection = styled("div")(({ theme }) => ({
    display: "flex",
    paddingLeft: "5%",
    paddingRight: "5%",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  }));

  const SecondSection = styled("div")(({ theme }) => ({
    display: "flex",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 60,
    marginBottom: 60,
    justifyContent: "space-between",
    gap: 5,
    flexWrap: "wrap",

    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "87%",
      gap: 35,
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  }));

  const cardstyles = (theme) => ({
    padding: "5px",
    width: "40%",
    margin: "2px",
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "justify",
    backgroundColor: "white",
    border: `2px solid`,
    borderColor: Colors.LIGHT_COLOR,

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      height: 400,
    },
    [theme.breakpoints.up("lg")]: {
      height: 400,
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "About Us" }} />

      <BannerAll
        dataParent={{
          title: "About",
          subTitle: "Know Who We Are",
          path: ["Home", "About"],
        }}
      />

    

      <FirstSection>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="subtitle1"
            style={{ marginTop: 15, textAlign: "justify" }}
          >
            <br />
            <span style={{ color: Colors.MAIN_COLOR, fontWeight: "bold" }}>
              Netcom Computers Pvt Ltd
            </span>{" "}
            , an information technology based company since 2004, in Education
            and Training, is offering wide range of that include creating
            educational and training content of global relevance,designing and
            executing large learning initiatives and setting up the requisite
            infrastructure.
            <br />
            <br />
            Netcom is to build a quality and comprehensive technology
            infrastructure, establish and maintain an effective operational
            environment ,deliver Quality,prompt cost effective and reliable
            technology.Netcom to provide innovative,Quality and sustainable ICT
            solutions and services that meet the aspiration of the educational
            sector institutions like School boards and universities in the
            learning, teaching,research and management.
            <br />
            <br />
            Over these years, the company has earned a reputation that has a
            unique combination of value,trust and reliability.We have a
            formidable track record and are illustrious for the expertise of our
            team
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ textAlign: "justify", marginTop: 4, color: "grey" }}
          >
            Netcom providing multiple software services to clients. Our mission
            is to help customers achieve their business objectives by providing
            innovative, best-in-class consulting, IT solutions, and services. We
            function as an IT partner to business, offering a consulting – plan
            – implementation approach with an integrated portfolio of technology
            IT solutions that encompass the entire Enterprise value chain.
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ textAlign: "justify", marginTop: 4, color: "grey" }}
          >
            Our company by a team of innovative software professionals, we are a
            premier software development company, specializing in outsourcing
            services, product-engineering-services that includes custom
            Application / software application development, maintenance and
            mobile application development. Netcom domestic and international
            business network delivers highly flexible, adaptive solutions and a
            best-of-both worlds scenario for business needs. Our Company
            offshore development team will be always in contact with clients for
            customer-driven continuous development and to ensure that the
            project is always on track.
          </Typography>

          <Typography
            variant="h4"
            style={{
              marginTop: 40,
              marginBottom: 30,
              color: Colors.MAIN_COLOR,
              fontWeight: "bold",
            }}
          >
            What we do?
          </Typography>

          <Typography variant="subtitle1" style={{ textAlign: "justify" }}>
            {" "}
            {}
            {aboutContents.whatWeDo}
          </Typography>
        </div>
      </FirstSection>

      <SecondSection>
        <Card square elevation={4} sx={cardstyles}>
          <img
            src={aboutContents.missionVision[0]["imgIcon"]}
            style={{ height: 80, width: 80, marginTop: 10 }}
          />
          <Typography
            variant="h5"
            style={{ color: Colors.MAIN_COLOR, marginTop: 10 }}
          >
            {aboutContents.missionVision[0]["title"]}
          </Typography>

          <Typography
            variant="subtitle1"
            style={{ margin: 20, textAlign: "justify", marginTop: 10 }}
          >
            {aboutContents.missionVision[0]["content"]}
          </Typography>
        </Card>

        <Card square elevation={4} sx={cardstyles}>
          <img
            src={aboutContents.missionVision[1]["imgIcon"]}
            style={{ height: 80, width: 80, marginTop: 10 }}
          />
          <Typography
            variant="h5"
            style={{ color: Colors.MAIN_COLOR, marginTop: 10 }}
          >
            {aboutContents.missionVision[1]["title"]}
          </Typography>

          <Typography
            variant="subtitle1"
            style={{ margin: 20, textAlign: "justify", marginTop: 10 }}
          >
            {aboutContents.missionVision[1]["content"]}
          </Typography>
        </Card>
      </SecondSection>

      <Footer />
    </>
  );
}
