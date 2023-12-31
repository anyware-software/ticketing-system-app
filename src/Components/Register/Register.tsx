import React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Register() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [selectedDate, setSelectedDate] = React.useState<string>("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };
  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numeric input
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  };
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
          // position="static"
          sx={{
            zIndex: 1,
            position: "relative",
            backgroundColor: "transparent",
            border: 0,
            boxShadow: "none",
            alignItems: { xs: "center", sm: "start" },
            justifyContent: { xs: "end", sm: "start" },
            height: "10vh",
            // display: { xs: "none", sm: "flex" },
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                mx: 5,
                mt: 3,
                display: { xs: "none", sm: "flex" },
              }}
            >
              <img
                src="https://ulter.events/assets/images/ulter-logo-white.png"
                style={{ height: "3vh" }}
                alt=""
              />
            </Box>
            <Box
              sx={{
                mx: 5,
                mt: 3,
                display: { xs: "flex", sm: "none" },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "24px",
                  display: { xs: "flex", sm: "none" },
                }}
              >
                Sign up
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>

        <Grid container spacing={2} sx={{ overflow: "hidden", flexGrow: 1 }}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            sx={{
              zIndex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                width: { xs: "90%", sm: "auto" },
                
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                  xs: { display: "none" },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#4f4f4f",
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                    py: 1,
                    border: "1px solid",
                    borderColor: "#e8e8e8",
                    px: 1.5,
                  }}
                >
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "#4f4f4f",
                      border: 0,
                      px: 5,
                      fontWeight: "bold",
                    }}
                    onClick={handleButtonClick}
                  >
                    SIGN IN
                  </Button>
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "#EB5757",
                      border: 0,
                      fontWeight: "bold",
                      px: 5,
                    }}
                  >
                    REGISTER
                  </Button>
                </Box>
              </Box>

              <Box
                defaultValue=""
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 2, sm: 0 },
                }}
              >
                {/* <Typography
                  sx={{
                    color: "white",
                    my: 1,
                    fontWeight: "700",
                    display: { xs: "flex", sm: "none" },
                  }}
                >
                  Sign in
                </Typography> */}
                <Typography
                  sx={{
                    color: "white",
                    my: 1,
                    fontWeight: "700",
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  User name
                </Typography>
                <TextField
                  id="username"
                  placeholder="Type your Username"
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
                />

                <Typography
                  sx={{
                    color: "white",
                    my: 1,
                    fontWeight: "700",
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  Email address
                </Typography>
                <TextField
                  id="email"
                  placeholder="Type your Email Address"
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
                />

                <Box>
                  <FormControl sx={{ color: "white", marginTop: "0.5vh" }}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      defaultValue={"male"}
                    >
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            sx={{
                              "&.Mui-checked": { color: "blue" },
                              "&:not(.Mui-checked)": { color: "white" },
                            }}
                          />
                        }
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={
                          <Radio
                            sx={{
                              "&.Mui-checked": { color: "red" },
                              "&:not(.Mui-checked)": { color: "white" },
                            }}
                          />
                        }
                        label="Female"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    gap: 3,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        my: 1,
                        fontWeight: "700",
                        display: { xs: "none", sm: "flex" },
                      }}
                    >
                      Mobile
                    </Typography>
                    <TextField
                      id="phone"
                      placeholder="+20100000000"
                      type="text"
                      onInput={handlePhoneInput}
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
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        my: 1,
                        fontWeight: "700",
                        display: { xs: "none", sm: "flex" },
                      }}
                    >
                      Birth date
                    </Typography>
                    <TextField
                      id="date"
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
                      value={selectedDate}
                      onChange={handleDateChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </Box>

                <Typography
                  sx={{
                    color: "white",
                    my: 1,
                    fontWeight: "700",
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  Password
                </Typography>
                <FormControl>
                  <OutlinedInput
                    placeholder="Enter your Password"
                    sx={{
                      "input::placeholder": {
                        color: "white",
                      },
                      color: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.31)",
                      border: "1px solid",
                      borderColor: "rgba(255, 255, 255, 0.63)",
                    }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <Box
                  sx={{
                    display: { xs: "flex", sm: "none" },
                    justifyContent: "center",
                  }}
                >
                  <Button
                    style={{
                      width: "15rem",
                      height: "6vh",
                      background:
                        "linear-gradient(90deg, #EB5757 0%, rgba(242, 88, 62, 0.46) 100%)",
                      boxShadow:
                        "0px 10px 35px rgba(111.39, 125.96, 200.59, 0.25)",
                      borderRadius: 3,
                      color: "white",
                      marginTop: "3vh",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ flexGrow: 1 }}> Register</p>
                    <ArrowCircleRightIcon
                      sx={{ color: "white", fontSize: "25px" }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            sx={{
              zIndex: 1,
              position: "relative",
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: { xs: "0rem", sm: "10rem" },
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <img
                src="../../../Images/ulter.png"
                alt=""
                style={{ width: "15rem", height: "1.5rem" }}
              />
              <img
                src="../../../Images/ulterfaded.png"
                alt=""
                style={{ width: "15rem", height: "1.5rem" }}
              />
              <img
                src="../../../Images/ultarfadedfaded.png"
                alt=""
                style={{ width: "15rem", height: "1.5rem" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // marginLeft: "20rem",
                marginLeft: { xs: "0rem", sm: "10rem", lg: "20rem" },
              }}
            >
              <Button
                style={{
                  width: "15rem",
                  height: "6vh",
                  background:
                    "linear-gradient(90deg, #EB5757 0%, rgba(242, 88, 62, 0.46) 100%)",
                  boxShadow: "0px 10px 35px rgba(111.39, 125.96, 200.59, 0.25)",
                  borderRadius: 3,
                  color: "white",
                  marginTop: "3vh",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ flexGrow: 1 }}> REGISTER</p>
                <ArrowCircleRightIcon
                  sx={{ color: "white", fontSize: "25px" }}
                />
              </Button>
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
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <img src="../../../Images/anyware.png" alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            sx={{
              zIndex: 1,
              position: "relative",
              display: { xs: "flex", sm: "none" },
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "15",
                fontWeight: "400",
                lineHeight: "25px",
                wordWrap: "break-word",
              }}
            >
              Already have an account?
              <Button
                variant="text"
                sx={{
                  color: "#F2583E",
                  fontSize: "15",
                  fontWeight: "400",
                  lineHeight: "25px",
                  wordWrap: "break-word",
                }}
                onClick={handleButtonClick}
              >
                Sign in
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
