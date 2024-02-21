import React, { useEffect, useState } from "react";
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
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, toggleDrawer as toggleDrawerState } from "../../state/index";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import listEvents from "../../services/listEvents";
import type { Event } from "../../API";
import type { EventTicket } from "../../API";
import { dbStorage } from "../../constants/Enums";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EventMapOverlay from "../Dashboard/Event Components/EventMapOverlay";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventLocationOverlay from "../Dashboard/Event Components/EventLocationOverlay";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-material-ui-carousel";
import EventItem from "./HomePageCarousel";
import "../ScrollBar/ScrollBar.css";

export default function HomePage() {
  const user = useSelector((state: any) => state.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Event>();
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    getListEvents();
  }, []);

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

  const getListEvents = async () => {
    try {
      let events = await listEvents();
      const upCommingEvents = events.items.map((event: any) => ({
        ...event,
        startDate: new Date(event.startDate),
      }));
      upCommingEvents.sort((a: any, b: any) => a.startDate - b.startDate);
      setEvents(upCommingEvents);
      setCurrentEvent(upCommingEvents[0]);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    if (!currentEvent?.startDate) return;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(currentEvent?.startDate ?? "").getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentEvent?.startDate]);

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
          mt: { xs: 0, sm: 12, md: 12, lg: 8.5 },
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
            display: "flex",
            justifyContent: "center",
            mt: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              color={"white"}
              sx={{ fontWeight: 700, fontSize: { xs: "20px", sm: "35px" } }}
            >
              ALL ABOUT MUSIC - ITS ALL HERE
            </Typography>
            <Typography
              color={"white"}
              sx={{ fontSize: { xs: "18px", sm: "25px" } }}
            >
              Turn on the feeling with all music event
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          sx={{
            position: "relative",
            my: 5,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Carousel
            sx={{
              width: { xs: "100%", sm: "100%", md: "80%", lg: "70%" },
              // height: {sm:'60vh',md:"65vh",lg:"60vh"},
            }}
          >
            {events.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </Carousel>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              my: 8,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "18px", sm: "25px" },
                fontWeight: "bold",
                "& span": { color: "red" },
              }}
            >
              {currentEvent?.name} <span>STARTS IN</span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 5, sm: 8 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "35px", sm: "50px" },
                    fontWeight: "bold",
                  }}
                >
                  {remainingTime.days}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  Days
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "35px", sm: "50px" },
                    fontWeight: "bold",
                  }}
                >
                  {remainingTime.hours}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  Hours
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "35px", sm: "50px" },
                    fontWeight: "bold",
                  }}
                >
                  {remainingTime.minutes}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  Minutes
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "35px", sm: "50px" },
                    fontWeight: "bold",
                  }}
                >
                  {remainingTime.seconds}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  Seconds
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                color: "black",
                fontSize: 13,
                fontWeight: "600",
                wordWrap: "break-word",
                backgroundColor: "red",
                px: 4,
                borderRadius: "8px",
                mt: 4,
              }}
              onClick={() => {
                navigate("/dashboard/events/");
              }}
            >
              Buy Tickets
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "30%",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "red",
                  fontSize: { xs: "18px", sm: "25px" },
                  fontWeight: "bold",
                  marginLeft: "auto",
                }}
              >
                Past Events
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  marginLeft: "auto",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#303030",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 0,
                  }}
                >
                  <ChevronLeftIcon sx={{ color: "red" }} />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#303030",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 0,
                  }}
                >
                  <ChevronRightIcon sx={{ color: "red" }} />
                </Box>
              </Box>
            </Box>
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
