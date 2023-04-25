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
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { getShop } from "./utils/get";
import { Top } from "./Top";
import { LoadingButton } from "@mui/lab";

export const TopChoice = (props) => {
  const navigate = useNavigate();
  const [locationState, setLocation] = useState("");
  const [genreState, setGenre] = useState("");
  const initialURL =
    "https://rugmhzne06.execute-api.us-east-1.amazonaws.com/prod?query=xxx";
  const limitedURL =
    "https://q8ivytu0o8.execute-api.us-east-1.amazonaws.com/prod?query=" +
    locationState +
    "+" +
    genreState;
  const [isLoading, setIsLoading] = useState(false);
  const getShopLists = async () => {
    try {
      setIsLoading(true);
      const getShopData = await fetch(limitedURL);
      const result = await getShopData.json();
      let jsonResult = JSON.stringify(result, undefined, 1);
      localStorage.setItem("shopData",jsonResult);
      props.setShopData(result);
      setIsLoading(false);
    } catch (err) {
      console.log("検索に失敗しました");
    }
  };

  return (
    <Container component="choice" maxWidth="xs">
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
          <Typography component="h1" variant="h5">
            どこで開拓する？
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            id="outlined-required"
            label="場所"
            type="場所"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            id="outlined-required"
            label="ジャンル"
            type="ジャンル"
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />

            <LoadingButton
            size="medium"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="search"
            loading={isLoading}
            onClick={async() => {
              localStorage.setItem("locationState",locationState);
              localStorage.setItem("genreState",genreState);
              await getShopLists();
              navigate("/main", {
                state: {
                  locationPara: { locationState },
                  genrePara: { genreState },
                },
              });
            }}
          >
            <span>開拓してみる！</span>
          </LoadingButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default TopChoice;

