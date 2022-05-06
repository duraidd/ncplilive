import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ScrollToTop } from "react-simple-scroll-up";
import BannerAll from "../components/SubComponents/BreadCrumbComponent";
import AppbarHead from "../components/SubComponents/AppbarHead";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import SideTip from "./SubComponents/SideTip";
import Footer from "./SubComponents/Footer";

import BulletIconJD from "@mui/icons-material/KeyboardDoubleArrowRight";
import BulletIconRS from "@mui/icons-material/DoneOutline";
import BulletIconQE from "@mui/icons-material/NoiseControlOff";

import { Colors } from "../constants";

const BreadcrumbStyle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export default function CareerDetails() {
  const location = useLocation();

  const [details, setDetails] = useState({});

  useEffect(() => {
    setDetails(location.state.details);
  }, []);

  const DetailsRoot = styled("div")(({ theme }) => ({
    width: "70%",

    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {},
  }));

  const DetailsDiv = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    margin: "2% 0%",
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Career" }} />

      <BannerAll
        dataParent={{
          title: "Career",
          subTitle: "",
          path: ["Home", "Career", "Career Details"],
        }}
      />

      <br />
      <br />

      <SideTip />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* details root */}
        <DetailsRoot>
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#157561",
            }}
          >
            {" "}
            {details.title}{" "}
          </Typography>

          {/* job description */}

          <DetailsDiv>
            <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
              Job Description:
            </Typography>

            <Typography
              variant="body2"
              style={{ color: "#010101", textAlign: "justify" }}
            >
              {details.description?.map((data, i) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 7,
                  }}
                >
                  <BulletIconJD sx={{ color: "#157561", marginTop: 1 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "nunito",
                      paddingLeft: 1,
                      textAlign: "justify",
                      marginTop: 1,
                    }}
                  >
                    {" "}
                    {data}
                  </Typography>
                </div>
              ))}
            </Typography>
          </DetailsDiv>

          {/* Requirements and skills */}
          <DetailsDiv>
            <Typography variant="h6">Requirements and skills:</Typography>

            {details.skills?.map((data, i) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: 7,
                }}
              >
                <BulletIconRS sx={{ color: "#157561", marginTop: 1 }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "nunito",
                    paddingLeft: 1,
                    textAlign: "justify",
                    marginTop: 1,
                  }}
                  dangerouslySetInnerHTML={{ __html: data }}
                ></Typography>
              </div>
            ))}
          </DetailsDiv>

          {/* Qualifications and Experience */}
          <DetailsDiv>
            <Typography variant="h6">Qualifications and Experience:</Typography>

            {details.eligibility?.map((data, i) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: 7,
                }}
              >
                <BulletIconQE sx={{ color: "#157561", marginTop: 1 }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "nunito",
                    paddingLeft: 1,
                    textAlign: "justify",
                    marginTop: 1,
                  }}
                >
                  {" "}
                  {data}
                </Typography>
              </div>
            ))}
          </DetailsDiv>

          <Button
            startIcon={<SendIcon />}
            variant="contained"
            sx={{
              backgroundColor: "#157561",
              "&:hover": { backgroundColor: "#157561" },
            }}
            onClick={() => {
              window.open("https://forms.gle/96oyuMhfggrESGzG6");
            }}
          >
            {" "}
            Apply Now{" "}
          </Button>
        </DetailsRoot>
      </div>

      <Footer />
    </>
  );
}
