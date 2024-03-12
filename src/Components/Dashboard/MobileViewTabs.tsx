import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchUserAttributes } from "aws-amplify/auth";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import updateGuest from "../../services/updateGuest";
import { setLogin } from "../../state";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { original } from "@reduxjs/toolkit";
import { BookingStatus, dbStorage } from "../../constants/Enums";
import updateBooking from "../../services/updateBooking";
import getBooking from "../../services/getBooking";
import { Booking } from "../../API";
import listGuestBooking from "../../services/listGuestBookings";
import listAccompaniedGuests from "../../services/listAccompaniedGuests";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import sendSms from "../../services/sendSMS";
import createTransaction from "../../services/createTransaction";
import validateWaveConsumption from "../../services/validateWaveConsumption";
import getGuestByPhone from "../../services/getGuestByPhone";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import sendEmail from "../../services/sendEmail";
import OTP from "../OTP";
import { sendOtpViaSMS } from "../../services/sendOTP";
import Modal from "@mui/material/Modal";
import listConsumedWaves from "../../services/listConsumedWaves";
import ForwardIcon from "@mui/icons-material/Forward";

interface OTPState {
  open: boolean;
  phoneNumber: string;
  checkCode: string | undefined;
}
const options = ["Choice 1", "Choice 2", "Choice 3"];

