import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toggleDrawer as toggleDrawerState } from "../../state/index";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Typography, Button, TextField } from "@mui/material";

export default function PayedTicket() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(toggleDrawerState());
  };
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
          <Typography variant="h5">Your Tickets</Typography>
        </Box>
      </Box>
    </Box>
  );
}
