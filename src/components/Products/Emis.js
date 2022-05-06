import { React, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Divider,
  Box,
  Stack,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import AppbarHead from "../SubComponents/AppbarHead";
import { ScrollToTop } from "react-simple-scroll-up";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormSubmit from "../SubComponents/FormSubmit";
import { Colors } from "../../constants";
import about1 from "../../images/allPageBanner/abouts-03.png";
import ComputerIcon from "@mui/icons-material/Computer";
import Footer from "../SubComponents/Footer";
import { useNavigate } from "react-router-dom";
import BannerAll from '../SubComponents/BreadCrumbComponent';
import emisContent from "../StaticTextContents/emisContent.js";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import EMISPIC from "../../images/productPageImages/emis_app/emis.jpg";

const OurServicesDataDiv = styled("div")(({ theme }) => ({
  width: "400px",
  padding: "15px",
  margin: "40px 0px",
  borderRadius: "24px",
  background: "#f2f2f2",
  boxShadow: `5px 5px 10px #8f8f8f, -5px -5px 10px #ffffff`,
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    margin: "35px 0px",
  },

  "&:hover": {
    transition: "0.8s",
    borderRadius: "20px",
    background: Colors.BACKGROUND_COLOR,
    boxShadow: `10px 10px 30px #bebebe, -20px -20px 60px #ffffff`,
  },
}));

const OurServicesTopImage = styled("div")(({ theme }) => ({
  position: "absolute",
  top: -75,
  left: "40%",
  zIndex: 1,
  objectFit: "contain",
  padding: "12px",
  borderRadius: "50%",
  background: "#fff",
  boxShadow: `7px 7px 24px #8f8f8f, -7px -7px 24px #ffffff`,
  [theme.breakpoints.down("sm")]: {
    left: "35%",
  },
}));

const OurServicesBottomDiv = styled("div")(({ theme }) => ({
  height: 250,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: 360,
  },
}));

const Root = styled("div")(({ theme }) => ({
  width: "70%",

  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("lg")]: {},
}));

const DivStyle1 = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "0 auto",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("xl")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const DivStyle2 = styled("div")(({ theme }) => ({
  marginBottom: 20,
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
  marginTop: 7,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "0 auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "42%",
  },
}));

const DivStyle4 = styled("div")(({ theme }) => ({
  margin: "0 auto",
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  [theme.breakpoints.up("md")]: {
    width: "67%",
  },
}));

