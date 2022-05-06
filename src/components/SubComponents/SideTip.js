import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import { Typography } from "@mui/material";

export default function SideTip() {
  const SideStyle = styled("div")(({ theme }) => ({
    position: "fixed",
    right: 2,
    transform: `translateY(-50%)`,

    color: "white",
    padding: "0.5%",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    borderRadius: "44px",
    background: `#018e4c`,
    boxShadow: `3px 3px 5px #016c3a,
-3px -3px 5px #01b05e`,

    // transition:'0.8s',

    "& .myText": {
      display: "none",
      paddingLeft: "10px",
    },
    "&:hover .myText": {
      display: "flex",
    },

    ".myText": {
      marginRight: "0.5%",
      whiteSpace: "nowrap",
    },
  }));

  return (
    <div>
      
      {/* call stuff */}
      <SideStyle
        style={{ top: "45%" }}
        onClick={() => {
          window.open("tel:7538862862", "_self");
        }}
      >
        <CallIcon />
        <Typography className="myText"> Call Us </Typography>
      </SideStyle>

      <SideStyle
        style={{ top: "52%" }}
        onClick={() => {
          window.open("mailto:career@ncpli.com", "_self");
        }}
      >
        <MailIcon />
        <Typography className="myText">Mail Us </Typography>
      </SideStyle>

      <SideStyle
        style={{ top: "59%" }}
        onClick={() => {
          window.open("https://wa.me/+917538862862");
        }}
      >
        <WhatsAppIcon />
        <Typography className="myText">WhatsApp </Typography>
      </SideStyle>


    </div>
  );
}