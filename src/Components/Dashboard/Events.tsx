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
import type { Event } from "../../API";
import listBookingByGuest from "../../services/listBookingByGuest";
import sendEmail from "../../services/sendEmail";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import getGuestDataByPhone from "../../services/getGuestDataByPhone";
import listWavesConsumptions from "../../services/listWavesConsumptions";

// interface Event {
//   id: string;
//   name: string;
//   image: string;
//   gallery: string[];
//   description: string;
//   map: string;
//   startDate: string;
//   location: {
//     address: string;
//     coordinates: {
//       lat: number;
//       lng: number;
//     };
//   };
// }
interface EventTickets {
  id: string;
  type: string;
  description: string;
  cashlessCredit: number;
  color: string;
  price: number;
  startDate: string;
  waves: {
    id: string;
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
  email: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [consumedWaves, setConsumedWaves] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
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
  const [currentEvent, setCurrentEvent] = useState<Event>();
  const [currentEventTicket, setCurrentEventTicket] = useState<EventTickets[]>(
    []
  );
  const navigate = useNavigate();
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
    const fetchWavesConsumptions = async () => {
      try {
        const waveIds = currentEventTicket.flatMap((ticket) =>
          ticket.waves.map((wave) => wave.id)
        );
        const consumedWaves = [];
        for (const waveId of waveIds) {
          const result = await listWavesConsumptions({ waveId });
          consumedWaves.push(result.items[0]);
        }
        const filteredConsumedWaves = consumedWaves
          .filter((wave) => wave !== undefined)
          .map((wave) => wave.waveId);
        // console.log("Results:", filteredConsumedWaves);
        setConsumedWaves(filteredConsumedWaves);
      } catch (error) {
        console.error("Error fetching waves consumptions:", error);
      }
    };
    fetchWavesConsumptions();
  }, [currentEventTicket]);

  useEffect(() => {
    const getCurrentEvent = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    getCurrentEvent();
  }, [currentEventId]);

  useEffect(() => {
    getListEvents();
  }, []);

  // useEffect(() => {
  //   if (currentEvent?.id === "") {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [currentEvent?.id]);

  const handlePrevImage = () => {
    setIsTransitioning(true);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0
        ? currentEvent?.gallery?.length
          ? currentEvent.gallery.length - 4
          : 0
        : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextImage = () => {
    setIsTransitioning(true);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === (currentEvent?.gallery?.length ?? 0) - 4 ? 0 : prevIndex + 1
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
    wavePrice: number,
    waveId: string
  ) => {
    if (!user) {
      sessionStorage.setItem("nav", "book");
      navigate("/dashboard/");
    }
    const countKey = `${ticketId}-${ticketType}-${waveName}-${wavePrice}-${waveId}`;
    setWaveCounts((prevCounts) => ({
      ...prevCounts,
      [countKey]: (prevCounts[countKey] || 0) + 1,
    }));
  };

  const handleDecrement = (
    ticketId: string,
    ticketType: string,
    waveName: string,
    wavePrice: number,
    waveId: string
  ) => {
    if (!user) {
      sessionStorage.setItem("nav", "book");
      navigate("/dashboard/");
    }
    const countKey = `${ticketId}-${ticketType}-${waveName}-${wavePrice}-${waveId}`;
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
      const ticketId = parts.slice(0, -8).join("-");
      const ticketName = parts[parts.length - 8];
      const waveName = parts[parts.length - 7];
      const wavePrice = parts[parts.length - 6];
      const waveId = parts.slice(8, 13).join("-");
      return {
        ticketId,
        ticketName,
        waveName,
        wavePrice,
        waveId,
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
      waveId: string;
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
    value: string,
    waveId: string
  ) => {
    const key = `${ticketId}-${waveName}-${waveId}-${index}`;
    const parts = key.split("-");
    const extractedTicketId = parts.slice(0, -7).join("-");
    const extractedWaveName = parts[parts.length - 7];
    const extractedWaveId = parts.slice(6, 11).join("-");

    setBookingRequests((prevFormData) => ({
      ...prevFormData,
      [key]: {
        ...prevFormData[key],
        customKey: key,
        ticketId: extractedTicketId,
        waveName: extractedWaveName,
        waveId: extractedWaveId,
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
        let guest: any[] = await getGuestDataByPhone(phone);
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
    const uniqueCharacters = new Set();
    while (randomId.length < idLength) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const char = characters.charAt(randomIndex);
      if (!uniqueCharacters.has(char)) {
        randomId += char;
        uniqueCharacters.add(char);
      }
    }
    return randomId;
  };

  const generateTicketNumber = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const idLength = 7;
    let randomId = "";
    const uniqueCharacters = new Set();
    while (randomId.length < idLength) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const char = characters.charAt(randomIndex);
      if (!uniqueCharacters.has(char)) {
        randomId += char;
        uniqueCharacters.add(char);
      }
    }
    return randomId;
  };

  const sendSmsToUser = async (phone: string, message: string) => {
    try {
      // await sendSms(phone, message);
    } catch (err) {
      console.log(err);
    }
  };

  const createEventBooking = async () => {
    setBookingLoading(true);
    const orderId = generateOrderId();
    setOrderId(orderId);
    const mainGuestPhone = mainGuest ? mainGuest.phone_number : null;
    const eventForMainGuest = Object.values(bookingRequests).find(
      (entry) => entry.phone === mainGuestPhone
    );
    if (eventForMainGuest) {
      const verifyAllBookings = await listBookingByGuest({
        bookingEventId: currentEvent?.id,
        guestId: user.id,
      });
      if (verifyAllBookings.items.length === 0) {
        const bookingRequest = await createBooking(
          user,
          BookingStatus.PENDING,
          user.id,
          mainGuest?.id,
          currentEvent?.id,
          eventForMainGuest?.ticketId,
          true,
          eventForMainGuest?.waveName,
          orderId,
          isSpecial,
          user.phone_number,
          { number: generateTicketNumber(), redeemed: false },
          user.name,
          eventForMainGuest?.waveId,
          BookingStatus.PENDING
        );
        // console.log(bookingRequest);
        await sendEmail({
          customerEmail: user.email,
          templateName: "UlterBookingReserved",
          guestName: user.name,
          eventName: currentEvent?.name,
        });
        setTicketChosen("book");
      } else {
        setValidationWarning(true);
        setMessage("You have a Booking already");
      }
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
      const verifyAllBookings = await listBookingByGuest({
        bookingEventId: currentEvent?.id,
        guestId: validGuest.id,
      });
      if (verifyAllBookings.items.length === 0) {
        const bookingRequest = await createBooking(
          user,
          BookingStatus.PENDING,
          user.id,
          validGuest.id,
          currentEvent?.id,
          eventForValidGuest?.ticketId,
          false,
          eventForValidGuest?.waveName,
          orderId,
          isSpecial,
          validGuest.phone_number,
          { number: generateTicketNumber(), redeemed: false },
          user.name,
          eventForValidGuest?.waveId,
          BookingStatus.PENDING
        );
        // console.log(bookingRequest);
        await sendEmail({
          customerEmail: validGuest.email,
          templateName: "UlterBookingReserved",
          guestName: validGuest.name,
          eventName: currentEvent?.name,
        });
      } else {
        setValidationWarning(true);
        setMessage("One or more of your Friends have a Booking already");
      }
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
        currentEvent?.id,
        eventForNotValidGuest?.ticketId,
        false,
        eventForNotValidGuest?.waveName,
        orderId,
        isSpecial,
        notValidGuest?.phone,
        { number: generateTicketNumber(), redeemed: false },
        notValidGuest?.name,
        eventForNotValidGuest?.waveId,
        BookingStatus.PENDING
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
    setBookingLoading(true);
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
  // console.log(selectedWaves);

  // if (loading)
  //   return (
  //     <Box
  //       sx={{
  //         width: "100%",
  //       }}
  //     >
  //       <ContentLoader />
  //     </Box>
  //   );
  const handleShareLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setValidationWarning(true);
        setMessage("Event Link Copied in your clipboard");
      })
      .catch((error) => {
        console.error("Error copying URL to clipboard: ", error);
      });
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

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

  // if (currentEventId === "")
  //   return (
  //     <Box
  //       sx={{
  //         width: "100%",
  //       }}
  //     >
  //       <ContentLoader />
  //     </Box>
  //   );

  // if (!loading && currentEventId === "")
  //   return (
  //     <Box
  //       sx={{
  //         width: "100%",
  //       }}
  //     >
  //       <NoEvent />
  //     </Box>
  //   );

  if (!loading && currentEventId === "") {
    setTimeout(() => {
      if (!loading && currentEventId === "") {
        return (
          <Box
            sx={{
              width: "100%",
            }}
          >
            <NoEvent />
          </Box>
        );
      }
    }, 10000);
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <ContentLoader />
      </Box>
    );
  }

  if (user?.phone_number === "" || user?.phone_number === "+20")
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
              top: "8rem",
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
            // px: { xs: 0, sm: 10, md: 10, lg: 12 },
            // mt: { xs: 0, sm: 12, md: 12, lg: 12 },
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
              px: { xs: 0, sm: 10, md: 10, lg: 12 },
              mt: { xs: 0, sm: 12, md: 12, lg: 12 },
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
                    <Box
                      sx={{
                        display: { xs: "flex", sm: "none" },
                        alignItems: "start",
                        gap: 2,
                      }}
                    >
                      <ShareOutlinedIcon
                        sx={{ color: "white" }}
                        onClick={handleShareLink}
                      />
                      <TurnedInNotIcon
                        sx={{ color: "white" }}
                        onClick={handleShareLink}
                      />
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
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                      },
                      gap: { xs: 2, sm: 2, md: 2, lg: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        width: "50%",
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

                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "start",
                    gap: 2,
                  }}
                >
                  <ShareOutlinedIcon
                    sx={{ color: "white" }}
                    onClick={handleShareLink}
                  />
                  <TurnedInNotIcon
                    sx={{ color: "white" }}
                    onClick={handleShareLink}
                  />
                </Box>
              </Box>
            )}
          </Grid>

          {/* <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            sx={{
              position: "relative",
            }}
          >
            <Divider sx={{ backgroundColor: "white", my: 3 }} />
          </Grid> */}

          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            sx={{
              px: { xs: 0, sm: 10, md: 10, lg: 12 },
              my: { xs: 0, sm: 5, md: 5, lg: 5 },
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
                      // setBookingRequests({});
                      setMainGuest(null);
                      setValidGuests([]);
                      setNotValidGuests([]);
                      setTicketChosen("tickets");
                    }
                    if (ticketChosen === "book") {
                      setNotValidGuestsBooking([]);
                      setTicketChosen("noTickets");
                    }
                  }}
                >
                  <ArrowBackIosIcon sx={{ color: "red", fontSize: "30px" }} />
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
                {ticketChosen === "noTickets" && `${currentEvent?.name}`}
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
                      // setBookingRequests({});
                      setMainGuest(null);
                      setValidGuests([]);
                      setNotValidGuests([]);
                      setTicketChosen("tickets");
                    }
                    if (ticketChosen === "book") {
                      setNotValidGuestsBooking([]);
                      setTicketChosen("noTickets");
                    }
                  }}
                >
                  <ArrowBackIosIcon sx={{ color: "red", fontSize: "30px" }} />
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
                                {consumedWaves.includes(wave.id) && (
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
                                  {!consumedWaves.includes(wave.id) && (
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
                                            wave.price,
                                            wave.id
                                          )
                                        }
                                      />
                                      <Typography sx={{ color: "white" }}>
                                        {waveCounts[
                                          `${ticket.id}-${ticket.type}-${wave.name}-${wave.price}-${wave.id}`
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
                                            wave.price,
                                            wave.id
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
                    width: "100%",
                  }}
                >
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
                                          value={bookingRequests[`${wave.ticketId}-${wave.waveName}-${wave.waveId}-${index}`]?.name || ''}
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
                                              e.target.value,
                                              wave.waveId
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
                                          value={bookingRequests[`${wave.ticketId}-${wave.waveName}-${wave.waveId}-${index}`]?.phone || ''}
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
                                              e.target.value,
                                              wave.waveId
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
                </Box>
              )}
              {ticketChosen === "guests" && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
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
                        backgroundColor: "transparent",
                        p: { xs: 0, sm: 3 },
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "center",
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
                            minWidth: { xs: "15rem", sm: "25rem" },
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
                                  {currentEvent?.startDate
                                    ? new Date(
                                        currentEvent.startDate
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })
                                    : "N/A"}
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
                              minWidth: { xs: "15rem", sm: "25rem" },
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
                                    {currentEvent?.startDate
                                      ? new Date(
                                          currentEvent.startDate
                                        ).toLocaleDateString("en-US", {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric",
                                        })
                                      : "No start date available"}
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
                              minWidth: { xs: "15rem", sm: "25rem" },
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
                                sx={{ backgroundColor: "red" }}
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
                                Message sent to you <br></br>friend to join
                                ULTER First
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Skeleton
                        variant="rectangular"
                        width={450}
                        height={300}
                        sx={{ bgcolor: "gray" }}
                      />
                    </Box>
                  )}
                </Box>
              )}
              {ticketChosen === "book" && (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
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
                          color: "red",
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
                        Will let you know when you need to pay for your
                        ticket(s)
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
                          color: "red",
                          fontSize: "4rem",
                        }}
                      />
                    </Box>
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
              px: { xs: 0, sm: 10, md: 10, lg: 12 },
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
                      <AccessibleIcon sx={{ color: "red", fontSize: "30px" }} />
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
                loading={
                  (ticketChosen === "guests" && bookedGuests) || bookingLoading
                }
                loadingPosition="start"
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  px: 10,
                  py: 1,
                }}
                onClick={() => {
                  const tickets = selectedWaves.some((wave) => wave.count > 0);
                  if (tickets && ticketChosen === "noTickets") {
                    setTicketChosen("tickets");
                  } else if (!tickets) {
                    setValidationWarning(true);
                    setMessage(
                      "Please select at least one ticket before booking."
                    );
                  }
                  if (ticketChosen === "tickets") {
                    if (isFormValid()) {
                      fetchEventGuests();
                      setTicketChosen("guests");
                    } else {
                      setValidationWarning(true);
                      setMessage(
                        "Please fill in all names and provide valid phone numbers."
                      );
                    }
                  }
                  if (ticketChosen === "guests") {
                    createEventBooking();
                  }
                  if (ticketChosen === "book") {
                    setNotValidGuestsBooking([]);
                    setTicketChosen("noTickets");
                  }
                }}
              >
                {ticketChosen === "book" ? "Go Home" : "Book Now"}
              </LoadingButton>
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
      </Box>
    </>
  );
}
