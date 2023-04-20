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


export const Main = (props) => {
const location = useLocation();
const [searchCount, setSearchCount] = useState(0);
const [value, setValue] = useState("1");
// const [shopData,setShopData] = useState("");
const initialURL = "https://rugmhzne06.execute-api.us-east-1.amazonaws.com/prod?query=xxx";
const handleChange = (event, newValue) => {
  setValue(newValue);
}
  let button;
  let SecondTab;
  let ThirdTab;

  if (props.shopData.length > (searchCount+1) * 3) {
     button=
      <Button
      variant="outlined"
      sx={{ mx: '30%' , mt: 3, mb: 2 , position: "relative", top: 20}}
      className="search" onClick={() => {
        setSearchCount(searchCount + 1)
      }} >他の隠れ名店を探してみる
      </Button>
  } else {
    button=
     <Button
      variant="outlined"
      sx={{ mx: '30%' , mt: 3, mb: 2 , position: "relative", top: 20}}
      className="search" disabled>他の隠れ名店を探してみる</Button>
  }
   if (Math.floor(props.shopData.length /3)>= (searchCount)) {
     SecondTab= <TabPanel value="2">
          <Container>
            <SecondShop searchCount={searchCount} shopData={props.shopData}/>
      </Container>

    </TabPanel>

    
   } else {
     SecondTab= <TabPanel value="2">
          <Container>
          </Container>
        </TabPanel>
    
  }

  if (Math.floor(props.shopData.length /3)> (searchCount)||Math.floor(props.shopData.length %3)===0) {
     ThirdTab= <TabPanel value="3">
      <Container>
            <ThirdShop searchCount={searchCount} shopData={props.shopData}/>
      </Container>
    </TabPanel>

    
   } else {
    ThirdTab= <TabPanel value="3">
      <Container>
      </Container>
    </TabPanel>
    
  }

  return (
     <Grid container alignItems='center' justifyContent='center' direction="row" maxWidth="sm" columnSpacing={2} sx={{alignItems: 'center'}}>
        <Grid item>
        <TextField
          margin="normal"
          required
          id="outlined-required"
          label="場所"
          type="場所"
          defaultValue={location.state.locationPara.locationState}
          // onChange={(e) => {setLocation(e.target.value)}}
        />
        </Grid>
        <Grid item>
        <TextField
          margin="normal"
          required
          id="outlined-required"
          label="ジャンル"
          type="ジャンル"
          defaultValue={location.state.genrePara.genreState}
          //onChange={(e) => {setGenre(e.target.value)}}
        />
        </Grid>
    <Box sx={{height:500}}>
    <TabContext value={value}>
        <TabList onChange={handleChange}  centered>
      <Tab label="おすすめ1" value="1" />
      <Tab label="おすすめ2" value="2" />
      <Tab label="おすすめ3" value="3" />
        </TabList>

        <TabPanel value="1">
           <FirstShop searchCount={searchCount} shopData={props.shopData}/>
        </TabPanel>
        {SecondTab}
        {ThirdTab}
    
      </TabContext>
     </Box>
     <Container alignItems='center' justifyContent='center' direction="column" maxWidth="sm" sx={{alignItems: 'center'}}>
     {button}
     </Container>

</Grid>

  );
}

export default Main;
