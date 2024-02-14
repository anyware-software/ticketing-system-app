import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toggleDrawer as toggleDrawerState } from "../../state/index";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Typography, Button, TextField } from "@mui/material";
import getBooking from "../../services/getBooking";
import { Booking } from "../../API";
import { QRCodeSVG } from "qrcode.react";
import { Chip } from "@mui/material";
import { dbStorage } from "../../constants/Enums";
import { Avatar } from "@mui/material";
import ContentLoader from "../ContentLoader/ContentLoder";

export default function PayedTicket() {
  const [validBooking, setValidBooking] = useState<Booking>();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(toggleDrawerState());
  };

  useEffect(() => {
    async function getValidBooking() {
      setLoading(true);
      const booking = await getBooking(id);
      if (booking.isPaid === true) {
        setValidBooking(booking);
      } else {
        return;
      }
      setLoading(false);
    }
    getValidBooking();
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

  return (
    <Box
      sx={{
        marginTop: { xs: "5vh", sm: "10vh", l: "0vh" },
        ml: { xs: "0rem", sm: "80px" },
        bgcolor: "black",
        color: "white",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            pl: 2,
            mb: 2,
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <ChevronLeftIcon sx={{ color: "#ee6259", fontSize: "40px" }} />
          </IconButton>
          <Typography variant="h5">Your Ticket(s)</Typography>
        </Box>
      </Box>

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
                  <Typography fontWeight="bold" color="GrayText" fontSize={12}>
                    Name
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    fontSize={12}
                    sx={{ textTransform: "capitalize" }}
                  >
                    {validBooking?.guest?.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold" color="GrayText" fontSize={12}>
                    Date
                  </Typography>
                  <Typography fontWeight="bold" fontSize={12}>
                    {validBooking?.event?.startDate?.split("T")[0] || "N/A"}
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold" color="GrayText" fontSize={12}>
                    Location
                  </Typography>
                  <Typography fontWeight="bold" fontSize={12}>
                    {validBooking?.event?.location?.address?.split(",")[1] ||
                      "N/A"}
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold" color="GrayText" fontSize={12}>
                    Payment
                  </Typography>
                  <Typography fontWeight="bold" fontSize={12}>
                    Successful
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box>
                  <Avatar
                    sx={{ mx: "auto", height: 70, width: 70 }}
                    src={`${dbStorage}${validBooking?.guest?.guest_avatar}`}
                  />
                </Box>
                <Box>
                  <Typography fontWeight="bold" color="GrayText" fontSize={12}>
                    Ticket Type
                  </Typography>

                  <Chip
                    label={validBooking?.eventTicket?.type}
                    size="small"
                    sx={{
                      width: "100%",
                      fontSize: "12px",
                      height: "20px",
                      backgroundColor: `${validBooking?.eventTicket?.color}`,
                    }}
                  />
                  <Typography
                    sx={{ textAlign: "center", fontSize: "12px" }}
                    fontWeight="bold"
                  >
                    EGP {validBooking?.paidAmount}
                  </Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold" color="GrayText" fontSize={12}>
                    Time
                  </Typography>
                  <Typography fontWeight="bold" fontSize={12}>
                    {validBooking?.event?.startDate
                      ? new Date(
                          validBooking.event.startDate
                        ).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })
                      : "N/A"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight="bold" color="GrayText" fontSize={12}>
                    Ticket
                  </Typography>
                  <Typography fontWeight="bold" fontSize={10}>
                    {validBooking?.guestTicket?.number}
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    fontSize={10}
                    sx={{
                      mt: 0.5,
                      color: !validBooking?.guestTicket?.redeemed
                        ? "green"
                        : "red",
                    }}
                  >
                    {!validBooking?.guestTicket?.redeemed
                      ? "(Valid)"
                      : "(Not Valid)"}
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
                value={`http://localhost:3001/?id=${validBooking?.id}`}
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
  );
}
