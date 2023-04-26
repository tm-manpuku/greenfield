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
import couponExplain from "./couponExplain.png";
import couponExplain1  from "./couponExplain1.png";
import couponExplain2  from "./couponExplain2.png";




export const Top = (props) => {
  const navigate = useNavigate();
  const registerURL = "https://wfgyu9xut9.execute-api.us-east-1.amazonaws.com/prod?userId=" + props.emailState;
  const [clickCount, setCount] = useState(0);


  const getEmailRegister = async () => {
    try {
      const getShopData = await fetch(registerURL);
      localStorage.setItem("emailState", props.emailState);
    } catch (err) {
      console.log("ユーザ登録に失敗しました");
    }
  };



  return (

    <Container
      component="main"
      maxWidth="xs"
      
      
    >
      <Paper
        // variant="outlined"
        elevation={0}
        sx={{ my: { xs: 4, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
           
          }}
          
        >
 

        {clickCount == 0 ?
          <img src={TopLogoimage} onClick={() => setCount(clickCount + 1)} /> :
          clickCount == 1 ?
              <img src={couponExplain} height="345" width="345" onClick={() => setCount(clickCount + 1)} /> :
              // <>
              // <img src={couponExplain1} sx={{
              //     m: 0 }}height="345" width="345" onClick={() => setCount(clickCount + 1)} /> 
              //   <img src={couponExplain2} sx={{
              //     m:0}} height="300" width="300" onClick={() => setCount(clickCount + 1)} />
              //   </>:
              // <Grid container alignItems="center" justify="center" style={{ backgroundColor: "red" }}>
  // <Grid item xs={8}  alignItems="center" style={{ backgroundColor: "blue" }}>
<>
         <Typography component="h1" variant="h5" fontFamily={'Roboto'}>
             Emailを入力して始めよう!
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            id="outlined-required"
            label="E-mail"
            type="E-mailを入力"
            onChange={(e) => {
              props.setEmailAdress(e.target.value);
            }}
          />

          <LoadingButton
            size="medium"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="search"
            onClick={async() => {
              await getEmailRegister()
              navigate("/search", {
                state: {
                  // locationPara: { locationState },
                  // genrePara: { genreState },
                },
              });
            }}
          >
            <span>お店を開拓してみる</span>
                    </LoadingButton>
</>

          }


        </Box>
       </Paper>
     </Container>
  );
};

export default Top;

