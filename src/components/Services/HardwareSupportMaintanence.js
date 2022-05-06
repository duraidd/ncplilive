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
import Footer from "../SubComponents/Footer";
import AppbarHead from "../SubComponents/AppbarHead";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import hardwareImg from "../../images/servicePageImages/hardwareSupport/hardware.jpg";
import { Colors } from "../../constants";
import about1 from "../../images/allPageBanner/abouts-03.png";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BannerAll from "../SubComponents/BreadCrumbComponent";

export default function HardwareSupportMaintanence() {
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

  const hardwareFeatures1 = [
    "Extend the life of Hardware.",
    "Breakdown calls to be resolved in 48 hours or as per adherence to SLA signed.",
    "Single Point Help Desk – Call Center Facility.",
    "Availability of Call Center Personnel &amp; Technical Support Service engineer",
    "Availability of adequate Spare parts in divisional level offices.",
  ];
  const hardwareFeatures2 = [
    "Generation of Weekly &amp; Monthly MIS Reports.",
    "Tracking of Service Calls",
    "Fully automated maintenance Experience",
    "Repair/ Replacement Services could be on site at client’s place or at our centralized repair depot by our large pool of qualified engineers.",
    "Single source customisable hardware maintenance accountability – Talk to us and our consultants will devise the most appropriate solution for your business needs.",
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
          title: " Hardware Support & Maintainance",
          subTitle: "",
          path: ["Home", "Services", " Hardware Support & Maintainance"],
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
              <span style={{ fontWeight: "bold" }}>
                Hardware Support & Maintance{" "}
              </span>{" "}
              are preventive and remedial services that physically repair or
              optimize hardware, including contract maintenance and per-incident
              repair. Hardware maintenance deals with repairing and replacing
              broken and failing computer hardware.
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              Hardware support also includes online and technical
              troubleshooting and assistance for setup, and all fee-based
              hardware warranty upgrades.
            </Typography>
            <Typography
              variant="body1"
              style={{
                textAlign: "justify",
                marginTop: 10,
                fontFamily: "nunito",
              }}
            >
              Sales of all parts are also included, exclusive of parts bundled
              with maintenance contracts. This segment includes only external
              customer spending on these services.
            </Typography>
          </DivStyle2>
          <DivStyle3>
            <div className="container">
              <img
                width="100%"
                style={{ top: 0, left: 0, height: "340px" }}
                src={hardwareImg}
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
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "nunito",
                    color: Colors.MAIN_COLOR,
                    marginTop: 15,
                    marginLeft: 5,
                  }}
                >
                  Features of Netcom Hardware Maintenance Services:
                </Typography>
                {hardwareFeatures1.map((text) => (
                  <div
                    style={{
                      marginTop: 10,
                      flexDirection: "row",
                      display: "flex",
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
                {hardwareFeatures2.map((text) => (
                  <div
                    style={{
                      marginTop: 10,
                      flexDirection: "row",
                      display: "flex",
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
      <div style={{ width: "100%", marginTop: "3%", marginBottom: "5%" }}>
        <DivStyle1 style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            style={{
              fontFamily: "nunito",
              color: Colors.MAIN_COLOR,
              marginTop: 5,
            }}
          >
            Our Hardware Maintenance Services include Maintenance for Hardware
            Solutions:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "nunito",
              paddingLeft: 1,
              textAlign: "justify",
              marginBottom: 1,
              marginTop: 3,
            }}
          >
            {" "}
            1. We offer preventive or remedical services to physically repair
            your hardware,as well as trouble shooting support and assistance
            ,either online or via phone,to ensure you always have access to
            help.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "nunito",
              paddingLeft: 1,
              textAlign: "justify",
              marginBottom: 1,
              marginTop: 3,
            }}
          >
            {" "}
            2. Both are offered on either a contract or per incident basis,so
            your system will always be up and running.
          </Typography>
        </DivStyle1>
      </div>

      <Footer />
    </>
  );
}
