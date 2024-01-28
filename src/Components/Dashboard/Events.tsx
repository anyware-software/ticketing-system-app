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
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
import { useSelector } from "react-redux";
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
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const [isGoogleMapOverlayOpen, setIsGoogleMapOverlayOpen] = useState(false);
  const [ticketChosen, setTicketChosen] = useState("noTickets");
  const user = useSelector((state: any) => state.app.user);
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

  // const [mapCenter, setMapCenter] = useState<any>({
  //   lat: currentEvent.location.coordinates.lat,
  //   lng: currentEvent.location.coordinates.lng,
  // });
  const [marker, setMarker] = useState<any>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAf2_iJNX-BrrTVjg288Vhr7miH_aotx8E",
    libraries: GOOGLE_MAPS_LIBRARIES,
  });

  // let mapCenter = {
  //   lat: currentEvent.location.coordinates.lat,
  //   lng: currentEvent.location.coordinates.lng,
  // };
  // const mapCenter = useMemo(() => {
  //   return {
  //     lat: (currentEvent.location.coordinates.lat),
  //     lng: (currentEvent.location.coordinates.lng),
  //   };
  // }, [currentEvent.location.coordinates.lat, currentEvent.location.coordinates.lng]);

  const [mapCenter, setMapCenter] = useState<any>({
    lat: currentEvent?.location?.coordinates?.lat,
    lng: currentEvent?.location?.coordinates?.lng,
  });

  const containerStyle = {
    width: "80rem",
    height: "75vh",
  };
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (currentEvent) {
      setMapCenter({
        lat: currentEvent?.location?.coordinates?.lat || 0,
        lng: currentEvent?.location?.coordinates?.lng || 0,
      });
    }
    if (mapCenter.lat > 0) {
      setZoom(18);
    }
  }, [currentEvent]);

  const onLoad = React.useCallback(
    function callback(map: any) {
      // if (mapCenter.lat !== 0 && mapCenter.lng !== 0) {
      //   map.panTo(mapCenter);
      // }
      map.panTo(mapCenter);
    },
    [mapCenter]
  );

  const handleOnClick = async (e: any) => {
    setMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAf2_iJNX-BrrTVjg288Vhr7miH_aotx8E`
      );
    } catch (error) {
      console.error("Error during reverse geocoding request:", error);
    }
  };
  let checkBoxStyles = {
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 1)",
    marginLeft: "0",
    border: "1px solid #ffffff50",
    padding: "5px 10px",
    borderRadius: "12px",
    width: "23rem",
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
      } else {
        console.log("Error: currentEventId is not set");
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

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const handleImageClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };
  const toggleGoogleMapOverlay = () => {
    setIsGoogleMapOverlayOpen(!isGoogleMapOverlayOpen);
  };
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    // Check if the click occurred outside the map overlay
    if (e.target === e.currentTarget) {
      toggleGoogleMapOverlay();
    }
  };
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
  const [mainGuest, setMainGuest] = useState<Guest | null>(null);

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
            // validGuests.push(guest[0]);
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
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 7;
    let randomId = '';
  
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  };

  const createEventBooking = async () => {
    const orderId = generateOrderId();
    const mainGuestPhone = mainGuest ? mainGuest.phone_number : null;
    const eventForMainGuest = Object.values(bookingRequests).find(
      (entry) => entry.phone === mainGuestPhone
    );
    await createBooking(
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
    );

    validGuests.forEach(async (validGuest) => {
      const eventForValidGuest = Object.values(bookingRequests).find(
        (entry) => entry.phone === validGuest.phone_number
      );
        await createBooking(
        user,
        BookingStatus.PENDING,
        user.id,
        validGuest.id,
        currentEvent.id,
        eventForValidGuest?.ticketId,
        false,
        eventForValidGuest?.waveName,
        orderId,
        isSpecial
      );
    });
    notValidGuests.forEach(async (notValidGuest) => {
      const eventForNotValidGuest = Object.values(bookingRequests).find(
        (entry) => entry.phone === notValidGuest.phone_number
      );
        await createBooking(
        user,
        BookingStatus.NOT_REGISTERED,
        user.id,
        undefined,
        currentEvent.id,
        eventForNotValidGuest?.ticketId,
        true,
        eventForNotValidGuest?.waveName,
        orderId,
        isSpecial
      );
    });
  };

  // console.log(bookingRequests);

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

  return (
    <>
      <Box
        sx={{
          backgroundImage: {
            lg: 'url("../../Images/main-bg.png")',
            sm: 'url("../../Images/main-bg.png")',
            md: 'url("../../Images/main-bg.png")',
            xl: 'url("../../Images/main-bg.png")',
            xs: 'url("../../Images/mobile-main-bg.png")',
          },
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
        <Grid
          container
          spacing={2}
          sx={{
            px: 12,
            mt: 12,
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
                  gap: 7,
                }}
              >
                <Box>
                  <img
                    src={
                      currentEvent.image
                        ? `${dbStorage}${currentEvent.image}`
                        : "../../../Images/event.png"
                    }
                    alt={currentEvent.name}
                    style={{
                      width: "15rem",
                      height: "15rem",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      transition: "opacity 0.5s ease, transform 1s ease",
                      opacity: isTransitioning ? 0.5 : 1,
                    }}
                  >
                    {currentEvent?.gallery
                      ?.slice(selectedImageIndex, selectedImageIndex + 4)
                      .map((image, index) => (
                        <img
                          key={index}
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
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    {currentEvent.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.67)",
                      fontSize: "12px",
                    }}
                  >
                    {currentEvent.description}
                  </Typography>
                  <Box>
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
                      <Box>
                        {isOverlayOpen && (
                          <Box
                            sx={{
                              position: "fixed",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              backgroundColor: "rgba(0, 0, 0, 0.8)",
                              zIndex: 2,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            onClick={toggleOverlay}
                          >
                            <Box
                              component="img"
                              src={`${dbStorage}${currentEvent.map}`}
                              alt="Event Map"
                              sx={{
                                maxWidth: "90%",
                                maxHeight: "90%",
                                borderRadius: "10px",
                              }}
                              onClick={handleImageClick}
                            />
                          </Box>
                        )}
                        <Button
                          variant="text"
                          startIcon={<LocationOnIcon />}
                          onClick={toggleOverlay}
                          sx={{
                            color: "rgba(173, 173, 173, 1)",
                          }}
                        >
                          View Event Map
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 10,
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
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <LocationOnIcon sx={{ color: "white" }} />
                      {isGoogleMapOverlayOpen && (
                        <Box
                          sx={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            zIndex: 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={handleOverlayClick}
                        >
                          <Box>
                            {isLoaded && (
                              <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={mapCenter}
                                zoom={zoom}
                                onLoad={onLoad}
                                onClick={(e) => {
                                  handleOnClick(e);
                                }}
                              >
                                {marker && (
                                  <Marker
                                    position={{
                                      lat: mapCenter?.lat,
                                      lng: mapCenter?.lng,
                                    }}
                                  />
                                )}
                                {/* <Marker position={{ lat: mapCenter.lat, lng: mapCenter.lng }} /> */}
                              </GoogleMap>
                            )}
                          </Box>
                        </Box>
                      )}
                      <Box
                        onClick={toggleGoogleMapOverlay}
                        sx={{ cursor: "pointer" }}
                      >
                        {currentEvent?.location?.address && (
                          <Typography
                            sx={{
                              color: "rgba(255, 255, 255, 0.67)",
                              fontSize: "15px",
                            }}
                          >
                            {currentEvent?.location?.address.split(",")[1]}
                          </Typography>
                        )}

                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.67)",
                            fontSize: "15px",
                          }}
                        >
                          {currentEvent?.location?.address}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* Navigation arrows */}
                {/* <IconButton onClick={handlePrevImage} sx={{ color: "white" }}>
                    <ArrowBackIosNewIcon />
                  </IconButton>
                  <IconButton onClick={handleNextImage} sx={{ color: "white" }}>
                    <ArrowForwardIosIcon />
                  </IconButton> */}
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
            lg={8}
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
              }}
            >
              {ticketChosen && (
                <IconButton onClick={() => setTicketChosen("noTickets")}>
                  <ArrowBackIosIcon
                    sx={{ color: "rgba(240, 99, 90, 1)", fontSize: "30px" }}
                  />
                </IconButton>
              )}
              {ticketChosen === "noTickets" && (
                <Box sx={{ display: "flex", gap: 1 }}>
                  {currentEventTicket.map((ticket) => (
                    <Box key={ticket.id} sx={{ flex: 1, mx: 1 }}>
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
                        {ticket.waves.map((wave, index) => (
                          <Box
                            key={index}
                            sx={{
                              p: 2,
                              pl: 5,
                              mt: 2,
                              border: "1px solid",
                              borderColor: "rgba(195.43, 172.63, 172.63, 0.40)",
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
                                    boxShadow: "0 5px 10px rgba(0, 0, 0, .1)",
                                    color: "#fff",
                                    fontWeight: 700,
                                    fontSize: 8,
                                    lineHeight: 1,
                                    fontFamily: "Lato, sans-serif",
                                    textShadow: "0 1px 1px rgba(0, 0, 0, .2)",
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
                                    sx={{ color: "rgba(217, 217, 217, 0.53)" }}
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
                                    sx={{ color: "rgba(217, 217, 217, 0.53)" }}
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
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
              {ticketChosen === "tickets" && (
                <Box sx={{ display: "flex", gap: 1 }}>
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
                      <Box key={ticket.id} sx={{ flex: 1, mx: 1 }}>
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
                                        placeholder={`Enter ${wave.waveName}'s Name`}
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
                                          minWidth: "25rem",
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
                                          width: { xs: "auto", sm: "18rem" },
                                          borderRadius: "10px",
                                          ".MuiInputBase-root": {
                                            borderRadius: "10px",
                                          },
                                        }}
                                      />
                                      <TextField
                                        id={`${wave.ticketId}-${wave.waveName}-${index}-phone`}
                                        placeholder={`Enter ${wave.waveName}'s Phone`}
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
                                          minWidth: "25rem",
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
                                          width: { xs: "auto", sm: "18rem" },
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
                    sx={{ color: "white", fontSize: "25px", fontWeight: 700 }}
                  >
                    Review Guests
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "black",
                      p: 3,
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
                            gap: 15,
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
                            gap: 15,
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
                            gap: 15,
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
                            <Button
                              variant="contained"
                              sx={{ backgroundColor: "rgba(240, 99, 90, 1)" }}
                            >
                              Invite To Ultar !
                            </Button>
                            <Typography
                              sx={{
                                color: "rgba(164, 164, 164, 1)",
                                fontSize: "12px",
                              }}
                            >
                              You Need to Invite Your Friend to ULTER First
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
                </Box>
              )}
              {ticketChosen === "book" && (
                <Typography sx={{ color: "white" }} variant="h4">
                  Booking In Progress
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                gap: 2,
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
              <Button
                variant="contained"
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
                    console.log(
                      "Please select at least one ticket before booking."
                    );
                  }
                  if (ticketChosen === "tickets") {
                    // console.log("aaaaa");
                    fetchEventGuests();
                    setTicketChosen("guests");
                  }
                  if (ticketChosen === "guests") {
                    // console.log("bbbbbb");
                    createEventBooking();
                    setTicketChosen("book");
                  }
                  if (ticketChosen === "book") {
                    console.log("cccccc");
                    setTicketChosen("noTickets");
                  }
                }}
              >
                {ticketChosen === "book" ? "Go Home" : "Book Now"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
