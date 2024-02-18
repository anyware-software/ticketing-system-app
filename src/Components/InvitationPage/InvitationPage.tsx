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
import Avatar from "@mui/material/Avatar";
import { Chip } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";

export default function InvitationPage() {
  const [loading, setLoading] = useState(false);
  const [invitations, setInvitations] = useState<Invitation[]>();
  const [currentInvitations, setCurrentInvitations] = useState<Invitation>();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const handlePrevImage = () => {
    setIsTransitioning(true);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0
        ? currentInvitations?.event?.gallery?.length
          ? currentInvitations.event.gallery.length - 4
          : 0
        : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextImage = () => {
    setIsTransitioning(true);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === (currentInvitations?.event?.gallery?.length ?? 0) - 4
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
      setCurrentInvitations(inv.items[0]);
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
            mt: { xs: 0, sm: 2, md: 2, lg: 2 },
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
            {currentInvitations && (
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
                        currentInvitations?.event?.image
                          ? `${dbStorage}${currentInvitations?.event?.image}`
                          : "../../../Images/event.png"
                      }
                      alt={currentInvitations?.event?.name || ""}
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
                        pt: 1,
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
                        {currentInvitations?.event?.name}
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
                    {currentInvitations?.event?.gallery
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
                      {currentInvitations?.event?.name}
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
                    {currentInvitations?.event?.description}
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
                      <EventMapOverlay
                        currentEvent={currentInvitations.event}
                      />
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
                          {currentInvitations?.event?.startDate
                            ? new Date(
                                currentInvitations.event.startDate
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
                          {currentInvitations?.event?.startDate
                            ? new Date(
                                currentInvitations.event.startDate
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
                          {currentInvitations?.event?.startDate
                            ? new Date(
                                currentInvitations.event.startDate
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
                    <EventLocationOverlay
                      currentEvent={currentInvitations.event}
                    />
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

          <Typography
            variant="h4"
            sx={{ color: "white", position: "relative", my: 3 }}
          >
            Invitation Tickets
          </Typography>

          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            sx={{
              position: "relative",
              my: 5,
              display: { xs: "flex", sm: "grid" },
              gridTemplateColumns: {
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              rowGap: 1,
              columnGap: 1,
              flexDirection: "column",
              gap: 3,
            }}
          >
            {invitations &&
              invitations.map((invitation: Invitation) => (
                <Box key={invitation.id}>
                  <Box>
                    <Box
                      sx={{
                        bgcolor: "white",
                        color: "black",
                        fontWeight: "bold",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        maxWidth: "300px",
                        mx: "auto",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          p: 2,
                        }}
                      >
                        <Box
                          sx={{
                            px: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            <Box>
                              <Typography
                                fontWeight="bold"
                                color="GrayText"
                                fontSize={12}
                              >
                                Location
                              </Typography>
                              <Typography fontWeight="bold" fontSize={12}>
                                {invitation?.event?.location?.address?.split(
                                  ","
                                )[1] || "N/A"}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                fontWeight="bold"
                                color="GrayText"
                                fontSize={12}
                              >
                                Date
                              </Typography>
                              <Typography fontWeight="bold" fontSize={12}>
                                {invitation?.event?.startDate?.split("T")[0] ||
                                  "N/A"}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                fontWeight="bold"
                                color="GrayText"
                                fontSize={12}
                              >
                                Invitation
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            pl: 3,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            <Box>
                              <Typography
                                fontWeight="bold"
                                color="GrayText"
                                fontSize={12}
                              >
                                Ticket Type
                              </Typography>

                              <Chip
                                label={invitation?.eventTicket?.type}
                                size="small"
                                sx={{
                                  width: "100%",
                                  fontSize: "12px",
                                  height: "20px",
                                  backgroundColor: `${invitation?.eventTicket?.color}`,
                                }}
                              />
                            </Box>
                            <Box>
                              <Typography
                                fontWeight="bold"
                                color="GrayText"
                                fontSize={12}
                              >
                                Time
                              </Typography>
                              <Typography fontWeight="bold" fontSize={12}>
                                {invitation?.event?.startDate
                                  ? new Date(
                                      invitation.event.startDate
                                    ).toLocaleTimeString("en-US", {
                                      hour: "numeric",
                                      minute: "2-digit",
                                    })
                                  : "N/A"}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      {/* Seperator */}
                      <Box sx={{ width: "100%", position: "relative" }}>
                        <Box
                          sx={{
                            borderRadius: "0 20px 20px 0",
                            height: "40px",
                            width: "20px",
                            bgcolor: "black",
                            position: "absolute",
                            top: "-19.5px",
                            left: "0px",
                          }}
                        />
                        <hr
                          style={{
                            border: "1px dashed black",
                            width: "100%",
                          }}
                        />
                        <Box
                          sx={{
                            borderRadius: "20px 0 0 20px",
                            height: "40px",
                            width: "20px",
                            bgcolor: "black",
                            position: "absolute",
                            top: "-19.5px",
                            right: "0px",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 2,
                          pb: 2,
                          pt: 1,
                        }}
                      >
                        <Box
                          sx={{
                            height: "100px",
                            width: "100px",
                          }}
                        >
                          <QRCodeSVG
                            value={`http://localhost:3001/?id=${invitation.id}`}
                            size={100}
                          />
                        </Box>
                      </Box>
                    </Box>
                    {/* green footer */}
                    <Box
                      sx={{
                        backgroundColor: "#62b58f",
                        height: "40px",
                        maxWidth: "300px",
                        mx: "auto",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    />
                  </Box>
                </Box>
              ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
