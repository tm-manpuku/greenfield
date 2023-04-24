
import { useLocation } from "react-router-dom";
import { useState } from 'react';
//import Sample from '../data/Sample';
import { SampleData } from "../data/Sample"
import './shop.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import photo1 from "../data/photo1.jpeg";
// import Container from '@mui/material/Container';
import {Main} from"../Main";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate } from "react-router-dom";


const FirstShop = (props) =>{
   const navigate = useNavigate();
   const singleShopData = props.shopData[props.searchCount];
   const [open, setOpen] = React.useState(false);

   const handleClick = () => {
     setOpen(!open);
   };
 const reviewData = [];
 for (let i= 0; i<singleShopData.reviews.length; i++){
  reviewData.push(
 <ListItemButton sx={{ pl: 4 }}>
 <ListItemText primary={singleShopData.reviews[i]} />
 </ListItemButton>
  )
 };

 return(
   <Card sx={{ maxWidth: 345 }} style={{margin:'auto',width:'100%'}}>
   <CardHeader
     avatar={
       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
         {props.searchCount+1}
       </Avatar>
     }
   //   action={
   //     <IconButton aria-label="settings">
   //       <MoreVertIcon />
   //     </IconButton>
   //   }
     title={singleShopData.name}
     subheader={"電話：" + singleShopData.formatted_phone_number}
   />
   <CardMedia
     component="img"
     height="194"
     image={singleShopData.photo}
     alt="ShopPhoto"
   />
   <CardContent>
      <Typography component="legend">平均評価：{singleShopData.rating}</Typography>
      <Rating name="half-rating-read" value={singleShopData.rating}  precision={0.5} readOnly />
      <Typography component="legend"></Typography>
      {/* <ul>平均評価{}</ul> */}
      <Typography component="legend">ユーザのコメント数：{singleShopData.user_ratings_total}</Typography>
      
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
    
      <ListItemButton 
      // onClick={navigate("/review", {
      //   state: {}})}
      onClick={handleClick}  
        >
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

      {/* <Typography component="legend">穴場度:85点</Typography> */}
   </CardContent>
   {/* <CardActions disableSpacing>
     <IconButton aria-label="add to favorites">
       <FavoriteIcon />
     </IconButton>
     <IconButton aria-label="share">
       <ShareIcon />
     </IconButton>
   </CardActions> */}

       </Card>
 );
}

export default FirstShop;