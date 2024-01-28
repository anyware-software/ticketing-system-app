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
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { signInWithRedirect } from "aws-amplify/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../state";
import CloseIcon from "@mui/icons-material/Close";
import ContentLoader from "../ContentLoader/ContentLoder";
import { signOut } from "aws-amplify/auth";

export default function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [validationWarning, setValidationWarning] = useState<boolean>(false);
  const [message, setMessage] = useState<any>("");

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/register");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleFacebookLogin = async () => {
    try {
      setLoading(true);
      await signInWithRedirect({ provider: "Facebook" });
      localStorage.setItem("user", "true");
      dispatch(setLogin({ user: "" }));
      setLoading(false);
      // navigate('/dashboard')
    } catch (error) {
      console.error("Error logging in with Facbook:", error);
      setValidationWarning(true);
      setMessage("You are Logged in with Facbook already !");
      // navigate('/dashboard')
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser === "true") {
  //     navigate("/dashboard");
  //     setMessage("You are Logged in with Facbook already !");
  // }, []);
  useEffect(() => {
    const checkLocalStorage = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser === "true") {
        navigate("/dashboard");
        setMessage("You are Logged in with Facebook already!");
      }
      if (!storedUser) {
        await signOut();
      }
    };

    checkLocalStorage();
  }, []);

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

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={validationWarning}
          autoHideDuration={3000}
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
              position: "fixed",
              top: "16px",
              right: "16px",
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
            flexGrow: 1,
            overflow: "auto",
            pl: { xs: 0, sm: 2 },
            pr: { xs: 0, sm: 5 },
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            sx={{
              zIndex: 1,
              position: "relative",
              display: "flex",
              justifyContent: { xs: "center", sm: "start" },
              alignItems: "center",
              flexDirection: "column",
              marginTop: { xs: "0vh", sm: "1vh", md: "5vh", lg: "10vh" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                // width: { xs: "90%", sm: "auto" },
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
                      backgroundColor: "#EB5757",
                      border: 0,
                      px: 5,
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
                      px: 5,
                    }}
                    onClick={handleButtonClick}
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
                <Typography
                  sx={{
                    color: "white",
                    my: 1,
                    fontWeight: "700",
                    display: { xs: "flex", sm: "none" },
                  }}
                >
                  Sign in
                </Typography>
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
                    marginTop: "3vh",
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
                  flexDirection: { xs: "column", sm: "column", lg: "row" },
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
                      display: "flex",
                      alignItems: "center",
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
                      Login with Instagram
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
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
                        cursor: "pointer",
                      }}
                      onClick={handleFacebookLogin}
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
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10rem",
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
            <Box
              sx={{
                py: 1,
              }}
            >
              <img src="../../../Images/anyware.png" alt="" />
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
              Don't have an account?
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
                Register
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
