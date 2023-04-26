import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { LoadingButton } from "@mui/lab";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { getShop } from "./utils/get";
import Background from "./TopBackgroud.jpg";
import TopLogoimage from "./TopLogoimage.png";
import couponQR from "./data/couponQR.png"



export const Coupon = (props) => {
  const navigate = useNavigate();
  const LSsingleShopData = JSON.parse(localStorage.getItem("shopData"))[localStorage.getItem("searchCount")];
  const targetShopURL = "https://www.google.com/maps/dir/?api=1&destination=" + LSsingleShopData.name + "&destination_place_id=" + LSsingleShopData.place_id ;
  const LSsearchCount = localStorage.getItem("searchCount");
  return (
    <Container
      component="main"
      maxWidth="xs"
    >
    <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
      >

        <img src={couponQR} height="280" width="280" alt="クーポンの取得に失敗しました" />
        {LSsearchCount == 0 ?
          <Typography component="h1" variant="h5" fontFamily={'Roboto'}>
            500円クーポン!
          </Typography>:
          LSsearchCount == 1 ?
             <Typography component="h1" variant="h5" fontFamily={'Roboto'}>
            200円クーポン!
            </Typography> :
          LSsearchCount > 1 ?
              <Typography component="h1" variant="h5" fontFamily={'Roboto'}>
            ３回以上の検索だからクーポンはないよ・・・
              </Typography> :
              <Typography component="h1" variant="h5" fontFamily={'Roboto'}>
            ３回以上の検索だからクーポンはないよ・・・
              </Typography> 
              
}
        
    <Button
      variant="contained"
      sx={{ mx: '20%' , mt: 3, mb: 2 , position: "relative", top: 20}}
      className="search"
      target="_blank" 
      href={targetShopURL}>
                  GoogleMapを起動する
      </Button>
      </Box>
    </Container>
  );
};

export default Coupon;

