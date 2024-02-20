import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, toggleDrawer as toggleDrawerState } from "../../state/index";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const user = useSelector((state: any) => state.app.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    dispatch(toggleDrawerState());
  };

  const handleLogOut = async () => {
    if (!user) {
      console.log("There is no User");
      return;
    }
    dispatch(setLogin({ user: null }));
    if (user.group === "Cognito") {
      navigate("/login");
    }
    localStorage.removeItem("user");
    await signOut();
  };

  return (
    <Box
      sx={{
        backgroundImage: {
          lg: 'url("../../Images/main-page-bg.png")',
          sm: 'url("../../Images/main-page-bg.png")',
          md: 'url("../../Images/main-page-bg.png")',
          xl: 'url("../../Images/main-page-bg.png")',
          xs: 'url("../../Images/mobile-main-bg.png")',
        },
        backgroundColor: { xs: "black" },
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexGrow: 1,
        height: "100vh",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(to right, rgba(0, 0, 0, 0.1)100%, rgba(0, 0, 0, 0.1))",
        },
        zIndex: 0,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton
              onClick={toggleDrawer}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon sx={{ color: "white", fontSize: "30px", m: 0, p: 0 }} />
            </IconButton>
          </Box>
          <Box>
            <img
              src="https://ulter.events/assets/images/ulter-logo-white.png"
              style={{ height: "3vh" }}
              alt=""
            />
          </Box>
          <IconButton
            sx={{}}
            onClick={() => {
              handleLogOut();
            }}
          >
            <LoginIcon sx={{ color: "white", fontSize: "25px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid
        container
        sx={{
          px: { xs: 0, sm: 10, md: 10, lg: 12 },
          mt: { xs: 0, sm: 12, md: 12, lg: 12 },
          // m:{xs:0,sm:10,md:10,lg:0},
          overflow: "auto",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          sx={{
            position: "relative",
          }}
        ></Grid>
      </Grid>
    </Box>
  );
}
