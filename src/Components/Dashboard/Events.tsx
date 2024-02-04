import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import listEvents from "../../services/listEvents";
import { BookingStatus, dbStorage } from "../../constants/Enums";
import ContentLoader from "../ContentLoader/ContentLoder";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import getEvent from "../../services/getEvent";
import Button from "@mui/material/Button";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NoEvent from "../NoEvent/NoEvent";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ManIcon from "@mui/icons-material/Man";
import TextField from "@mui/material/TextField";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { GOOGLE_MAPS_LIBRARIES } from "./Library";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AccessibleIcon from "@mui/icons-material/Accessible";
import getGuestByPhone from "../../services/getGuestByPhone";
import Avatar from "@mui/material/Avatar";
import createBooking from "../../services/createBooking";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import Skeleton from "@mui/material/Skeleton";
import LoadingButton from "@mui/lab/LoadingButton";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import sendSms from "../../services/sendSMS";
import EventMapOverlay from "./Event Components/EventMapOverlay";
import EventLocationOverlay from "./Event Components/EventLocationOverlay";
import NoDataEvent from "../NoEvent/NoDataEvent";
import { toggleDrawer as toggleDrawerState } from "../../state/index";
// import type { Event } from '../../API';

interface Event {
  id: string;
  name: string;
  image: string;
  gallery: string[];
  description: string;
  map: string;
  startDate: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}
interface EventTickets {
  id: string;
  type: string;
  description: string;
  cashlessCredit: number;
  color: string;
  price: number;
  startDate: string;
  waves: {
    AutomaticShift: boolean;
    active: boolean;
    endDate: string;
    name: string;
    price: number;
    quota: number;
    startDate: string;
  }[];
}

interface BookingRequest {
  name: string;
  phone: string;
  ticketType: string;
  waveName: string;
}

