import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import { Top } from "./Top";
import { Coupon } from "./Coupon";
import { TopChoice } from "./TopChoice.js";
import { Review } from "./Review.js";
import { History } from "./History.js";
import { useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import theme from "./ColorTheme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Background from "./TopBackgroud.jpg";
//import Background from "./TopLogoimage.png";
import favicon from "./favicon.png";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Search", "History"];
const settings = ["Profile"];
const pageURL = ["/","/search","/history"]

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [shopData, setShopData] = useState([]);
  const [emailState, setEmailAdress] = useState("");
  const userId = localStorage.getItem("emailState");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const getUserInfoURL = "https://wfgyu9xut9.execute-api.us-east-1.amazonaws.com/prod?userId=" + userId;
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <AppBar position="static">
          <Container maxWidth="xl" >
            <Toolbar disableGutters>
               {/* <img src={favicon} width="30" height="30" sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ランチ開拓.com
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                    <a href={pageURL[0]}>
                    <MenuItem key={pages[0]} href={pageURL[0]}  onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" href={pageURL[0]}>{pages[0]}</Typography>
                    </MenuItem>
                    </a>
                    <a href={pageURL[1]}>
                    <MenuItem key={pages[1]} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" >{pages[1]}</Typography>
                    </MenuItem>
                    </a>
                    {/* <a href={pageURL[2]} 
                    // onClick={async()=>{
                    //   console.log("クリックされました");
                    //   await getUserInfo()
                    // }}
                    >
                    <MenuItem key={pages[2]} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" >{pages[2]}</Typography>
                    </MenuItem>
                    </a> */}
                    
                
                </Menu>
              </Box>
              {/* <img src={favicon} width="30" height="30" sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} /> */}
              {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ランチ開拓.com
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                
                  <Button
                    key={pages[0]}
                    onClick={handleCloseNavMenu}
                    href={pages[0]}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {pages[0]}
                  </Button>
                  <Button
                    key={pages[1]}
                    onClick={handleCloseNavMenu}
                    href={pages[1]}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {pages[1]}
                  </Button>                  
                  {/* <Button
                    key={pages[2]}
                    onClick={handleCloseNavMenu}
                    href={pages[2]}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {pages[2]}
                  </Button> */}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="user account"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top emailState={emailState} setEmailAdress={setEmailAdress} />} />
            <Route path="search" element={<TopChoice shopData={shopData} setShopData={setShopData}/>} />
            <Route path="coupon" element={<Coupon shopData={shopData} emailState={emailState}/>}/>
            <Route path="main" element={<Main shopData={shopData} emailState={emailState}/>} />
            <Route path="review" element={<Review  shopData={shopData} />} />
            <Route path="history" element={<History emailState={emailState} />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}
export default App;

