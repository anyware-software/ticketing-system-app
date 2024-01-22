import { FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const ContentLoader: FC = (): JSX.Element => (
  <Box
    sx={{ display: "flex", justifyContent: "center", backgroundColor: "black" , height: "100vh" , alignItems: "center"}}
  >
    {/* <CircularProgress size={64} thickness={1} sx={{ color: "#EE726A" }} /> */}
    <Typography variant="h1" sx={{color:'white'}}>No Events For Now</Typography>
  </Box>
);

export default ContentLoader;
