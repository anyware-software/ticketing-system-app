import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import listEvents from "../../services/listEvents";
import { dbStorage } from "../../constants/Enums";
import ContentLoader from "../ContentLoader/ContentLoder";
import Typography from "@mui/material/Typography";

interface Event {
  id: string;
  name: string;
  image: string;
  gallery: [string];
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  const getListEvents = async () => {
    let events = await listEvents();
    // console.log(events.items);
    setEvents(events.items);
  };

  useEffect(() => {
    getListEvents();
  }, []);

  useEffect(() => {
    if (events.length < 1) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [events]);

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
            {events.map((event) => (
              <Box>
                <Box
                  key={event.id}
                  sx={{
                    display: "flex",
                    gap:7,
                  }}
                >
                  <Box>
                  <img
                    src={
                      event.image
                        ? `${dbStorage}${event.image}`
                        : "../../../Images/event.png"
                    }
                    alt={event.name}
                    style={{ width: "15rem", height: "15rem" , borderRadius:'10px'}}
                  />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{
                      display: "flex",
                      gap:1
                    }}>
                      {event?.gallery?.map((image, index) => (
                        <img
                          key={index}
                          src={
                            image
                              ? `${dbStorage}${image}`
                              : "../../../Images/event.png"
                          }
                          alt={`Event ${index + 1}`}
                          style={{ width: "8rem", height: "5rem" , borderRadius:'5px' }}
                        />
                      ))}
                    </Box>
                    <Typography sx={{ color: "white" }}>
                      {event.name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
