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
import { Colors } from "../../constants";
import about1 from "../../images/allPageBanner/abouts-03.png";

import eContentImg from "../../images/servicePageImages/EContentDevelopment/eContentDevelopment.png";

import frontEndArchitecture from "../../images/servicePageImages/WebApplicationDevlopment/front-end-architecture.svg";
import testing from "../../images/servicePageImages/WebApplicationDevlopment/testing-performance.svg";
import responsive from "../../images/servicePageImages/WebApplicationDevlopment/responsive.svg";
import uiuxdesign from "../../images/servicePageImages/WebApplicationDevlopment/uiuxdesign.svg";
import cmsEcommerce from "../../images/servicePageImages/WebApplicationDevlopment/cms-ecommerce.svg";
import javascriptSolutions from "../../images/servicePageImages/WebApplicationDevlopment/javascript-solutions.svg";

import eContentDevelopmentContents from "../StaticTextContents/productContents/eContentDevelopmentContents";
import ComputerIcon from "@mui/icons-material/Computer";

import Footer from "../SubComponents/Footer";
import BannerAll from "../SubComponents/BreadCrumbComponent";

export default function EContentDevelopment() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Services" }} />

      <BannerAll
        dataParent={{
          title: "E-Content Development",
          subTitle: "",
          path: ["Home", "Services", "E-Content Development"],
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
              <span style={{ fontWeight: "bold" }}>Netcom E-Content </span>{" "}
              includes a comprehensive digital repository offering
              superior-quality content in Mathematics, Physics, Chemistry,
              Biology, Social Sciences, English Grammar, Business Studies,
              Economics and Accountancy. The portal has been designed especially
              for students of Classes I to XII and includes numerous visuals and
              animations to help increase student understanding and retention.
            </Typography>

            {eContentDevelopmentContents.EContentService.map((text) => (
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
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
          </DivStyle2>

          <DivStyle3>
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "350px" }}
                src={eContentImg}
              ></img>
            </div>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%" }}>
        <DivStyle1>
          <DivStyle2>
            {eContentDevelopmentContents.titleParagraph1.map((obj) => (
              <>
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
                  {obj.title}{" "}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 20,
                    fontFamily: "nunito",
                  }}
                >
                  {obj.paragraph}{" "}
                </Typography>
              </>
            ))}
          </DivStyle2>

          <DivStyle3>
            {eContentDevelopmentContents.titleParagraph2.map((obj) => (
              <>
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
                  {obj.title}{" "}
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 20,
                    fontFamily: "nunito",
                  }}
                >
                  {obj.paragraph}{" "}
                </Typography>
              </>
            ))}
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
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: 30,
                    fontFamily: "nunito",
                    color: Colors.MAIN_COLOR,
                    marginTop: 15,
                  }}
                >
                  Storyboard:
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    textAlign: "justify",
                    marginTop: 20,
                    fontFamily: "nunito",
                  }}
                >
                  The storyboard is based on the Curriculum Specification of the
                  related subject and should use the mapping, content script
                  etc.
                </Typography>

                {eContentDevelopmentContents.storyboardCard.map((text) => (
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
                  Steps in development of econtent module:{" "}
                </Typography>

                {eContentDevelopmentContents.eContentModule.map((text) => (
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
      <Footer />
    </>
  );
}
