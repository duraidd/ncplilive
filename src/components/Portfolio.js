import { React, useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Divider,
  Button,
  Modal,
  Tabs,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "./SubComponents/AppbarHead";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import BannerAll from '../components/SubComponents/BreadCrumbComponent';
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";

import NSC01 from "../images/portfolioPageImages/NSC/NSC01.webp";
import NSC02 from "../images/portfolioPageImages/NSC/NSC02.webp";
import NSC03 from "../images/portfolioPageImages/NSC/NSC03.webp";
import NSC04 from "../images/portfolioPageImages/NSC/NSC04.webp";
import NSC05 from "../images/portfolioPageImages/NSC/NSC05.webp";
import NSC06 from "../images/portfolioPageImages/NSC/NSC06.webp";
import NSC07 from "../images/portfolioPageImages/NSC/NSC07.webp";
import NSC08 from "../images/portfolioPageImages/NSC/NSC08.webp";
import NSC09 from "../images/portfolioPageImages/NSC/NSC09.webp";
import NSC10 from "../images/portfolioPageImages/NSC/NSC10.webp";
import NSC11 from "../images/portfolioPageImages/NSC/NSC11.webp";
import NSC12 from "../images/portfolioPageImages/NSC/NSC12.webp";
import NSC13 from "../images/portfolioPageImages/NSC/NSC13.webp";
import NSC14 from "../images/portfolioPageImages/NSC/NSC14.webp";
import NSC15 from "../images/portfolioPageImages/NSC/NSC15.webp";
import NSC16 from "../images/portfolioPageImages/NSC/NSC16.webp";
import NSC17 from "../images/portfolioPageImages/NSC/NSC17.webp";
import NSC18 from "../images/portfolioPageImages/NSC/NSC18.webp";
import NSC19 from "../images/portfolioPageImages/NSC/NSC19.webp";
import NSC20 from "../images/portfolioPageImages/NSC/NSC20.webp";

import NSC36 from "../images/portfolioPageImages/NSC/NSC36.webp";

import KIOSK1 from "../images/portfolioPageImages/kioskImage/kiosk1.webp";
import KIOSK2 from "../images/portfolioPageImages/kioskImage/kiosk2.webp";
import KIOSK3 from "../images/portfolioPageImages/kioskImage/kiosk3.webp";
import KIOSK4 from "../images/portfolioPageImages/kioskImage/kiosk4.webp";
import KIOSK5 from "../images/portfolioPageImages/kioskImage/kiosk5.webp";
import KIOSK6 from "../images/portfolioPageImages/kioskImage/kiosk6.webp";
import KIOSK7 from "../images/portfolioPageImages/kioskImage/kiosk7.webp";
import KIOSK8 from "../images/portfolioPageImages/kioskImage/kiosk8.webp";
import KIOSK9 from "../images/portfolioPageImages/kioskImage/kiosk9.webp";

import SKILL1 from "../images/portfolioPageImages/skilldevelopment/skill1.webp";
import SKILL2 from "../images/portfolioPageImages/skilldevelopment/skill2.webp";
import SKILL3 from "../images/portfolioPageImages/skilldevelopment/skill3.webp";
import SKILL4 from "../images/portfolioPageImages/skilldevelopment/skill4.webp";
import SKILL5 from "../images/portfolioPageImages/skilldevelopment/skill5.webp";
import SKILL6 from "../images/portfolioPageImages/skilldevelopment/skill6.webp";
import SKILL7 from "../images/portfolioPageImages/skilldevelopment/skill7.webp";
import SKILL8 from "../images/portfolioPageImages/skilldevelopment/skill8.webp";

import DG1 from "../images/portfolioPageImages/DigitalContentImage/dg1.webp";
import DG2 from "../images/portfolioPageImages/DigitalContentImage/dg2.webp";
import DG3 from "../images/portfolioPageImages/DigitalContentImage/dg3.webp";
import DG4 from "../images/portfolioPageImages/DigitalContentImage/dg4.webp";
import DG5 from "../images/portfolioPageImages/DigitalContentImage/dg5.webp";
import DG6 from "../images/portfolioPageImages/DigitalContentImage/dg6.webp";

import Footer from "./SubComponents/Footer";
import { Colors } from "../constants";

export default function Portfolio() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const Container = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifycontent: "center",
    flexwrap: "wrap",
    padding: "30px",

    ".Card": {
      position: "relative",
      maxWidth: "350px",
      height: " 215px",
      backgroundColor: "#fff",
      margin: "30px 10px",
      padding: "20px 15px",
      display: " flex",
      flexDirection: "column",
      boxShadow: `0 5px 20px rgba(0,0,0,0.5)`,
      transition: `0.3s ease-in-out`,
      borderRadius: "15px",
      "&:hover": {
        height: "280px",
        boxShadow: `0 5px 20px rgba(145,196,131,1)`,
        ".Content": {
          marginTop: "10px",
          visibility: "visible",
          opacity: 1,
          transitionDelay: "0.2s ease",
        },
      },
    },

    ".Image": {
      position: "relative",
      width: "350px",
      height: "300px",
      top: "-40%",
      boxShadow: `0 5px 20px rgba(0,0,0,0.2)`,
      zIndex: 1,

      [theme.breakpoints.down("md")]: {
        width: "250px",
        height: "150px",
      },
    },

    ".Content": {
      position: "relative",
      top: "-140px",
      padding: "10px 15px",
      color: " #111",
      textAlign: "center",
      visibility: "hidden",
      opacity: 0,
      transition: `0.3s ease-in-out`,
      [theme.breakpoints.down("md")]: {
        top: "30px",
      },
      [theme.breakpoints.up("md")]: {
        top: "-110px",
      },
    },
  }));

  const Root = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    paddingTop: "5%",
    paddingBottom: "5%",
    width: "75%",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  const [selectedImg, setSelectedImg] = useState("");

  const ModalRoot = styled("div")(({ theme }) => ({
    display: "flex ",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#FFF8F3",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "85%",
    },
  }));

  const ModalRootKiosk = styled("div")(({ theme }) => ({
    display: "flex ",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#FFF8F3",
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "65%",
    },
  }));

  const GalleryRoot = styled("div")(({ theme }) => ({
    display: "flex ",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  }));

  const myCard = (theme) => ({
    margin: "1%",
    width: 350,
    height: 300,

    "&:hover": {
      transition: "0.7s",
      transform: `translateY(-10px)`,
      boxShadow: `rgba(17,101,48, 0.4) 5px 5px, rgba(17,101,48, 0.3) 10px 10px, rgba(17,101,48, 0.2) 15px 15px, rgba(17,101,48, 0.1) 20px 20px, rgba(17,101,48, 0.05) 25px 25px`,
    },
  });

  const smartClassRoom = [
    { img: NSC01, text: "ADW 100 School" },
    { img: NSC02, text: "Sevvapet Girls School" },
    { img: NSC03, text: "ADW 100 School" },
    { img: NSC04, text: "Covai-Muttathuvayal School" },
    { img: NSC05, text: "Dharmapuri-Maruthipatti School" },
    { img: NSC06, text: "Dharmapuri-Sitheri School" },
    { img: NSC07, text: "Dharmapuri-Sitheri School" },
    { img: NSC08, text: "Erode-Kongadai School" },
    { img: NSC09, text: "GTR School" },
    { img: NSC10, text: "GTR School" },
    { img: NSC11, text: "GTR School Training-Sankarapuram" },
    { img: NSC12, text: "SALEM- Semmanatham School" },
    { img: NSC13, text: "Salem-Kunnur School" },
    { img: NSC14, text: "Salem-Kunnur School" },
    { img: NSC15, text: "Sevvapet Girls School" },
    { img: NSC16, text: "Thanjavur-Nalladai" },
    { img: NSC17, text: "Thanjavur-Nalladai" },
    { img: NSC18, text: "Thiruvanamalai-Aattiyanur" },
    { img: NSC19, text: "Thiruvanamalai-Pattaraikadu" },
    { img: NSC20, text: "Villupuram-Sankarapuram School" },
    { img: NSC36, text: "Villupuram Sangarapuram School" },
  ];

  const kioskImage = [
    { img: KIOSK1, text: "Salem-Kunnur School" },
    { img: KIOSK2, text: "Thanjavur-Nalladai" },
    { img: KIOSK3, text: "Villupuram-Sankarapuram School" },
    { img: KIOSK4, text: "GTR School" },
    { img: KIOSK5, text: "Erode-Kongadai School" },
    { img: KIOSK6, text: "Dharmapuri-Sitheri School" },
    { img: KIOSK7, text: "Covai-Muttathuvayal School" },
    { img: KIOSK8, text: "Sevvapet Girls School" },
    { img: KIOSK9, text: "ADW 100 School" },
  ];

  const skilldevelopmentImage = [
    { img: SKILL1, text: "Salem-Kunnur School" },
    { img: SKILL2, text: "Covai-Muttathuvayal School" },
    { img: SKILL3, text: "ADW 100 School" },
    { img: SKILL4, text: "Villupuram-Sankarapuram School" },
    { img: SKILL5, text: "Thanjavur-Nalladai" },
    { img: SKILL6, text: "Sevvapet Girls School" },
    { img: SKILL7, text: "Erode-Kongadai School" },
    { img: SKILL8, text: "GTR School" },
  ];

  const digitalContent = [
    { img: DG1, text: "Sevvapet Girls School" },
    { img: DG2, text: "Erode-Kongadai School" },
    { img: DG3, text: "Villupuram-Sankarapuram School" },
    { img: DG4, text: "Salem-Kunnur School" },
    { img: DG5, text: "Thanjavur-Nalladai" },
    { img: DG6, text: "GTR School" },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = (img) => {
    setOpen(true);
    setSelectedImg(img.img);
  };
  const handleClose = () => setOpen(false);

  const imageName = [
    {
      name: "Noah",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/3d3.JPG",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Adventures of Tenaliraman",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/tenali.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Moral Stories",
      imgLink:
        "https://netcomcomputersindia.com/img/portfolio/moral_stories.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Judah",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/judo.png",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Adventures of vikramadhityan",
      imgLink:
        "https://netcomcomputersindia.com/img/portfolio/vikramadhityan.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Jungle Story",
      imgLink:
        "https://netcomcomputersindia.com/img/portfolio/jungle_story.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Rhymes",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/rhymes.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "3D",
      imgLink: "https://netcomcomputersindia.com/img/portfolio/3d2.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
    {
      name: "Jesus Miracle",
      imgLink:
        "https://netcomcomputersindia.com/img/portfolio/jesus_miracles.jpg",
      videoLink: "https://youtu.be/Uz98TQd1U_s",
    },
  ];

  const [value, setValue] = useState("1");

  const [colorTextTab1, setcolorTextTab1] = useState(Colors.MAIN_COLOR);
  const [colorTextTab2, setcolorTextTab2] = useState("black");
  const [colorTextTab3, setcolorTextTab3] = useState("black");
  const [colorTextTab4, setcolorTextTab4] = useState("black");
  const [colorTextTab5, setcolorTextTab5] = useState("black");

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === "1") {
      setcolorTextTab1(Colors.MAIN_COLOR);
    } else {
      setcolorTextTab1("black");
    }

    if (newValue === "2") {
      setcolorTextTab2(Colors.MAIN_COLOR);
    } else {
      setcolorTextTab2("black");
    }

    if (newValue === "3") {
      setcolorTextTab3(Colors.MAIN_COLOR);
    } else {
      setcolorTextTab3("black");
    }

    if (newValue === "4") {
      setcolorTextTab4(Colors.MAIN_COLOR);
    } else {
      setcolorTextTab4("black");
    }

    if (newValue === "5") {
      setcolorTextTab5(Colors.MAIN_COLOR);
    } else {
      setcolorTextTab5("black");
    }
  };

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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

<ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
        <AppbarHead dataParent={{ appBtnText: "Portfolio" }} />

        <BannerAll
          dataParent={{
            title: "Portfolio",
            subTitle:
              "We devote all of our experience and efforts for creation",
            path: ["Home", "Portfolio"],
          }}
        />


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",

        }}
      >
       

        <Divider style={{ marginTop: "2%" }} />

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",                
              }}
            >
              <Tabs
                value={value}
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={handleChange}
                TabIndicatorProps={{ style: { background: "green" } }}
                textColor="inherit"
              >
                <Tab
                  sx={{ color: colorTextTab1, textTransform: "none" }}
                  label={<Typography variant="h6">YouTube</Typography>}
                  value="1"
                />
                <Tab
                  sx={{ color: colorTextTab2, textTransform: "none" }}
                  label={
                    <Typography variant="h6">Netcom Smart Class</Typography>
                  }
                  value="2"
                />
                <Tab
                  sx={{ color: colorTextTab3, textTransform: "none" }}
                  label={<Typography variant="h6">Kiosk</Typography>}
                  value="3"
                />
                <Tab
                  sx={{ color: colorTextTab4, textTransform: "none" }}
                  label={
                    <Typography variant="h6">Skill Development</Typography>
                  }
                  value="4"
                />
                <Tab
                  sx={{ color: colorTextTab5, textTransform: "none" }}
                  label={
                    <Typography variant="h6">Netcom Digital Content</Typography>
                  }
                  value="5"
                />
              </Tabs>
            </Box>
            <TabPanel
              value="1"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Root>
                {imageName.map((text) => (
                  <Container>
                    <div className="Card">
                      <div className="Image">
                        <img
                        
                          src={text.imgLink}
                          height={305}
                          width={380}
                          style={{
                            maxWidth: "100%",
                            borderRadius: "15px",
                            objectFit: "cover",
                            cursor:'pointer'                            
                          }}
                        />
                      </div>
                      <div className="Content">
                        <Typography variant="subtitle1">{text.name}</Typography>
                        <Button
                          style={{
                            backgroundColor: "#c4302b",
                            textTransform: "capitalize",
                          }}
                          startIcon={<YouTubeIcon />}
                          fullWidth
                          variant="contained"
                          onClick={() => {
                            window.open(text.videoLink);
                          }}
                        >
                          Visit
                        </Button>
                      </div>
                    </div>
                  </Container>
                ))}
              </Root>
            </TabPanel>

            <TabPanel value="2">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* gallery */}

                <GalleryRoot>
                  {smartClassRoom.map((data, i) => (
                    <Card sx={myCard} onClick={() => handleOpen(data)}>
                      <div>
                        <img
                        
                          width={350}
                          style={{ objectFit: "cover", height: "300px" }}
                          alt="Loading..."
                          src={data.img}
                        />
                        <Typography
                          sx={{
                            cursor:'pointer',
                            position: "sticky",
                            textShadow: "1px 1px 2px #ffffff",
                            bottom: 5,
                            left: 5,
                            height: width < 1000 ? null : "300px",
                            color: "white",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            display: "flex",
                            transition: ".5s ease",
                            opacity: width < 1000 ? 1 : 0,
                            "&:hover": {
                              opacity: 1,
                            },
                          }}
                        >
                          {data.text}
                        </Typography>
                      </div>
                    </Card>
                  ))}
                </GalleryRoot>

                <Modal
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <ModalRoot>
                    <img width="100%" alt="Loading..." src={selectedImg} />

                    <Button
                      size="large"
                      fullWidth
                      style={{
                        borderRadius: 0,
                        backgroundColor: Colors.MAIN_COLOR,
                      }}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </ModalRoot>
                </Modal>
              </div>
            </TabPanel>

            <TabPanel value="3">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* gallery */}
                <GalleryRoot>
                  {kioskImage.map((data, i) => (
                    <Card sx={myCard} onClick={() => handleOpen(data)}>
                      <div>
                        <img
                          width={350}
                          style={{ objectFit: "cover", height: "300px" }}
                          alt="Loading..."
                          src={data.img}
                        />
                        <Typography
                          sx={{
                            cursor:'pointer',
                            position: "sticky",
                            textShadow: "1px 1px 2px #ffffff",
                            bottom: 5,
                            left: 5,
                            height: width < 1000 ? null : "300px",
                            color: "white",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            display: "flex",
                            transition: ".5s ease",
                            opacity: width < 1000 ? 1 : 0,
                            "&:hover": {
                              opacity: 1,
                            },
                          }}
                        >
                          {data.text}
                        </Typography>
                      </div>
                    </Card>
                  ))}
                </GalleryRoot>

                <Modal
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <ModalRootKiosk>
                    <img width="100%" alt="Loading..." src={selectedImg} />

                    <Button
                      size="large"
                      fullWidth
                      style={{
                        borderRadius: 0,
                        backgroundColor: Colors.MAIN_COLOR,
                      }}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </ModalRootKiosk>
                </Modal>
              </div>
            </TabPanel>

            <TabPanel value="4">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* gallery */}

                <GalleryRoot>
                  {skilldevelopmentImage.map((data, i) => (
                    <Card sx={myCard} onClick={() => handleOpen(data)}>
                      <div>
                        <img
                          width={350}
                          style={{ objectFit: "cover", height: "300px" }}
                          alt="Loading..."
                          src={data.img}
                        />
                        <Typography
                          sx={{
                            cursor:'pointer',
                            position: "sticky",
                            textShadow: "1px 1px 2px #ffffff",
                            bottom: 5,
                            left: 5,
                            height: width < 1000 ? null : "300px",
                            paddingBottom: "10px",
                            color: "white",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            display: "flex",
                            transition: ".5s ease",
                            opacity: width < 1000 ? 1 : 0,
                            "&:hover": {
                              opacity: 1,
                            },
                          }}
                        >
                          {data.text}
                        </Typography>
                      </div>
                    </Card>
                  ))}
                </GalleryRoot>

                <Modal
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <ModalRoot>
                    <img width="100%" alt="Loading..." src={selectedImg} />

                    <Button
                      size="large"
                      fullWidth
                      style={{
                        borderRadius: 0,
                        backgroundColor: Colors.MAIN_COLOR,
                      }}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </ModalRoot>
                </Modal>
              </div>
            </TabPanel>

            <TabPanel value="5">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* gallery */}

                <GalleryRoot>
                  {digitalContent.map((data, i) => (
                    <Card sx={myCard} onClick={() => handleOpen(data)}>
                      <div>
                        <img
                          width={350}
                          style={{ objectFit: "cover", height: "300px" }}
                          alt="Loading..."
                          src={data.img}
                        />
                        <Typography
                          sx={{
                            cursor:'pointer',
                            position: "sticky",
                            textShadow: "1px 1px 2px #ffffff",
                            bottom: 5,
                            left: 5,
                            height: width < 1000 ? null : "300px",
                            paddingBottom: "10px",
                            color: "white",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            display: "flex",
                            transition: ".5s ease",
                            opacity: width < 1000 ? 1 : 0,
                            "&:hover": {
                              opacity: 1,
                            },
                          }}
                        >
                          {data.text}
                        </Typography>
                      </div>
                    </Card>
                  ))}
                </GalleryRoot>

                <Modal
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <ModalRoot>
                    <img width="100%" alt="Loading..." src={selectedImg} />

                    <Button
                      size="large"
                      fullWidth
                      style={{
                        borderRadius: 0,
                        backgroundColor: Colors.MAIN_COLOR,
                      }}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </ModalRoot>
                </Modal>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      <Footer />
    </div>
  );
}
