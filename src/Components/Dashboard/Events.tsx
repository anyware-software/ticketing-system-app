import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import listEvents from "../../services/listEvents";
import { dbStorage } from "../../constants/Enums";
import ContentLoader from "../ContentLoader/ContentLoder";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import getEvent from "../../services/getEvent";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { current } from "@reduxjs/toolkit";
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

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentEventId, setCurrentEventsId] = useState("");
  const [startingFrom, setStartingFrom] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
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
    if (!events) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [events]);

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

  console.log(currentEventTicket);

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

    if (currentEvent.id === "")
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <ContentLoader />
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
              zIndex: 1,
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
                            />
                          </Box>
                        )}
                        {/* Button to toggle overlay */}
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
                      <Box>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.67)",
                            fontSize: "15px",
                          }}
                        >
                          {currentEvent.location.address.split(",")[1]}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.67)",
                            fontSize: "15px",
                          }}
                        >
                          {currentEvent.location.address}
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
            lg={8}
            sx={{
              zIndex: 1,
              position: "relative",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              {currentEventTicket.map((ticket) => (
                <Box key={ticket.id} sx={{ flex: 1, mx: 1 }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: ".75rem",
                      backgroundColor: "yellow",
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
                          border: "1px solid",
                          borderColor: "rgba(195.43, 172.63, 172.63, 0.40)",
                          borderRadius: "5px",
                          display:"flex",
                          justifyContent:"space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            textTransform: "capitalize",
                          }}
                        >
                          {wave.name}
                        </Typography>
                        <Typography
                          sx={{
                            color: "white",
                            textTransform: "capitalize",
                          }}
                        >
                          EGP {wave.price}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
