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
import getEvent from "../../services/getEvent";

export default function HomePage() {
  const user = useSelector((state: any) => state.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Event>();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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
        ticket?.waves?.map((wave:any) => wave.price)
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

  const handleNextImage = () => {
    setIsTransitioning(true);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === (currentEvent?.gallery?.length ?? 0) - 4 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getListEvents = async () => {
    try {
      let events = await listEvents();
      console.log(events);
      
      const upCommingEvents = events.items.map((event: any) => ({
        ...event,
        startDate: new Date(event.startDate),
      }));
      upCommingEvents.sort((a: any, b: any) => a.startDate - b.startDate);
      setEvents(upCommingEvents);
      setCurrentEvent(upCommingEvents[0]);
      let currentEvent = await getEvent(upCommingEvents[0].id);
      console.log(currentEvent);
      
      setCurrentEventTicket(upCommingEvents[0].tickets.items);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

//   console.log(currentEventTicket);
  

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
          }}
        >
          <Box
            sx={{
              height: "80vh",
              width: "85%",
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

            {currentEvent && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                  },
                  gap: { xs: 0, sm: 2, md: 5 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      position: "relative",
                      width: {
                        xs: "23.5rem",
                        sm: "20rem",
                        md: "20rem",
                        lg: "15rem",
                      },
                      height: {
                        xs: "18rem",
                        sm: "20rem",
                        md: "20rem",
                        lg: "15rem",
                      },
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={
                        currentEvent.image
                          ? `${dbStorage}${currentEvent.image}`
                          : "../../../Images/event.png"
                      }
                      alt={currentEvent.name || ""}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: {
                          xs: "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, .2) 100%)",
                        },
                        borderRadius: "10px",
                        display: { xs: "flex", sm: "none" },
                        alignItems: "start",
                        // justifyContent: "space-around",
                        pt: 5,
                        gap: 5,
                      }}
                    >
                      <IconButton
                        onClick={toggleDrawer}
                        sx={{ display: { xs: "block", sm: "none" } }}
                      >
                        <ChevronLeftIcon
                          sx={{ color: "white", fontSize: "40px" }}
                        />
                      </IconButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          textAlign: "center",
                          width: "50%",
                          fontWeight: 700,
                        }}
                      >
                        {currentEvent.name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    p: { xs: 3, sm: 0 },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      gap: 1,
                      transition: "opacity 0.5s ease, transform 1s ease",
                      opacity: isTransitioning ? 0.5 : 1,
                    }}
                  >
                    {/* <IconButton onClick={handlePrevImage} sx={{ color: "white" }}>
                    <ArrowBackIosNewIcon />
                  </IconButton> */}
                    {currentEvent?.gallery
                      ?.slice(selectedImageIndex, selectedImageIndex + 4)
                      .map((image, index) => (
                        <img
                          key={`${image}${index}`}
                          src={
                            image
                              ? `${dbStorage}${image}`
                              : "../../../Images/event.png"
                          }
                          alt={`Event ${index + 1}`}
                          style={{
                            width: "8rem",
                            height: "5rem",
                            borderRadius: "5px",
                          }}
                        />
                      ))}
                    <IconButton
                      onClick={handleNextImage}
                      sx={{ color: "white" }}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "700",
                        width: { xs: "60%", sm: "100%" },
                      }}
                    >
                      {currentEvent.name}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.67)",
                      fontSize: "12px",
                    }}
                  >
                    {currentEvent.description}
                  </Typography>
                  <Box
                    sx={{
                      mt: { xs: 2, sm: 0 },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.67)",
                        fontSize: "12px",
                      }}
                    >
                      Starting from
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "20px",
                          fontWeight: "700",
                        }}
                      >
                        EGP {startingFrom}
                      </Typography>
                      <EventMapOverlay currentEvent={currentEvent} />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "column", md: "row" },
                      gap: { xs: 2, sm: 2, md: 10 },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <CalendarTodayIcon sx={{ color: "white" }} />
                      <Box>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.67)",
                            fontSize: "15px",
                            display: { xs: "none", sm: "block" },
                          }}
                        >
                          {currentEvent.startDate
                            ? new Date(
                                currentEvent.startDate
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : "N/A"}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.67)",
                            fontSize: "15px",
                            display: { xs: "none", sm: "block" },
                          }}
                        >
                          {currentEvent.startDate
                            ? new Date(
                                currentEvent.startDate
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                                hour: "numeric",
                                minute: "numeric",
                              })
                            : "N/A"}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.67)",
                            fontSize: "15px",
                            display: { xs: "block", sm: "none" },
                          }}
                        >
                          {currentEvent.startDate
                            ? new Date(currentEvent.startDate).toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  weekday: "long",
                                  hour: "numeric",
                                  minute: "numeric",
                                }
                              )
                            : "N/A"}
                        </Typography>
                      </Box>
                    </Box>
                    <EventLocationOverlay currentEvent={currentEvent} />
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
