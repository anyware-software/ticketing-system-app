import React, { useEffect, useState } from "react";
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
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CancelIcon from "@mui/icons-material/Cancel";
import updateGuest from "../../services/updateGuest";
import { setLogin } from "../../state";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { original } from "@reduxjs/toolkit";
import { BookingStatus } from "../../constants/Enums";
import updateBooking from "../../services/updateBooking";
import getBooking from "../../services/getBooking";

const options = ["Choice 1", "Choice 2", "Choice 3"];

const ITEM_HEIGHT = 48;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(0);
  const user = useSelector((state: any) => state.app.user);

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
  const mobileRegex = /^(010|011|012|015)\d{8}$/;
  const [mobileError, setMobileError] = useState(false);

  const handleEditMobileClick = () => {
    setMobileEditing(true);
  };
  const handleSaveMobileClick = async () => {
    // setOriginalMobileText(mobileText);
    // setMobileEditing(false);
    try {
      if (!mobileRegex.test(mobileText)) {
        setMobileError(true);
        return;
      }
      let UpdatedGuest = await updateGuest({
        userID: user?.id,
        email: user?.email,
        name: user?.name,
        phone_number: mobileText,
        birthdate: user?.birthdate,
        gender: user?.gender,
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
      setOriginalMobileText(genderText);
      setMobileError(false);
      setMobileEditing(false);
    } catch (error) {
      console.error("Error updating BirthDate:", error);
    }
  };
  const handleCancelMobileClick = () => {
    setMobileText(originalMobileText);
    setMobileEditing(false);
    setMobileError(false);
  };
  useEffect(() => {
    if (!user) return;
    setMobileText(user.phone_number);
    setOriginalMobileText(user.phone_number);
  }, [user]);
  //Mobile Edit
  //----------------------------------------------------------------

  return (
    <>
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
                    height: "11vh",
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
                            backgroundColor: "rgba(255, 255, 255, 0.31)",
                            "input::placeholder": {
                              color: "white",
                            },
                            input: {
                              color: "white",
                              padding:'10px',
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
                          helperText={emailError ? "Invalid email address" : ""}
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
                            fontSize: 18,
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
                    height: "11vh",
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
                              padding:'10px',
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
                            fontSize: 18,
                            fontWeight: 600,
                            wordWrap: "break-word",
                          }}
                        >
                          {originalBirthText}
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
                    height: "11vh",
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
                              padding:'10px',
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
                            fontSize: 18,
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
                    height: "11vh",
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
                          type="number"
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.31)",
                            "input::placeholder": {
                              color: "white",
                            },
                            input: {
                              color: "white",
                              padding:'10px',
                            },
                            border: "1px solid",
                            borderColor: "rgba(255, 255, 255, 0.63)",
                            width: "13rem",
                          }}
                          value={mobileText}
                          onChange={(e) => {
                            setMobileText(e.target.value);
                            setMobileError(false);
                          }}
                          error={mobileError}
                          helperText={
                            mobileError ? "Phone number is not valid" : ""
                          }
                        />
                        <IconButton
                          onClick={handleSaveMobileClick}
                          sx={{ color: "white" }}
                        >
                          <CheckOutlinedIcon />
                        </IconButton>
                        <IconButton
                          onClick={handleCancelMobileClick}
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
                            fontSize: 18,
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
                    height: "15vh",
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
                              padding:'10px',
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
                            fontSize: 18,
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
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // gap: 10,
            }}
          >
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

                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <img src="../../../Images/eventAvatar.png" alt="" />
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
                            14 December, 2021
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
                            Tuesday, 4:00PM - 9:00PM
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
                        <PlaceIcon sx={{ color: "white", fontSize: "20px" }} />
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
                            Gala Convention Center
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
                            36 Guild Street London, UK
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      fontSize: 13,
                      fontWeight: "600",
                      wordWrap: "break-word",
                      backgroundColor: "#F0635A",
                      display: { xs: "none", sm: "none", lg: "block" },
                    }}
                  >
                    VIEW TICKET(S)
                  </Button>
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
                    total={44}
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
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="/static/images/avatar/4.jpg"
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src="/static/images/avatar/5.jpg"
                    />
                  </AvatarGroup>

                  <Box
                    sx={{
                      backgroundColor: "#EE726A",
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
                        44
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
                {/* Friend Attends */}
                <Box
                  sx={{
                    backgroundColor: "#333333",
                    display: "flex",
                    borderRadius: "5px",
                    p: 1.5,
                    paddingRight: 0,
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        Ahmed Selim
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A4A4A4",
                          fontSize: 11,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        6 Sep 2023, 9:00 pm
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
                  </Box>
                </Box>
                {/* Friend Attends */}
                <Box
                  sx={{
                    backgroundColor: "#333333",
                    display: "flex",
                    borderRadius: "5px",
                    p: 1.5,
                    paddingRight: 0,
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        Ahmed Selim
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A4A4A4",
                          fontSize: 11,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        6 Sep 2023, 9:00 pm
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
                  </Box>
                </Box>
                {/* Friend Attends */}
                <Box
                  sx={{
                    backgroundColor: "#333333",
                    display: "flex",
                    borderRadius: "5px",
                    p: 1.5,
                    paddingRight: 0,
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        Ahmed Selim
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A4A4A4",
                          fontSize: 11,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        6 Sep 2023, 9:00 pm
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
                  </Box>
                </Box>
                {/* Friend Attends */}
                <Box
                  sx={{
                    backgroundColor: "#333333",
                    display: "flex",
                    borderRadius: "5px",
                    p: 1.5,
                    paddingRight: 0,
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        Ahmed Selim
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A4A4A4",
                          fontSize: 11,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        6 Sep 2023, 9:00 pm
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
                  </Box>
                </Box>
                {/* Friend Attends */}
                <Box
                  sx={{
                    backgroundColor: "#333333",
                    display: "flex",
                    borderRadius: "5px",
                    p: 1.5,
                    paddingRight: 0,
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        Ahmed Selim
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A4A4A4",
                          fontSize: 11,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        6 Sep 2023, 9:00 pm
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
                  </Box>
                </Box>
                {/* Friend Attends */}
                <Box
                  sx={{
                    backgroundColor: "#333333",
                    display: "flex",
                    borderRadius: "5px",
                    p: 1.5,
                    paddingRight: 0,
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        Ahmed Selim
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A4A4A4",
                          fontSize: 11,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        6 Sep 2023, 9:00 pm
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
                  </Box>
                </Box>
                {/* Friend Attends */}
                <Box
                  sx={{
                    backgroundColor: "#333333",
                    display: "flex",
                    borderRadius: "5px",
                    p: 1.5,
                    paddingRight: 0,
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        Ahmed Selim
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A4A4A4",
                          fontSize: 11,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        6 Sep 2023, 9:00 pm
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
                  </Box>
                </Box>
                {/* Friend Attends */}
                <Box
                  sx={{
                    backgroundColor: "#333333",
                    display: "flex",
                    borderRadius: "5px",
                    p: 1.5,
                    paddingRight: 0,
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
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
                        Ahmed Selim
                      </Typography>
                      <Typography
                        sx={{
                          color: "#A4A4A4",
                          fontSize: 11,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        6 Sep 2023, 9:00 pm
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </CustomTabPanel>
      </Box>
    </>
  );
}
