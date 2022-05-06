import "animate.css/animate.min.css";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { styled } from "@mui/material/styles";

import ArrowIcon from "@mui/icons-material/ArrowForward";
import LocationIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import MapImg from "../../images/Footer/3.jpg";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { useNavigate } from "react-router-dom";
import Colors from "../../constants/Colors";
import footerContents from "../StaticTextContents/subComponentContents/footerContents";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${MapImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  marginTop: "7%",
}));

const SubContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  padding: "30px",
  flexWrap: "wrap",
  width: "80%",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "95%",
  },
}));

const BGColor = styled("div")(({ theme }) => ({
  backgroundColor: `rgb(6,68,32,.5)`,
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

const SubContainerItem = styled("div")(({ theme }) => ({
  width: "300px",
  margin: "15px",
}));

const SocialMediaLogo = styled("div")(({ theme }) => ({
  border: "1px solid #ffff",
  borderRadius: "5px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  margin: "5px",
  padding: "5px",
  width: "25px",
  height: "25px",

  [theme.breakpoints.down("sm")]: {
    margin: "3px",
    padding: "2px",
  },
}));

const SiteMap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  marginTop: 5,
  color: "white",
  cursor: "pointer",
  "&:hover": {
    color: "#49FF00",
    transition: "0.5s",
  },
}));

export default function Footer() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <BGColor>
        <SubContainer>
          {/* text with icons */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography
                variant="body1"
                style={{ color: "white", marginBottom: 15 }}
              >
                {footerContents.mainText}
              </Typography>

              {footerContents.socialMedia.map((data) => (
                <SocialMediaLogo
                  sx={{
                    "&:hover": {
                      background: data.color,
                      transition: "0.6s",
                    },
                  }}
                  onClick={() => window.open(data.link)}
                >
                  <IconButton
                    style={{ height: "25px", width: "25px", color: "white" }}
                    onClick={() => window.open(data.link)}
                  >
                    {data.icon}
                  </IconButton>
                </SocialMediaLogo>
              ))}
            </SubContainerItem>
          </AnimationOnScroll>

          {/* siteMap */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                SITE MAP
              </Typography>

              {footerContents.siteMap.map((data) => (
                <SiteMap
                  onClick={() => {
                    navigate(data.link);
                  }}
                >
                  <ArrowIcon />
                  <Typography
                    variant="subtitle2"
                    style={{ whiteSpace: "nowrap", marginLeft: 10 }}
                  >
                    {data.text}
                  </Typography>
                </SiteMap>
              ))}
            </SubContainerItem>
          </AnimationOnScroll>
          {/* HEAD OFFICE */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "white",
                }}
              >
                HEAD OFFICE
              </Typography>

              <div style={{ display: "flex", color: "white", marginTop: 5 }}>
                <LocationIcon style={{ marginRight: 15 }} />
                <Typography variant="subtitle2">
                  No. 1/1, Nathan Street, Adikalapuram, Murugankurichi,
                  Palayamkottai, Tirunelveli - 627 002
                </Typography>
              </div>

              <div style={{ display: "flex", color: "white", marginTop: 5 }}>
                <MailIcon style={{ marginRight: 15 }} />
                <Typography
                  variant="subtitle2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("mailto:info@ncpli.com");
                  }}
                >
                  info@ncpli.com
                </Typography>
                {/* mailto:xyz@yourapplicationdomain.com?subject=Me&body=Hello! */}
              </div>

              <div style={{ display: "flex", color: "white", marginTop: 5 }}>
                <PhoneIcon style={{ marginRight: 15 }} />
                <Typography
                  variant="subtitle2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("tel:7538862862");
                  }}
                >
                  {" "}
                  +91 753 886 2862{" "}
                </Typography>
              </div>
            </SubContainerItem>
          </AnimationOnScroll>

          {/* CORPORATE OFFICE */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "white",
                }}
              >
                CORPORATE OFFICE
              </Typography>

              <div style={{ display: "flex", color: "white", marginTop: 5 }}>
                <LocationIcon style={{ marginRight: 15 }} />
                <Typography variant="subtitle2">
                  No. 5/3, Second Floor, Kush Kumar Road, Nungambakkam, <br />
                  Chennai - 600 034.
                </Typography>
              </div>

              <div style={{ display: "flex", color: "white", marginTop: 5 }}>
                <MailIcon style={{ marginRight: 15 }} />
                <Typography
                  variant="subtitle2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("mailto:info@ncpli.com");
                  }}
                >
                  info@ncpli.com
                </Typography>
              </div>

              <div style={{ display: "flex", color: "white", marginTop: 5 }}>
                <PhoneIcon style={{ marginRight: 15 }} />
                <Typography
                  variant="subtitle2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("tel:04442125369");
                  }}
                >
                  {" "}
                  044 - 421 253 69
                </Typography>
              </div>
            </SubContainerItem>
          </AnimationOnScroll>
        </SubContainer>
      </BGColor>

      <div
        style={{
          textAlign: "center",
          backgroundColor: `rgb(6,68,32, .8)`,
          width: "100%",
        }}
      >
        <Typography style={{ color: "white" }} vaiant="body2">
          {" "}
          ©{new Date().getFullYear()} | All rights reserved | Netcom Computers
          Pvt Ltd{" "}
        </Typography>
      </div>
    </MainContainer>
  );
}
