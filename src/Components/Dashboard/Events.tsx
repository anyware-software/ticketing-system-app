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

interface Event {
  id: string;
  name: string;
  image: string;
  gallery: string[];
  description: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentEventId, setCurrentEventsId] = useState("");
  const [currentEvent, setCurrentEvent] = useState<Event>({
    id: "",
    name: "",
    image: "",
    gallery: [],
    description: "",
  });
  const [currentEventTicket, setCurrentEventTicket] = useState([]);

  // const getListEvents = async () => {
  //   let events = await listEvents();
  //   // console.log(events.items);
  //   setEvents(events.items);
  // };

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
          console.log(currentEvent);
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

  // console.log(events[0].id);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  // console.log(currentEvent);
  // console.log(currentEventTicket);
  // console.log(isTransitioning);

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
            ml: 15,
            mt: 12,
            overflow: "auto",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            sx={{
              zIndex: 1,
              position: "relative",
            }}
          >
            {currentEvent && (
              <Box>
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
                      {/* {currentEvent?.gallery?.map((image, index) => (
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
                      ))} */}
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
                        <IconButton onClick={handleNextImage} sx={{ color: "white" }}>
                    <ArrowForwardIosIcon />
                  </IconButton>
                    </Box>
                    <Typography sx={{ color: "white" , fontSize:'20px' , fontWeight:'700' }}>
                      {currentEvent.name}
                    </Typography>
                    <Typography sx={{ color: "rgba(255, 255, 255, 0.67)" , fontSize:'12px'  }}>
                      {currentEvent.description}
                    </Typography>
                    <Box>
                    <Typography sx={{ color: "rgba(255, 255, 255, 0.67)" , fontSize:'12px'  }}>
                      Starting from
                    </Typography>
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
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
