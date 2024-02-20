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
import Carousel from "react-material-ui-carousel";
import EventItem from "./HomePageCarousel";

export default function HomePage() {
  const user = useSelector((state: any) => state.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Event>();
  const [startingFrom, setStartingFrom] = useState(0);
  const [currentEventTicket, setCurrentEventTicket] = useState<EventTicket[]>(
    []
  );

  useEffect(() => {
    getListEvents();
  }, []);

  useEffect(() => {
    if (currentEventTicket.length > 0) {
      const allPrices = currentEventTicket.flatMap((ticket) =>
        ticket?.waves?.map((wave: any) => wave.price)
      );
      const smallestPrice = Math.min(...allPrices);
      // console.log("Smallest Price:", smallestPrice);
      setStartingFrom(smallestPrice);
    }
  }, [currentEventTicket]);

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
      setCurrentEventTicket(upCommingEvents[0].tickets.items);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
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
          mt: { xs: 0, sm: 12, md: 12, lg: 12 },
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
            mt:10,
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
            <Typography variant="h4" color={"white"} sx={{ fontWeight: 700 }}>
              ALL ABOUT MUSIC - ITS ALL HERE
            </Typography>
            <Typography variant="h6" color={"white"}>
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
          <Carousel sx={{
            width: {sm:"100%", md:"80%", lg:"70%"},
            height: {sm:'55vh',md:"60vh",lg:"52vh"},
          }}>
            {events.map((event) => (
              <EventItem key={event.id} event={event} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
}
