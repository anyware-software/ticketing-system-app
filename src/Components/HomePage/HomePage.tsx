import React from "react";
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
} from "@mui/material";

export default function HomePage() {
  return (
    <Box
        sx={{
          backgroundImage: {
            lg: 'url("../../Images/main-page-bg.png")',
            sm: 'url("../../Images/main-page-bg.png")',
            md: 'url("../../Images/main-page-bg.png")',
            xl: 'url("../../Images/main-page-bg.png")',
            xs: 'url("../../Images/mobile-main-bg.png")',
          },
          backgroundColor: { xs: "black" },
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
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(to right, rgba(0, 0, 0, 0.1)100%, rgba(0, 0, 0, 0.1))",
          },
          zIndex: 0,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
      <Grid
        container
        sx={{
          px: { xs: 0, sm: 10, md: 10, lg: 12 },
          mt: { xs: 0, sm: 12, md: 12, lg: 12 },
          // m:{xs:0,sm:10,md:10,lg:0},
          overflow: "auto",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          sx={{
            position: "relative",
          }}
        ></Grid>
      </Grid>
    </Box>
  );
}
