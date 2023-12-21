import React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Form } from "react-router-dom";
import { Input as BaseInput, InputProps, inputClasses } from "@mui/base/Input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                mx: 5,
                mt: 3,
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

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            sx={{ zIndex: 1, position: "relative" }}
          >
            <Box
              sx={{
                width: "50%",
                marginLeft: "5rem",
                marginTop: "5rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
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
                    width: "53%",
                  }}
                >
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "#EB5757",
                      border: 0,
                      px: 3,
                      fontWeight: "bold",
                    }}
                  >
                    SIGN IN
                  </Button>
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "#4f4f4f",
                      border: 0,
                      fontWeight: "bold",
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
                  marginTop: "8vh",
                }}
              >
                <Typography sx={{ color: "white", my: 1, fontWeight: "700" }}>
                  User name
                </Typography>
                <TextField
                  id="username"
                  placeholder="Type your Username"
                  sx={{
                    backgroundColor: "#625d5b",
                    "input::placeholder": {
                      color: "white",
                    },
                    input: {
                      color: "white",
                    },
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    my: 1,
                    fontWeight: "700",
                    marginTop: "3vh",
                  }}
                >
                  Password
                </Typography>
                <FormControl
                  sx={{
                    backgroundColor: "#625d5b",
                  }}
                >
                  <OutlinedInput
                    placeholder="Enter your Password"
                    sx={{
                      "input::placeholder": {
                        color: "white",
                      },
                      color: "white",
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "3vh",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      defaultChecked
                      color="default"
                      sx={{
                        color: "white",
                        p: 0,
                        m: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "white",
                      }}
                    >
                      Rememebr me
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#F0635A",
                    }}
                  >
                    Forgot Password ?
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
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
                  <p style={{ flexGrow: 1 }}> Sign in</p>
                  <ArrowCircleRightIcon
                    sx={{ color: "white", fontSize: "25px" }}
                  />
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5vh",
                }}
              >
                <Typography
                  sx={{
                    color: "#9D9898",
                  }}
                >
                  OR
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5vh",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "50%",
                        width: "2.5rem",
                        height: "2.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="../../../Images/instagram.png" alt="" />
                    </Box>
                    <Typography
                      sx={{
                        color: "white",
                      }}
                    >
                      Login with instagram
                    </Typography>
                  </Box>
                  <Box></Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5vh",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "50%",
                        width: "2.5rem",
                        height: "2.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="../../../Images/face.png" alt="" />
                    </Box>
                    <Typography
                      sx={{
                        color: "white",
                      }}
                    >
                      Login with FaceBook
                    </Typography>
                  </Box>
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
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap:20
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
