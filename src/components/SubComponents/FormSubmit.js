import { TextField, Typography, Button } from "@mui/material";
import { React, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/LocalPhone";

// import fbLogo from "../../images/socialmedia_icon/facebook.png";
// import twLogo from "../../images/socialmedia_icon/twitter.png";
// import linLogo from "../../images/socialmedia_icon/linkedin.png";
// import ytLogo from "../../images/socialmedia_icon/youtube.png";

import fbLogo from "../../images/socialmedia_icon/ic_f.svg";
import linLogo from "../../images/socialmedia_icon/ic_l.svg";
import twLogo from "../../images/socialmedia_icon/ic_t.svg";
import ytLogo from "../../images/socialmedia_icon/ic_y.svg";
import Footer from "./Footer";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "./AppbarHead";
import { useLocation } from "react-router-dom";

export default function FormSubmit() {
  const location = useLocation();

  const contactDetails = ["Name", "Company Name", "Email", "Contact Number"];
  const products = [
    "Smart Tailoring Shop",
    "Online Cab Booking System",
    "EMIS",
    "Education Mobile App",
    "Assessment Tool",
  ];

  const [data, setdata] = useState({
    Name: "",
    "Company Name": "",
    Email: "",
    "Contact Number": "",
    selectProduct: "",
    message: "",
  });

  const logos = [fbLogo, twLogo, linLogo, ytLogo];

  useEffect(() => {    
    setdata({ ...data, selectProduct: location.state.productName });
    
    window.scrollTo(0,0)

  }, []);

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Products" }} />
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingLeft: "15%",
          paddingRight: "15%",
          marginBottom: "5%",
          marginTop: "5%",
        }}
      >
        <div style={{ width: 700 }}>
          {contactDetails.map((text) => (
            <div>
              <Typography
                variant="body1"
                style={{
                  marginTop: 20,
                  fontWeight: "600",
                  fontFamily: "nunito",
                }}
                multiline
              >
                {text} <span style={{ color: "#ED514A" }}>*</span>
              </Typography>
              <TextField
                style={{ width: "100%", marginTop: 7 }}
                size="small"
                value={data[text]}
                onChange={(e) => {
                  text === "Name"
                    ? setdata({ ...data, Name: e.target.value })
                    : text === "Company Name"
                    ? setdata({ ...data, "Company Name": e.target.value })
                    : text === "Email"
                    ? setdata({ ...data, Email: e.target.value })
                    : setdata({ ...data, "Contact Number": e.target.value });
                }}
              />
            </div>
          ))}

          <Typography
            variant="body1"
            style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
          >
            Select Products <span style={{ color: "#ED514A" }}>*</span>{" "}
          </Typography>
          <TextField
            style={{ width: "100%", marginTop: 7 }}
            size="small"
            value={data.selectProduct}
          ></TextField>
          <Typography
            variant="body1"
            style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
          >
            Message <span style={{ color: "#ED514A" }}>*</span>{" "}
          </Typography>
          <TextField
            multiline
            rows={3}
            style={{ width: "100%" }}
            value={data.message}
            onChange={(e) => {
              setdata({ ...data, message: e.target.value });
            }}
          />
          <div style={{ display: "flex", justifyContent: "left" }}>
            <Button
              style={{
                backgroundColor: "#ED514A",
                color: "white",
                fontWeight: "600",
                fontFamily: "nunito",
                marginTop: 20,
                textTransform: "none",
                width: "20%",
              }}
              onClick={() => {
                console.log(data);
                setdata({
                  Name: "",
                  "Company Name": "",
                  Email: "",
                  "Contact Number": "",
                  selectProduct: "",
                  message: "",
                });
              }}
            >
              Submit
            </Button>
          </div>
        </div>

        <div style={{ width: 250 }}>
          <Typography
            variant="h5"
            style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
          >
            Contact{" "}
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <EmailIcon style={{}} />
            <Typography
              variant="h6"
              style={{
                fontFamily: "nunito",
                paddingLeft: 4,
                color: " #3B7CFE",
                cursor: "pointer",
              }}
              onClick={() => {
                window.open("mailto:info@ncpli.com");
              }}
            >
              info@ncpli.com
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <PhoneIcon />
            <Typography
              variant="h6"
              style={{ fontFamily: "nunito", paddingLeft: 4 }}
              onClick={() => {
                window.open("tel:04622585979");
              }}
            >
              0462 - 2585979{" "}
            </Typography>
          </div>

          <div style={{ marginTop: 20, marginLeft: 2 }}>
            {logos.map((image) => (
              <img src={image} width="10%" style={{ paddingLeft: 20 }} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
