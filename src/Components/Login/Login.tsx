import React from "react";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

export default function Login() {

  return (
    <>
    <Box sx={{
      backgroundImage: {
          lg: 'url("../../Images/main-bg.png")',
          sm: 'url("../../Images/main-bg.png")',
          md: 'url("../../Images/main-bg.png")',
          xl: 'url("../../Images/main-bg.png")',
          xs: 'url("../../Images/mobile-main-bg.png")',
        },
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
    }}>
      
    </Box>
{/* <Grid container spacing={2}>
  <Grid item xs={8}>
  </Grid>
  <Grid item xs={4}>
  </Grid>
  <Grid item xs={4}>
  </Grid>
  <Grid item xs={8}>
  </Grid>
</Grid> */}
    </>
  );
}
