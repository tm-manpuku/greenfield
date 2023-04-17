
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


const FirstShop = () =>{
   const shopdata = SampleData[0];
  
 return(

   //  <Container maxWidth="sm">
   <Card sx={{ maxWidth: 345 }}>
   <CardHeader
     avatar={
       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
         麻
       </Avatar>
     }
   //   action={
   //     <IconButton aria-label="settings">
   //       <MoreVertIcon />
   //     </IconButton>
   //   }
     title={shopdata.name}
     subheader={"電話：" + shopdata.formatted_phone_number}
   />
   <CardMedia
     component="img"
     height="194"
     image={photo1}
     alt="ShopPhoto"
   />
   <CardContent>
      <Typography component="legend">平均評価：{shopdata.rating}</Typography>
      <Rating name="half-rating-read" value={shopdata.rating}  precision={0.5} readOnly />
      <Typography component="legend"></Typography>
      {/* <ul>平均評価{}</ul> */}
      <Typography component="legend">ユーザのコメント数：{shopdata.user_ratings_total}</Typography>
      <Typography component="legend">穴場度：85点</Typography>
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
      //  </Container>
 );
}

export default FirstShop;