import { React, useEffect } from "react";
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

import smartClassImg from "../../images/projectPageImages/smart-Classroom/smart_class.svg";
import smartClassImg2 from "../../images/projectPageImages/smart-Classroom/smart_class_2.svg";
import smartClassImg3 from "../../images/projectPageImages/smart-Classroom/smart_class_22.svg";
import smartClassImg4 from "../../images/projectPageImages/smart-Classroom/img 2.svg";

import ReactPlayer from "react-player";
import ComputerIcon from "@mui/icons-material/Computer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import location from "../../images/projectPageImages/smart-Classroom/location.svg";
import Footer from "../SubComponents/Footer";
import bgImg from "../../images/projectPageImages/smart-Classroom/grey-washed-wall.png";
import { Colors } from "../../constants";
import StarsIcon from "@mui/icons-material/Stars";

import about1 from "../../images/allPageBanner/abouts-03.png";
import BannerAll from "../SubComponents/BreadCrumbComponent";

export default function NetcomDigitalCOntents() {
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
      flexDirection: "row",
      justifyContent: "space-between",
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
    width: "25%",
    height: 290,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderTop: `5px solid ${Colors.MAIN_COLOR}` ,

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 290,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 290,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 290,
    },

    [theme.breakpoints.only("md")]: {
      width: "40%",
      height: 290,
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      height: 290,
    },
    [theme.breakpoints.up("xl")]: {
      width: "30%",
      height: 290,
    },
  });

  const cardStyle1 = (theme) => ({
    width: "25%",
    height: 290,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderTop:  `5px solid ${Colors.MAIN_COLOR}` ,

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 290,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 290,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 290,
    },

    [theme.breakpoints.only("md")]: {
      width: "40%",
      height: 290,
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      height: 290,
    },
    [theme.breakpoints.up("xl")]: {
      width: "22%",
      height: 380,
    },
  });

  const cardStyle2 = (theme) => ({
    width: "25%",
    height: 290,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderTop: `5px solid ${Colors.MAIN_COLOR}`,

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 420,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 420,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 420,
    },

    [theme.breakpoints.only("md")]: {
      width: "40%",
      height: 420,
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      height: 390,
    },
    [theme.breakpoints.up("xl")]: {
      width: "30%",
      height: 410,
    },
  });

  const cardStyle3 = (theme) => ({
    width: "25%",
    height: 290,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderTop: `5px solid ${Colors.MAIN_COLOR}`,

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 510,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 510,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 490,
    },

    [theme.breakpoints.only("md")]: {
      width: "45%",
      height: 450,
    },
    [theme.breakpoints.up("lg")]: {
      width: "45%",
      height: 350,
    },
    [theme.breakpoints.up("xl")]: {
      width: "45%",
      height: 410,
    },
  });
  const smartClassProj = [
    "86 Smart Classrooms in Chennai Corporation Schools through ELCOT.",
    "126 AdiDravidar Welfare Department Schools through ELCOT.",
    "15 Kallar (Most Denotified Backward Class) schools in districts of Madurai, Theni and Dindugal through ELCOT.",
    "25 Smart classrooms through Tirunelveli Corporations.",
    "4 Smart classrooms through ELCOT by Coimbatore Corporations.",
    "3 Smart classrooms through School Education Department.",
    "Netcom e-Smart Class Rooms more than  300 Government and Corporation Schools through ELCOT in BOOT model.",
  ];

  const smartClassHighProj = [
    "The content installed in the server is Samacheer based syllabus for the Std. 6 to 12 with diagrams and animations for the easy understanding of students.",
    "The content has been developed and installed at schools in both Tamil and English language according to the medium of instruction required for the students.",
    "An excellent ambience with live voice and computer presentation through multimedia,projector will enable the students to have 100% attention which converts the teaching process into more effective learning than the traditional class room teaching.",
    "The touch screen feature placed in KIOSK is loaded with the same content for students to enhance self-learning, which is one of the main feature in the E-Smart Class Room project.",
    "We have these animated contents for the schools under both the State and the CBSE syllabus, in English, Tamil and Hindi.",
    "We take full credit as we have successfully implemented these projects within the stipulated time frame by the Government for the beneficial of student community.",
  ];

  const cardDatas = [
    {
      headName: "Pre Production",
      headContent:
        "The pre-production process of 3D animation involves the initial aspects of an animated film. This process includes the concept creation, storyboards, rough script reel, and character creation. With these steps complete, the animation production pipeline is ready to move to the production process.",
    },
    {
      headName: "Story",
      headContent:
        "Heads of story are in charge of turning the writer's words and the director's vision into a visual representation of the narrative. They produce series of panels to plan the action, staging and camera choices in 3D digital shots or 2D animation frames. They also work to ensure continuity betweenanimated scenes.",
    },
    {
      headName: "Animatic",
      headContent:
        "An animatic is an animated storyboard, a slideshow of images depicting movement. To create an animatic, storyboard images are cut together to make a rough draft animation, usually with sound effects or music, giving filmmakers an idea of what the final animation or live- actionsequence will look like.",
    },
    {
      headName: "Storyboard",
      headContent:
        "A storyboard is a graphic organizer that plans a narrative. Storyboards are a powerful way to visually present information; the linear direction of the cells is perfect for storytelling, explaining a process, and showing the passage of time. At their core, storyboards are a set of sequential drawings to tell a story.",
    },
    {
      headName: "Design",
      headContent:
        "Animation design is the art of creating special effects and other designs for various forms of media, including video games, movies and even social media posts. Much of an animation designer's work is done with specialized computer software, and some even write their own code!",
    },
    {
      headName: "Idea",
      headContent:
        "An animation is really just a moving story. So you need to have a story idea before you can begin.",
    },
  ];

  const cardDatas1 = [
    {
      headName: "Layout",
      headContent:
        "Layout design for animation is the process of conceptualizing environments based on the story of the animated film, and adapting it to the stylistic choices of the film. The primary role of the layout artist is to design the stage on which the animation of the character or special effects takes place. ",
    },
    {
      headName: "Modeling",
      headContent:
        "Model animation is a form of stop motion animation designed to merge with live-action footage to create the illusion of a real-world fantasy sequence.",
    },
    {
      headName: "Texturing",
      headContent:
        "Texturing in 3D animation is the process of dressing up 3D models with 2D pictures. Texture artists oversee giving 3D objects physical characteristics. The overall goal is to match the surface of the model to its concept art or real-world equivalent. ",
    },
    {
      headName: "Rigging/Setup",
      headContent:
        "Rigging is making our characters able to move. The process of rigging is we take that digital sculpture, and we start building the skeleton, the muscles, and we attach the skin to the character, and we also create a set of animation controls, which our animators use to push and pull the body around.",
    },
    {
      headName: "Animation",
      headContent:
        "Animation is a method in which figures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. Today, most animations are made with computer-generated imagery (CGI).",
    },
    {
      headName: "VFX",
      headContent:
        "VFX or Visual Effects are a way of mixing real film shooting with false or animated images. For instance, a movie that shows the hero jumping off the ground and flying into the air, is created using VFX. ... Affordable software for Animation & VFX has made it easy for almost all filmmakers to use VFX in their movie. ",
    },
    {
      headName: "Lighting",
      headContent:
        "Lighting in 3D animation is much like lighting in photography or filmmaking. The lighting artist sets up a combination of light sources to either draw attention to a special part of the setting, set the overall mood of the scene, or represent the natural properties of the scene such as time of the day.",
    },
    {
      headName: "Rendering",
      headContent:
        "Rendering is used in both 2D and 3D computer animation.It is the process of getting the final assembled animation scenes or pieces out of the computer in the format of a sequence of individual frames. The aim of rendering is to generate a series of individual pixel based frames or a video clip. ",
    },
  ];

  const cardDatas2 = [
    {
      headName: "Compositing",
      headContent:
        "Compositing is the process of combining visual elements from separate sources to create one image. The answer to why we need compositing is straightforward. Compositing allows a level of refinement of the imagery or animation that is still hard to achieve in 3D software. ",
    },
    {
      headName: "2D VFX/Motion Graphics ",
      headContent:
        "Motion Graphics means Graphics in Movement. It’s the most straightforward definition you can get. Many times, Motion Graphics is also called Motion Design, making the relationship between movement and design elements easier to understand. Motion Graphics is about bringing the design knowledge to new mediums by adding the elements of time and space to it — i.e. creating movement. ",
    },
    {
      headName: "Colors Correction",
      headContent: `Color correction is a vital part of 3D animation post-production in an animation studio and one of the final stops in the 3D animation pipeline. It utilizes the most powerful tools to adjust the color, and also the light and contrast of the images; optimizing the scene to establish the desired look.<br/> <b>Post-Production</b> is the final stage of animation production: everything that comes after the main production is finished. It includes the final polishing of animation, editing, adding the soundtrack and sound effects. `,
    },
  ];

  const cardDatas3 = [
    {
      headName: "2D Animation Experience ",
      headContent: `<b>Reserve Bank Of India (RBI) Financial Inclusion Project</b> <br/>'Money Tree' is 2D Animation Short Film on RBI Norms for creating awareness to the general public and  the school children in financial inclusion strategies. This film has been used to educate people on personal  banking activities. This project implemented 16 states in India wherever the TMB bank allocated. It is  established in the period of 2011-2013.<br/> We have implemented it in <b>16 States</b> more than 3000 Schools & 1.5  lakh Students used it. `,
    },
    {
      headName: "3D Animation Experience   ",
      headContent: `   We have created 3D animation episodes based on stories from the Bible. <br/>Another important establishment to add feather to our cap is feature film Productions.We have created  3D animation episodes based on stories from the Bible.<br/> We have ventured into production, portraying  about a famous personality <b>Azariah Enum Vidha</b>. In the Twentieth century, many great  Christian leaders emerged. Most of their names are unknown, expect outside in their own Church or  national boundaries. Their life stories can provide rich insights to the people and the world. This great  leader’s life, contribution to the mission, methods are the crafted in this film. `,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
              style={{ marginTop: 10, fontFamily: "nunito",color:Colors.MAIN_COLOR }}
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
              style={{ marginBottom: 10, fontFamily: "nunito", marginTop: 10,color:Colors.MAIN_COLOR }}
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
                url={"https://gdurl.com/fuW9"}
                controls
              ></ReactPlayer>
            </div>
            {/* React Player Div */}
          </DivStyle3>
        </DivStyle1>
      </div>

     
      <div style={{ width: "100%", marginTop: "5%", marginBottom: 30 }}>
        <DivStyle1 style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            style={{ marginTop: 10, fontFamily: "nunito",color:Colors.MAIN_COLOR }}
          >
            Pre-Production
          </Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "5%", marginBottom: 30 }}>
        <DivStyle1 style={{ flexWrap: "wrap", gap: 35 }}>
          {cardDatas.map((item, index) => (
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="h6" sx={{color:Colors.MAIN_COLOR}} >{item.headName}</Typography>
                <Typography variant="body1" style={{ marginTop: 10 }}>
                  {item.headContent}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "5%", marginBottom: 30 }}>
        <DivStyle1 style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            style={{ marginTop: 10, fontFamily: "nunito",color:Colors.MAIN_COLOR }}
          >
            Production
          </Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "5%", marginBottom: 30 }}>
        <DivStyle1 style={{ flexWrap: "wrap", gap: 35 }}>
          {cardDatas1.map((item, index) => (
            <Card sx={cardStyle1}>
              <CardContent>
                <Typography variant="h6"sx={{color:Colors.MAIN_COLOR}} >{item.headName}</Typography>
                <Typography variant="body1" style={{ marginTop: 10 }}>
                  {item.headContent}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "5%", marginBottom: 30 }}>
        <DivStyle1 style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            style={{ marginTop: 10, fontFamily: "nunito",color:Colors.MAIN_COLOR }}
          >
            Post-Production
          </Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "5%", marginBottom: 30 }}>
        <DivStyle1 style={{ flexWrap: "wrap", gap: 35 }}>
          {cardDatas2.map((item, index) => (
            <Card sx={cardStyle2}>
              <CardContent>
                <Typography variant="h6" sx={{color:Colors.MAIN_COLOR}}>{item.headName}</Typography>
                <Typography
                  variant="body1"
                  style={{ marginTop: 10 }}
                  dangerouslySetInnerHTML={{ __html: item.headContent }}
                ></Typography>
              </CardContent>
            </Card>
          ))}
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "5%", marginBottom: 30 }}>
        <DivStyle1 style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            style={{ marginTop: 10, fontFamily: "nunito",color:Colors.MAIN_COLOR }}
          >
            Animation Experience
          </Typography>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: "5%", marginBottom: 30 }}>
        <DivStyle1 style={{ flexWrap: "wrap", gap: 35 }}>
          {cardDatas3.map((item, index) => (
            <Card sx={cardStyle3}>
              <CardContent>
                <Typography variant="h6" sx={{color:Colors.MAIN_COLOR}}>{item.headName}</Typography>
                <Typography
                  variant="body1"
                  style={{ marginTop: 10 }}
                  dangerouslySetInnerHTML={{ __html: item.headContent }}
                ></Typography>
              </CardContent>
            </Card>
          ))}
        </DivStyle1>
      </div>
      <Footer />
    </>
  );
}
