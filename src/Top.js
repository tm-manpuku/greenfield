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




export const Top = (props) => {
  const navigate = useNavigate();
  const [locationState, setLocation] = useState("");
  const [genreState, setGenre] = useState("");
  const registerURL = "https://zg375fp37c.execute-api.us-east-1.amazonaws.com/sample?userid=" + props.emailState;
  const [clickCount, setCount] = useState(0);


  const getEmailRegister = async () => {
    try {
      const getShopData = await fetch(registerURL);
    } catch (err) {
      console.log("検索に失敗しました");
    }
  };



  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <CssBaseline />
        {/* <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        > */}
<>
        {clickCount == 0 ?
          <img src={TopLogoimage} onClick={() => setCount(clickCount + 1)} /> :
          clickCount == 1 ?
              <img src={couponExplain} height="330" width="330" onClick={() => setCount(clickCount + 1)} />:
          <>
         <Typography component="h1" variant="h5">
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
            //loading={isLoading}
            onClick={async() => {
              await getEmailRegister()
              navigate("/choice", {
                state: {
                  // locationPara: { locationState },
                  // genrePara: { genreState },
                },
              });
              // }
            }}
          >
           
            <span>お店を開拓してみる</span>
          </LoadingButton>
          </>
          }
</>

         


        
          {/* <Typography component="h1" variant="h4">
            ねえ、ご飯屋さん開拓しない？
          </Typography>
          <Typography component="h1" variant="h6">
            今日のランチ新しいお店を開拓しませんか？早く決めるとお得に開拓できるよ！
          </Typography> */}

          {/* <Typography component="h1" variant="h8">
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
            //loading={isLoading}
            onClick={async() => {
              await getEmailRegister()
              navigate("/choice", {
                state: {
                  // locationPara: { locationState },
                  // genrePara: { genreState },
                },
              });
              // }
            }}
          >
           
            <span>お店を開拓する</span>
          </LoadingButton> */}
        {/* </Box> */}
      </Paper>
    </Container>
  );
};

export default Top;