export default function Emis() {
  const navigate = useNavigate();

  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const emis = [
    {
      emisContent:
        "Netcom developed an application called EMIS(Educational Management Information System).  In this application we can analyse overall school day to day process like teachers information,  students information like Enroll number, Name, Class, Community, etc., by this appliaction we  can easily handle all the school process and we can monitor the same.",
    },
    {
      emisContent:
        "EMIS Software is a platform which helps in managing the day to day academic and  administrative activities from a single platform. NETCOM provides user-friendly dashboards  with login access for teachers, non-teaching staff, students, parents, and management personnel  of your institution. The various modules available in school EMIS software automate daily  operations of your institution such as from students' admission to generating transfer certificates  to digitizing the online learning experience all can be managed effortlessly .",
    },
    {
      emisContent:
        "NETCOM EMIS has modules to manage Timetable, Attendance, Online Class, Examinations,  Gradebooks, Mobile Learning, Hostel, Library, Transportation, School Calendar, Events, and  many more. It has a fully-fledged Human Resource module to manage the payroll and employee  pay slips. The Finance module helps you to plan and allot different fee structures to students.  NETCOM EMIS System is also an excellent collaboration tool using its Task, Discussion, Poll,  Blog, and Videoconference plugins. There is an internal messaging system within Netcom, but  you can also integrate it with external communication tools like email and texting.",
    },
    {
      emisContent:
        "Netcom is a learning platform for schools, which allows teachers to deliver courses, promote an  interactive learning environment and provide better operations for admin from a single platform.Transform your institute's traditional academic experience into digital learning within a few  clicks.",
    },
  ];

  const emis2 = [
    {
      emisContent:
        "Instructors can create end to end customized and engaging courses by adding teaching materials  using their favourite medium. Principal can access teachers and students dashboard. Teachers can  record the week plan, time table and schedule. Students get notified about the updates. As a  school administrator, take attendance, record assessments, and oragnize staff data. EMIS school  facilities the collection, processing, and management of information at the school. It is a  customizable application that supports the day-to-day activities involved in managing an  individual school. EMIS Classroom is a mobile app for android that facilities the collection of  data at the class room level. Techers can collect data on attandance , assessments and behaviors. ",
    },
    {
      emisContent:
        "EMIS classroom data can then be exported and shared in standard output formats. EMIS  Classroom is able to function with an active in ternet connection. ",
    },
    {
      emisContent:
        "Principals and education officails can easily and quickly search, viw and update staff details  using a mobile device including staff photos.EMIS staffroom connects to securely access and  update information.",
    },
    {
      emisContent:
        "EMIS provides the Digital Content that gives a central repository accessible to teachers across  Tamil Nadu and Unique login identifier for Teachers linked with state curiculum. Also track your  personal career excellence. With the help of this portal, the school administration also provides  all the information about the syllabus, school timings, new notices, and modification details in  online.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Products" }} />

      <BannerAll
        dataParent={{
          title: "EMIS",
          subTitle: "",
          path: ["Home", "Projects", "EMIS"],
        }}
      />

      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Root>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h4"
              style={{
                borderBottom: "4px solid",
                borderColor: Colors.MAIN_COLOR,
              }}
            >
              Educational Management Information System
            </Typography>
          </div>

          <div>
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
                    <span style={{ color: "#157561", fontWeight: "bold" }}>
                      EMIS
                    </span>{" "}
                    allows learners and instructors to easily interact,
                    collaborate, and study from anywhere.
                  </Typography>

                  <Typography
                    variant="body1"
                    style={{
                      textAlign: "justify",
                      marginTop: 7,
                      fontFamily: "nunito",
                    }}
                  >
                    EMIS system is the perfect medium to integrate your academic
                    calendar, through simple excel import option and work your
                    plan. Connect your teachers and students, empower them to
                    access the structured academic calendar and run the events
                    as planned
                  </Typography>

                  <Typography
                    variant="body1"
                    style={{
                      textAlign: "justify",
                      marginTop: 7,
                      fontFamily: "nunito",
                    }}
                  >
                    <span style={{ color: "#157561", fontWeight: "bold" }}>
                      EMIS
                    </span>{" "}
                    learning management system for schools lets you pass on the
                    right information to the right individual. Relevant
                    information updates are shown on the screen once logged in
                    to the concerned portals, for students, teachers, admin,
                    parents and school’s management.
                  </Typography>
                </DivStyle2>
                {/* Ride Side */}
                <DivStyle3>
                  {/* React Player Div */}
                  <div className="container">
                    <img
                      width="100%"
                      style={{ top: 0, left: 0, height: "240px" }}
                      src={EMISPIC}
                      alt="loading"
                    />
                  </div>
                  {/* React Player Div */}
                </DivStyle3>
              </DivStyle1>
            </div>

            <Divider></Divider>

            <div>
              <div
                style={{
                  marginTop: 50,
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 50,
                  flexDirection: "column",
                }}
              >
                <Typography
                  align="center"
                  variant="h4"
                  sx={{ color: Colors.MAIN_COLOR, mt: 5, fontWeight: "bold" }}
                >
                  IMPLEMENTATION & EASE-OF-USE
                </Typography>
              </div>

              <div
                style={{
                  marginTop: "5rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                {emisContent.serviceContent.map((data, i) => (
                  <OurServicesDataDiv key={i}>
                    <div style={{ position: "relative" }}>
                      <OurServicesTopImage>
                        <img
                          src={data.icon}
                          style={{ height: "60px", width: "60px" }}
                        />
                      </OurServicesTopImage>
                    </div>

                    <OurServicesBottomDiv>
                      <div>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                          {" "}
                          {data.title}{" "}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ textAlign: "justify" }}
                        >
                          {" "}
                          {data.content}{" "}
                        </Typography>
                      </div>

                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                          border: `2px solid ${Colors.MAIN_COLOR}`,
                          color: "#157561",
                          "&:hover": {
                            transition: "0.5s",
                            backgroundColor: "#157561",
                            color: "white",
                            border: "1px solid #157561",
                            fontWeight: "bold",
                          },
                        }}
                        endIcon={<ArrowIcon />}
                      >
                        {" "}
                        Read More{" "}
                      </Button>
                    </OurServicesBottomDiv>
                  </OurServicesDataDiv>
                ))}
              </div>

              {/* <OurProductsSection>
          {emisContent.serviceContent.map((text, index) => (
            <ProductCards>
              <div>
                <img src={text.icon} height={90} width={90} />
                <Typography style={{ marginTop: 15 }} variant="h6">
                  {text.title}
                </Typography>
                <Typography
                  style={{ marginTop: 15 }}
                  align="justify"
                  variant="subtitle1"
                >
                  {text.content}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    marginTop: 15,
                    color: Colors.MAIN_COLOR,
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  align="justify"
                  variant="body1"
                >
                  Read More
                </Typography>
              </div>
            </ProductCards>
          ))}
        </OurProductsSection> */}
            </div>

            <br />
            {emis.map((text) => (
              <Stack direction="row" gap={1} style={{ marginTop: 15 }}>
                <ComputerIcon style={{ color: Colors.MAIN_COLOR }} />
                <Typography
                  variant="subtitle1"
                  style={{ textAlign: "justify", marginLeft: 12 }}
                >
                  {text.emisContent}
                </Typography>
              </Stack>
            ))}
          </div>
          <br />

          <div>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h4"
                  style={{
                    borderBottom: "4px solid",
                    borderColor: Colors.MAIN_COLOR,
                  }}
                >
                  Features of EMIS
                </Typography>
              </div>
              <Divider></Divider>
              <br />
              {emis2.map((text) => (
                <Stack direction="row" gap={1} style={{ marginTop: 15 }}>
                  <ComputerIcon style={{ color: Colors.MAIN_COLOR }} />
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: "justify", marginLeft: 12 }}
                  >
                    {text.emisContent}
                  </Typography>
                </Stack>
              ))}
            </div>
          </div>
        </Root>
      </div>

      <div style={{ width: "100%", marginTop: 25 }}>
        <DivStyle4>
          <Typography
            variant="h4"
            style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" ,color:Colors.MAIN_COLOR}}
          >
            Need this Product? Contact us:
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
          >
            {" "}
            If you like and want this product, Please feel free to contact us.
            Also we can add/update new features and design changes in this
            product if you want.
          </Typography>

          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
          >
            To discuss about this product and our other services, please mail us
            on
            <span
              style={{ color: " #3B7CFE", cursor: "pointer" }}
              onClick={() => {
                window.open("mailto:info@ncpli.com");
              }}
            >
              {" "}
              info@ncpli.com
            </span>{" "}
            or call
            <span style={{ cursor: "pointer", color: " #3B7CFE" }} onClick={() => { window.open("tel:753886286", "_self"); }} > +91 753 886 286 </span>
          </Typography>
          <Button
            style={{
              backgroundColor: "#ED514A",
              color: "white",
              fontWeight: "600",
              fontFamily: "nunito",
              marginTop: 15,
              textTransform: "none",
              width: 150,
            }}
            onClick={() =>
              navigate("/form-submit", { state: { productName: "EMIS" } })
            }
          >
            Request a Demo
          </Button>
        </DivStyle4>
      </div>

      <Footer />
    </>
  );
}
