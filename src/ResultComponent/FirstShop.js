
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
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material"; 
import Box from '@mui/material/Box';

const FirstShop = (props) =>{
   const navigate = useNavigate();
   const LSshopData = JSON.parse(localStorage.getItem("shopData"));
   const singleShopData = LSshopData[props.searchCount];
   //const LSSearchcount = localStorage.getItem("searchCount");
   //const LSsingleShopData = localStorage.getItem("shopData")[LSSearchcount];
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
   <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
      <Typography component="legend">平均評価：{singleShopData.rating}</Typography>
      <Rating name="half-rating-read" value={singleShopData.rating}  precision={0.5} readOnly />
      <Typography component="legend"></Typography>
      <Typography component="legend">ユーザのコメント数：{singleShopData.user_ratings_total}</Typography>
      {/* <Button
            size="medium"
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            className="search"
            onClick={navigate("/review")}
          >
            <span>レビューコメント読む</span>
      </Button> */}

      {/* <Typography component="legend">穴場度:85点</Typography> */}
    </Box>
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