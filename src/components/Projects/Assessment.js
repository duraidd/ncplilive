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
import Lab1 from "../../images/projectPageImages/assessment/lab1.svg";
import Lab2 from "../../images/projectPageImages/assessment/lab2.svg";
import Lab3 from "../../images/projectPageImages/assessment/lab3.svg";
import assessmentContent from "../StaticTextContents/projectContents/assessmentContents";
import { Colors } from "../../constants";
import about1 from "../../images/allPageBanner/abouts-03.png";
import BannerAll from '../SubComponents/BreadCrumbComponent';
import Footer from "../SubComponents/Footer";

export default function Assessment() {
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

  const aboutSmartCard = [
    "•	Server should act as a Teacher console. This displays the list of students in the teacher console.From this the teacher can select the student to start or stop the class. ",
    "•	Real Time Screen and Audio Broadcast from Teacher console to Student",
    "•	Viewing and absorbing the screens of students from teacher console",
    "•	Recording and storing broadcasts for future use this option is used to record the files and broadcast it to other students from teacher console.",
    "•	Sharing files among System this module is used to share the files to other system or students from the teacher console.",
    "•	Having controls like mute audio, lock the keyboard of particular student console. This is used to control the student’s screen such as to lock the screen or keyboard or mute the audio. Teachers can easily having the control over the student’s screen. ",
    "•	Providing some sample call lessons this provides some sample lessons to student’s screen.",
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
          title: "Assessment",
          subTitle: "",
          path: ["Home", "Projects", "Assessment"],
        }}
      />

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle4>
            {assessmentContent.assessmentMainPoint.map((text) => (
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
                <br /> {text.thirdPoint}
              </Typography>
            ))}
            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                marginTop: 20,
                fontWeight: "bold",
                color: Colors.MAIN_COLOR,
              }}
            >
              Purpose of Assessment:
            </Typography>
            {assessmentContent.assessmentPurposeofAssessment.map((text) => (
              <Typography
                variant="body1"
                style={{
                  textAlign: "justify",
                  marginTop: 5,
                  fontFamily: "nunito",
                }}
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
            {assessmentContent.assessmentContent.map((text) => (
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
                <span style={{ color: "green" }}>Examine method:</span>
                {text.thirdPoint}
                <br />
                <span style={{ color: "green" }}>Interview method:</span>{" "}
                {text.fourthPoint}
                <br />
                <br />
                <span style={{ fontWeight: "bold", color: "green" }}>
                  Test method:
                </span>
                {text.fivethPoint}
                <br />
                <br />
                {text.sixthPoint}
                <br />
                {text.seventhPoint}
                <br />
                <br />
                <span style={{ fontWeight: "bold", color: "green" }}>
                  Assessment for learning:
                </span>
                {text.eightthPoint} <br />
                {text.ninethPoint}
                <br />
                {text.tenthPoint}
              </Typography>
            ))}

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 5%" }}></div>
            {/* React Player Div */}
          </DivStyle4>
        </DivStyle1>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
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
                        boxShadow: "10px 13px 11px 5px rgba(0,0,0,0.61)",
                      }}
                    >
                      Using the Teacher Computer or Server
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
            <br />
            {assessmentContent.assessmentTeacherComputerServer.map((text) => (
              <div>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 10,
                    fontFamily: "nunito",
                    fontWeight: "bold",
                    color: Colors.MAIN_COLOR,
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
                  {text.content}
                </Typography>
              </div>
            ))}
            {assessmentContent.assessmentStudentComputerClient.map((text) => (
              <div>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 5,
                    marginTop: 5,
                    fontFamily: "nunito",
                    fontWeight: "bold",
                    color: Colors.MAIN_COLOR,
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
          </DivStyle4>

          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 5,
                fontFamily: "nunito",
                fontWeight: "bold",
                color: Colors.MAIN_COLOR,
              }}
            >
              Features
            </Typography>

            {assessmentContent.aboutSmartCard.map((text) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 10,
                    fontFamily: "nunito",
                  }}
                >
                  {text}
                </Typography>
              </div>
            ))}
          </DivStyle4>
        </DivStyle1>
      </div>

      <Footer/>

      {/* <div style={{ width: "100%", marginTop: 25 }}> */}
      {/* 67% middle of page */}
      {/* <DivStyle1>
          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",
              }}
            >
              Providing Grammar Tools
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              This Provides Some Grammar Tools Like - ARTICLES, VOICE, TENSE,
              PUNCTUATION, PARTS OF SPEECH CONVERSATION, DICTIONARY
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                marginTop: "10px",
              }}
            >
              Language Lab System
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Level I - Grammar </span>
              Grammar through activities language lab and classroom. The teacher
              has to be a vigilant, careful of the performance, behavior,
              interest, and need of the students, the enthusiastic participants
              in the lab. Let’s consider Active Voice and Passive Voice as an
              example:
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

          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",
              }}
            >
              Level II - Grammar
            </Typography>

            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Skill Generation </span>
              Programs are designed to take into account your existing skills
              and knowledge as well as workplace and other training you may have
              received.Skills Generation will help you whether you are looking
              for new career opportunities, advancement within your current role
              or improving and honing existing skills and knowledge.
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 5,
                fontFamily: "nunito",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Art Of Conversation </span>
              <br />
              Art of conversation includes the ability to listen to others as
              well as the ability to speak effectively.
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
          </DivStyle4>
        </DivStyle1> */}
      {/* </div> */}

      {/* <div style={{ width: "100%", marginTop: 25, marginBottom: 25 }}> */}
      {/* 67% middle of page */}
      {/* <DivStyle1>
          <DivStyle4>
            <Typography
              variant="h6"
              style={{
                marginBottom: 10,
                fontFamily: "nunito",
                marginTop: "10px",
              }}
            >
              Level III
            </Typography>

            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                marginTop: "10px",
              }}
            >
              Art of writing:
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              Writing is the art of expressing our views, ideas, and
              thoughts.Writing is a very important skill anywhere, anytime as
              long as we live. Through writing, we communicate to teachers to
              receive grades in school. Effective writing can be a task as it
              demands much more than correct grammar. It is about to gain
              knowledge about sentence structure, develop your vocabulary, and
              build other basic writing skills.
            </Typography>
          </DivStyle4>

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
                        boxShadow: "10px 13px 11px 5px rgba(0,0,0,0.61)",
                      }}
                    >
                      Letter Writing
                    </Typography>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </DivStyle4>
        </DivStyle1> */}
      {/* </div> */}
    </>
  );
}
