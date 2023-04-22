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
import { CircularProgress } from "@mui/material";

export const Top = (props) => {
  const navigate = useNavigate();
  const [locationState, setLocation] = useState("");
  const [genreState, setGenre] = useState("");
  const initialURL =
    "https://rugmhzne06.execute-api.us-east-1.amazonaws.com/prod?query=" +
    locationState +
    "+" +
    genreState;
  const limitedURL =
    "https://q8ivytu0o8.execute-api.us-east-1.amazonaws.com/prod?query=" +
    locationState +
    "+" +
    genreState;
  const [isLoading, setIsLoading] = useState(false);
  // const getShopLists = async () => {
  //   try {
  //     setIsLoading(true);
  //     const getShopData = await fetch(limitedURL);
  //     const resultOfShopData = await getShopData.json();
  //     //const getPhotoData = await fetch(resultOfShopData[0].photo);
  //     //console.log(getPhotoData);
  //     props.setShopData(resultOfShopData);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log("検索に失敗しました");
  //   }
  // };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        backgroundImage: `url(${"./topimage_fried-egg-with-guacamole-sandwiches.jpg"})`,
      }}
    >
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
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
          <Typography component="h1" variant="h4">
            ねえ、ご飯屋さん開拓しない？
          </Typography>
          <Typography component="h1" variant="h6">
            今日のランチ新しいお店を開拓しませんか？早く決めるとお得に開拓できるよ！
          </Typography>
          {/* <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          id="outlined-required"
          label="場所"
          type="場所"
          onChange={(e) => {setLocation(e.target.value)}}
        />
         <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          id="outlined-required"
          label="ジャンル"
          type="ジャンル"
          onChange={(e) => {setGenre(e.target.value)}}
        /> */}

          <LoadingButton
            size="medium"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="search"
            loading={isLoading}
            onClick={() => {
              navigate("/choice", {
                state: {
                  // locationPara: { locationState },
                  // genrePara: { genreState },
                },
              });
              // }
            }}
          >
            <span>冒険してみる！</span>
          </LoadingButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default Top;
