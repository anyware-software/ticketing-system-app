import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";

const ContentLoader: FC = (): JSX.Element => (
  <Box
    sx={{ display: "flex", justifyContent: "center", backgroundColor: "black" , height: "100vh" , alignItems: "center"}}
  >
    {/* <CircularProgress size={64} thickness={1} sx={{ color: "#EE726A" }} /> */}
    <img src="https://assets-global.website-files.com/61406347b8db463e379e2732/6170b5377b069c085b0991e5_ezgif-2-2260bc5d0d32.gif" alt="" />
  </Box>
);

export default ContentLoader;
