import {React, useEffect} from "react";
import { styled } from "@mui/system";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import about1 from "../../images/allPageBanner/abouts-03.png"
import bgImg from "../../images/projectPageImages/smart-Classroom/grey-washed-wall.png";
import { Typography, Breadcrumbs, Link, Card, CardContent, } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ReactPlayer from "react-player";
import Footer from '../SubComponents/Footer';
import { Colors } from '../../constants';
import BannerAll from '../SubComponents/BreadCrumbComponent';


export default function Econtent(){
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return(
    <>
    <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Projects" }} />

      <BannerAll
        dataParent={{
          title: "Netcom Digital Contents",
          subTitle: "",
          path: ["Home", "Projects", "Netcom Digital Contents"],
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
              Netcom Media Works has been started by a group of young and
              dynamic entrepreneurial IT professionals in the year of 2002 with
              a vision to make a mark in Information Technology. We are working
              with
              <span style={{}}>
                {" "}
                2-D animation, Flash animation,3-D animation and Visual
                advertisements.{" "}
              </span>
              We are doing animation for short films, episodic works for
              television and web.
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              Our Development Division consists of established writers,
              illustrators and designers who generate ideas and concepts for
              commercially successful and market-driven products. Netcom offers
              end-to-end animation services for production including storyboard,
              layout, background and animation in-betweening, clean-up and
              compositing.{" "}
            </Typography>

            <Typography
              variant="h6"
              style={{ marginTop: 10, fontFamily: "nunito" }}
            >
              3-D Production
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 7,
                fontFamily: "nunito",
              }}
            >
              The 3-D Animation Production is the set of processes that are used
              to convert an idea, into a finished product. It is a system
              designed to take each step in a pre-determined order so that
              everyone knows when and how their work needs to be done.{" "}
            </Typography>
          </DivStyle2>
          {/* Ride Side */}
          <DivStyle3>
            <Typography
              variant="h6"
              style={{ marginBottom: 10, fontFamily: "nunito", marginTop: 10 }}
            >
              Netcom Digital Content Demo video
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
                url={"https://gdurl.com/rNwo"}
                controls
              ></ReactPlayer>
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25 }}>
        <DivStyle1>
          <Card sx={{ width: "320px", height: "300px" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ marginTop: 10, fontFamily: "nunito" }}
              >
                Pre Production
              </Typography>

              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 7,
                  fontFamily: "nunito",
                }}
              >
                The pre-production process of 3D animation involves the initial
                aspects of an animated film. This process includes the concept
                creation, storyboards, rough script reel, and character
                creation. With these steps complete, the animation production
                pipeline is ready to move to the production process.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "320px", height: "300px" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ marginTop: 10, fontFamily: "nunito" }}
              >
                STORY
              </Typography>

              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 7,
                  fontFamily: "nunito",
                }}
              >
                {" "}
                Heads of story are in charge of turning the writer's words and
                the director's vision into a visual representation of the
                narrative. They produce series of panels to plan the action,
                staging and camera choices in 3D digital shots or 2D animation
                frames. They also work to ensure continuity betweenanimated
                scenes.{" "}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "320px", height: "300px" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ marginTop: 10, fontFamily: "nunito" }}
              >
                ANIMATIC
              </Typography>

              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 7,
                  fontFamily: "nunito",
                }}
              >
                {" "}
                An animatic is an animated storyboard, a slideshow of images
                depicting movement. To create an animatic, storyboard images are
                cut together to make a rough draft animation, usually with sound
                effects or music, giving filmmakers an idea of what the final
                animation or live- actionsequence will look like.
              </Typography>
            </CardContent>
          </Card>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 40, marginBottom: 200 }}>
        <DivStyle1>
          <Card
            sx={{
              width: "320px",
              height: "300px",
              backgroundColor: "#ffff",
              backgroundImage: `url(${bgImg})`,
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                style={{ marginTop: 10, fontFamily: "nunito" }}
              >
                STORYBOARD
              </Typography>

              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 7,
                  fontFamily: "nunito",
                }}
              >
                A storyboard is a graphic organizer that plans a narrative.
                Storyboards are a powerful way to visually present information;
                the linear direction of the cells is perfect for storytelling,
                explaining a process, and showing the passage of time. At their
                core, storyboards are a set of sequential drawings to tell a
                story.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "320px", height: "300px" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ marginTop: 10, fontFamily: "nunito" }}
              >
                DESIGN
              </Typography>

              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 7,
                  fontFamily: "nunito",
                }}
              >
                {" "}
                Animation design is the art of creating special effects and
                other designs for various forms of media, including video games,
                movies and even social media posts. Much of an animation
                designer's work is done with specialized computer software, and
                some even write their own code!
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "320px", height: "300px" }}>
            <CardContent>
              <Typography
                variant="h6"
                style={{ marginTop: 10, fontFamily: "nunito" }}
              >
                IDEA
              </Typography>

              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 7,
                  fontFamily: "nunito",
                }}
              >
                {" "}
                An animation is really just a moving story. So you need to have
                a story idea before you can begin.
              </Typography>
            </CardContent>
          </Card>
        </DivStyle1>
      </div>
      <Footer />
    </>
    );
}