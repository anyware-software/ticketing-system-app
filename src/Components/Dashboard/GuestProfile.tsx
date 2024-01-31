import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
import MobileViewTabs from "./MobileViewTabs";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchUserAttributes } from "aws-amplify/auth";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import updateGuest from "../../services/updateGuest";
import { setLogin } from "../../state";
// import { Storage } from "aws-amplify";
import { uploadData } from "aws-amplify/storage";
import { getUrl } from "aws-amplify/storage";
import { BookingStatus, dbStorage } from "../../constants/Enums";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { remove } from "aws-amplify/storage";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import Tooltip from "@mui/material/Tooltip";
import { listGuests } from "../../services/getOperations";
import { Guest } from "../../API";
import {
  Checkbox,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Skeleton from "@mui/material/Skeleton";
import getBooking from "../../services/getBooking";
import updateBooking from "../../services/updateBooking";

const options = ["Choice 1", "Choice 2", "Choice 3", "Choice 4", "Choice 5"];

const ITEM_HEIGHT = 48;

interface MyObject {
  name: string;
  id: string;
}

// const initialState = {
//   image: null,
// };

// interface FormData {
//   image: any;
// }
// interface FormDataProps {
//   image?: string | undefined | null;
// }

type props = {
  toggleDrawer: any;
  openSideNav: boolean;
};

export default function GuestProfile({ toggleDrawer, openSideNav }: props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [avatarLoading, SetAvatarLoading] = useState(false);

  const user = useSelector((state: any) => state.app.user);

  useEffect(() => {
    const handdleUpdateBooking = async () => {
      const storedBookingId = localStorage.getItem("eventBooking");
      console.log(storedBookingId);
      if (storedBookingId) {
        const booking = await getBooking(storedBookingId);
        await updateGuest({
          phone_number:booking.phone_number
        })
        // console.log(booking);
        // console.log(user.id);
        await updateBooking({
          eventBookingID: storedBookingId,
          bookingGuestId: user.id,
          status: BookingStatus.PENDING,
        });
        localStorage.removeItem("eventBooking");
      } else {
        localStorage.removeItem("eventBooking");
      }
    };
    handdleUpdateBooking();
  }, []);

  useEffect(() => {
    if (!user) return;
    async function getFriends() {
      const userdata = await fetchUserAttributes();
      // console.log(userdata);
      const accessToken = userdata.profile;
      axios
        .get(
          `https://graph.facebook.com/me/friends?access_token=${accessToken}`
        )
        .then(async (response) => {
          // console.log("User Friends : ");
          // console.log(response.data.data.map((item: MyObject) => item.name));
          // console.log(response.data.data.map((item: MyObject) => item.id));
          let faceBookIDs = response.data.data.map((item: MyObject) => item.id);
          let friends: Guest[] = await listGuests({ faceBookIDs });
          let connections = JSON.stringify(
            friends.map((friend) => {
              return {
                id: friend.id,
                image: friend.guest_avatar,
                name: friend.name,
                group: friend.group,
                phone_number: friend.phone_number,
              };
            })
          );

          async function updateConnections() {
            try {
              await updateGuest({
                userID: user?.id,
                email: user?.email,
                name: user?.name,
                phone_number: user?.phone_number,
                birthdate: user?.birthdate,
                gender: user?.gender,
                guest_avatar: user?.guest_avatar,
                connections,
              });

              // let UpdatedGuest = await updateGuest(
              //   updatedData.userID,
              //   updatedData.email,
              //   updatedData.name,
              //   updatedData.phone_number,
              //   updatedData.birthdate,
              //   updatedData.gender,
              //   updatedData.guest_avatar,
              //   updatedData.connections
              // );
              // console.log(UpdatedGuest);

              // dispatch(setLogin({ user: UpdatedGuest }));
            } catch (error) {
              console.error("Error updating Connections:", error);
            }
          }
          updateConnections();
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getFriends();
  }, [user]);
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
    if (!isDateValid(birthText)) {
      console.error("Invalid or future date selected.");
      setBirthDateError(true);
      return;
    }
    // setOriginalBirthText(birthText);
    // setBirthEditing(false);
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
  //image part
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const result = await uploadImage(file);
        // console.log(`${result}`);
        setSelectedImage(`${dbStorage}${result}`);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    }
  };
  const [validationWarning, setValidationWarning] = useState<boolean>(false);
  const [message, setMessage] = useState<any>("");
  const uploadImage = async (file: File) => {
    try {
      SetAvatarLoading(true);
      const result = await uploadData({
        key: `${new Date().getTime()}-${file.name.replace(/\s/g, "-")}`,
        data: file,
        options: {
          accessLevel: "guest",
        },
      }).result;
      // console.log("Succeeded uploading image: ", result);
      if (!user?.images || user.images.length < 4) {
        try {
          let UpdatedGuest = await updateGuest({
            userID: user?.id,
            email: user?.email,
            name: user?.name,
            phone_number: user?.phone_number,
            birthdate: user?.birthdate,
            gender: user?.gender,
            guest_avatar: result.key,
            connections: user?.connections,
            images: user?.images ? [...user.images, result.key] : [result.key],
          });
          // console.log(updatedData);
          // let UpdatedGuest = await updateGuest(
          //   updatedData.userID,
          //   updatedData.email,
          //   updatedData.name,
          //   updatedData.phone_number,
          //   updatedData.birthdate,
          //   updatedData.gender,
          //   updatedData.guest_avatar,
          //   updatedData.connections,
          //   updatedData.images
          // );
          console.log(UpdatedGuest);
          dispatch(setLogin({ user: UpdatedGuest }));
          SetAvatarLoading(false);
        } catch (error) {
          console.error("Error updating Images:", error);
        }
      } else {
        console.log("you got 3 images remove one and replace it");
        setValidationWarning(true);
        setMessage("You need to replace one of your images to upload new one");
      }
      //removing images
      // try {
      //   await remove({ key: `${dbStorage}${user?.guest_avatar}` });
      //   console.log("Done deleting old image :)");
      // } catch (error) {
      //   console.log("Error while deleting old image :", error);
      // }
      return result.key;
    } catch (error) {
      console.log("Error uploading image: ", error);
      throw error;
    }
  };
  const deleteUserPhoto = async (index: any, photo: any) => {
    const updatedImages = [...user.images];
    // console.log(index);
    if (updatedImages.length !== 0) {
      updatedImages.splice(index, 1);
      // console.log(updatedImages);
      try {
        let UpdatedGuest = await updateGuest({
          userID: user?.id,
          email: user?.email,
          name: user?.name,
          phone_number: user?.phone_number,
          birthdate: user?.birthdate,
          gender: user?.gender,
          guest_avatar: user?.guest_avatar,
          connections: user?.connections,
          images: updatedImages,
        });
        // console.log(updatedData);
        // let UpdatedGuest = await updateGuest(
        //   updatedData.userID,
        //   updatedData.email,
        //   updatedData.name,
        //   updatedData.phone_number,
        //   updatedData.birthdate,
        //   updatedData.gender,
        //   updatedData.guest_avatar,
        //   updatedData.connections,
        //   updatedData.images
        // );
        console.log(UpdatedGuest);
        dispatch(setLogin({ user: UpdatedGuest }));
      } catch (error) {
        console.error("Error updating Images:", error);
      }
      //removing images
      try {
        await remove({ key: `${dbStorage}${photo}` });
        console.log("Done deleting old image :)");
      } catch (error) {
        console.log("Error while deleting old image :", error);
      }
    }
  };

  const changeUserPhoto = async (photo: any) => {
    try {
      let UpdatedGuest = await updateGuest({
        userID: user?.id,
        email: user?.email,
        name: user?.name,
        phone_number: user?.phone_number,
        birthdate: user?.birthdate,
        gender: user?.gender,
        guest_avatar: photo,
      });
      // console.log(updatedData);
      // let UpdatedGuest = await updateGuest(
      //   updatedData.userID,
      //   updatedData.email,
      //   updatedData.name,
      //   updatedData.phone_number,
      //   updatedData.birthdate,
      //   updatedData.gender,
      //   updatedData.guest_avatar
      // );
      console.log(UpdatedGuest);
      dispatch(setLogin({ user: UpdatedGuest }));
    } catch (error) {
      console.error("Error updating Images:", error);
    }
  };
  //image part
  //----------------------------------------------------------------
  let connections = JSON.parse(user?.connections || "[]");

  return (
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
      <Grid
        container
        spacing={2}
        sx={{
          overflow: { xs: "auto", sm: "" },
          flexGrow: 1,
          display: "flex",
          alignItems: "end",
          // marginTop:'2vh'
          marginTop: { xs: "5vh", sm: "10vh", l: "0vh" },
          marginLeft: { xs: "0rem", sm: "1rem", l: "2rem" },
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: { xs: 1, sm: 0 },
            // marginTop: { xs: "5vh", sm: "10vh", l: "0vh" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box>
              <IconButton
                onClick={toggleDrawer}
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                <ChevronLeftIcon sx={{ color: "white", fontSize: "40px" }} />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 0, sm: 2 },
                flexGrow: 1,
                marginRight: { xs: "6.5rem", sm: "0rem" },
              }}
            >
              {avatarLoading ? (
                <Skeleton
                  variant="circular"
                  animation="pulse"
                  width="10rem"
                  height="10rem"
                  sx={{
                    backgroundColor: "gray",
                    display: "inline-block",
                  }}
                />
              ) : (
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    id="imageInput"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <label
                    htmlFor="imageInput"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ position: "relative" }}
                  >
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                      {selectedImage ? (
                        <img
                          // src={selectedImage}
                          src={`${dbStorage}${user?.guest_avatar}`}
                          style={{
                            width: "10rem",
                            height: "10rem",
                            borderRadius: "50%",
                            marginLeft: "1rem",
                            cursor: "pointer",
                          }}
                          alt="unknownUser"
                        />
                      ) : (
                        <img
                          src={
                            user?.guest_avatar
                              ? `${dbStorage}${user?.guest_avatar}`
                              : "../../../Images/unknownUser.png"
                          }
                          style={{
                            width: "10rem",
                            height: "10rem",
                            borderRadius: "50%",
                            marginLeft: "1rem",
                            cursor: "pointer",
                            position: "relative",
                          }}
                          alt="unknownUser"
                        />
                      )}
                      {isHovered && (
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "10rem",
                            height: "10rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "50%",
                            color: "white",
                            fontSize: "1.5rem",
                            opacity: 0.9,
                            transition: "opacity 0.3s",
                            zIndex: 1,
                            marginLeft: "1rem",
                            cursor: "pointer",
                          }}
                        >
                          Upload Photo
                        </div>
                      )}
                    </Box>
                  </label>
                </div>
              )}

              <Box>
                <AvatarGroup
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
                  {[...Array(Math.max(4, user?.images?.length || 0))].map(
                    (_, index) => {
                      const photo = user?.images?.[index] || "";
                      return (
                        <Tooltip
                          key={index}
                          placement="bottom"
                          title={
                            <>
                              <Box
                                sx={{
                                  display: "flex",
                                  gap: 2,
                                  p: 1,
                                }}
                              >
                                {photo !== "" && (
                                  <Button
                                    onClick={() => changeUserPhoto(photo)}
                                    sx={{
                                      color: "white",
                                      backgroundColor: "#EB5757",
                                      border: 0,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Select Photo
                                  </Button>
                                )}
                                {photo !== "" && (
                                  <Button
                                    onClick={() =>
                                      deleteUserPhoto(index, photo)
                                    }
                                    sx={{
                                      color: "white",
                                      backgroundColor: "#EB5757",
                                      border: 0,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Delete
                                  </Button>
                                )}
                                {photo === "" && (
                                  <Button
                                    onClick={() => {
                                      const inputElement =
                                        document.getElementById(
                                          "imageInput"
                                        ) as HTMLInputElement;
                                      inputElement?.click();
                                    }}
                                    sx={{
                                      color: "white",
                                      backgroundColor: "#EB5757",
                                      border: 0,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Upload Photo
                                  </Button>
                                )}
                              </Box>
                            </>
                          }
                        >
                          <Avatar alt={photo || ""} src={dbStorage + photo} />
                        </Tooltip>
                      );
                    }
                  )}
                </AvatarGroup>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "19px",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      my: 1,
                    }}
                  >
                    {user?.name &&
                      user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                  </Typography>
                  {user?.isVerified && (
                    <Tooltip title="Verified User" placement="bottom">
                      <VerifiedIcon sx={{ color: "#49adf4" }} />
                    </Tooltip>
                  )}
                </Box>

                {user?.avg_ticket_type === "VIP" && (
                  <Box
                    sx={{
                      backgroundColor: "#62b58f",
                      color: "white",
                      borderRadius: "5px",
                      display: { xs: "flex", sm: "none" },
                      justifyContent: "center",
                      width: "5rem",
                      marginBottom: 5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        color: "black",
                      }}
                    >
                      VIP
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AvatarGroup
                  max={connections?.length}
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
                  {connections.map((friend: any) => (
                    <Avatar
                      key={friend.id}
                      alt={friend.name || ""}
                      src={dbStorage + friend.image}
                    />
                  ))}
                </AvatarGroup>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "600",
                    wordWrap: "break-word",
                    fontSize: "22px",
                  }}
                >
                  {connections?.length}
                </Typography>
              </Box>
              <Typography
                style={{
                  color: "#8684FF",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  fontSize: "16px",
                }}
              >
                Connections
              </Typography>
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "white" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AvatarGroup
                  // max={4}
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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </AvatarGroup>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "600",
                    wordWrap: "break-word",
                    fontSize: "22px",
                  }}
                >
                  2
                </Typography>
              </Box>
              <Typography
                style={{
                  color: "#8684FF",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  fontSize: "16px",
                }}
              >
                Events Attended
              </Typography>
            </Box>
          </Box>

          <MobileViewTabs />

          <Box
            sx={{
              width: { xs: "90%", sm: "80%" },
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 2,
              marginTop: { xs: "2vh", sm: "0vh" },
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              About Info
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: { sm: "12vh", xl: "10vh" },
              }}
            >
              <Box>
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
                          },
                          border: "1px solid",
                          borderColor: "rgba(255, 255, 255, 0.63)",
                          width: "18rem",
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
              <Box>
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
                          },
                          border: "1px solid",
                          borderColor: "rgba(255, 255, 255, 0.63)",
                          width: "100%",
                        }}
                        value={birthText}
                        // onChange={(e) => setBirthText(e.target.value)}
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
                height: { sm: "12vh", xl: "10vh" },
              }}
            >
              <Box>
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
                          input: {
                            color: "white",
                          },
                          border: "1px solid",
                          borderColor: "rgba(255, 255, 255, 0.63)",
                          width: "15rem",
                        }}
                        value={genderText}
                        // value = "male"
                        onChange={(e) => setGenderText(e.target.value)}
                        SelectProps={{
                          renderValue: (value: any) => (
                            <div style={{ color: "white" }}>{value}</div>
                          ),
                        }}
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
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Male
                </Typography> */}
              </Box>
              <Box>
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
                height: { sm: "12vh", xl: "10vh" },
              }}
            >
              <Box>
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
                          },
                          border: "1px solid",
                          borderColor: "rgba(255, 255, 255, 0.63)",
                          width: "18rem",
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
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          sx={{
            zIndex: 1,
            position: "relative",
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: { sm: "center", lg: "start" },
            flexDirection: "column",
            // height: "90%",
            // marginTop: { xs: "5vh", sm: "10vh", l: "0vh" },
            // gap: 10,
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
                    display: { xs: "none", sm: "block", lg: "block" },
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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
                gap: 1,
                // justifyContent: {xs:'center',sm:""}
                width: { xs: "90%", sm: "%" },
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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

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

        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          sx={{
            zIndex: 1,
            position: "relative",
            display: { xs: "none", sm: "flex" },
            // flexDirection: "column",
            // alignItems: "end",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              py: 1,
            }}
          >
            <img src="../../../Images/anyware.png" alt="" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
