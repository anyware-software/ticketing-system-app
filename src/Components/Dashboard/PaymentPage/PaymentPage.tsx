import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";

const PaymentPage = () => {
  const { id } = useParams();
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
      <div>PaymentPage for {id}</div>
    </Box>
  );
};

export default PaymentPage;
