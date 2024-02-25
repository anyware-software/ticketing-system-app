import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import { mainListItems } from "./ListItems";
import GuestProfile from "./GuestProfile";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import {
  Button,
  Checkbox,
  FormControl,
  TextField,
  useMediaQuery,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../state";
import { Outlet, useNavigate } from "react-router-dom";
import { signInWithRedirect, signOut } from "aws-amplify/auth";
import { MainListItems } from "./ListItems";
import { dbStorage } from "../../constants/Enums";
import { useEffect, useState } from "react";
import ContentLoader from "../ContentLoader/ContentLoder";
import { toggleDrawer as toggleDrawerState } from "../../state";
import { TopListItems } from "./TopListItems";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";

const drawerWidth: number = 240;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "close",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "absolute",
    whiteSpace: "nowrap",
    backgroundColor: "#000000",
    color: "white",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(0),
      },
    }),
  },
}));

export default function Dashboard() {
  const user = useSelector((state: any) => state.app.user);
  const drawerState = useSelector((state: any) => state.app.drawer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [selectedItem, setSelectedItem] = React.useState<string | null>(
    "My Profile"
  );
  const handleListItemClick = (item: string) => {
    setSelectedItem(item);
  };
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
    localStorage.setItem("userlogged", "false");
    await signOut();
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithRedirect({ provider: "Facebook" });
      localStorage.setItem("user", "true");
      localStorage.setItem("userlogged", "true");
      dispatch(setLogin({ user: "" }));
    } catch (error) {
      console.error("Error logging in with Facbook:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      setUserLoading(true);
    } else {
      setUserLoading(false);
    }
  }, [user]);

  useEffect(() => {
    const checkLocalStorage = async () => {
      const storedUser = localStorage.getItem("userlogged");
      if (storedUser === "false") {
        // navigate("/dashboard");
        // setLoading(false);
        setLoginState(false);
      }
      if (storedUser === "true") {
        // await signOut();
        // navigate("/login");
        // setLoading(true);
        setLoginState(true);
      }
    };
    checkLocalStorage();
  }, []);

  if (loading) return <ContentLoader />;

  return (
    <Box sx={{ display: "flex", overflow: "hidden", bgcolor: "black" }}>
      <CssBaseline />
      <AppBar
        open={drawerState}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(drawerState && { display: "none" }),
              display: { xs: "block", sm: "block", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography> */}
          <Box
            sx={{
              mt: 1,
              flexGrow: 1,
              // display: { xs: "flex", sm: "flex" }
            }}
          >
            <img
              src="https://ulter.events/assets/images/ulter-logo-white.png"
              style={{ height: "3vh" }}
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            {/* <Typography
              sx={{
                color: "white",
                fontSize: 16,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Contact Us
            </Typography> */}
            <List
              component="nav"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <TopListItems onItemSelected={handleListItemClick} user={user} />
            </List>
            {!loginState ? (
              <Button
                variant="text"
                sx={{
                  color: "white",
                  fontSize: "16px",
                  lineHeight: "25px",
                  wordWrap: "break-word",
                  gap: 1,
                }}
                onClick={() => {
                  handleFacebookLogin();
                }}
              >
                <p>LOGIN WITH</p>
                <FacebookOutlinedIcon
                  sx={{ color: "#1977f3", fontSize: "25px" }}
                />
              </Button>
            ) : (
              <LoadingButton
                variant="text"
                loading={userLoading}
                loadingPosition="center"
                endIcon={<LoginIcon sx={{ color: "white" }} />}
                loadingIndicator={
                  <CircularProgress size={24} sx={{ color: "#FC0000" }} />
                }
                sx={{
                  color: "#FC0000",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "25px",
                  wordWrap: "break-word",
                }}
                onClick={() => {
                  handleLogOut();
                }}
              >
                <p> Sign Out</p>
              </LoadingButton>
            )}
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="warning">
                <ChatBubbleOutlineOutlinedIcon />
              </Badge>
            </IconButton> */}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={drawerState}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#000000",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={
                user?.guest_avatar
                  ? `${dbStorage}${user?.guest_avatar}`
                  : "../../../Images/unknownUser.png"
              }
              style={{
                width: "5rem",
                height: "5rem",
                borderRadius: "50%",
                marginLeft: "1rem",
                display: drawerState ? "block" : "none",
                marginTop: "2vh",
              }}
              alt="unknownUser"
            />
            <Typography
              sx={{
                color: "white",
                fontSize: "19px",
                fontWeight: "600",
                wordWrap: "break-word",
                my: 1,
                display: drawerState ? "block" : "none",
              }}
            >
              {user?.name &&
                user.name.charAt(0).toUpperCase() + user.name.slice(1)}
            </Typography>
          </Box>
          <IconButton
            onClick={toggleDrawer}
            sx={{
              display: {
                xs: "block",
                sm: drawerState === false ? "none" : "block",
              },
            }}
          >
            <ChevronLeftIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
        {/* <Divider /> */}
        {/* <List component="nav">{mainListItems}</List> */}
        <List component="nav">
          <MainListItems onItemSelected={handleListItemClick} user={user} />
        </List>
      </Drawer>
      {/* Main Component */}
      {/* <GuestProfile /> */}

      <Outlet />
    </Box>
  );
}
