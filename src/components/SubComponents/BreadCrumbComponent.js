
import React, { useEffect,useState } from "react";

import HomeIcon from "@mui/icons-material/Home";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { Typography, Breadcrumbs, Link, Card, CardContent, } from "@mui/material";

import { styled } from "@mui/material/styles";
import { Colors } from "../../constants";
import about1 from "../../images/allPageBanner/abouts-03.png"

export default function BreadCrumbComponent(props) {

   const [recievedData]=useState(props.dataParent)
    const BreadcrumbStyle = styled("div")(({ theme }) => ({
        display: "flex", justifyContent: "center",textAlign:"center",
        
      }));
    
      
      const DivStyleBanner = styled("div")(({ theme }) => ({
    
        position:"relative",textAlign:"center",marginBottom:50,
        ".img": {
         width: "100%", objectFit:"cover" ,
        [theme.breakpoints.down("md")]: {
          height:150  ,
        },
        [theme.breakpoints.only("md")]: {
          height:200  ,
        },
        
        [theme.breakpoints.only("lg")]: {
          height:250  ,
          
        },
        [theme.breakpoints.up("lg")]: {
          height:300  ,
          
        },
      }
        
    }));

    const [width, setWidth] = useState(window.innerWidth);

    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);      
    };


    useEffect(() => {

      window.addEventListener("resize", updateWidthAndHeight);
     
    }, [])
    


  return (
 <DivStyleBanner>
          

          <img src={about1}  className="img"  />
 
          <div style={{ marginTop: "2%", textAlign:"center",position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)"}}>
        <Typography variant={width<800?"h5":"h3"} style ={{color:Colors.MAIN_COLOR}} > {recievedData.title} </Typography>
          <Typography variant="subtitle1" style ={{color:"grey", marginTop: "1%"}}> {recievedData.subTitle} </Typography>
        </div>
        
<div style={{ marginTop: "2%", textAlign:"center",position:"absolute",top:"80%",left:"50%",transform:"translate(-50%, -50%)" }}>
        <BreadcrumbStyle style={{marginTop:30}}  >
          <Card elevation={3} style={{padding:10,textAlign:"center" }}>

           <div style={{display:recievedData.path.length===2?"visible":"none",}}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ "& ol": { justifyContent: "center", margin: "auto" } }} >
                <Link underline="hover" color="inherit" href="#/" sx={{ display: "flex", alignItems: "center" }} ><HomeIcon sx={{ mr: 0.5 }} fontSize="small" /> {recievedData.path[0]} </Link>
                <Typography style={{color:Colors.MAIN_COLOR, fontWeight:"bold"}} >{recievedData.path[1]} </Typography>
              </Breadcrumbs>
              </div>

              <div style={{display:recievedData.path.length===3?"visible":"none"}} >
           
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb"  sx={{ "& ol": { justifyContent: "center", margin: "auto" } }} >
                <Link underline="hover" color="inherit" href="#/" sx={{ display: "flex", alignItems: "center" }} ><HomeIcon sx={{ mr: 0.5 }} fontSize="small" /> {recievedData.path[0]}  </Link>
                <Typography  >{recievedData.path[1]} </Typography>
                <Typography style={{color:Colors.MAIN_COLOR, fontWeight:"bold",}}noWrap >{recievedData.path[2]} </Typography>

              </Breadcrumbs>
             
              </div>

          </Card>
        </BreadcrumbStyle>
</div>



</DivStyleBanner>
  )
}
