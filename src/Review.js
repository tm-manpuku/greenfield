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
  const LSsingleShopData = JSON.parse(localStorage.getItem("shopData"))[localStorage.getItem("searchCount")];
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const reviewData = [];
  for (let i= 0; i<LSsingleShopData.reviews.length; i++){
   reviewData.push(
  <ListItemButton sx={{ pl: 4 }}>
  <ListItemText primary={LSsingleShopData.reviews[i]} />
  </ListItemButton>
   )
  };

  const accordionReviewData = [];
  for (let i = 0; i < LSsingleShopData.reviews.length; i++){
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
            {LSsingleShopData.reviews[i]}
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
  };

  return (
    <div>
     {accordionReviewData}
    </div>
  );
};

export default Review;

