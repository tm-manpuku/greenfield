import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CommentIcon from '@mui/icons-material/Comment';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  const accordionReviewData = [];
  for (let i = 0; i < singleShopData.reviews.length; i++){
    accordionReviewData.push(
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls= {i + "panel-content"}
          id= {i + "panel-content"}
        >
          <Typography>Review {i+1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {singleShopData.reviews[i]}
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
  };

  return (
    <>
    <div>
     {accordionReviewData}
    </div>
    




    <Container
      component="main"
      maxWidth="xs"
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
    </>
  );
};

export default Review;

