import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { useEffect } from "react";
import Link from '@mui/material/Link';
import { Button } from "@mui/material";

 export const History = () => {
    const userId = localStorage.getItem("emailState");
    const getUserInfoURL = "https://wfgyu9xut9.execute-api.us-east-1.amazonaws.com/prod?userId=" + userId;
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                console.log("APIコールしました");
                // setIsLoading(true);
                const getUserData = await fetch(getUserInfoURL);
                const result = await getUserData.json();
                let jsonResult = JSON.stringify(result, undefined, 1);
                //console.log(jsonResult.shopInfo);
                localStorage.setItem("userData",jsonResult);
                //LSがNullの時は履歴なしとする。

              } catch (err) {
                console.log("検索に失敗しました");
              }
        };
        getUserInfo();
      }, []);
      const LSuserData = JSON.parse(localStorage.getItem("userData"));
      let listHistory = [];
      //console.log(LSuserData.shopInfo);
      //const targetShopURL = "https://www.google.com/maps/dir/?api=1&destination=" + LSsingleShopData.name + "&destination_place_id=" + LSsingleShopData.place_id ;
    if(LSuserData===null || LSuserData.shopInfo.length==0){
        listHistory = 
        <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
         >
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                まだ開拓したお店が無いようです<br />
                searchタブからお店を検索してみよう!
              </Typography>
        </Box>
    }else {
    const shopInfoArray = LSuserData.shopInfo;
    for(let i = 0;i<shopInfoArray.length;i++){
        const targetShopURL = "https://www.google.com/maps/dir/?api=1&destination=" + shopInfoArray[i].shopName + "&destination_place_id=" + shopInfoArray[i].placeId; 
        console.log(targetShopURL);
        listHistory.push(
        <>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={shopInfoArray[i].photoUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={shopInfoArray[i].shopName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{textDecoration: 'underline'}}
                display= 'inline' 
                component="span"
                variant="body2"
                color="text.primary"
              >
                開拓日
              </Typography>
              <br />{shopInfoArray[i].date} <br />
               <Button
                variant="outlined"
                sx={{ mx: '10%' , mt: 2, mb: 1 , position: "relative", top: 1}}
                className="search"
                target="_blank" 
                href={targetShopURL}>
                  もう一度このお店に行く
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>  
        )
    };
};
  return (
    <Box
    sx={{
      marginTop: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {listHistory}
      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem> */}
    </List>
    </Box>
  );
}

export default History;


