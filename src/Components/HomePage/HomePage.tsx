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
import {
  setLogin,
  toggleDrawer as toggleDrawerState,
} from "../../state/index";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { signInWithRedirect, signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import listEvents from "../../services/listEvents";
import type { Event } from "../../API";
import type { EventTicket } from "../../API";
import { BookingStatus, dbStorage } from "../../constants/Enums";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EventMapOverlay from "../Dashboard/Event Components/EventMapOverlay";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventLocationOverlay from "../Dashboard/Event Components/EventLocationOverlay";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-material-ui-carousel";
import EventItem from "./HomePageCarousel";
import "../ScrollBar/ScrollBar.css";
import listEndedEvents from "../../services/listEndedEvents";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ContentLoader from "../ContentLoader/ContentLoder";
import { CircularProgress } from "@mui/material";
import getBooking from "../../services/getBooking";
import updateGuest from "../../services/updateGuest";
import updateBooking from "../../services/updateBooking";
import CloseIcon from "@mui/icons-material/Close";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import Footer from "../Footer/Footer";

export default function HomePage() {
  const user = useSelector((state: any) => state.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [events, setEvents] = useState<Event[]>([]);
  const [endedEvents, setEndedEvents] = useState<Event[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Event>();
  const [validationWarning, setValidationWarning] = useState<boolean>(false);
  const [loginState, setLoginState] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [message, setMessage] = useState<any>("");
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    getListEvents();
    getListEndedEvents();
  }, []);

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

  useEffect(() => {
    if (!currentEvent) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [currentEvent]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingID = urlParams.get("id");
    // console.log(bookingID);
    if (bookingID) {
      const eventBooking = bookingID;
      localStorage.setItem("eventBooking", eventBooking);
      // handleFacebookLogin();
    }
  }, []);

  useEffect(() => {
    const handdleUpdateBooking = async () => {
      if (user) {
        const storedBookingId = localStorage.getItem("eventBooking");
        if (storedBookingId) {
          const booking = await getBooking(storedBookingId);
          await updateGuest({
            userID: user?.id,
            phone_number: booking.phone_number,
          });
          await updateBooking({
            eventBookingID: storedBookingId,
            bookingGuestId: user?.id,
            status: BookingStatus.PENDING,
          });
          localStorage.removeItem("eventBooking");
        } else {
          localStorage.removeItem("eventBooking");
        }
      }
    };
    handdleUpdateBooking();
  }, []);

  useEffect(() => {
    const nav = sessionStorage.getItem("nav");
    if (nav) {
      setValidationWarning(true);
      setMessage("You need to login First");
      sessionStorage.removeItem("nav");
    }
  }, []);

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

  useEffect(() => {
    if (!user) {
      setUserLoading(true);
    } else {
      setUserLoading(false);
    }
  }, [user]);

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
      setValidationWarning(true);
      setMessage("Failed to login");    }
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

  const getListEndedEvents = async () => {
    try {
      let events = await listEndedEvents();
      const upCommingEvents = events.items.map((event: any) => ({
        ...event,
        startDate: new Date(event.startDate),
      }));
      upCommingEvents.sort((a: any, b: any) => a.startDate - b.startDate);
      setEndedEvents(upCommingEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === endedEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? endedEvents.length - 1 : prevIndex - 1
    );
  };
  
  // if (loading) return <ContentLoader />;

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
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), linear-gradient(to right, rgba(0, 0, 0, 0.1)100%, rgba(0, 0, 0, 0.1))",
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box>
              <IconButton
                onClick={toggleDrawer}
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                <MenuIcon
                  sx={{ color: "white", fontSize: "30px", m: 0, p: 0 }}
                />
              </IconButton>
            </Box>
            <Box>
              <img
                src="https://ulter.events/assets/images/ulter-logo-white.png"
                style={{ height: "3vh" }}
                alt=""
              />
            </Box>
          </Box>

          {!loginState ? (
            <Button
              variant="text"
              sx={{
                color: "white",
                fontSize: "16px",
                wordWrap: "break-word",
                gap: 1,
                py: 0,
                mr: 1,
              }}
              onClick={() => {
                handleFacebookLogin();
              }}
            >
              <p style={{ margin: 0 }}>LOGIN</p>
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
                <CircularProgress size={15} sx={{ color: "#FC0000" }} />
              }
              sx={{
                color: "#FC0000",
                fontSize: "16px",
                wordWrap: "break-word",
                py: 0,
                mr: 1,
              }}
              onClick={() => {
                handleLogOut();
              }}
            >
              <p> Sign Out</p>
            </LoadingButton>
          )}
        </Toolbar>
      </AppBar>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={validationWarning}
        autoHideDuration={3000}
        onClose={() => {
          setValidationWarning(false);
        }}
      >
        <Alert
          onClose={() => {
            setValidationWarning(false);
          }}
          severity="warning"
          sx={{
            position: "fixed",
            top: "5rem",
            right: "16px",
          }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => {
                setValidationWarning(false);
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Snackbar>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <CircularProgress size={64} thickness={1} sx={{ color: "red" }} />
          {/* <img src="https://assets-global.website-files.com/61406347b8db463e379e2732/6170b5377b069c085b0991e5_ezgif-2-2260bc5d0d32.gif" alt="" /> */}
        </Box>
      ) : (
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
                  fontSize: { xs: "15px", sm: "25px" },
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
                  width: { xs: "70%", sm: "30%" },
                  justifyContent: "space-between",
                  alignItems: "center",
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
                    <IconButton onClick={handlePrev}>
                      <ChevronLeftIcon sx={{ color: "red" }} />
                    </IconButton>
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
                    <IconButton onClick={handleNext}>
                      <ChevronRightIcon sx={{ color: "red" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 5,
                gap: { xs: 1, sm: 2 },
              }}
            >
              {endedEvents
                .concat(endedEvents)
                .slice(currentIndex, currentIndex + 3)
                .map((event, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      width: { xs: 110, sm: 200, md: 250 },
                      height: { xs: 160, sm: 250, md: 300 },
                    }}
                  >
                    <Box
                      component="img"
                      src={
                        event.image
                          ? `${dbStorage}${event.image}`
                          : "../../../Images/event.png"
                      }
                      alt={`Event ${index}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        textAlign: "center",
                        padding: "8px",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {event.name}
                      </Typography>
                    </Box>
                  </Box>
                ))}
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
                my: 5,
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Sponsors
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 3,
                  gap: { xs: 1, sm: 2 },
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 1, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      p: 2,
                      borderRadius: "10px",
                      width: "8.5rem",
                    }}
                  >
                    🎥 VSTUDIO
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      p: 2,
                      borderRadius: "10px",
                      width: "8.5rem",
                    }}
                  >
                    🍕PizzaHOT
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 1, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      p: 2,
                      borderRadius: "10px",
                      width: "8.5rem",
                    }}
                  >
                    🚄Trainesia
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      p: 2,
                      borderRadius: "10px",
                      width: "8.5rem",
                    }}
                  >
                    🔥Firevent
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 1, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      p: 2,
                      borderRadius: "10px",
                      width: "8.5rem",
                    }}
                  >
                    💈Baberock
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      p: 2,
                      borderRadius: "10px",
                      width: "8.5rem",
                    }}
                  >
                    🐊Crocoday
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              my: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: { xs: "80%", sm: "90%", md: "80%" },
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row", md: "row" },
                // alignItems: "center",
              }}
            >
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    sx={{
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    +62 812 2345 678
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    sx={{
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    ulterexample@mail.com
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Keep In Touch
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "start", sm: "start", md: "center" },
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <TextField
                    variant="outlined"
                    focused={false}
                    sx={{
                      backgroundColor: "white",
                      "input::placeholder": {
                        color: "black",
                      },
                      input: {
                        color: "black",
                      },
                      border: "1px solid",
                      borderColor: "white",
                      width: { xs: "auto", sm: "18rem" },
                      borderRadius: "10px",
                      ".MuiInputBase-root": {
                        borderRadius: "10px",
                      },
                    }}
                    placeholder="Event Name"
                  />

                  <Button
                    variant="contained"
                    sx={{
                      color: "black",
                      fontSize: 13,
                      fontWeight: "600",
                      wordWrap: "break-word",
                      backgroundColor: "red",
                      px: 1,
                      py: 2,
                      borderRadius: "8px",
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "red",
                      px: 0.75,
                      pt: 0.75,
                      borderRadius: "10px",
                    }}
                  >
                    <InstagramIcon />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "red",
                      px: 0.75,
                      pt: 0.75,
                      borderRadius: "10px",
                    }}
                  >
                    <YouTubeIcon />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "red",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 0.75,
                    }}
                  >
                    <img
                      src="../../../Images/tik-tok.png"
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            sx={{
              zIndex: 1,
              position: "relative",
              display: "flex",
              // flexDirection: "column",
              // alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                py: 1,
                display: "flex",
                alignItems: "start",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#96989b",
                  textDecoration: "underline",
                  fontSize: "13px",
                }}
              >
                powered by
              </Typography>
              <svg
                width="80"
                height="20"
                viewBox="0 0 1153 321"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5667 162L68.9667 31.6H101.767L143.167 162H114.167L96.1667 94.8C94.3 88.1333 92.4334 81.1333 90.5667 73.8C88.8334 66.4667 87.0334 59.3333 85.1667 52.4H84.3667C82.7667 59.3333 81.0334 66.4667 79.1667 73.8C77.4334 81.1333 75.6334 88.1333 73.7667 94.8L55.5667 162H27.5667ZM53.9667 129.6V108.2H116.367V129.6H53.9667ZM198.078 162V31.6H226.278L262.278 99.2L275.478 127.6H276.278C275.611 120.667 274.811 113.067 273.878 104.8C273.078 96.5333 272.678 88.6 272.678 81V31.6H298.878V162H270.678L234.678 94.2L221.478 66H220.678C221.344 72.9333 222.078 80.4667 222.878 88.6C223.811 96.7333 224.278 104.6 224.278 112.2V162H198.078ZM392.739 162V114.8L353.339 31.6H382.739L395.339 62.6C397.072 67.5333 398.805 72.3333 400.539 77C402.405 81.6667 404.272 86.4667 406.139 91.4H406.939C408.939 86.4667 410.872 81.6667 412.739 77C414.605 72.3333 416.472 67.5333 418.339 62.6L430.739 31.6H459.539L420.139 114.8V162H392.739ZM525.898 162L501.098 31.6H529.298L539.098 94C539.898 100.933 540.765 107.867 541.698 114.8C542.765 121.733 543.765 128.6 544.698 135.4H545.498C546.831 128.6 548.165 121.733 549.498 114.8C550.831 107.733 552.165 100.8 553.498 94L568.098 31.6H591.698L606.298 94C607.631 100.8 608.965 107.667 610.298 114.6C611.765 121.533 613.165 128.467 614.498 135.4H615.298C616.098 128.467 616.965 121.533 617.898 114.6C618.965 107.667 619.965 100.8 620.898 94L630.498 31.6H656.898L633.098 162H598.698L584.898 99.6C583.831 94.5333 582.831 89.4667 581.898 84.4C581.098 79.3333 580.298 74.3333 579.498 69.4H578.698C577.898 74.3333 577.031 79.3333 576.098 84.4C575.165 89.4667 574.165 94.5333 573.098 99.6L559.698 162H525.898ZM698.856 162L740.256 31.6H773.056L814.456 162H785.456L767.456 94.8C765.589 88.1333 763.722 81.1333 761.856 73.8C760.122 66.4667 758.322 59.3333 756.456 52.4H755.656C754.056 59.3333 752.322 66.4667 750.456 73.8C748.722 81.1333 746.922 88.1333 745.056 94.8L726.856 162H698.856ZM725.256 129.6V108.2H787.656V129.6H725.256ZM869.367 162V31.6H915.367C924.567 31.6 932.9 32.8 940.367 35.2C947.833 37.6 953.767 41.7333 958.167 47.6C962.7 53.4667 964.967 61.4667 964.967 71.6C964.967 81.3333 962.7 89.3333 958.167 95.6C953.767 101.733 947.833 106.333 940.367 109.4C932.9 112.333 924.567 113.8 915.367 113.8H896.767V162H869.367ZM940.167 162L910.367 106.4L929.567 89.2L970.967 162H940.167ZM896.767 91.8H912.967C921.1 91.8 927.3 90.1333 931.567 86.8C935.833 83.3333 937.967 78.2667 937.967 71.6C937.967 64.8 935.833 60.0667 931.567 57.4C927.3 54.7333 921.1 53.4 912.967 53.4H896.767V91.8ZM1030.69 162V31.6H1111.49V54.6H1058.09V83H1103.49V106.2H1058.09V139H1113.49V162H1030.69Z"
                  fill="#96989b"
                />
                <path
                  d="M59.4287 296.74C53.242 296.74 47.0554 295.58 40.8687 293.26C34.7787 290.843 29.3654 287.412 24.6287 282.965L36.0837 269.335C39.467 272.428 43.237 274.893 47.3937 276.73C51.647 278.567 55.8037 279.485 59.8637 279.485C64.6004 279.485 68.1287 278.615 70.4487 276.875C72.8654 275.038 74.0737 272.525 74.0737 269.335C74.0737 267.208 73.4937 265.468 72.3337 264.115C71.1737 262.762 69.5304 261.602 67.4037 260.635C65.3737 259.572 62.957 258.46 60.1537 257.3L47.6837 251.935C44.397 250.582 41.3037 248.793 38.4037 246.57C35.5037 244.347 33.1354 241.592 31.2987 238.305C29.462 234.922 28.5437 230.958 28.5437 226.415C28.5437 221.195 29.9454 216.507 32.7487 212.35C35.6487 208.193 39.5637 204.907 44.4937 202.49C49.5204 199.977 55.2237 198.72 61.6037 198.72C67.1137 198.72 72.4787 199.783 77.6987 201.91C83.0154 204.037 87.6554 207.033 91.6187 210.9L81.4687 223.515C78.472 221.098 75.3787 219.213 72.1887 217.86C68.9987 216.507 65.4704 215.83 61.6037 215.83C57.737 215.83 54.5954 216.652 52.1787 218.295C49.8587 219.938 48.6987 222.258 48.6987 225.255C48.6987 227.285 49.327 228.977 50.5837 230.33C51.8404 231.683 53.5804 232.892 55.8037 233.955C58.1237 234.922 60.637 235.985 63.3437 237.145L75.5237 242.075C79.3904 243.622 82.7254 245.555 85.5287 247.875C88.332 250.195 90.507 252.998 92.0537 256.285C93.697 259.475 94.5187 263.293 94.5187 267.74C94.5187 272.96 93.117 277.793 90.3137 282.24C87.607 286.59 83.5954 290.118 78.2787 292.825C73.0587 295.435 66.7754 296.74 59.4287 296.74ZM206.915 296.74C198.505 296.74 191.062 294.758 184.585 290.795C178.205 286.832 173.227 281.177 169.65 273.83C166.074 266.387 164.285 257.542 164.285 247.295C164.285 237.048 166.074 228.3 169.65 221.05C173.227 213.8 178.205 208.29 184.585 204.52C191.062 200.653 198.505 198.72 206.915 198.72C215.325 198.72 222.72 200.653 229.1 204.52C235.48 208.29 240.459 213.8 244.035 221.05C247.612 228.3 249.4 237.048 249.4 247.295C249.4 257.542 247.612 266.387 244.035 273.83C240.459 281.177 235.48 286.832 229.1 290.795C222.72 294.758 215.325 296.74 206.915 296.74ZM206.915 279.485C211.362 279.485 215.229 278.18 218.515 275.57C221.899 272.96 224.46 269.238 226.2 264.405C228.037 259.572 228.955 253.868 228.955 247.295C228.955 240.722 228.037 235.115 226.2 230.475C224.46 225.738 221.899 222.113 218.515 219.6C215.229 217.087 211.362 215.83 206.915 215.83C202.372 215.83 198.409 217.087 195.025 219.6C191.739 222.113 189.177 225.738 187.34 230.475C185.6 235.115 184.73 240.722 184.73 247.295C184.73 253.868 185.6 259.572 187.34 264.405C189.177 269.238 191.739 272.96 195.025 275.57C198.409 278.18 202.372 279.485 206.915 279.485ZM325.678 295V200.46H384.548V217.135H345.543V240.625H378.893V257.3H345.543V295H325.678ZM477.772 295V217.135H451.237V200.46H524.172V217.135H497.637V295H477.772ZM605.97 295L587.99 200.46H608.435L615.54 245.7C616.12 250.727 616.748 255.753 617.425 260.78C618.198 265.807 618.923 270.785 619.6 275.715H620.18C621.147 270.785 622.113 265.807 623.08 260.78C624.047 255.657 625.013 250.63 625.98 245.7L636.565 200.46H653.675L664.26 245.7C665.227 250.63 666.193 255.608 667.16 260.635C668.223 265.662 669.238 270.688 670.205 275.715H670.785C671.365 270.688 671.993 265.662 672.67 260.635C673.443 255.608 674.168 250.63 674.845 245.7L681.805 200.46H700.945L683.69 295H658.75L648.745 249.76C647.972 246.087 647.247 242.413 646.57 238.74C645.99 235.067 645.41 231.442 644.83 227.865H644.25C643.67 231.442 643.042 235.067 642.365 238.74C641.688 242.413 640.963 246.087 640.19 249.76L630.475 295H605.97ZM760.393 295L790.408 200.46H814.188L844.203 295H823.178L810.128 246.28C808.774 241.447 807.421 236.372 806.068 231.055C804.811 225.738 803.506 220.567 802.153 215.54H801.573C800.413 220.567 799.156 225.738 797.803 231.055C796.546 236.372 795.241 241.447 793.888 246.28L780.693 295H760.393ZM779.533 271.51V255.995H824.773V271.51H779.533ZM913.041 295V200.46H946.391C953.061 200.46 959.103 201.33 964.516 203.07C969.93 204.81 974.231 207.807 977.421 212.06C980.708 216.313 982.351 222.113 982.351 229.46C982.351 236.517 980.708 242.317 977.421 246.86C974.231 251.307 969.93 254.642 964.516 256.865C959.103 258.992 953.061 260.055 946.391 260.055H932.906V295H913.041ZM964.371 295L942.766 254.69L956.686 242.22L986.701 295H964.371ZM932.906 244.105H944.651C950.548 244.105 955.043 242.897 958.136 240.48C961.23 237.967 962.776 234.293 962.776 229.46C962.776 224.53 961.23 221.098 958.136 219.165C955.043 217.232 950.548 216.265 944.651 216.265H932.906V244.105ZM1059.03 295V200.46H1117.61V217.135H1078.9V237.725H1111.81V254.545H1078.9V278.325H1119.06V295H1059.03Z"
                  fill="#96989b"
                />
              </svg>
            </Box>
          </Grid>
          <Footer />
        </Grid>
      )}
    </Box>
  );
}
