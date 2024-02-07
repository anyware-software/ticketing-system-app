import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
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
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { signInWithRedirect } from "aws-amplify/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../state";
import CloseIcon from "@mui/icons-material/Close";
import ContentLoader from "../ContentLoader/ContentLoder";
import { signOut } from "aws-amplify/auth";
import listInvitaions from "../../services/listInvitations";
import { dbStorage } from "../../constants/Enums";
import { Invitation } from "../../API";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import EventMapOverlay from "../Dashboard/Event Components/EventMapOverlay";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventLocationOverlay from "../Dashboard/Event Components/EventLocationOverlay";

export default function InvitationPage() {
  const [loading, setLoading] = useState(false);
  const [invitations, setInvitations] = useState<Invitation>();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const handlePrevImage = () => {
    setIsTransitioning(true);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0
        ? invitations?.event?.gallery?.length
          ? invitations.event.gallery.length - 4
          : 0
        : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextImage = () => {
    setIsTransitioning(true);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === (invitations?.event?.gallery?.length ?? 0) - 4
        ? 0
        : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    async function getGuestInvitations() {
      if (!id) return;
      const inv = await listInvitaions(id);
      setInvitations(inv.items);
    }
    getGuestInvitations();
  }, [id]);

  useEffect(() => {
    if (!invitations) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [invitations]);

  if (loading) return <ContentLoader />;

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
          height: "100vh",
          backgroundAttachment: "fixed",
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
        }}
      >
        <AppBar
          position="relative"
          sx={{
            zIndex: 1,
            backgroundColor: "transparent",
            border: 0,
            boxShadow: "none",
            alignItems: { xs: "center", sm: "start" },
            justifyContent: { xs: "end", sm: "start" },
            minHeight: { xs: "15vh", sm: "10vh" },
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                px: 5,
                display: "flex",
              }}
            >
              <img
                src="https://ulter.events/assets/images/ulter-logo-white.png"
                style={{ height: "3vh" }}
                alt=""
              />
            </Box>
          </Toolbar>
        </AppBar>

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
            {invitations && (
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
                        invitations?.event?.image
                          ? `${dbStorage}${invitations?.event?.image}`
                          : "../../../Images/event.png"
                      }
                      alt={invitations?.event?.name || ""}
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
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          textAlign: "center",
                          width: "50%",
                          fontWeight: 700,
                        }}
                      >
                        {invitations?.event?.name}
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
                    {invitations?.event?.gallery
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
                      {invitations?.event?.name}
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
                    {invitations?.event?.description}
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
                      }}
                    >
                      <EventMapOverlay currentEvent={invitations.event} />
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
                          {invitations?.event?.startDate
                            ? new Date(
                                invitations.event.startDate
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
                          {invitations?.event?.startDate
                            ? new Date(
                                invitations.event.startDate
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
                          {invitations?.event?.startDate
                            ? new Date(
                                invitations.event.startDate
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                weekday: "long",
                                hour: "numeric",
                                minute: "numeric",
                              })
                            : "N/A"}
                        </Typography>
                      </Box>
                    </Box>
                    <EventLocationOverlay currentEvent={invitations.event} />
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
        </Grid>
      </Box>
    </>
  );
}
