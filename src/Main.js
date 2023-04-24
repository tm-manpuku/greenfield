import './App.css';
import { useLocation } from "react-router-dom";
import { useState, useLayoutEffect, useEffect } from 'react';
import React from 'react';
import FirstShop from './ResultComponent/FirstShop';
//import ShopTabBar from './ResultComponent/ShopTabBar';
import 'react-tabs/style/react-tabs.css';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Dialog } from "@mui/material"; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

export const Main = (props) => {
const location = useLocation();
const navigate = useNavigate();
const [searchCount, setSearchCount] = useState(0);
const [couponview,setCouponView] = useState(true);
const [value, setValue] = useState("1");
const [open, setOpen] = useState(false);
const couponArray = [500,200];
const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
const handleCouponView = () =>{
  setCouponView(false);
};

const handleChange = (event, newValue) => {
  setValue(newValue);
}
  let button;
  if (props.shopData.length > props.searchCount+1) {
     button=
      <Button
      variant="outlined"
      sx={{ mx: '30%' , mt: 3, mb: 2 , position: "relative", top: 20}}
      className="search"
      onClick={handleClickOpen}
      >他のお店を開拓
      </Button>
     
  } else {
    button=
     <Button
      variant="outlined"
      sx={{ mx: '30%' , mt: 3, mb: 2 , position: "relative", top: 20}}
      className="search" disabled>他のお店を開拓</Button>
  }

  let couponButton;
  if(props.searchCount<2 && couponview){
    couponButton=
    <Button 
      variant="contained" 
      onClick={()=>
      {handleCouponView()
        navigate("/Coupon", {
          state: {
            // locationPara: { locationState },
            // genrePara: { genreState },
          },
        });
      }} >
      {couponArray[props.searchCount]}円割引クーポンを取得して
      このお店に行く！</Button>
  }
  return (
    
     <Grid container alignitems='center' justifycontent='center' direction="column" maxWidth="sm" columnSpacing={2} sx={{alignItems: 'center'}}>
      <Box>
        <Grid item>
        <Typography component="legend">エリア:{location.state.locationPara.locationState}</Typography>
        </Grid>
        <Grid item>
        <Typography component="legend">ジャンル:{location.state.genrePara.genreState}</Typography>
        </Grid>
      </Box>  
     <Box sx={{height:500}}>
           <FirstShop searchCount={props.searchCount} shopData={props.shopData}/>
     </Box>
     <Container alignitems='center' justifycontent='center' direction="column" maxWidth="sm" sx={{alignItems: 'center'}}>
     {couponButton}

     {/* <Button
      variant="contained"
      sx={{ mx: '30%' , mt: 3, mb: 2 , position: "relative", top: 20}}
      className="search"
      target="_blank" 
      href={targetShopURL}>
      このお店に行く！
      </Button> */}

      {button}
     <Container>
     <Dialog
       open={open}
       onClose={handleClose}
       aria-labelledby="alert-dialog-title"
       aria-describedby="alert-dialog-description"
       >
                <DialogTitle id="alert-dialog-title">
          {"次の店舗を探すと割引額が減ります！"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            今この店舗のクーポンを発行せずに、次の店舗を探すと
            割引額が下がりますが本当に次の店舗を探しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>やめる</Button>
          <Button onClick={
            () => {
            props.setSearchCount(props.searchCount + 1)
            handleClose()}}
          autoFocus>
            次の店舗を検索する！
          </Button>
        </DialogActions>
      </Dialog>
      </Container>  
     </Container>

</Grid>

  );
}

export default Main;
