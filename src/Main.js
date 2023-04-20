import logo from './logo.svg';
import './App.css';
import { useLocation } from "react-router-dom";
import { useState, useLayoutEffect, useEffect } from 'react';
import React from 'react';
import FirstShop from './ResultComponent/FirstShop';
import SecondShop from './ResultComponent/SecondShop';
import ThirdShop from './ResultComponent/ThirdShop';
import EmptyShop from './ResultComponent/EmptyShop';
//import ShopTabBar from './ResultComponent/ShopTabBar';
import 'react-tabs/style/react-tabs.css';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material"; 
import { getShop } from "./utils/get";
import { positions } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export const Main = (props) => {
const location = useLocation();
const [searchCount, setSearchCount] = useState(0);
const [value, setValue] = useState("1");
// const [shopData,setShopData] = useState("");
const targetShopURL = "https://www.google.com/maps/dir/?api=1&destination=" + props.shopData[searchCount].name + "&destination_place_id=" + props.shopData[searchCount].place_id
const handleChange = (event, newValue) => {
  setValue(newValue);
}
  let button;

  if (props.shopData.length > searchCount+1) {
     button=
      <Button
      variant="outlined"
      sx={{ mx: '30%' , mt: 3, mb: 2 , position: "relative", top: 20}}
      className="search" onClick={() => {
        setSearchCount(searchCount + 1)
      }} >他のお店を開拓
      </Button>
  } else {
    button=
     <Button
      variant="outlined"
      sx={{ mx: '30%' , mt: 3, mb: 2 , position: "relative", top: 20}}
      className="search" disabled>他のお店を開拓</Button>
  }
  return (
     <Grid container alignItems='center' justifyContent='center' direction="row" maxWidth="sm" columnSpacing={2} sx={{alignItems: 'center'}}>
        <Grid item>
        {console.log(props.shopData[searchCount])}
        <Typography component="legend">エリア:{location.state.locationPara.locationState}</Typography>
        </Grid>
        <Grid item>
        <Typography component="legend">ジャンル:{location.state.genrePara.genreState}</Typography>
        </Grid>
        
    <Box sx={{height:500}}>
           <FirstShop searchCount={searchCount} shopData={props.shopData}/>
     </Box>
     <Container alignItems='center' justifyContent='center' direction="column" maxWidth="sm" sx={{alignItems: 'center'}}>
     <Button
      variant="outlined"
      sx={{ mx: '30%' , mt: 3, mb: 2 , position: "relative", top: 20}}
      className="search"
      target="_blank" 
      href={targetShopURL}
      >このお店に行く！
      </Button>
     {button}
     </Container>

</Grid>

  );
}

export default Main;
