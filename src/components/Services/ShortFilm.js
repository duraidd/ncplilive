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
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import shortFlimImg from "../../images/servicePageImages/shortFlim/shortFlim.png";

import smartClassImg from "../../images/projectPageImages/smart-Classroom/smart_class.svg";
import smartClassImg2 from "../../images/projectPageImages/smart-Classroom/smart_class_2.svg";
import smartClassImg3 from "../../images/projectPageImages/smart-Classroom/smart_class_22.svg";
import smartClassImg4 from "../../images/projectPageImages/smart-Classroom/img 2.svg";

import ReactPlayer from "react-player";
import ComputerIcon from "@mui/icons-material/Computer";
import location from "../../images/projectPageImages/smart-Classroom/location.svg";
import Footer from "../SubComponents/Footer";
import bgImg from "../../images/projectPageImages/smart-Classroom/grey-washed-wall.png";
import { Colors } from "../../constants";
import about1 from "../../images/allPageBanner/abouts-03.png";
import StarsIcon from "@mui/icons-material/Stars";
import BannerAll from "../SubComponents/BreadCrumbComponent";

export default function ShortFilm() {
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

  const DivStyle4 = styled("div")(({ theme }) => ({
    display: "flex",
    paddingLeft: "5%",
    paddingRight: "5%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "column-reverse",
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
      height: 420,
      marginTop: 3,
    },
    [theme.breakpoints.only("md")]: {
      height: 400,
    },
    [theme.breakpoints.up("md")]: {
      height: 350,
    },

    [theme.breakpoints.up("lg")]: {
      height: 410,
    },
    [theme.breakpoints.up("xl")]: {
      height: 410,
    },
  });

  const preProduction = [
    {
      title: "Pre Production",
      paragraph:
        "Our talented creative directors work hard during the preproduction stages. We will fine tune every aspect of preproduction, from script to storyboard, to ensure the smoothest transition into production, resulting in a perfect film.",
    },
    {
      title: " Production",
      paragraph:
        " Our production team will guarantee the best quality using the latest state of the art equipment and can cater to all budgets. We have higher end cameras dependent on budget we'll always make sure quality comes first. As you know equipment doesn't solely guarantee quality but here experience is another thing we have which contributes to quality.",
    },
  ];

  const postProduction = [
    {
      title: "Post Production",
      paragraph:
        " Once all scenes have been filmed we'll take it to our editing suite and begin our intense edit. From rough cut to colour grading we thoroughly pay attention to detail to provide a perfect final film. Our editors are also experienced with visual effects. From action effects to background replacements, we guarantee an audience won't know those skyscrapers in the distance aren't real.",
    },
    {
      title: "NETCOM Media  Services",
      paragraph:
        "Netcom Media works has own studio for filming. Our video production services are appreciated by our clients. We  create corporate films, short films, Video Ads, Documentaries. TV Commercials. Animated Videos.",
    },
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
          title: "Short Film",
          subTitle: "",
          path: ["Home", "Services", "Short Film"],
        }}
      />

      <div style={{ width: "100%", marginTop: "2%" }}>
        <DivStyle1>
          <DivStyle2>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                fontFamily: "nunito",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Netcom Media Works </span>{" "}
              has been started by a group of young and dynamic entrepreneurial
              IT professionals in the year of 2004 with a vision to make a mark
              in Information Technology. We are working with Short films,2D
              animation, Flash animation, 3D animation and Visual
              advertisements. We are doing animation for short films, episodic
              works for television and web. Our Development Division consists of
              established writers, illustrators and designers who generate ideas
              and concepts for commercially successful and market-driven
              products. We are working on a short films. A complete range of
              animation services are available for Netcom's clients. Netcom
              offers end-to-end animation services for production including
              storyboard, layout, background and animation, clean-up and
              compositing.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              Our passionate team work hard to create entertaining and
              meaningful content that people are able to not only enjoy, but
              resonate with. Whether a heartfelt drama or devotional, we assure
              we work hard to create a perfect product.
            </Typography>
          </DivStyle2>

          <DivStyle3>
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "320px" }}
                src={shortFlimImg}
              ></img>
            </div>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "2%" }}>
        <DivStyle1>
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
                {preProduction.map((obj) => (
                  <div style={{ marginTop: 7 }}>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "nunito",
                        color: Colors.MAIN_COLOR,
                        marginTop: 15,
                        marginLeft: 5,
                      }}
                    >
                      {obj.title}
                    </Typography>

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
                      {obj.paragraph}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </DivStyle2>

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
                {postProduction.map((obj) => (
                  <div style={{ marginTop: 7 }}>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "nunito",
                        color: Colors.MAIN_COLOR,
                        marginTop: 15,
                      }}
                    >
                      {obj.title}
                    </Typography>

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
                      {obj.paragraph}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "5%", marginBottom: "5%" }}>
        <DivStyle4>
          <DivStyle2>
            <Typography
              variant="h6"
              style={{ marginBottom: 10, fontFamily: "nunito", marginTop: 7 }}
            >
              BISHOP AZARIA Trailer Video
            </Typography>

            <div style={{ position: "relative", paddingTop: " 56.25%" }}>
              <ReactPlayer
                width="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
                height="100%"
                config={{
                  file: { attributes: { controlsList: "nodownload" } },
                }}
                url={"https://www.youtube.com/watch?v=c2IY6Lk84TY"}
                controls
              ></ReactPlayer>
            </div>
          </DivStyle2>

          <DivStyle3>
            <Typography
              variant="h6"
              style={{
                textAlign: "justify",
                marginTop: 20,
                fontFamily: "nunito",
                color: Colors.MAIN_COLOR,
              }}
            >
              {" "}
              Our Projects:{" "}
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                fontFamily: "nunito",
              }}
            >
              We have done a Project for Indian Missionary Society (IMS){" "}
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 20,
                fontFamily: "nunito",
              }}
            >
              {" "}
              <span style={{ fontWeight: "bold", color: Colors.MAIN_COLOR }}>
                BISHOP AZARIA
              </span>{" "}
              is a Indian Tamil Language film.This a Biography of vedanayagam
              Samuel Azariah (1874-1945) Bishop of the Anglican Church in India
              from 1912 until his death in 1945. We have done this film in 2D
              Animation and We have distributed entire story in Books.{" "}
            </Typography>
          </DivStyle3>
        </DivStyle4>
      </div>

      <Footer />
    </>
  );
}
