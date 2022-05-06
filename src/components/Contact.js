import { React, useState,useEffect } from "react";
import { styled } from "@mui/system";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "./SubComponents/AppbarHead";
// import Snackbar from '@mui/material/Snackbar';
import {
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Button,
  SnackbarContent,
  IconButton,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

import image1 from "../images/contactPageImages/undrawcontact.svg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { Snackbar } from "@mui/material";

import { Buffer } from "buffer";

import footerContents from "./StaticTextContents/subComponentContents/footerContents";

import Colors from "../constants/Colors";
import Footer from "./SubComponents/Footer";
import BannerAll from '../components/SubComponents/BreadCrumbComponent';

window.Buffer = Buffer;

const DivStyle1 = styled("div")(({ theme }) => ({
  display: "flex",
  paddingLeft: "5%",
  paddingRight: "5%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    gap: 5,
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  [theme.breakpoints.only("md")]: {
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    gap: 5,
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  [theme.breakpoints.up("xl")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
}));
const DivStyle2 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "0 auto",
  },
  [theme.breakpoints.only("md")]: {
    width: "100%",
    margin: "0 auto",
  },
  [theme.breakpoints.up("lg")]: {
    width: "45%",
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
    width: "45%",
  },
}));

const Root3 = styled("div")(({ theme }) => ({
  width: "70%",
  height: "450px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    width: "88%",
  },

  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const RootItem1 = styled("div")(({ theme }) => ({
  flexGrow: 1,
  marginRight: "10px",
  [theme.breakpoints.between("md", "lg")]: {
    marginRight: "0px",
    marginBottom: "20px",
  },

  [theme.breakpoints.down("md")]: {
    marginRight: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    marginRight: "0px",
    marginBottom: "20px",
  },
  [theme.breakpoints.up("lg")]: {},
}));

const RootItem2 = styled("div")(({ theme }) => ({
  flexGrow: 1,
  marginLeft: "10px",
  [theme.breakpoints.between("md", "lg")]: {
    marginLeft: "0px",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    marginLeft: "0px",
  },
  [theme.breakpoints.up("lg")]: {},
}));

const cardStyle = (theme) => ({
  height: 500,  
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    border: "none",
  },
});

const Address = [
  {
    branch: "Head Office",
    address:
      "No. 1/1, Nathan Street, Adaikalapuram,  Trivandrum Road, Palayamkottai, Tirunelveli-627002, Tamil Nadu , India.",
    mail: "info@ncpli.com",
    contact: "+91 753 886 2862 ",
  },
  {
    branch: "Branch Office",
    address:
      "No. 5/3, Second Floor, Kush Kumar Road, Nungambakkam, Chennai - 600034, Tamil Nadu , India.",
    mail: "info@ncpli.com",
    contact: "044 - 42125369",
  },
];

export default function Contact() {
  const [submitBar, setSubmitBar] = useState(false);

  const handleOpen = () => setSubmitBar(true);
  const handleClose = () => setSubmitBar(false);

  const [userData, setUserData] = useState({
    name: { text: "", isValid: false, errorMessage: "" },
    email: { text: "", isValid: false, errorMessage: "" },
    subject: { text: "", isValid: false, errorMessage: "" },
    message: { text: "", isValid: false, errorMessage: "" },
  });

  const HandleName = (e) => {
    setUserData((prevStyle) => ({
      ...prevStyle,
      name: { ...prevStyle.name, text: e.target.value },
    }));

    if (userData.name.text !== "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        name: { ...prevStyle.name, isValid: false, errorMessage: "" },
      }));
    }
  };

  const HandleEmail = (e) => {
    setUserData((prevStyle) => ({
      ...prevStyle,
      email: { ...prevStyle.email, text: e.target.value },
    }));

    if (userData.email.text !== "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        email: { ...prevStyle.email, isValid: false, errorMessage: "" },
      }));
    }
  };

  const HandleSubject = (e) => {
    setUserData((prevStyle) => ({
      ...prevStyle,
      subject: { ...prevStyle.subject, text: e.target.value },
    }));

    if (userData.subject.text !== "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        subject: {
          ...prevStyle.subject,
          isValid: false,
          errorMessage: "",
        },
      }));
    }
  };

  const HandleMessage = (e) => {
    setUserData((prevStyle) => ({
      ...prevStyle,
      message: { ...prevStyle.message, text: e.target.value },
    }));

    if (userData.message.text !== "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        message: { ...prevStyle.message, isValid: false, errorMessage: "" },
      }));
    }
  };

  const handleSubmit = () => {
    if (userData.name.text.trim() === "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        name: {
          ...prevStyle.name,
          isValid: true,
          errorMessage: "Please Enter Your Name",
        },
      }));
    } else if (userData.email.text.trim() === "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        email: {
          ...prevStyle.email,
          isValid: true,
          errorMessage: "Please Enter Your email",
        },
      }));
    } else if (
      !/\S+@\S+\.\S+/.test(userData.email.text.trim()) &&
      userData.email.text.trim() !== ""
    ) {
      setUserData((prevStyle) => ({
        ...prevStyle,
        email: {
          ...prevStyle.email,
          isValid: true,
          errorMessage: "Please Enter valid email",
        },
      }));
    } else if (userData.subject.text.trim() === "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        subject: {
          ...prevStyle.subject,
          isValid: true,
          errorMessage: "Please Enter Your title",
        },
      }));
    } else if (userData.message.text.trim() === "") {
      setUserData((prevStyle) => ({
        ...prevStyle,
        message: {
          ...prevStyle.message,
          isValid: true,
          errorMessage: "Please Enter Your message",
        },
      }));
    } else {
      var finalData = {
        name: userData.name.text,
        email: userData.email.text,
        subject: userData.subject.text,
        message: userData.message.text,
      };
      console.log(finalData);

      console.log("filled data");

      setUserData({
        name: { text: "", isValid: false, errorMessage: "" },
        email: { text: "", isValid: false, errorMessage: "" },
        subject: { text: "", isValid: false, errorMessage: "" },
        message: { text: "", isValid: false, errorMessage: "" },
      });

      handleOpen();
    }
  };

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

  const textfieldColor = (theme) => ({
    ".MuiFormLabel-root.Mui-focused": {
      color: `${Colors.MAIN_COLOR} !important`,
    },
    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: `${Colors.MAIN_COLOR} !important`,
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Contact" }} />
      <BannerAll
        dataParent={{
          title: "Contact",
          subTitle: "Happy To Help You",
          path: ["Home", "Contact"],
        }}
      />
      <div style={{ backgroundColor: "white " }}>
        <br />
        <br />

        <div>
          <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
            <DivStyle1>
              <DivStyle2>
                <Card elevation={3} sx={cardStyle}>
                  <CardContent>
                    <form style={{ padding: "10px" }}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Typography
                          variant="h5"
                          gutterBottom
                          style={{
                            borderBottom: `4px solid ${Colors.MAIN_COLOR}`,
                          }}
                        >
                          {" "}
                          GET IN TOUCH{" "}
                        </Typography>
                      </div>
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {" "}
                        Send us a message, we will call back later{" "}
                      </Typography>
                      <br />
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          marginBottom: "20px",
                          marginTop: 15,
                        }}
                      >
                        <RootItem1>
                          <TextField
                            sx={textfieldColor}
                            autoComplete="off"
                            value={userData.name.text}
                            onChange={(e) => HandleName(e)}
                            error={userData.name.isValid}
                            helperText={userData.name.errorMessage}
                            id="outlined-basic"
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                          />
                        </RootItem1>
                        <RootItem2>
                          <TextField
                            sx={textfieldColor}
                            autoComplete="off"
                            value={userData.email.text}
                            onChange={(e) => HandleEmail(e)}
                            error={userData.email.isValid}
                            helperText={userData.email.errorMessage}
                            id="outlined-basic"
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                          />
                        </RootItem2>
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <TextField
                          sx={textfieldColor}
                          autoComplete="off"
                          value={userData.subject.text}
                          onChange={(e) => HandleSubject(e)}
                          error={userData.subject.isValid}
                          helperText={userData.subject.errorMessage}
                          id="outlined-basic"
                          fullWidth
                          label="Subject"
                          variant="outlined"
                        />
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <TextField
                          sx={textfieldColor}
                          autoComplete="off"
                          maxRows={2}
                          rows={2}
                          value={userData.message.text}
                          onChange={(e) => HandleMessage(e)}
                          error={userData.message.isValid}
                          helperText={userData.message.errorMessage}
                          id="outlined-basic"
                          multiline
                          fullWidth
                          label="Message"
                          variant="outlined"
                        />
                      </div>

                      <Button
                        onClick={() => handleSubmit()}
                        variant="contained"
                        fullWidth
                        style={{
                          backgroundColor: Colors.MAIN_COLOR,
                          justifyContent: "center",
                          display: "flex",
                          marginTop: 15,
                        }}
                      >
                        {" "}
                        Send Message{" "}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </DivStyle2>

              <DivStyle3>
                <Typography
                  variant="h5"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Contact Details
                </Typography>
                {Address.map((obj) => (
                  <>
                    <Typography variant="h6" style={{ marginTop: 15 }}>
                      {obj.branch}
                    </Typography>

                    <div
                      style={{
                        marginTop: 10,
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      <HomeIcon style={{ color: Colors.MAIN_COLOR }} />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "nunito",
                          paddingLeft: 1,
                          textAlign: "justify",
                          marginBottom: 1,
                        }}
                      >
                        {obj.address}{" "}
                      </Typography>
                    </div>

                    <div
                      style={{
                        marginTop: 10,
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      <MailIcon style={{ color: Colors.MAIN_COLOR }} />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "nunito",
                          paddingLeft: 1,
                          textAlign: "justify",
                          marginBottom: 1,
                          color: "#3873FD",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          window.open("mailto:info@ncpli.com");
                        }}
                      >
                        {obj.mail}{" "}
                      </Typography>
                    </div>

                    <div
                      style={{
                        marginTop: 10,
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      <PhoneIcon style={{ color: Colors.MAIN_COLOR }} />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "nunito",
                          paddingLeft: 1,
                          textAlign: "justify",
                          marginBottom: 1,
                          color: "#3873FD",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          window.open(`tel:${obj.contact}`);
                        }}
                      >
                        {obj.contact}{" "}
                      </Typography>
                    </div>
                  </>
                ))}

                <div style={{ marginTop: 15, marginBottom: 15 }}>
                  {footerContents.socialMedia.map((data) => (
                    <SocialMediaLogo
                      sx={{
                        borderColor: "#ADB5BD",
                        "&:hover": {
                          background: data.color,
                          transition: "0.6s",
                        },
                      }}
                      onClick={() => window.open(data.link)}
                    >
                      <IconButton
                        sx={{
                          height: "25px",
                          width: "25px",
                          color: " #ADB5BD",
                          "&:hover": {
                            color: "white",
                          },
                        }}
                        onClick={() => window.open(data.link)}
                      >
                        {data.icon}
                      </IconButton>
                    </SocialMediaLogo>
                  ))}
                </div>
              </DivStyle3>
            </DivStyle1>
          </div>

          <div style={{ width: "100%", marginTop: "5%", marginBottom: 30 }}>
        <DivStyle1 style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            style={{ marginTop: 10, fontFamily: "nunito",color:Colors.MAIN_COLOR }}
          >
            Location
          </Typography>
        </DivStyle1>
      </div>
          
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 15 }}          
          >
            
            
            <Root3>              
              <iframe
                src="https://www.google.com/maps/d/u/1/embed?mid=1ZpjFzBZqaF_lOgNmYQ9gk3nqTBDJBQAc&ehbc=2E312F"
                frameborder="0"
                border="0"
                width="100%"
                height="600px"
                aria-hidden="false"
                tabindex="0"
                style={{ border: 0, marginTop: "-67px" }}
              ></iframe>
            </Root3>
          </div>
          <br />
        </div>
      </div>

      <Footer />

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        severity="success"
        open={submitBar}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <SnackbarContent
          style={{
            backgroundColor: "#157561",
          }}
          message="Thanks a lot ! for contacting us."
        />
      </Snackbar>
    </>
  );
}
