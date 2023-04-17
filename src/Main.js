import logo from './logo.svg';
import './App.css';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import FirstShop from './ResultComponent/FirstShop';
import SecondShop from './ResultComponent/SecondShop';
import ThirdShop from './ResultComponent/ThirdShop';
//import ShopTabBar from './ResultComponent/ShopTabBar';
import 'react-tabs/style/react-tabs.css';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



export const Main = () => {
const location = useLocation();
const [currentView, setCurrentView] = useState("Shop1");
const [value, setValue] = useState("1");
const handleChange = (event, newValue) => {
  setValue(newValue);
}
  return (
     <Container maxWidth="sm">
        <TextField
          margin="normal"
          required
          id="outlined-required"
          label="場所"
          type="場所"
          defaultValue={location.state.locationPara.locationState}
          // onChange={(e) => {setLocation(e.target.value)}}
        /><TextField
          margin="normal"
          required
          id="outlined-required"
          label="ジャンル"
          type="ジャンル"
          defaultValue={location.state.genrePara.genreState}
          //onChange={(e) => {setGenre(e.target.value)}}
        />
      {/* <p>{location.state.locationPara.locationState}</p> 
      <p>{location.state.genrePara.genreState}</p> */}
      
    <TabContext value={value}>
        <TabList onChange={handleChange}  centered>
      <Tab label="おすすめ1" value="1" />
      <Tab label="おすすめ2" value="2" />
      <Tab label="おすすめ3" value="3" />
        </TabList>
        <TabPanel value="1">
        <Container>
           <FirstShop />
      </Container>

    </TabPanel>
        <TabPanel value="2">
          <Container>
            <SecondShop />
      </Container>

    </TabPanel>
        <TabPanel value="3">
      <Container>
            <ThirdShop />
      </Container>
    </TabPanel>
  </TabContext>

      {/* <ShopTabBar currentView={currentView} setCurrentView={setCurrentView} />
      {(currentView === "Shop1")
        ? (
        <FirstShop
          setCurrentView={setCurrentView}
        />
        ) : (currentView === "Shop2")
        ? (
          <SecondShop
          currentView={currentView}
          />) :
            <ThirdShop
          currentView={currentView}/>
            
      } */}
      
</Container>

  );
}

export default Main;
