import {
  Backdrop,
  Box,
  Grid,
  Typography,
  Button,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";

import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { sendOtpViaSMS, verifyOtp } from "../../services/sendOTP";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";

type Props = {
  open: boolean;
  onClose: () => void;
  checkCode: any;
  handleSuccessfulOTP: any;
  phoneNumber: string;
};
function OTP({
  open,
  checkCode,
  handleSuccessfulOTP,
  phoneNumber,
  onClose,
}: Props) {
  const [openModel, setOpenModel] = useState(open);
  const [otp, setOtp] = useState("");
  const [validationWarning, setValidationWarning] = useState<boolean>(false);
  const [code, setCode] = useState(checkCode);
  const [message, setMessage] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputStyle = {
    background: "#393744",
    boxShadow:
      "0px -2.9085745811462402px 13.573348045349121px rgba(0, 0, 0, 0.10)",
    borderRadius: 10,
    border: "1px rgba(255, 255, 255, 0.40) solid",
    color: "white",
    fontSize: 30,
    height: "3rem",
    width: "3rem",
  };
  // console.log(loading);

  const handleCloseModal = () => {
    onClose?.();
  };
  const handleOTP = async () => {
    try {
      setLoading(true);
      const response = await verifyOtp(otp, code);
      switch (response.data.otpPasscodeStatus) {
        case 1:
          setSuccess(true);
          setValidationWarning(true);
          setMessage("Phone number verified succsessfully");
          handleCloseModal();
          handleSuccessfulOTP({
            phoneNumber,
          });
          break;
        case 2:
          setSuccess(false);
          setValidationWarning(true);
          setMessage("Incorrect OTP");
          break;
        case 3:
          setSuccess(false);
          setValidationWarning(true);
          setMessage("Expired OTP");
          break;
      }
    } catch (e: any) {
      setSuccess(false);
      setValidationWarning(true);
      setMessage("Incorrect OTP");
      console.log(e);
    } finally {
      setOtp("");
      setLoading(false);
    }
  };

  const handleClose = async () => {
    handleCloseModal();
    setOtp("");
  };

  const handleResend = async () => {
    setLoading(true);
    const { instanceId, checkCode } = await sendOtpViaSMS(phoneNumber);
    setCode(checkCode);
    setLoading(false);
  };

  const handleOtpChange = (otp: string) => {
    const convertedOTP = Number(otp);
    if (isNaN(convertedOTP)) return;
    setOtp(otp);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={validationWarning}
        autoHideDuration={1000}
        onClose={() => {
          setValidationWarning(false);
        }}
      >
        <Alert
          onClose={() => {
            setValidationWarning(false);
          }}
          severity={success ? "success" : "error"}
          sx={{
            position: "fixed",
            top: "16px",
            right: "16px",
          }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => {
                setValidationWarning(false);
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          alignItems: "flex-start",
        }}
        open={open}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "relative",
            top: "50%",
            width: "90%",
            transform: "translateY(-50%)",
            background: "black",
            padding: {
              xs: ".5rem",
              sm: "1rem",
              md: "1.5rem",
            },
            borderRadius: 5,
            maxWidth: "500px",
          }}
        >
          <Grid
            height={"100%"}
            gap={"1rem"}
            container
            alignContent={"center"}
            alignItems={"center"}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            <Grid item xs={12}>
              <Typography
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 16,
                  fontWeight: "400",
                  letterSpacing: 0.64,
                  wordWrap: "break-word",
                }}
              >
                Enter Verification Code
              </Typography>
            </Grid>
            <OtpInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={4}
              renderSeparator={<Box width={"1rem"}> </Box>}
              renderInput={(props: any) => <input {...props} />}
              inputStyle={inputStyle}
            />
          </Grid>
          <Box marginTop={"2rem"} style={{ textAlign: "center" }}>
            <span
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "200",
                wordWrap: "break-word",
              }}
            >
              If you didn’t receive a code{" "}
            </span>
            <span
              onClick={() => {
                handleResend();
              }}
              style={{
                color: loading ? "gray" : "red",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              Resend
            </span>
          </Box>
          <Grid container columnSpacing={"1rem"}>
            <Grid item xs={6}>
              <Button
                style={{
                  width: "100%",
                  height: "3rem",
                  marginTop: "1rem",
                  backgroundColor: "white",
                  boxShadow:
                    "0px -2.9085745811462402px 13.573348045349121px rgba(255, 255, 255, 0.10)",
                  borderRadius: 12.6,
                  color: "black",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  handleClose();
                }}
                disabled={loading}
              >
                CANCEL
              </Button>
            </Grid>
            <Grid item xs={6}>
              <LoadingButton
                style={{
                  width: "100%",
                  height: "3rem",
                  marginTop: "1rem",
                  backgroundColor:
                    !loading && otp.length === 4 ? "red" : "#a7a7a7",
                  color: !loading && otp.length === 4 ? "white" : "black",
                  boxShadow:
                    "0px -2.9085745811462402px 13.573348045349121px rgba(255, 255, 255, 0.10)",
                  borderRadius: 12.6,
                  // color: "white",
                  fontWeight: "bold",
                  cursor:
                    !loading && otp.length === 4 ? "pointer" : "not-allowed",
                }}
                onClick={() => {
                  if (!loading && otp.length === 4) {
                    handleOTP();
                  }
                }}
                loading={loading}
                disabled={otp.length !== 4}
              >
                SEND
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Backdrop>
    </>
  );
}
export default OTP;
