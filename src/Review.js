import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { LoadingButton } from "@mui/lab";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { getShop } from "./utils/get";
import Background from "./TopBackgroud.jpg";
import TopLogoimage from "./TopLogoimage.png";
import couponQR from "./data/couponQR.png"
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CommentIcon from '@mui/icons-material/Comment';


export const Review = (props) => {
  const singleShopData = props.shopData[props.searchCount];
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const reviewData = [];
  for (let i= 0; i<singleShopData.reviews.length; i++){
   reviewData.push(
  <ListItemButton sx={{ pl: 4 }}>
  <ListItemText primary={singleShopData.reviews[i]} />
  </ListItemButton>
   )
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id = "nested-list-subheader" >
          口コミを見てみる
        </ListSubheader>
      }
    >
    
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary = "Review" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {reviewData}
        </List>
      </Collapse>
    </List>
    </Container>
  );
};

export default Review;

