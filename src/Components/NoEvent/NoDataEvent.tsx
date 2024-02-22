import { FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const ContentLoader: FC = (): JSX.Element => (
  <Box
    sx={{ display: "flex", justifyContent: "center", backgroundColor: "black" , height: "100vh" , alignItems: "center"}}
  >
    {/* <CircularProgress size={64} thickness={1} sx={{ color: "red" }} /> */}
    <Typography variant="h3" sx={{color:'white'}}>Please Update your Info From Profile (Phone)</Typography>
  </Box>
);

export default ContentLoader;
