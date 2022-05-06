import React from "react";
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
import AppbarHead from "./SubComponents/AppbarHead";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import logo from "../images/logo/Logo.png";
import { Colors } from "../constants";

const titleContent = [
  {
    title: "Smart Tailor Shop",
    icon: logo,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
  {
    title: "Online Cab Booking System",
    icon: logo,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
  {
    title: "EMIS",
    icon: logo,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
  {
    title: "Educational Mobile App (Gilgal)",
    icon: logo,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
  {
    title: "Assessment Tool",
    icon: logo,
    content:
      "We are well experienced in flash animation.Our staff can thin the line between traditional 2D and flash animation.We have experience in the production of computer based tutorials, short films, ads and web applications",
  },
];
export default function Products() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const Root = styled("div")(({ theme }) => ({
    marginRight: "3%",
    marginTop: "1%",
    marginBottom: "1%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      backgroundColor: "red",
    },
    [theme.breakpoints.up("md")]: {
      width: 360,
      height: 250,
    },
    [theme.breakpoints.up("lg")]: {
      width: 460,
      height: 250,
    },
    [theme.breakpoints.up("xl")]: {
      width: 660,
      height: 250,
    },
  }));

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Products" }} />
      <BreadcrumbStyle>
        <Card sx={{ width: 200, height: 50 }}>
          <CardContent>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                color="inherit"
                href="/"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {" "}
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home{" "}
              </Link>
              <Typography color={Colors.MAIN_COLOR}>Products</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            width: "73.4vw",
          }}
        >
          {titleContent.map((text, index) => (
            <Root>
              {" "}
              <div style={{ marginTop: "1%" }}>
                <AnimationOnScroll
                  animateIn="animate__fadeInLeft"
                  duration={1}
                  animateOnce={true}
                >
                  <img src={text.icon} height={50} width={50} />
                  <Typography variant="h5">{text.title}</Typography>
                  <p style={{ textAlign: "justify" }}>{text.content}</p>
                </AnimationOnScroll>
              </div>
            </Root>
          ))}
        </div>
      </div>
    </>
  );
}
