import { React, useState, useEffect, useCallback } from 'react'
import { AppBar, Button, IconButton, Menu, MenuItem, Paper, styled, Toolbar, Typography, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from '../../images/logo/Logo2.png'
import { useNavigate } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import Colors from '../../constants/Colors';

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



export default function AppbarHead(props) {
  const navigate = useNavigate();
  const [dataFromParents] = useState(props.dataParent);
  const menuItemStyle = (theme) => ({
    margin:'2%',

    '&:focus':{
      backgroundColor:'white'
    },

    "&:hover": {
      // backgroundColor: "green",
      color:'white',
      borderRadius: '10px',
      background: '#2f9836',
      boxShadow: `inset 5px 5px 8px #226f27,
                  inset -1px -1px 8px #3cc145`
    },
    transition:'0.3s'
  });

  const menuIconStyle = () => ({
    color: Colors.MAIN_COLOR,
    display: { lg: "none", xl: "none" }

  });

  const menuStyle = (text) => ({

    color: dataFromParents.appBtnText === text ? Colors.MAIN_COLOR : "black",
    textTransform: "capitalize",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "white",
      color: Colors.MAIN_COLOR,
    },
    display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" },
    marginLeft: { md: 2 },
    marginRight: { md: 2 }
    // [theme.breakpoints.down("md")]: {
    //   display: "none",
    // },

    // [theme.breakpoints.up("md")]: {

    //   marginLeft: 2,
    //   marginRight: 2,
    // },


  });


  const menuToolBarStyle = (theme) => ({
    backgroundColor: "white",
    [theme.breakpoints.down('md')]: {
      paddingLeft: '5%',
      paddingRight: '5%'

    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '15%',
      paddingRight: '15%'
    }
  });
  const [open, setopen] = useState(false);

  const [project, setproject] = useState(null);


  const menuItem = [
    {
      menutitle: "Home",
      link: "/",
    },
    {
      menutitle: "About Us",
      link: "/about",
    },
    {
      menutitle: "Projects",
      link: "",
    },
    {
      menutitle: "Products",
      link: "",
    },
    {
      menutitle: "Services",
      link: "",
    },
    {
      menutitle: "Portfolio",
      link: "/portfolio",
    },
    {
      menutitle: "Career",
      link: "/carrer",
    },
    {
      menutitle: "Contact",
      link: "/contact",
    },
  ];

  const projectsItem = [
    
    { subMenuName: "Netcom Digital Contents", subMenuLink: "/netcom-digital-contents", },
    { subMenuName: "EMIS Software Solutions", subMenuLink: "/emis-sofware-solutions", },
    { subMenuName: "Language Lab", subMenuLink: "/language-lab", },
    { subMenuName: "Call Soft", subMenuLink: "/call-soft-project", },
    { subMenuName: "Assessment", subMenuLink: "/assessment-project", },
    { subMenuName: "Skill Development & Training", subMenuLink: "/skill-develoment-&-training", },
    { subMenuName: "ICT/Hi-Tech Lab", subMenuLink: "/ict" },

    { subMenuName: "Kiosk Projects", subMenuLink: "/kiosk-project", },
    { subMenuName: "RFID Solutions", subMenuLink: "/software-solution", },
  ];

  const productItem = [
    { subMenuName: "Smart Tailor Shop", subMenuLink: "/smart-tailor-shop" },
    { subMenuName: "Online Cab Booking System", subMenuLink: "/online-cab-booking-system" },
    { subMenuName: "Smart Class Room", subMenuLink: "/smart-class", },
    { subMenuName: "Educational Mobile App(Gilgal)", subMenuLink: "/educational-mobile-app" },
    { subMenuName: "EMIS", subMenuLink: "/product-emis" },
    { subMenuName: "Assessment Tool", subMenuLink: "/product-assessment-tool", },
  ];

  const servicesItem = [
    
    { subMenuName: "E Content Development", subMenuLink: "/e-content-development" },
    { subMenuName: "Short Film", subMenuLink: "/short-film" },
    { subMenuName: "Web Application Development", subMenuLink: "/web-app-development" },
    { subMenuName: "Mobile Application Development", subMenuLink: "/mob-app-development" },
    { subMenuName: "Web Hosting Services", subMenuLink: "/web-hosting" },
    { subMenuName: "Customized Software Development", subMenuLink: "/custom-app-development" },
    { subMenuName: "Hardware Support & Maintainance", subMenuLink: "/hardware-support-maintainence" },
  ];

  const [mySubMenu, setMySubMenu] = useState([]);

  const handleClick = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(!open);
  };

  const handleChangeMenu = (text, e, tt) => {
    for (let index = 0; index < tt.length; index++) {
      if (tt[index].menutitle === text.menutitle && tt[index].link !== "") {
        navigate(tt[index].link);
        setopen(false);
      } else {
        handleHover(text, e);
      }
    }
  };

  const handleHover = (text, e) => {
    console.log({ text });

    if (text.menutitle === "Projects") {
      console.log(text);
      setMySubMenu(projectsItem);
      console.log(e.currentTarget);
      setproject(e.currentTarget);
    } else if (text.menutitle === "Products") {
      setMySubMenu(productItem);
      setproject(e.currentTarget);
    } else if (text.menutitle === "Services") {
      console.log(text);
      setMySubMenu(servicesItem);
      setproject(e.currentTarget);
    } else if (
      text.menutitle === "Home" ||
      text.menutitle === "About Us" ||
      text.menutitle === "Portfolio" ||
      text.menutitle === "Career" ||
      text.menutitle === "Contact"
    ) {
      setproject(null);
    }
  };


  const handleHoverMI = (text, e) => {
    console.log({ text });

    if (text.menutitle === "Projects") {
      console.log(text);
      setMySubMenu(projectsItem);
      console.log(e.currentTarget);
    } else if (text.menutitle === "Products") {
      setMySubMenu(productItem);
    } else if (text.menutitle === "Services") {
      console.log(text);
      setMySubMenu(servicesItem);
    } else if (
      text.menutitle === "Home" ||
      text.menutitle === "About Us" ||
      text.menutitle === "Portfolio" ||
      text.menutitle === "Career" ||
      text.menutitle === "Contact"
    ) {
      setproject(null);
    }
  };


  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickSubmenu = (text, ls) => {
    for (let index = 0; index < ls.length; index++) {
      if (ls[index].subMenuName === text.subMenuName) {
        navigate(ls[index].subMenuLink);
        setproject(null);
        setExpanded(false);
        setopen(false);
        break;
      }
    }
  };


  const TypographyStyle1 = styled('div')(({ theme }) => ({
    display: "flex", justifyContent: "space-evenly",
    [theme.breakpoints.down('md')]: {
      width: "92vw"
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: "60vw"
    },
    [theme.breakpoints.up('md')]: {
      width: "60vw"
    },
    [theme.breakpoints.up('lg')]: {
      width: "75vw"
    },
  }));



  const [y, setY] = useState(window.scrollY);

  const [elevationValue, setElevationValue] = useState(0)

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      let x = Math.round(y/ (props.dataParent.appBtnText==='Home' ? 1000 : 100));
      console.log(`Y: ${y} `); console.log(`X: ${x} `);
      if(x<20){
        setElevationValue(x)
      }else{
        setElevationValue(x)
      }
      setY(window.scrollY);
    },
    [y]
  );


  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <AppBar position="sticky" elevation={elevationValue+1} style={{boxShadow: elevationValue>=1 ? `rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset` : 'none'  , transition:'0.6s'}}>
        <Toolbar sx={menuToolBarStyle}   >

          <div style={{ flex: 1 }} >
            <img src={logo} height="60px" onClick={()=>{
              navigate("/")
              window.scrollTo(0,0)
            }} style={{cursor:"pointer",marginTop:10,marginBottom:10}} />
          </div>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
          {menuItem.map((text) => (
              <Button
                disableRipple
                size="large"
                style={{whiteSpace:'nowrap', fontWeight:"500", fontSize:16}}
                sx={() => menuStyle(text.menutitle)}
                onClick={(e) => handleChangeMenu(text, e, menuItem)}
                onMouseOver={(e) => handleHover(text, e)}
              >
                {text.menutitle}
                {text.menutitle === "Projects" ||
                text.menutitle === "Services" ||
                text.menutitle === "Products" ? (
                  <ArrowDropDownIcon />
                ) : null}
              </Button>
            ))}
            <Menu
              style={{ zIndex: 1, marginTop: "1%" }}
              transitionDuration={700}
              anchorEl={project}
              open={Boolean(project)}
              onMouseLeave={() => {
                setproject(null);
              }}
              onClose={() => {
                setproject(null);
              }}
              MenuListProps={{
                onMouseLeave: () => {
                  setproject(null);
                },
              }}
            >
              {mySubMenu.map((text) => (
                <MenuItem
                  sx={menuItemStyle}
                  onClick={(e) => { handleClickSubmenu(text, mySubMenu); }}
                >
                  {text.subMenuName}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div>
            <IconButton size="small" sx={menuIconStyle} onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={handleClose}>
              {menuItem.map((data, i) =>
                data.link === "" ? (
                  <Accordion
                    expanded={expanded === i}
                    onChange={handleChange(i)}
                    onClick={(e) => handleHoverMI(data, e)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {data.menutitle}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {mySubMenu.map((text) => (
                        <ListItem button>
                          <ListItemText
                            primary={text.subMenuName}
                            onClick={(e) => {
                              handleClickSubmenu(text, mySubMenu);
                            }}
                          />
                        </ListItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <ListItem button sx={{ borderBottom: "1px solid #ddd"}}>
                    <ListItemText
                      primary={data.menutitle}
                      onClick={(e) => handleChangeMenu(data, e, menuItem)}
                    />
                  </ListItem>
                )
              )}
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}
