import React, { useEffect, useState } from "react";
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
  Grid,
  Paper,
} from "@mui/material";

import "../ScrollBar/ScrollBar.css";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "red",
        width: "100%",
        height: "6vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: {xs:"column",sm:"row"},
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "12px",
        }}
      >
        Copyright © 2024 • ULTER - Events
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
        }}
      >
        Terms & Conditions for Event • Privacy Policy • Terms of Use
      </Typography>
    </Box>
  );
}
