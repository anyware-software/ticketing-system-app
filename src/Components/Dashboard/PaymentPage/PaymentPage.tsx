import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Typography, Button, TextField } from "@mui/material";

import { toggleDrawer as toggleDrawerState } from "../../../state/index";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch } from "react-redux";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
const PaymentPage = () => {
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
          <Typography variant="h5">Payment Page</Typography>
        </Box>
      </Box>
      <Box
        sx={{ padding: 3, display: "flex", flexDirection: "column", gap: 3 }}
      >
        {/* Card */}
        <Box
          sx={{
            bgcolor: "#555555",
            width: "100%",
            borderRadius: "12px",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PaymentOutlinedIcon />
              <Typography variant="h5" fontWeight={500}>
                Debit/Credit Card
              </Typography>
            </Box>
            <IconButton>
              <ChevronRightIcon sx={{ color: "#ee6259" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              height: "60px",
            }}
          >
            <img
              src="/Images/master.svg"
              alt=""
              width="60px"
              height="100%"
              style={{
                objectFit: "contain",
              }}
            />
            <img
              src="/Images/visa.png"
              alt=""
              width="60px"
              height="100%"
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
        {/* Card */}
        <Box
          sx={{
            bgcolor: "#555555",
            width: "100%",
            borderRadius: "12px",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccountBalanceWalletOutlinedIcon />
              <Typography variant="h5" fontWeight={500}>
                Wallet
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img
                src="/Images/gpay.png"
                alt=""
                width={30}
                style={{ objectFit: "contain" }}
              />
              <Typography>Google Pay</Typography>
            </Box>
            <IconButton>
              <ChevronRightIcon sx={{ color: "#ee6259" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img
                src="/Images/appleWallet.png"
                alt=""
                width={30}
                style={{ objectFit: "contain" }}
              />
              <Typography>Apple Wallet</Typography>
            </Box>
            <IconButton>
              <ChevronRightIcon sx={{ color: "#ee6259" }} />
            </IconButton>
          </Box>
        </Box>
        {/* Card */}
        <Box
          sx={{
            bgcolor: "#555555",
            width: "100%",
            borderRadius: "12px",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" fontWeight={500}>
              Net Banking
            </Typography>
            <IconButton>
              <ChevronRightIcon sx={{ color: "#ee6259" }} />
            </IconButton>
          </Box>
        </Box>

        {/* Coupon */}
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            color: "grey",
            mt: 4,
          }}
        >
          Apply Coupon
        </Typography>

        <Box
          sx={{
            bgcolor: "#555555",
            width: "fit-content",
            mx: "auto",
            borderRadius: "12px",
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            size="small"
            placeholder="Type Coupon Code"
            sx={{
              border: 0,
            }}
          />
          <Button
            sx={{
              color: "#ee6259",
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPage;
