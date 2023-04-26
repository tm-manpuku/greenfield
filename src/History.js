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

 export const History = () => {
    const userId = localStorage.getItem("emailState");
    const getUserInfoURL = "https://wfgyu9xut9.execute-api.us-east-1.amazonaws.com/prod?userId=" + userId;
    const LSshopData = JSON.parse(localStorage.getItem("Data"));
    const listHistory = [];
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                console.log("APIコールしました");
                // setIsLoading(true);
                const getUserData = await fetch(getUserInfoURL);
                const result = await getUserData.json();
                let jsonResult = JSON.stringify(result, undefined, 1);
                console.log(jsonResult);
                localStorage.setItem("userData",jsonResult);
                // setIsLoading(false);
              } catch (err) {
                console.log("検索に失敗しました");
              }
        };
        getUserInfo();
      }, []);


    // for(let i = 0;i<shopData.length;i++){
    //     listHistory.push(
    //     <>
    //     <ListItem alignItems="flex-start">
    //     <ListItemAvatar>
    //       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    //     </ListItemAvatar>
    //     <ListItemText
    //       primary="Brunch this weekend?"
    //       secondary={
    //         <React.Fragment>
    //           <Typography
    //             sx={{ display: 'inline' }}
    //             component="span"
    //             variant="body2"
    //             color="text.primary"
    //           >
    //             Ali Connors
    //           </Typography>
    //           {" — I'll be in your neighborhood doing errands this…"}
    //         </React.Fragment>
    //       }
    //     />
    //   </ListItem>
    //   <Divider variant="inset" component="li" />
    //   </>  
    //     )
    // };
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
      <ListItem alignItems="flex-start">
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
      </ListItem>
    </List>
    </Box>
  );
}

export default History;


