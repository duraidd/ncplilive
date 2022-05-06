import { React, useState, useEffect } from "react";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import { style, styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Paper,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import ProjectIcon from "@mui/icons-material/AssuredWorkload";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "./SubComponents/AppbarHead";
import logo from "../images/logo/Logo.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from "./SubComponents/Footer";
import Carousel from "react-simply-carousel";
import Colors from "../constants/Colors";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DvrIcon from "@mui/icons-material/Dvr";
import GroupIcon from "@mui/icons-material/Group";
import HowToRegIcon from "@mui/icons-material/HowToReg";



import AniSys from "../images/homePageImages/anisys.jpg";
import AniMob from "../images/homePageImages/animob.png";
import EduMob from "../images/homePageImages/edumob.png";
import EduSys from "../images/homePageImages/edusys.jpg";
import DevMob from "../images/homePageImages/devmob.png";
import DevSys from "../images/homePageImages/devsys.jpg";
import SmaSys from "../images/homePageImages/smasys.jpg";
import SmaMob from "../images/homePageImages/smamob.png";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import Imagess from "../constants/Images";
// import  { Images }  from "../constants";

import Client1 from "../images/ourClients/client-anna university.svg";
import Client2 from "../images/ourClients/client-Covai corporation.svg";
import Client3 from "../images/ourClients/client-Elcot.svg";
import Client4 from "../images/ourClients/client-MHRD.svg";
import Client5 from "../images/ourClients/client-RBI.svg";
import Client6 from "../images/ourClients/client-SDA School.svg";
import Client7 from "../images/ourClients/client-state council.svg";
import Client8 from "../images/ourClients/client-ShivanesBoutique.svg";
import Client9 from "../images/ourClients/client-Thanjavoor.svg";
import Client10 from "../images/ourClients/client-Tirunelveli.svg";
import Client11 from "../images/ourClients/client-TMB.svg";
import Client12 from "../images/ourClients/client-adidravidar.svg";
import Client13 from "../images/ourClients/client-keletron.svg";
import Client14 from "../images/ourClients/client-SSA.svg";
import Client15 from "../images/ourClients/client-orissa.svg";
import Client16 from "../images/ourClients/client-chenni corporation.svg";

import homeContents from "./StaticTextContents/homeContents.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlideWrapper from "./SubComponents/SlideWrapper";
import SliderProduct from "./SubComponents/SliderProduct";

import prodImg1 from "../images/homePageImages/productPageBanners/productImg1.jpg";
import prodImg2 from "../images/homePageImages/productPageBanners/productImg2.png";
import prodImg3 from "../images/homePageImages/productPageBanners/productImg3.png";
import prodImg4 from "../images/homePageImages/productPageBanners/productImg4.png";
import prodImg5 from "../images/homePageImages/productPageBanners/productImg5.png";

import { useNavigate } from "react-router-dom";

const OurServicesDataDiv = styled("div")(({ theme }) => ({
  width: "350px",
  padding: "30px",
  margin: "40px 0px",
  borderRadius: "5px",  
  
  boxShadow: `5px 5px 10px #8f8f8f, -5px -5px 10px #ffffff`,
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    margin: "35px 0px",
  },

  "&:hover": {
    transition: "0.8s",
    borderRadius: "20px",
    background: "#FDFAF6",
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
  height: 280,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
  justifyContent: "space-between",
  alignItems: "center",
 
}));

const clientsLogo = [
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
  Client7,
  Client8,
  Client9,
  Client10,
  Client11,
  Client12,
  Client13,
  Client14,
  Client15,
  Client16  
];

const NoOfDataList = [
  {
    count: "25+",
    text: "NO. OF PROJECTS",
    icon: (
      <DvrIcon style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }} />
    ),
  },
  {
    count: "30+",
    text: "NO. OF CLIENTS",
    icon: (
      <HowToRegIcon
        style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }}
      />
    ),
  },
  {
    count: "100+",
    text: "NO. OF EMPLOYEES",
    icon: (
      <GroupIcon style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }} />
    ),
  },
  {
    count: "20+",
    text: "YEARS OF EXPERIENCE",
    icon: (
      <AccessTimeFilledIcon
        style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }}
      />
    ),
  },
];

const slideImage = [
  {
    pcImg: SmaSys,
    mobImg: SmaMob,
    slideText: "Smart Class",
    textColor: "white",
  },
  {
    pcImg: DevSys,
    mobImg: DevMob,
    slideText: "Development",
    textColor: "black",
  },
  { pcImg: EduSys, mobImg: EduMob, slideText: "Education", textColor: "black" },
  { pcImg: AniSys, mobImg: AniMob, slideText: "Animation", textColor: "black" },
];