interface Guest {
  id: string;
  name: string;
  guest_avatar: string;
  phone_number: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentEventId, setCurrentEventsId] = useState("");
  const [waveCounts, setWaveCounts] = useState<{ [key: string]: number }>({});
  const [startingFrom, setStartingFrom] = useState(0);
  const [isSpecial, setIsSpecial] = useState(false);
  const [ticketChosen, setTicketChosen] = useState("noTickets");
  const [orderId, setOrderId] = useState("");
  const user = useSelector((state: any) => state.app.user);
  const dispatch = useDispatch();
  const [validationWarning, setValidationWarning] = useState<boolean>(false);
  const [message, setMessage] = useState<any>("");
  const [currentEvent, setCurrentEvent] = useState<Event>({
    id: "",
    name: "",
    image: "",
    gallery: [],
    description: "",
    map: "",
    startDate: "",
    location: {
      address: "",
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
  });
  const [currentEventTicket, setCurrentEventTicket] = useState<EventTickets[]>(
    []
  );
  const toggleDrawer = () => {
    dispatch(toggleDrawerState());
  };
  let checkBoxStyles = {
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 1)",
    marginLeft: "0",
    border: "1px solid #ffffff50",
    padding: { xs: "0", sm: "5px 10px" },
    borderRadius: "12px",
    width: { xs: "22rem", sm: "23rem" },
    color: "white",
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
      setCurrentEventsId(upCommingEvents[0].id);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    const getCurrentEvent = async () => {
      if (currentEventId) {
        try {
          let currentEvent = await getEvent(currentEventId);
          // console.log(currentEvent);
          setCurrentEvent(currentEvent.event);
          setCurrentEventTicket(currentEvent.tickets.items);
        } catch (error) {
          console.error("Error getting event:", error);
        }
      }
    };
    getCurrentEvent();
  }, [currentEventId]);

  useEffect(() => {
    getListEvents();
  }, []);

  useEffect(() => {
    if (currentEvent.id === "") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [currentEvent.id]);

  const handlePrevImage = () => {
    setIsTransitioning(true);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? currentEvent.gallery.length - 4 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextImage = () => {
    setIsTransitioning(true);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === currentEvent.gallery.length - 4 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (currentEventTicket.length > 0) {
      const allPrices = currentEventTicket.flatMap((ticket) =>
        ticket.waves.map((wave) => wave.price)
      );
      const smallestPrice = Math.min(...allPrices);
      // console.log("Smallest Price:", smallestPrice);
      setStartingFrom(smallestPrice);
    }
  }, [currentEventTicket]);

  const handleIncrement = (
    ticketId: string,
    ticketType: string,
    waveName: string,
    wavePrice: number
  ) => {
    const countKey = `${ticketId}-${ticketType}-${waveName}-${wavePrice}`;
    setWaveCounts((prevCounts) => ({
      ...prevCounts,
      [countKey]: (prevCounts[countKey] || 0) + 1,
    }));
  };

  const handleDecrement = (
    ticketId: string,
    ticketType: string,
    waveName: string,
    wavePrice: number
  ) => {
    const countKey = `${ticketId}-${ticketType}-${waveName}-${wavePrice}`;
    setWaveCounts((prevCounts) => ({
      ...prevCounts,
      [countKey]: Math.max((prevCounts[countKey] || 0) - 1, 0),
    }));
  };

  const totalTickets = Object.keys(waveCounts).reduce((total, countKey) => {
    const count = waveCounts[countKey];
    return total + count;
  }, 0);

  const selectedWaves = Object.keys(waveCounts)
    .filter((countKey) => waveCounts[countKey] > 0)
    .map((countKey) => {
      const parts = countKey.split("-");
      const ticketId = parts.slice(0, -3).join("-");
      const ticketName = parts[parts.length - 3];
      const waveName = parts[parts.length - 2];
      const wavePrice = parts[parts.length - 1];
      return {
        ticketId,
        ticketName,
        waveName,
        wavePrice,
        count: waveCounts[countKey],
      };
    });

  const [bookingRequests, setBookingRequests] = useState<{
    [key: string]: {
      name: string;
      phone: string;
      ticketId: string;
      customKey: string;
      ticketType: string;
      ticketColor: string;
      waveName: string;
    };
  }>({});
  const [phones, setPhones] = useState<string[]>([]);
  const [validGuests, setValidGuests] = useState<Guest[]>([]);
  const [notValidGuests, setNotValidGuests] = useState<any[]>([]);
  const [notValidGuestsBooking, setNotValidGuestsBooking] = useState<any[]>([]);
  const [mainGuest, setMainGuest] = useState<Guest | null>(null);
  const [bookedGuests, setBookedGuests] = useState(false);

  useEffect(() => {
    if (validGuests.length === 0 && notValidGuests.length === 0 && !mainGuest) {
      setBookedGuests(true);
    } else {
      setBookedGuests(false);
    }
  }, [validGuests, notValidGuests, mainGuest]);

  const handleInputChange = (
    ticketId: string,
    waveName: string,
    ticketType: string,
    ticketColor: string,
    index: number,
    field: "name" | "phone",
    value: string
  ) => {
    const key = `${ticketId}-${waveName}-${index}`;
    const parts = key.split("-");
    const extractedTicketId = parts.slice(0, -2).join("-");
    const extractedWaveName = parts[parts.length - 2];

    setBookingRequests((prevFormData) => ({
      ...prevFormData,
      [key]: {
        ...prevFormData[key],
        customKey: key,
        ticketId: extractedTicketId,
        waveName: extractedWaveName,
        ticketType: ticketType,
        ticketColor: ticketColor,
        [field]: value,
      },
    }));
  };

  useEffect(() => {
    const guestsPhone = () => {
      const phones = Object.values(bookingRequests).map((entry) => entry.phone);
      setPhones(phones);
    };
    guestsPhone();
  }, [bookingRequests]);
  // console.log(phones);

  const fetchEventGuests = async () => {
    if (phones.length > 0) {
      let mainGuest: Guest | null = null;
      const validGuests: Guest[] = [];
      const notValidGuests: any[] = [];

      for (const phone of phones) {
        let guest: any[] = await getGuestByPhone(phone);
        if (guest.length !== 0) {
          if (guest[0].id === user.id) {
            mainGuest = guest[0];
          } else {
            validGuests.push(guest[0]);
          }
        } else {
          notValidGuests.push(
            Object.values(bookingRequests).find(
              (entry) => entry.phone === phone
            )
          );
        }
      }
      setValidGuests(validGuests);
      setNotValidGuests(notValidGuests);
      setMainGuest(mainGuest);
    }
  };
  const generateOrderId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const idLength = 7;
    let randomId = "";

    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
  };

  const sendSmsToUser = async (phone: string, message: string) => {
    try {
      await sendSms(phone, message);
    } catch (err) {
      console.log(err);
    }
  };

  const createEventBooking = async () => {
    const orderId = generateOrderId();
    setOrderId(orderId);
    const mainGuestPhone = mainGuest ? mainGuest.phone_number : null;
    const eventForMainGuest = Object.values(bookingRequests).find(
      (entry) => entry.phone === mainGuestPhone
    );
    if (eventForMainGuest) {
      const bookingRequest = await createBooking(
        user,
        BookingStatus.PENDING,
        user.id,
        mainGuest?.id,
        currentEvent.id,
        eventForMainGuest?.ticketId,
        true,
        eventForMainGuest?.waveName,
        orderId,
        isSpecial,
        user.phone_number
      );
      // console.log(bookingRequest);
      setTicketChosen("book");
    } else {
      setTicketChosen("tickets");
      setValidationWarning(true);
      setMessage("Please fill in Your name and phone number First");
      return;
    }
    validGuests.forEach(async (validGuest) => {
      const eventForValidGuest = Object.values(bookingRequests).find(
        (entry) => entry.phone === validGuest.phone_number
      );
      const bookingRequest = await createBooking(
        user,
        BookingStatus.PENDING,
        user.id,
        validGuest.id,
        currentEvent.id,
        eventForValidGuest?.ticketId,
        false,
        eventForValidGuest?.waveName,
        orderId,
        isSpecial,
        validGuest.phone_number
      );
      // console.log(bookingRequest);
    });
    notValidGuests.forEach(async (notValidGuest) => {
      const eventForNotValidGuest = Object.values(bookingRequests).find(
        (entry) => entry.phone === notValidGuest.phone
      );
      const bookingRequest = await createBooking(
        user,
        BookingStatus.NOT_REGISTERED,
        user.id,
        undefined,
        currentEvent.id,
        eventForNotValidGuest?.ticketId,
        false,
        eventForNotValidGuest?.waveName,
        orderId,
        isSpecial,
        notValidGuest?.phone
      );
      // console.log(bookingRequest);
      sendSmsToUser(
        notValidGuest.phone,
        `Hi ${notValidGuest.name} ${user.name} is inviting you to ULTER : http://localhost:3000/login/?id=${bookingRequest.id}`
      );
      setNotValidGuestsBooking((prevNotValidGuestsBooking) => [
        ...prevNotValidGuestsBooking,
        bookingRequest,
      ]);
    });
  };
  const isPhoneValid = (phoneNumber: string): boolean => {
    const phoneRegex = /^(010|011|012|015)\d{8}$/;
    return phoneRegex.test(phoneNumber);
  };
  const isFormValid = () => {
    const uniquePhones = new Set();
    for (const key in bookingRequests) {
      const { name, phone } = bookingRequests[key];
      if (!name || !phone || !isPhoneValid(phone)) {
        return false;
      }
      if (uniquePhones.has(phone)) {
        return false;
      }
      uniquePhones.add(phone);
    }
    for (const key in bookingRequests) {
      const { name, phone } = bookingRequests[key];
      console.log(name);
      console.log(phone);
      if (name || phone || isPhoneValid(phone)) {
        return true;
      }
    }
  };

  const isDateBetween = (startDate: any, endDate: any) => {
    const currentDate = new Date();
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    return currentDate >= startDateObj && currentDate <= endDateObj;
  };
  // console.log(notValidGuestsBooking);

  if (loading)
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <ContentLoader />
      </Box>
    );

  if (currentEventId === "")
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <NoEvent />
      </Box>
    );

  if (user.phone_number === "" || user.phone_number === "+20")
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <NoDataEvent />
      </Box>
    );

  return (
    <>
      <Box
        sx={{
          backgroundImage: {
            lg: 'url("../../Images/main-bg.png")',
            sm: 'url("../../Images/main-bg.png")',
            md: 'url("../../Images/main-bg.png")',
            xl: 'url("../../Images/main-bg.png")',
            // xs: 'url("../../Images/mobile-main-bg.png")',
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
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), linear-gradient(to right, rgba(0, 0, 0, 0.4)100%, rgba(0, 0, 0, 0.1))", // Adjust opacity as needed
          },
          zIndex: 0,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={validationWarning}
          autoHideDuration={5000}
          onClose={() => {
            setValidationWarning(false);
          }}
          sx={{
            mt: 5,
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
              right: "3rem",
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
          >
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
                      alt={currentEvent.name}
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
                    <Box
                      sx={{
                        display: { xs: "flex", sm: "none" },
                        alignItems: "start",
                        gap: 2,
                      }}
                    >
                      <ShareOutlinedIcon sx={{ color: "white" }} />
                      <TurnedInNotIcon sx={{ color: "white" }} />
                    </Box>
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
                          {new Date(currentEvent.startDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.67)",
                            fontSize: "15px",
                            display: { xs: "none", sm: "block" },
                          }}
                        >
                          {new Date(currentEvent.startDate).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                              hour: "numeric",
                              minute: "numeric",
                            }
                          )}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.67)",
                            fontSize: "15px",
                            display: { xs: "block", sm: "none" },
                          }}
                        >
                          {new Date(currentEvent.startDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              weekday: "long",
                              hour: "numeric",
                              minute: "numeric",
                            }
                          )}
                        </Typography>
                      </Box>
                    </Box>
                    <EventLocationOverlay currentEvent={currentEvent} />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "start",
                    gap: 2,
                  }}
                >
                  <ShareOutlinedIcon sx={{ color: "white" }} />
                  <TurnedInNotIcon sx={{ color: "white" }} />
                </Box>
              </Box>
            )}
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
            <Divider sx={{ backgroundColor: "white", my: 3 }} />
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
                display: { xs: "flex", sm: "none" },
                mx: 1,
                gap: 6,
                justifyContent:
                  ticketChosen === "noTickets" ? "center" : undefined,
              }}
            >
              {ticketChosen !== "noTickets" && (
                <IconButton
                  onClick={() => {
                    if (ticketChosen === "tickets") {
                      setTicketChosen("noTickets");
                    }
                    if (ticketChosen === "guests") {
                      setBookingRequests({});
                      setTicketChosen("tickets");
                    }
                    if (ticketChosen === "book") {
                      // setBookingRequests({});
                      setNotValidGuestsBooking([]);
                      setTicketChosen("guests");
                    }
                  }}
                >
                  <ArrowBackIosIcon
                    sx={{ color: "rgba(240, 99, 90, 1)", fontSize: "30px" }}
                  />
                </IconButton>
              )}
              <Typography
                sx={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                  width: "50%",
                  fontWeight: 700,
                }}
              >
                {ticketChosen === "noTickets" && `${currentEvent.name}`}
                {ticketChosen === "tickets" && "Add Accompanied Guests"}
                {ticketChosen === "guests" && "Review Guests"}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                p: { xs: 2, sm: 0 },
              }}
            >
              {ticketChosen !== "noTickets" && (
                <IconButton
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                  onClick={() => {
                    if (ticketChosen === "tickets") {
                      setTicketChosen("noTickets");
                    }
                    if (ticketChosen === "guests") {
                      setBookingRequests({});
                      setTicketChosen("tickets");
                    }
                    if (ticketChosen === "book") {
                      // setBookingRequests({});
                      setNotValidGuestsBooking([]);
                      setTicketChosen("guests");
                    }
                  }}
                >
                  <ArrowBackIosIcon
                    sx={{ color: "rgba(240, 99, 90, 1)", fontSize: "30px" }}
                  />
                </IconButton>
              )}
              {ticketChosen === "noTickets" && (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "repeat(1, 1fr)",
                      sm: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                    },
                    gap: 1,
                  }}
                >
                  {currentEventTicket.map((ticket) => (
                    <Box key={ticket.id}>
                      <Box
                        sx={{
                          width: "100%",
                          height: ".75rem",
                          backgroundColor: ticket?.color || "gold",
                        }}
                      />
                      <Box
                        sx={{
                          p: 3,
                          backgroundColor: "rgba(0, 0, 0, 1)",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "rgba(255, 255, 255, 0.68)",
                              fontSize: "12px",
                            }}
                          >
                            Ticket Benefit: {ticket.cashlessCredit}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            color: "white",
                            textTransform: "uppercase",
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        >
                          {ticket.type}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.68)",
                            fontWeight: "400",
                            fontSize: "15px",
                            my: 1,
                          }}
                        >
                          Description:
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.68)",
                            fontWeight: "400",
                            fontSize: "12px",
                          }}
                        >
                          {ticket.description}
                        </Typography>
                        {ticket.waves.map(
                          (wave, index) =>
                            isDateBetween(wave?.startDate, wave?.endDate) &&
                            wave.startDate &&
                            wave.endDate && (
                              <Box
                                key={`${wave.name}${index}`}
                                sx={{
                                  p: 2,
                                  pl: 5,
                                  mt: 2,
                                  border: "1px solid",
                                  borderColor:
                                    "rgba(195.43, 172.63, 172.63, 0.40)",
                                  borderRadius: "5px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  overflow: "hidden",
                                  position: "relative",
                                }}
                              >
                                {wave.quota === 0 && (
                                  <Box
                                    sx={{
                                      width: 100,
                                      height: 100,
                                      overflow: "hidden",
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        position: "absolute",
                                        zIndex: -1,
                                        content: '""',
                                        display: "block",
                                        border: "5px solid #d82e2e",
                                        top: 0,
                                        right: 0,
                                      }}
                                    />
                                    <Box
                                      sx={{
                                        position: "absolute",
                                        zIndex: -1,
                                        content: '""',
                                        display: "block",
                                        border: "5px solid #d82e2e",
                                        bottom: 0,
                                        left: 0,
                                      }}
                                    />
                                    <Typography
                                      sx={{
                                        position: "absolute",
                                        display: "block",
                                        width: 225,
                                        padding: "5px 0",
                                        backgroundColor: "#d82e2e",
                                        boxShadow:
                                          "0 5px 10px rgba(0, 0, 0, .1)",
                                        color: "#fff",
                                        fontWeight: 700,
                                        fontSize: 8,
                                        lineHeight: 1,
                                        fontFamily: "Lato, sans-serif",
                                        textShadow:
                                          "0 1px 1px rgba(0, 0, 0, .2)",
                                        textTransform: "uppercase",
                                        textAlign: "center",
                                        right: -25,
                                        top: 20,
                                        transform: "rotate(-45deg)",
                                        pl: 2.5,
                                      }}
                                    >
                                      Sold Out
                                    </Typography>
                                  </Box>
                                )}
                                <Typography
                                  sx={{
                                    color: "white",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {wave.name}
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: "white",
                                      textTransform: "capitalize",
                                    }}
                                  >
                                    EGP {wave.price}
                                  </Typography>
                                  {wave.quota > 0 && (
                                    <>
                                      <ManIcon sx={{ color: "white" }} />
                                      <RemoveCircleIcon
                                        sx={{
                                          color: "rgba(217, 217, 217, 0.53)",
                                        }}
                                        onClick={() =>
                                          handleDecrement(
                                            ticket.id,
                                            ticket.type,
                                            wave.name,
                                            wave.price
                                          )
                                        }
                                      />
                                      <Typography sx={{ color: "white" }}>
                                        {waveCounts[
                                          `${ticket.id}-${ticket.type}-${wave.name}-${wave.price}`
                                        ] || 0}
                                      </Typography>

                                      <AddCircleIcon
                                        sx={{
                                          color: "rgba(217, 217, 217, 0.53)",
                                        }}
                                        onClick={() =>
                                          handleIncrement(
                                            ticket.id,
                                            ticket.type,
                                            wave.name,
                                            wave.price
                                          )
                                        }
                                      />
                                    </>
                                  )}
                                </Box>
                              </Box>
                            )
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
              {ticketChosen === "tickets" && (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "repeat(1, 1fr)",
                      sm: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                    },
                    gap: 1,
                  }}
                >
                  {currentEventTicket.map((ticket) => {
                    const wavesForTicket = selectedWaves.filter(
                      (wave) => wave.ticketId === ticket.id
                    );
                    if (
                      wavesForTicket.length === 0 ||
                      wavesForTicket.every((wave) => wave.count === 0)
                    ) {
                      return null;
                    }
                    return (
                      <Box key={ticket.id}>
                        <Box
                          sx={{
                            width: "100%",
                            height: ".75rem",
                            backgroundColor: ticket?.color || "gold",
                          }}
                        />
                        <Box
                          sx={{
                            p: 3,
                            backgroundColor: "rgba(0, 0, 0, 1)",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "white",
                              mb: 2,
                              textTransform: "capitalize",
                              fontSize: "25px",
                              fontWeight: 700,
                            }}
                          >
                            {ticket.type}
                          </Typography>
                          {wavesForTicket.map((wave) => (
                            <Box key={wave.ticketId}>
                              <Typography
                                sx={{
                                  color: "white",
                                  mb: 2,
                                  textTransform: "capitalize",
                                  fontSize: "20px",
                                  fontWeight: 500,
                                }}
                              >
                                {wave.waveName}
                              </Typography>
                              {Array.from(
                                { length: wave.count },
                                (_, index) => (
                                  <Box
                                    key={`${wave.ticketId}-${wave.waveName}-${index}`}
                                    sx={{
                                      mb: 2,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                      }}
                                    >
                                      <TextField
                                        id={`${wave.ticketId}-${wave.waveName}-${index}-name`}
                                        placeholder={`Enter Friend's Name`}
                                        focused={false}
                                        autoComplete="false"
                                        onChange={(
                                          e: ChangeEvent<HTMLInputElement>
                                        ) =>
                                          handleInputChange(
                                            wave.ticketId,
                                            wave.waveName,
                                            ticket.type,
                                            ticket.color,
                                            index,
                                            "name",
                                            e.target.value
                                          )
                                        }
                                        sx={{
                                          minWidth: "18rem",
                                          backgroundColor:
                                            "rgba(51, 51, 51, 1)",
                                          "input::placeholder": {
                                            color: "white",
                                          },
                                          input: {
                                            color: "white",
                                          },
                                          border: "1px solid",
                                          borderColor: "gray",
                                          borderRadius: "10px",
                                          ".MuiInputBase-root": {
                                            borderRadius: "10px",
                                          },
                                        }}
                                      />
                                      <TextField
                                        id={`${wave.ticketId}-${wave.waveName}-${index}-phone`}
                                        placeholder={`Enter Friend's Phone`}
                                        focused={false}
                                        autoComplete="false"
                                        onChange={(
                                          e: ChangeEvent<HTMLInputElement>
                                        ) =>
                                          handleInputChange(
                                            wave.ticketId,
                                            wave.waveName,
                                            ticket.type,
                                            ticket.color,
                                            index,
                                            "phone",
                                            e.target.value
                                          )
                                        }
                                        sx={{
                                          minWidth: "18rem",
                                          backgroundColor:
                                            "rgba(51, 51, 51, 1)",
                                          "input::placeholder": {
                                            color: "white",
                                          },
                                          input: {
                                            color: "white",
                                          },
                                          border: "1px solid",
                                          borderColor: "gray",
                                          borderRadius: "10px",
                                          ".MuiInputBase-root": {
                                            borderRadius: "10px",
                                          },
                                        }}
                                      />
                                    </Box>
                                  </Box>
                                )
                              )}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              )}
              {ticketChosen === "guests" && (
                <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "25px",
                      fontWeight: 700,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    Review Guests
                  </Typography>
                  {!bookedGuests ? (
                    <Box
                      sx={{
                        backgroundColor: "black",
                        p: { xs: 0, sm: 3 },
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      {mainGuest && (
                        <Box
                          key={mainGuest.id}
                          sx={{
                            backgroundColor: "rgba(51, 51, 51, 1)",
                            display: "flex",
                            alignItems: "center",
                            p: 1,
                            borderRadius: "10px",
                            gap: 3,
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
                            <Avatar
                              alt=""
                              src={`${dbStorage}${mainGuest.guest_avatar}`}
                              sx={{ width: 56, height: 56 }}
                            />
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "white",
                                  textTransform: "capitalize",
                                }}
                              >
                                {mainGuest.name}
                              </Typography>
                              <Typography
                                sx={{
                                  color: "white",
                                  textTransform: "capitalize",
                                }}
                              >
                                {mainGuest.phone_number}
                              </Typography>
                            </Box>
                          </Box>
                          {currentEventTicket.map((ticket) => {
                            const wavesForTicket = Object.values(
                              bookingRequests
                            ).filter(
                              (wave) =>
                                wave.ticketId === ticket.id &&
                                wave.phone === mainGuest.phone_number
                            );
                            return wavesForTicket.map((wave) => (
                              <Box key={wave.customKey}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    gap: 1,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      backgroundColor:
                                        wave.ticketColor || "gold",
                                      borderRadius: "10px",
                                      color: "black",
                                      // py: 0.25,
                                      px: 1,
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      textTransform: "uppercase",
                                      fontWeight: 700,
                                      fontSize: 13,
                                    }}
                                  >
                                    {wave.ticketType}
                                  </Box>
                                  <Box
                                    sx={{
                                      backgroundColor:
                                        wave.ticketColor || "gold",
                                      borderRadius: "10px",
                                      color: "black",
                                      // py: 0.25,
                                      px: 1,
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      textTransform: "uppercase",
                                      fontWeight: 700,
                                      fontSize: 13,
                                    }}
                                  >
                                    {wave.waveName}
                                  </Box>
                                </Box>
                                <Box
                                  sx={{
                                    borderRadius: "10px",
                                    color: "rgba(164, 164, 164, 1)",
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "center",
                                    fontSize: "12px",
                                    mt: 1,
                                  }}
                                >
                                  {new Date(
                                    currentEvent.startDate
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </Box>
                              </Box>
                            ));
                          })}
                        </Box>
                      )}
                      {validGuests.length > 0 &&
                        validGuests.map((guest: Guest) => (
                          <Box
                            key={guest.id}
                            sx={{
                              backgroundColor: "rgba(51, 51, 51, 1)",
                              display: "flex",
                              alignItems: "center",
                              p: 1,
                              borderRadius: "10px",
                              gap: 3,
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
                              <Avatar
                                alt=""
                                src={`${dbStorage}${guest.guest_avatar}`}
                                sx={{ width: 56, height: 56 }}
                              />
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: "white",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {guest.name}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: "white",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {guest.phone_number}
                                </Typography>
                              </Box>
                            </Box>
                            {currentEventTicket.map((ticket) => {
                              const wavesForTicket = Object.values(
                                bookingRequests
                              ).filter(
                                (wave) =>
                                  wave.ticketId === ticket.id &&
                                  wave.phone === guest.phone_number
                              );
                              return wavesForTicket.map((wave) => (
                                <Box key={wave.customKey}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "end",
                                      gap: 1,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        backgroundColor:
                                          wave.ticketColor || "gold",
                                        borderRadius: "10px",
                                        color: "black",
                                        // py: 0.25,
                                        px: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textTransform: "uppercase",
                                        fontWeight: 700,
                                        fontSize: 13,
                                      }}
                                    >
                                      {wave.ticketType}
                                    </Box>
                                    <Box
                                      sx={{
                                        backgroundColor:
                                          wave.ticketColor || "gold",
                                        borderRadius: "10px",
                                        color: "black",
                                        // py: 0.25,
                                        px: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textTransform: "uppercase",
                                        fontWeight: 700,
                                        fontSize: 13,
                                      }}
                                    >
                                      {wave.waveName}
                                    </Box>
                                  </Box>
                                  <Box
                                    sx={{
                                      borderRadius: "10px",
                                      color: "rgba(164, 164, 164, 1)",
                                      display: "flex",
                                      justifyContent: "end",
                                      alignItems: "center",
                                      fontSize: "12px",
                                      mt: 1,
                                    }}
                                  >
                                    {new Date(
                                      currentEvent.startDate
                                    ).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })}
                                  </Box>
                                </Box>
                              ));
                            })}
                          </Box>
                        ))}
                      {notValidGuests.length > 0 &&
                        notValidGuests.map((notValidGuest) => (
                          <Box
                            key={notValidGuest.customKey}
                            sx={{
                              backgroundColor: "rgba(51, 51, 51, 1)",
                              display: "flex",
                              alignItems: "center",
                              p: 1,
                              borderRadius: "10px",
                              gap: 3,
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
                              <Avatar
                                alt=""
                                src={``}
                                sx={{ width: 56, height: 56 }}
                              />
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: "white",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {notValidGuest.name}
                                </Typography>
                                <Typography
                                  sx={{
                                    color: "white",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {notValidGuest.phone}
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "end",
                                p: 1,
                                gap: 0.5,
                              }}
                            >
                              {/* <Button
                                variant="contained"
                                sx={{ backgroundColor: "rgba(240, 99, 90, 1)" }}
                                onClick={() => {
                                  notValidGuestsBooking.forEach((booking) => {
                                    if (
                                      booking.phone_number ===
                                      notValidGuest.phone
                                    ) {
                                      sendSmsToUser(
                                        notValidGuest.phone,
                                        `test/?id=${booking.id}`
                                      );
                                    }
                                  });
                                }}
                              >
                                Invite To Ultar !
                              </Button> */}
                              <Typography
                                sx={{
                                  color: "rgba(164, 164, 164, 1)",
                                  fontSize: "12px",
                                }}
                              >
                                Message will be sent to you friend to join ULTER
                                First
                              </Typography>
                            </Box>
                            {/* <Box>
                          <Typography sx={{ color: "white" }}>
                            {notValidGuest.name}
                          </Typography>
                          <Typography sx={{ color: "white" }}>
                            {notValidGuest.phone}
                          </Typography>
                          </Box> */}
                          </Box>
                        ))}
                    </Box>
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      width={450}
                      height={300}
                      sx={{ bgcolor: "gray" }}
                    />
                  )}
                </Box>
              )}
              {ticketChosen === "book" && (
                <Box sx={{ position: "relative", marginTop: "50px" }}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(73, 73, 73, 1)",
                      width: { xs: "21.5rem", sm: "25rem" },
                      height: "50vh",
                      position: "relative",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      mb: 3,
                      p: 5,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                      }}
                    >
                      Booking is Pending Review
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#F0635A",
                      }}
                    >
                      Order ID: {orderId}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#AFAEB1",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      Will let you know when you need to pay for your ticket(s)
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-4rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "8rem",
                      height: "8rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(210, 197, 197, 1)",
                      border: "3px solid white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PendingActionsIcon
                      sx={{
                        color: "#F0635A",
                        fontSize: "4rem",
                      }}
                    />
                  </Box>
                </Box>
              )}
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
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                my: 3,
              }}
            >
              {ticketChosen !== "noTickets" && (
                <FormControlLabel
                  value={isSpecial}
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                      checked={isSpecial}
                      onChange={() => setIsSpecial(!isSpecial)}
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "white",
                        },
                      }}
                    />
                  }
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <AccessibleIcon
                        sx={{ color: "rgba(240, 99, 90, 1)", fontSize: "30px" }}
                      />
                      Request assistance for special needs
                    </Box>
                  }
                  labelPlacement="start"
                  sx={{
                    ...checkBoxStyles,
                  }}
                />
              )}
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.68)",
                }}
              >
                Total {totalTickets} Tickets
              </Typography>
              <LoadingButton
                variant="outlined"
                loading={ticketChosen === "guests" && bookedGuests}
                loadingPosition="start"
                sx={{
                  color: "white",
                  backgroundColor: "rgba(240, 99, 90, 1)",
                  px: 10,
                  py: 1,
                }}
                onClick={() => {
                  const tickets = selectedWaves.some((wave) => wave.count > 0);
                  if (tickets) {
                    // console.log("Selected Waves:", selectedWaves);
                    setTicketChosen("tickets");
                  } else {
                    setValidationWarning(true);
                    setMessage(
                      "Please select at least one ticket before booking."
                    );
                    console.log(
                      "Please select at least one ticket before booking."
                    );
                  }
                  if (ticketChosen === "tickets") {
                    // console.log("aaaaa");
                    if (isFormValid()) {
                      fetchEventGuests();
                      setTicketChosen("guests");
                    } else {
                      setValidationWarning(true);
                      setMessage(
                        "Please fill in all names and provide valid phone numbers."
                      );
                      console.log(
                        "Please fill in all names and provide valid phone numbers."
                      );
                    }
                  }
                  if (ticketChosen === "guests") {
                    // console.log("bbbbbb");
                    createEventBooking();
                  }
                  if (ticketChosen === "book") {
                    // console.log("cccccc");
                    setNotValidGuestsBooking([]);
                    setTicketChosen("noTickets");
                  }
                }}
              >
                {ticketChosen === "book" ? "Go Home" : "Book Now"}
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
