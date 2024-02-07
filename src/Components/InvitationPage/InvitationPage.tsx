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

export default function InvitationPage() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
        console.log("ID:", id);
    }
  }, [id]);

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

      </Box>
    </>
  );
}