export default function Home() {
  console.log(homeContents);

  const navigate = useNavigate();

  const Centered = (theme) => ({
    position: "absolute",
    top: "50%",
    left: "75%",

    fontWeight: "bold",
    transform: `translate(-50%, -50%)`,
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  });

  const Container = styled("div")(({ theme }) => ({
    position: "relative",
    textAlign: "center",
    color: "black",
  }));

  console.log(window.innerWidth);
  const [activeSlide, setActiveSlide] = useState(0);

  const productSlideImg = [
    { Img: prodImg1, ImgName: "mobApp", pageLink: "/educational-mobile-app" },
    { Img: prodImg2, ImgName: "mobApp", pageLink: "/educational-mobile-app" },
    { Img: prodImg3, ImgName: "mobApp", pageLink: "/educational-mobile-app" },
    { Img: prodImg4, ImgName: "tailApp", pageLink: "/smart-tailor-shop" },
    { Img: prodImg5, ImgName: "tailApp", pageLink: "/smart-tailor-shop" },
  ];

  const OurProductsSection = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingLeft: "15%",
    paddingRight: "15%",
    [theme.breakpoints.down("xl")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
  }));

  const ProductCards = styled("div")(({ theme }) => ({
    height: 300,
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 60,

    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
      height: 300,
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: 400,
    },
    [theme.breakpoints.between("lg", "xl")]: {
      height: 370,
    },

    [theme.breakpoints.up("xl")]: {
      height: 330,
    },
  }));

  const ProductViewSize = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      borderRadius: "50px",
      marginLeft: "15%",
      marginRight: "15%",
      marginBottom: "5%",
      marginTop: "5%",
    },

    [theme.breakpoints.down("md")]: {
      borderRadius: "50px",
      marginLeft: "15%",
      marginRight: "15%",
      marginBottom: "5%",
      marginTop: "5%",
    },
  }));

  const DeskTopView = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  const MobileView = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));



  const CardStyleOurservice =styled("div")(({theme})=>({    
    marginTop: "5rem",    
    display: "flex",
    flexDirection: "row",    
    flexWrap: "wrap",    
    gap: "20px",
    

    [theme.breakpoints.up('md')]:{
      marginLeft: "15%",
    marginRight: "15%",
    justifyContent: "space-between"
    },
    [theme.breakpoints.down('md')]:{      
    justifyContent: "center"
    }



  }));

  const handleClickProduts = (item, tt) => {
    for (let i = 0; i < tt.length; i++) {
      if (tt[i].ImgName === item) {
        navigate(tt[i].pageLink);
      }
    }
  };

  const IntroSection = styled("div")(({ theme }) => ({
    marginTop: 50,
    display: "flex",
    marginBottom: 30,
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
      textAlign: "center",
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.down("xl")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  }));

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  console.log(width);
  console.log(height);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);    
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Home" }} />      
      <SlideWrapper>
        <Slider
          autoplay={true}
          arrows={false}
          dots={true}
          pauseOnHover={false}
          appendDots={(dots) => <ul style={{ marginBottom: 20 }}>{dots}</ul>}
          customPaging={(i) => (
            <div className="ft-slick__dots--custom">
              <div className="loading" />
            </div>
          )}
          speed={100}
          slidesToShow={1}
          slidesToScroll={1}
          adaptiveHeight={false}
        >
          {slideImage.map((item) => (
            <img
              src={width < 800 ? item.mobImg : item.pcImg}
              style={{
                width: "100%",
                height: width < 600 ? 600 : null,
              }}
            />
          ))}
        </Slider>
      </SlideWrapper>

      <IntroSection>
        <Typography
          align="center"
          variant="h4"
          sx={{ color: Colors.MAIN_COLOR, fontWeight: "bold" }}
        >
          Meet Netcom...
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign:"justify", marginTop: 4, color: "grey" }}
        >
          {" "}
          <span style={{ fontWeight: "bold", color: Colors.MAIN_COLOR }}>
            Netcom Computers
          </span>{" "}
          {homeContents.about}{" "}
        </Typography>

      
      </IntroSection>

      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}  >
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
            Our Services
          </Typography>
          <Typography
            align="center"
            variant="body1"
            sx={{ color: Colors.MAIN_COLOR, mt: 2 }}
          >
            Full-Spectrum Service Offerings To Make Your Business Into The Next
            Stage
          </Typography>
        </div>

        

        <CardStyleOurservice>
        {homeContents.serviceContent.map((data, i) => (
            <OurServicesDataDiv key={i}>
              <div style={{ position: "relative", backgroundColor: "cyan" }}>
                <OurServicesTopImage>
                  <img
                    src={data.icon}
                    style={{ height: "60px", width: "60px" }}
                  />
                </OurServicesTopImage>
              </div>

              <OurServicesBottomDiv>
                <div>
                  <Typography  variant="h6"  sx={{ color:Colors.MAIN_COLOR,textAlign:"center",marginBottom:'20px'}}>
                    {" "}
                    {data.title}{" "}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ textAlign: "justify" ,color:'gray'}}>
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
                  onClick={()=>navigate(data.link)}
                >
                  {" "}
                  Learn More{" "}
                </Button>
              </OurServicesBottomDiv>
            </OurServicesDataDiv>
          ))}
        </CardStyleOurservice>

        {/* <OurProductsSection>
          {homeContents.serviceContent.map((text, index) => (
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

      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "67%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {NoOfDataList.map((data) => (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: 250,
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              {data.icon}
              <Typography
                variant="h3"
                style={{
                  fontWeight: "bold",
                  color: Colors.MAIN_COLOR,
                  marginTop: 20,
                }}
              >
                {" "}
                {data.count}{" "}
              </Typography>
              <Typography variant="h6" style={{ color: "grey" }}>
                {" "}
                {data.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div
          style={{
            marginTop: 30,
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
            Our Products
          </Typography>
          <Typography
            align="center"
            variant="body1"
            sx={{ color: Colors.MAIN_COLOR, mt: 2 }}
          >
            Products that make you better
          </Typography>
        </div>

        <ProductViewSize>
          {" "}
          <DeskTopView>
            <SliderProduct>
              <Slider
                style={{ borderRadius: "50px" }}
                autoplay={true}
                slidesToShow={1}
                slidesToScroll={1}
                pauseOnHover={true}
                dots={true}
                speed={2000}
                appendDots={(dots) => (
                  <ul style={{ marginBottom: 20 }}>{dots}</ul>
                )}
                customPaging={(i) => (
                  <div className="ft-slick__dots--custom">
                    <div className="loading" />
                  </div>
                )}
              >
                {productSlideImg.map((item, index) => (
                  <div>
                    <img
                      style={{ borderRadius: "50px", marginBottom: "10px" }}
                      width={"100%"}
                      src={item.Img}
                      onDoubleClick={() => {
                        handleClickProduts(item.ImgName, productSlideImg);
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </SliderProduct>
          </DeskTopView>
        </ProductViewSize>

        <MobileView>
          {productSlideImg.map((item, index) => (
            <div>
              <img
                style={{ marginBottom: "10px" }}
                width={"100%"}
                height={"210px"}
                src={item.Img}
                onDoubleClick={() => {
                  handleClickProduts(item.ImgName, productSlideImg);
                }}
              />
            </div>
          ))}
        </MobileView>

        {/* <OurProductsSection>

          {(homeContents.productsContent).map((text, index) => (

            <ProductCards>

              <div>
                <img src={text.icon} height={90} width={90} />
                <Typography style={{ marginTop: 15 }} variant="h6">{text.title}</Typography>
                <Typography style={{ marginTop: 15 }} align='justify' variant="subtitle1">{text.content}</Typography>
              </div>
              <div>
                <Typography style={{ marginTop: 15, color: Colors.MAIN_COLOR, cursor: "pointer", textDecoration: "underline" }} align='justify' variant="body1">Read More</Typography>
              </div>
            </ProductCards>

          ))}
        </OurProductsSection> */}
      </div>

      <div style={{ paddingLeft: "10%", paddingRight: "10%", marginTop: 15 }}>
        <Paper elevation={0}>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <Typography
              align="center"
              variant="h4"
              sx={{ color: Colors.MAIN_COLOR, fontWeight: "bold" }}
            >
              Our Honourable Clients
            </Typography>
          </div>
          <Slider
            style={{ padding: 20 }}
            autoplay={true}
            slidesToShow={width <= 500 ? 1 : width <= 1030 ? 2 : 4}
            slidesToScroll={1}
            touchMove
          >
            {clientsLogo.map((item, index) => (
              <img width={200} height={200} src={item} />
            ))}
          </Slider>
        </Paper>
      </div>
      <Footer />
    </>
  );
}