const ITEM_HEIGHT = 48;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface Wave {
  name: string;
  price: number;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#dbd9d9",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  borderRadius: "20px",
};
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MobileViewTabs() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [waveBeforeShift, setWaveBeforeShift] = useState<Wave | null>(null);
  const [waveAfterShift, setWaveAfterShift] = useState<Wave | null>(null);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [currentBookings, setCurrentBookings] = useState<Booking | null>(null);
  const [currentCompanions, setCurrentCompanions] = useState<Booking[]>([]);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationWarning, setValidationWarning] = useState<boolean>(false);
  const [message, setMessage] = useState<any>("");
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(0);
  const user = useSelector((state: any) => state.app.user);

  useEffect(() => {
    const storedUser = localStorage.getItem("userlogged");
    if (storedUser === "false") {
      navigate("/dashboard/");
    } else {
      if (!user) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }
  }, [user]);

  useEffect(() => {
    const handdleUpdateBooking = async () => {
      if (user) {
        const storedBookingId = localStorage.getItem("eventBooking");
        if (storedBookingId) {
          const booking = await getBooking(storedBookingId);
          await updateGuest({
            userID: user?.id,
            phone_number: booking.phone_number,
          });
          await updateBooking({
            eventBookingID: storedBookingId,
            bookingGuestId: user?.id,
            status: BookingStatus.PENDING,
          });
          localStorage.removeItem("eventBooking");
        } else {
          localStorage.removeItem("eventBooking");
        }
      }
    };
    handdleUpdateBooking();
  }, []);

  useEffect(() => {
    async function getGuestBookingEvents() {
      setBookingLoading(true);
      const booking = await listGuestBooking({ bookingGuestid: user?.id });
      if (booking) {
        const sortedBookings = booking.items.sort((a: any, b: any) => {
          const startDateA = new Date(a.event.startDate).getTime();
          const startDateB = new Date(b.event.startDate).getTime();
          return startDateA - startDateB;
        });
        setCurrentBookings(sortedBookings[0]);
        setBookingLoading(false);
      }
    }
    getGuestBookingEvents();
  }, [user]);

  useEffect(() => {
    async function getGuestCompanions() {
      if (!user) return;
      if (!currentBookings) return;
      const friends = await listAccompaniedGuests({
        bookingMainGuestId: user.id,
        bookingEventId: currentBookings?.event?.id,
      });
      setCurrentCompanions(friends.items);
    }
    getGuestCompanions();
  }, [currentBookings, user]);

  useEffect(() => {
    // const id = searchParams.get("id");
    const checkBooking = async () => {
      if (!user) return;
      if (!currentBookings) return;
      if (currentBookings.isPaid === true) return;
      const waveId = currentBookings?.waveId;
      const waveBeforeShift = currentBookings?.eventTicket?.waves?.find(
        (wave) => wave?.id === waveId
      );
      console.log(waveBeforeShift);

      if (waveBeforeShift) {
        setWaveBeforeShift(waveBeforeShift);
      }
      const wave = currentBookings.waveId;
      const bookingId = currentBookings.id;
      const shift = await listConsumedWaves({
        waveId: wave,
        bookingId: bookingId,
      });
      if (shift.id) {
        console.log("User is Shifted to another Wave");
        const waveId = shift?.waveId;
        const waveAfterShift = currentBookings?.eventTicket?.waves?.find(
          (wave) => wave?.id === waveId
        );
        if (waveAfterShift) {
          setWaveAfterShift(waveAfterShift);
        }
        setOpenModal(true);
      } else {
        console.log("Wave still available");
      }
    };
    checkBooking();
  }, [user, currentBookings]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  //---------------------------------------------------------------
  //Email Edit
  const [emailEditing, setEmailEditing] = useState(false);
  const [emailText, setEmailText] = useState(user?.email || "");
  const [originalEmailText, setOriginalEmailText] = useState(user?.email);
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEditEmailClick = () => {
    setEmailEditing(true);
  };
  const handleSaveEmailClick = async () => {
    try {
      if (!emailRegex.test(emailText)) {
        setEmailError(true);
        return;
      }
      let UpdatedGuest = await updateGuest({
        userID: user?.id,
        email: emailText,
      });
      // let UpdatedGuest = await updateGuest(
      //   updatedData.userID,
      //   updatedData.email
      // );
      dispatch(setLogin({ user: UpdatedGuest }));
      setOriginalEmailText(emailText);
      setEmailEditing(false);
      setEmailError(false);
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };
  const handleCancelEmailClick = () => {
    setEmailText(originalEmailText);
    setEmailEditing(false);
    setEmailError(false);
  };
  useEffect(() => {
    if (!user) return;
    setEmailText(user.email);
    setOriginalEmailText(user.email);
  }, [user]);
  //Email Edit
  //----------------------------------------------------------------
  //---------------------------------------------------------------
  //Address Edit
  const [addressEditing, setAddressEditing] = useState(false);
  const [addressText, setAddressText] = useState(user?.address || "");
  const [originalAddressText, setOriginalAddressText] = useState(user?.address);
  const [addressError, setAddressError] = useState(false);

  const handleEditAddressClick = () => {
    setAddressEditing(true);
  };
  const handleSaveAddressClick = async () => {
    try {
      if (!addressText) {
        setAddressError(true);
        return;
      }
      let UpdatedGuest = await updateGuest({
        userID: user?.id,
        email: user?.email,
        name: user?.name,
        phone_number: user?.phone_number,
        birthdate: user?.birthdate,
        gender: user?.gender,
        guest_avatar: user?.guest_avatar,
        connections: user?.connections,
        images: user?.images,
        address: addressText,
      });
      // let UpdatedGuest = await updateGuest(
      //   updatedData.userID,
      //   updatedData.email,
      //   updatedData.name,
      //   updatedData.phone_number,
      //   updatedData.birthdate,
      //   updatedData.gender,
      //   updatedData.guest_avatar,
      //   updatedData.connections,
      //   updatedData.images,
      //   updatedData.address
      // );
      dispatch(setLogin({ user: UpdatedGuest }));
      setOriginalAddressText(addressText);
      setAddressEditing(false);
      setAddressError(false);
    } catch (error) {
      console.error("Error updating Address:", error);
    }
  };
  const handleCancelAddressClick = () => {
    setAddressText(originalAddressText);
    setAddressEditing(false);
    setAddressError(false);
  };
  useEffect(() => {
    if (!user) return;
    setAddressText(user.address);
    setOriginalAddressText(user.address);
  }, [user]);
  //Address Edit
  //----------------------------------------------------------------
  //---------------------------------------------------------------
  //Birth Date Edit
  const [birthEditing, setBirthEditing] = useState(false);
  const [birthText, setBirthText] = useState(user?.birthdate || "");
  const [originalBirthText, setOriginalBirthText] = useState(user?.birthdate);
  const [birthDateError, setBirthDateError] = useState(false);
  const handleEditBirthClick = () => {
    setBirthEditing(true);
  };

  const isDateValid = (dateString: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(dateString);

    return !isNaN(selectedDate.getTime()) && selectedDate <= currentDate;
  };

  const handleSaveBirthClick = async () => {
    // setOriginalBirthText(birthText);
    // setBirthEditing(false);

    if (!isDateValid(birthText)) {
      console.error("Invalid or future date selected.");
      setBirthDateError(true);
      return;
    }

    try {
      let UpdatedGuest = await updateGuest({
        userID: user?.id,
        email: user?.email,
        name: user?.name,
        phone_number: user?.phone_number,
        birthdate: birthText,
      });
      // let UpdatedGuest = await updateGuest(
      //   updatedData.userID,
      //   updatedData.email,
      //   updatedData.name,
      //   updatedData.phone_number,
      //   updatedData.birthdate
      // );
      dispatch(setLogin({ user: UpdatedGuest }));
      setOriginalBirthText(birthText);
      setBirthEditing(false);
      setBirthDateError(false);
    } catch (error) {
      console.error("Error updating BirthDate:", error);
    }
  };
  const handleCancelBrithClick = () => {
    setBirthText(originalBirthText);
    setBirthEditing(false);
    setBirthDateError(false);
  };
  useEffect(() => {
    if (!user) return;
    setBirthText(user.birthdate);
    setOriginalBirthText(user.birthdate);
  }, [user]);
  //Birth Date Edit
  //----------------------------------------------------------------
  //---------------------------------------------------------------
  //Gender Edit
  const [genderEditing, setGenderEditing] = useState(false);
  const [genderText, setGenderText] = useState(user?.gender);
  const [originalGenderText, setOriginalGenderText] = useState(user?.gender);
  const handleEditGenderClick = () => {
    setGenderEditing(true);
  };
  // const handleSaveGenderClick = () => {
  //   setOriginalGenderText(genderText);
  //   setGenderEditing(false);
  // };
  const handleSaveGenderClick = async () => {
    try {
      let UpdatedGuest = await updateGuest({
        userID: user?.id,
        email: user?.email,
        name: user?.name,
        phone_number: user?.phone_number,
        birthdate: user?.birthdate,
        gender: genderText,
      });
      // let UpdatedGuest = await updateGuest(
      //   updatedData.userID,
      //   updatedData.email,
      //   updatedData.name,
      //   updatedData.phone_number,
      //   updatedData.birthdate,
      //   updatedData.gender
      // );
      dispatch(setLogin({ user: UpdatedGuest }));
      setOriginalGenderText(genderText);
      setGenderEditing(false);
    } catch (error) {
      console.error("Error updating BirthDate:", error);
    }
  };
  const handleCancelGenderClick = () => {
    setGenderText(originalGenderText);
    setGenderEditing(false);
  };
  useEffect(() => {
    if (!user) return;
    setGenderText(user.gender);
    setOriginalGenderText(user.gender);
  }, [user]);
  //Gender Edit
  //----------------------------------------------------------------
  //---------------------------------------------------------------
  //Mobile Edit
  const [mobileEditing, setMobileEditing] = useState(false);
  const [mobileText, setMobileText] = useState(user?.phone_number);
  const [originalMobileText, setOriginalMobileText] = useState(
    user?.phone_number
  );
  const [mobileLoading, setMobileLoading] = useState(false);
  const mobileRegex = /^(010|011|012|015)\d{8}$/;
  const [mobileError, setMobileError] = useState(false);
  const [otpOpen, setOpenOTP] = useState<OTPState>({
    open: false,
    phoneNumber: "",
    checkCode: undefined,
  });
  const mobileRef = useRef<HTMLInputElement>(null);

  const handleEditMobileClick = () => {
    setMobileEditing(true);
  };
  const handleSaveMobileClick = async () => {
    // setOriginalMobileText(mobileText);
    // setMobileEditing(false);
    try {
      if (!mobileRegex.test(mobileText)) {
        setMobileError(true);
        setValidationWarning(true);
        setMessage("Please Enter Valid Phone Number");
        return;
      }

      if (mobileText === originalMobileText && mobileText !== "") {
        setMobileError(false);
        setMobileEditing(false);
        return;
      }
      setMobileLoading(true);
      const checkUnique = await getGuestByPhone(mobileText);
      if (checkUnique?.success === false && checkUnique?.dataLength !== 0) {
        setMobileError(true);
        setValidationWarning(true);
        setMessage("This Phone Number already has an account.");
        return;
      }
      console.log(checkUnique);
      await openOtpModal(mobileText);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage("Something went wrong, please try again later");
    }
  };
  const handleCancelMobileClick = () => {
    setMobileText(originalMobileText);
    setMobileEditing(false);
    setMobileError(false);
  };
  const openOtpModal = async (phoneNumber: string) => {
    const { checkCode } = await sendOtpViaSMS(phoneNumber);
    setOpenOTP({
      open: true,
      phoneNumber: phoneNumber,
      checkCode,
    });
  };
  useEffect(() => {
    if (!user) return;
    setMobileText(user.phone_number);
    setOriginalMobileText(user.phone_number);
  }, [user]);
  useEffect(() => {
    if (mobileEditing) {
      mobileRef.current?.focus();
    }
  }, [mobileEditing]);
  //Mobile Edit
  //----------------------------------------------------------------

  const sendSmsToUser = async (
    phone: string | null | undefined,
    message: string
  ) => {
    if (!phone) return;
    try {
      await sendSms(phone, message);
    } catch (err) {
      console.log(err);
    }
  };

  async function payForTicket() {
    try {
      const waveId = currentBookings?.waveId;
      const wave = currentBookings?.eventTicket?.waves?.find(
        (wave) => wave?.id === waveId
      );
      const amountCents = wave?.price ? wave.price * 100 : 0;
      await createTransaction({
        user: user,
        guestId: currentBookings?.bookingGuestId,
        eventId: currentBookings?.bookingEventId,
        ticketId: currentBookings?.bookingEventTicketId,
        issuccess: true,
        currency: "EGP",
        amount_cents: `${amountCents}`,
        transactionBookingId: currentBookings?.id,
        isPaid: true,
        paidAmount: wave?.price,
        waveId: currentBookings?.waveId,
      });
      await sendEmail({
        customerEmail: user.email,
        templateName: "UlterPaymentReserved",
        guestName: user.name,
        eventName: currentBookings?.event.name,
        link: `http://localhost:3000/dashboard/ticket/${currentBookings?.id}`,
      });
      const booking = await listGuestBooking({ bookingGuestid: user.id });
      if (booking) {
        const sortedBookings = booking.items.sort((a: any, b: any) => {
          const startDateA = new Date(a.event.startDate).getTime();
          const startDateB = new Date(b.event.startDate).getTime();
          return startDateA - startDateB;
        });
        setCurrentBookings(sortedBookings[0]);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const validateAvailableRedirect = async () => {
    setPaymentLoading(true);
    const checkWaveAvailability = await validateWaveConsumption({
      waveId: currentBookings?.waveId || "",
    });
    if (checkWaveAvailability.success) {
      await payForTicket();
      setPaymentLoading(false);
      setValidationWarning(true);
      setMessage("Your payment has been done successfully");
    } else {
      console.log("check failed");
      setPaymentLoading(false);
      setValidationWarning(true);
      setMessage("Your payment Failed");
    }
  };

  const removeBookings = async () => {
    await updateBooking({ eventBookingID: currentBookings?.id, deleted: "1" });
    setCurrentBookings(null);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={validationWarning}
        autoHideDuration={5000}
        onClose={() => {
          setValidationWarning(false);
        }}
      >
        <Alert
          onClose={() => {
            setValidationWarning(false);
          }}
          severity="warning"
          sx={{
            // position: "fixed",
            top: "16px",
            right: "56px",
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

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span style={{ color: "red" }}>Unfortunately</span>,<br></br> The
            ticket wave you have booked is already
            <span style={{ color: "red" }}> sold out</span>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontWeight: "bold", fontSize: "20px" }}
          >
            You currently shifted from <br></br>
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              id="modal-modal-description"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {waveBeforeShift?.name} wave
            </Typography>
            <ForwardIcon sx={{ color: "red", fontSize: "50px" }} />
            <Typography
              id="modal-modal-description"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {waveAfterShift?.name} wave
            </Typography>
          </Box>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontWeight: "bold", fontSize: "20px" }}
          >
            Price Changed from <br></br>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              id="modal-modal-description"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {waveBeforeShift?.price} EGP
            </Typography>
            <ForwardIcon sx={{ color: "red", fontSize: "50px" }} />
            <Typography
              id="modal-modal-description"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {waveAfterShift?.price} EGP
            </Typography>
          </Box>
        </Box>
      </Modal>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <CircularProgress size={64} thickness={1} sx={{ color: "red" }} />
          {/* <img src="https://assets-global.website-files.com/61406347b8db463e379e2732/6170b5377b069c085b0991e5_ezgif-2-2260bc5d0d32.gif" alt="" /> */}
        </Box>
      ) : (
        <Box sx={{ width: "100%", display: { xs: "block", sm: "none" } }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: { display: "none" },
              }}
            >
              <Tab
                label="About Info"
                {...a11yProps(0)}
                sx={{
                  color: "#A19F9F",
                  "&.Mui-selected": {
                    color: "white",
                    fontWeight: "bold",
                    fontStyle: "underline",
                  },
                }}
              />
              <Tab
                label="My Bookings"
                {...a11yProps(1)}
                sx={{
                  color: "#A19F9F",
                  "&.Mui-selected": {
                    color: "white",
                    fontWeight: "bold",
                  },
                }}
              />
            </Tabs>
          </Box>
          {/* info part */}
          <CustomTabPanel value={value} index={0}>
            <Box
              sx={{
                width: { xs: "100%", sm: "80%" },
                display: { xs: "flex", sm: "none" },
                flexDirection: "column",
                marginTop: { xs: "0vh", sm: "0vh" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      height: "10vh",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#848383",
                        fontSize: 18,
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Email
                    </Typography>

                    {/* Email Field */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {emailEditing ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            sx={{
                              "input::placeholder": {
                                color: "white",
                              },
                              input: {
                                backgroundColor: "rgba(255, 255, 255, 0.31)",
                                color: "white",
                                px: "10px",
                                py: "1px",
                              },
                              border: "1px solid",
                              borderColor: "rgba(255, 255, 255, 0.63)",
                              width: "15rem",
                            }}
                            value={emailText}
                            onChange={(e) => {
                              setEmailText(e.target.value);
                              setEmailError(false);
                            }}
                            error={emailError}
                            helperText={
                              emailError ? "Invalid email address" : ""
                            }
                          />
                          <IconButton
                            onClick={handleSaveEmailClick}
                            sx={{ color: "white" }}
                          >
                            <CheckOutlinedIcon />
                          </IconButton>
                          <IconButton
                            onClick={handleCancelEmailClick}
                            sx={{ color: "white" }}
                          >
                            <CancelIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <div>
                          <span
                            style={{
                              color: "white",
                              fontSize: 15,
                              fontWeight: 600,
                              wordWrap: "break-word",
                            }}
                          >
                            {originalEmailText}
                          </span>

                          <IconButton
                            onClick={handleEditEmailClick}
                            sx={{ color: "white" }}
                          >
                            <EditIcon />
                          </IconButton>
                        </div>
                      )}
                    </div>

                    {/* <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Alinader@gmail.com
                </Typography> */}
                  </Box>
                  <Box
                    sx={{
                      height: "10vh",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#848383",
                        fontSize: 18,
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Birth Date
                    </Typography>

                    {/* Birth Field */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {birthEditing ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            type="date"
                            sx={{
                              backgroundColor: "rgba(255, 255, 255, 0.31)",
                              "input::placeholder": {
                                color: "white",
                              },
                              input: {
                                color: "white",
                                px: "10px",
                                py: "1px",
                              },
                              border: "1px solid",
                              borderColor: "rgba(255, 255, 255, 0.63)",
                              width: "100%",
                            }}
                            value={birthText}
                            onChange={(e) => {
                              setBirthText(e.target.value);
                              setBirthDateError(false);
                            }}
                            error={birthDateError}
                            helperText={
                              birthDateError ? "Invalid Birth Date address" : ""
                            }
                          />
                          <IconButton
                            onClick={handleSaveBirthClick}
                            sx={{ color: "white" }}
                          >
                            <CheckOutlinedIcon />
                          </IconButton>
                          <IconButton
                            onClick={handleCancelBrithClick}
                            sx={{ color: "white" }}
                          >
                            <CancelIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <div>
                          <span
                            style={{
                              color: "white",
                              fontSize: 15,
                              fontWeight: 600,
                              wordWrap: "break-word",
                            }}
                          >
                            {originalBirthText
                              ? new Date(originalBirthText)
                                  .toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                  })
                                  .replaceAll("/", "-")
                              : "N/A"}
                          </span>

                          <IconButton
                            onClick={handleEditBirthClick}
                            sx={{ color: "white" }}
                          >
                            <EditIcon />
                          </IconButton>
                        </div>
                      )}
                    </div>

                    {/* <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  12/2/1997
                </Typography> */}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      height: "10vh",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#848383",
                        fontSize: 18,
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Gender
                    </Typography>

                    {/* Gender Field */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {genderEditing ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            select
                            sx={{
                              backgroundColor: "rgba(255, 255, 255, 0.31)",
                              "input::placeholder": {
                                color: "white",
                              },
                              ".MuiSelect-select": {
                                color: "white",
                                px: "10px",
                                py: "1px",
                              },
                              border: "1px solid",
                              borderColor: "rgba(255, 255, 255, 0.63)",
                              width: "100%",
                            }}
                            value={genderText}
                            // value = "male"
                            onChange={(e) => setGenderText(e.target.value)}
                          >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                          </TextField>
                          <IconButton
                            onClick={handleSaveGenderClick}
                            sx={{ color: "white" }}
                          >
                            <CheckOutlinedIcon />
                          </IconButton>
                          <IconButton
                            onClick={handleCancelGenderClick}
                            sx={{ color: "white" }}
                          >
                            <CancelIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <div>
                          <span
                            style={{
                              color: "white",
                              fontSize: 15,
                              fontWeight: 600,
                              wordWrap: "break-word",
                            }}
                          >
                            {originalGenderText}
                          </span>

                          <IconButton
                            onClick={handleEditGenderClick}
                            sx={{ color: "white" }}
                          >
                            <EditIcon />
                          </IconButton>
                        </div>
                      )}
                    </div>

                    {/* <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,F
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Male
                </Typography> */}
                  </Box>
                  <Box
                    sx={{
                      height: "10vh",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#848383",
                        fontSize: 18,
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Mobile No.
                    </Typography>

                    {/* Mobile Field */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {mobileEditing ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            type="text"
                            variant="standard"
                            sx={{
                              "input::placeholder": {
                                color: "white",
                              },
                              input: {
                                backgroundColor: "rgba(255, 255, 255, 0.31)",
                                color: "white",
                                py: "1px",
                                px: "10px",
                              },
                              border: "1px solid",
                              borderColor: "rgba(255, 255, 255, 0.63)",
                              width: "13rem",
                            }}
                            value={mobileText}
                            inputRef={mobileRef}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleSaveMobileClick();
                              }
                              if (e.key === "Escape") {
                                handleCancelMobileClick();
                              }
                              if (e.key === ".") {
                                return e.preventDefault();
                              }
                            }}
                            onChange={(e) => {
                              if (
                                !isNaN(Number(e.target.value)) &&
                                e.target.value.length <= 11
                              ) {
                                setMobileText(e.target.value);
                                setMobileError(false);
                              }
                            }}
                            error={mobileError}
                            helperText={
                              mobileError ? "Phone number is not valid" : ""
                            }
                          />
                          <IconButton
                            onClick={handleSaveMobileClick}
                            sx={{ color: "white" }}
                            disabled={mobileLoading}
                          >
                            {mobileLoading ? (
                              <CircularProgress color="error" />
                            ) : (
                              <CheckOutlinedIcon />
                            )}
                          </IconButton>
                          <IconButton
                            onClick={handleCancelMobileClick}
                            sx={{ color: "white" }}
                            disabled={mobileLoading}
                          >
                            <CancelIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <div>
                          <span
                            style={{
                              color: "white",
                              fontSize: 15,
                              fontWeight: 600,
                              wordWrap: "break-word",
                            }}
                          >
                            {originalMobileText}
                          </span>

                          <IconButton
                            onClick={handleEditMobileClick}
                            sx={{ color: "white" }}
                          >
                            <EditIcon />
                          </IconButton>
                        </div>
                      )}
                    </div>

                    {/* <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  +2010000000
                </Typography> */}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      height: "10vh",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#848383",
                        fontSize: 18,
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Address
                    </Typography>

                    {/* Address Field */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {addressEditing ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            sx={{
                              backgroundColor: "rgba(255, 255, 255, 0.31)",
                              "input::placeholder": {
                                color: "white",
                              },
                              input: {
                                color: "white",
                                px: "10px",
                                py: "1px",
                              },
                              border: "1px solid",
                              borderColor: "rgba(255, 255, 255, 0.63)",
                              width: "15rem",
                            }}
                            value={addressText}
                            onChange={(e) => {
                              setAddressText(e.target.value);
                              setAddressError(false);
                            }}
                            error={addressError}
                            helperText={addressError ? "Invalid Address" : ""}
                          />
                          <IconButton
                            onClick={handleSaveAddressClick}
                            sx={{ color: "white" }}
                          >
                            <CheckOutlinedIcon />
                          </IconButton>
                          <IconButton
                            onClick={handleCancelAddressClick}
                            sx={{ color: "white" }}
                          >
                            <CancelIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <div>
                          <span
                            style={{
                              color: "white",
                              fontSize: 15,
                              fontWeight: 600,
                              wordWrap: "break-word",
                            }}
                          >
                            {originalAddressText}
                          </span>

                          <IconButton
                            onClick={handleEditAddressClick}
                            sx={{ color: "white" }}
                          >
                            <EditIcon />
                          </IconButton>
                        </div>
                      )}
                    </div>
                  </Box>
                </Box>
              </Box>
            </Box>
          </CustomTabPanel>
          {/* event part */}
          <CustomTabPanel value={value} index={1}>
            <Grid
              item
              xs={12}
              sm={12}
              lg={8}
              sx={{
                zIndex: 1,
                position: "relative",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "column",
                // gap: 10,
                minHeight: "100vh",
              }}
            >
              {bookingLoading ? (
                <CircularProgress
                  size={64}
                  thickness={1}
                  sx={{ color: "red" }}
                />
              ) : currentBookings ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "column",
                    gap: 4,
                    width: { xs: "100%", sm: "51%" },
                  }}
                >
                  <Box
                    sx={{
                      //   height: "10vh",
                      background: "rgba(247.56, 247.56, 247.56, 0.21)",
                      display: "flex",
                      alignItems: "center",
                      padding: "1rem",
                      borderRadius: "10px",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Box
                        component="img"
                        src={`${dbStorage}${currentBookings?.event?.image}`}
                        alt=""
                        sx={{
                          height: "6rem",
                          width: "6rem",
                        }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              color: "white",
                              fontSize: 18,
                              fontWeight: "700",
                              wordWrap: "break-word",
                              display: { xs: "none", sm: "block" },
                            }}
                          >
                            Electronic Steve-Music Festival
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: { xs: 0.5, sm: 3 },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Box>
                              <CalendarTodayIcon
                                sx={{ color: "white", fontSize: "20px" }}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Box>
                                <Typography
                                  sx={{
                                    color: "white",
                                    fontSize: 12,
                                    fontWeight: "400",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  {currentBookings?.event?.startDate
                                    ? new Date(
                                        currentBookings.event.startDate
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })
                                    : "N/A"}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  sx={{
                                    color: "white",
                                    fontSize: 9,
                                    fontWeight: "400",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  {currentBookings?.event?.startDate
                                    ? new Date(
                                        currentBookings.event.startDate
                                      ).toLocaleDateString("en-US", {
                                        weekday: "long",
                                        hour: "numeric",
                                        minute: "numeric",
                                      })
                                    : "N/A"}{" "}
                                  -{" "}
                                  {currentBookings?.event?.endDate
                                    ? new Date(
                                        currentBookings.event.endDate
                                      ).toLocaleDateString("en-US", {
                                        weekday: "long",
                                        hour: "numeric",
                                        minute: "numeric",
                                      })
                                    : "N/A"}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Box>
                              <PlaceIcon
                                sx={{ color: "white", fontSize: "20px" }}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Box>
                                <Typography
                                  sx={{
                                    color: "white",
                                    fontSize: 12,
                                    fontWeight: "400",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  {
                                    currentBookings?.event?.location?.address?.split(
                                      ","
                                    )[1]
                                  }
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  sx={{
                                    color: "white",
                                    fontSize: 9,
                                    fontWeight: "400",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  {currentBookings?.event?.location?.address}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      {currentBookings?.status === BookingStatus.APPROVED && (
                        <LoadingButton
                          variant="contained"
                          loading={paymentLoading}
                          sx={{
                            color: "white",
                            fontSize: 13,
                            fontWeight: "600",
                            wordWrap: "break-word",
                            backgroundColor: "red",
                            display: { xs: "block", sm: "none", lg: "none" },
                          }}
                          onClick={() => {
                            if (currentBookings?.isPaid === false) {
                              // navigate(`payment/${currentBookings?.id}`);
                              validateAvailableRedirect();
                            } else {
                              navigate(
                                `/dashboard/ticket/${currentBookings?.id}`
                              );
                            }
                          }}
                        >
                          {/*  */}
                          {currentBookings?.isPaid === true
                            ? "VIEW TICKET"
                            : "Pay Now"}
                        </LoadingButton>
                      )}
                      {currentBookings?.isPaid === false && (
                        <Button
                          variant="contained"
                          sx={{
                            color: "white",
                            fontSize: 13,
                            fontWeight: "600",
                            wordWrap: "break-word",
                            backgroundColor: "red",
                            display: { xs: "block", sm: "none", lg: "none" },
                          }}
                          onClick={() => {
                            removeBookings();
                          }}
                        >
                          Cancel Booking
                        </Button>
                      )}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#A19F9F",
                        fontSize: 14,
                        fontWeight: "600",
                        wordWrap: "break-word",
                      }}
                    >
                      Accompanied Guests
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                      }}
                    >
                      <AvatarGroup
                        total={currentCompanions.length}
                        sx={{
                          "& .MuiAvatar-root": {
                            width: 35,
                            height: 35,
                            fontSize: 10,
                            color: "black",
                            border: "1px solid white",
                            backgroundColor: 'darkgrey" , borderColor',
                          },
                        }}
                      >
                        {currentCompanions.map((companion) => (
                          <Avatar
                            key={companion.bookingGuestId}
                            src={`${dbStorage}${companion.guest?.guest_avatar}`}
                          />
                        ))}
                      </AvatarGroup>

                      <Box
                        sx={{
                          backgroundColor: "red",
                          display: "flex",
                          alignItems: "center",
                          px: "8px",
                          py: "5px",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 11,
                            wordWrap: "break-word",
                            color: "black",
                          }}
                        >
                          Total :{" "}
                          <span style={{ fontSize: "12px", fontWeight: "700" }}>
                            {currentCompanions.length}
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "flex", sm: "grid" },
                      flexDirection: { xs: "column", sm: "" },
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: { xs: 1, sm: 2 },
                      // justifyContent: {xs:'center',sm:""}
                    }}
                  >
                    {currentCompanions.map((companion) => (
                      <Box
                        key={companion.bookingGuestId}
                        sx={{
                          backgroundColor: "#333333",
                          display: "flex",
                          borderRadius: "5px",
                          p: 1.5,
                          paddingRight: 0,
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                          }}
                        >
                          <Avatar
                            key={companion.bookingGuestId}
                            src={`${dbStorage}${companion.guest?.guest_avatar}`}
                          />
                          <Box>
                            <Typography
                              sx={{
                                color: "white",
                                fontSize: 14,
                                fontWeight: "500",
                                wordWrap: "break-word",
                              }}
                            >
                              {companion.guest?.name
                                ? companion.guest.name
                                : companion.guestName}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#A4A4A4",
                                fontSize: 11,
                                fontWeight: "400",
                                wordWrap: "break-word",
                              }}
                            >
                              {companion?.event?.startDate
                                ? new Date(
                                    companion.event.startDate
                                  ).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  })
                                : "N/A"}
                            </Typography>
                          </Box>
                        </Box>
                        {!companion.bookingGuestId && (
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "red",
                              fontSize: "12px",
                              px: 2,
                              maxWidth: 0,
                              maxHeight: 30,
                              mr: 3,
                            }}
                            onClick={() => {
                              sendSmsToUser(
                                companion.phone_number,
                                `Hi ${companion.guestName} ${user.name} is inviting you to ULTER : http://localhost:3000/login/?id=${companion.id}`
                              );
                            }}
                          >
                            Invite
                          </Button>
                        )}
                        {/* <Box>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? "long-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon sx={{ color: "white" }} />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          MenuListProps={{
                            "aria-labelledby": "long-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: "20ch",
                            },
                          }}
                        >
                          {options.map((option) => (
                            <MenuItem
                              key={option}
                              selected={option === "Pyxis"}
                              onClick={handleClose}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box> */}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "column",
                  }}
                >
                  {/* <CircularProgress
                size={64}
                thickness={2}
                sx={{ color: "red" }}
              /> */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "600",
                            wordWrap: "break-word",
                          }}
                        >
                          My Bookings
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          //   height: "10vh",
                          background: "rgba(247.56, 247.56, 247.56, 0.21)",
                          display: "flex",
                          alignItems: "center",
                          padding: "1rem",
                          borderRadius: "10px",
                          gap: 2,
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Typography color={"white"}>
                            You have No Current Bookings
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              color: "white",
                              fontSize: 13,
                              fontWeight: "600",
                              wordWrap: "break-word",
                              backgroundColor: "red",
                              display: { xs: "block", sm: "none", lg: "none" },
                            }}
                          >
                            Book Now
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
            </Grid>
          </CustomTabPanel>

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
        </Box>
      )}
      <OTP
        open={otpOpen.open}
        phoneNumber={mobileText}
        handleSuccessfulOTP={async () => {
          try {
            let UpdatedGuest = await updateGuest({
              userID: user?.id,
              email: user?.email,
              name: user?.name,
              phone_number: mobileText,
              birthdate: user?.birthdate,
              gender: user?.gender,
            });
            dispatch(setLogin({ user: UpdatedGuest }));
            setOriginalMobileText(mobileText);
            setMobileError(false);
            setMobileEditing(false);
          } catch (err) {
            console.log(err);
            setMessage("Error updating phone number");
          } finally {
            setOpenOTP({ open: false, phoneNumber: "", checkCode: undefined });
            setMobileLoading(false);
          }
        }}
        checkCode={otpOpen.checkCode}
        onClose={() => {
          setOpenOTP({ open: false, phoneNumber: "", checkCode: undefined });
          setMobileLoading(false);
        }}
      />
    </>
  );
}
