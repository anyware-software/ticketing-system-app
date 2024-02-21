import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box, Button, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import type { Event } from "../../API";
import { dbStorage } from "../../constants/Enums";
import { useNavigate } from "react-router-dom";
import EventLocationOverlay from "../Dashboard/Event Components/EventLocationOverlay";

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  const navigate = useNavigate();
  const [startingFrom, setStartingFrom] = useState(0);

  useEffect(() => {
    if (event?.tickets?.items?.length && Array.isArray(event.tickets.items)) {
      const allPrices = event.tickets.items.flatMap((ticket) =>
        ticket?.waves?.map((wave: any) => wave.price)
      );
      if (allPrices.length > 0) {
        const smallestPrice = Math.min(...allPrices);
        setStartingFrom(smallestPrice);
      }
    }
  }, [event]);
  
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          border: "2px solid #806d6f",
          p: {xs:1,sm:4},
          borderRadius: "10px",
          // height:{sm:'50vh',md:'55vh',lg:'50vh'}
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 0, sm: 2, md: 5 },
            flexDirection: {xs:"column",sm:'row'},
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
                  xs: "15rem",
                  sm: "15rem",
                  md: "15rem",
                  lg: "12rem",
                },
                height: {
                  xs: "15rem",
                  sm: "15rem",
                  md: "15rem",
                  lg: "12rem",
                },
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={
                  event.image
                    ? `${dbStorage}${event.image}`
                    : "../../../Images/event.png"
                }
                alt={event.name || ""}
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
                  justifyContent: "center",
                  pt: 5,
                  gap: 5,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    textAlign: "center",
                    width: "50%",
                    fontWeight: 700,
                  }}
                >
                  {event.name}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              px: { xs: 3, sm: 0 },
            }}
          >
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
                  display: { xs: "none", sm: "flex" },
                }}
              >
                {event.name}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.67)",
                fontSize: "12px",
              }}
            >
              {event.description}
            </Typography>

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
                  width: {xs:'100%',sm:"70%"},
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
                    {event.startDate
                      ? new Date(event.startDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )
                      : "N/A"}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.67)",
                      fontSize: "15px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    {event.startDate
                      ? new Date(event.startDate).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            hour: "numeric",
                            minute: "numeric",
                          }
                        )
                      : "N/A"}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.67)",
                      fontSize: "15px",
                      display: { xs: "block", sm: "none" },
                    }}
                  >
                    {event.startDate
                      ? new Date(event.startDate).toLocaleString(
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
              <EventLocationOverlay currentEvent={event} />
            </Box>

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
                  justifyContent: "space-between",
                  gap:2,
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
                    mr:{xs:0,sm:3},
                  }}
                  onClick={() => {
                    navigate("/dashboard/events/");
                  }}
                >
                  Book Event
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default EventItem;
