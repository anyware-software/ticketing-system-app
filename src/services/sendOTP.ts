import axios, { AxiosError } from "axios";
const base_url = "https://sms.anyware.software/cequens-sms";

export const sendOtpViaSMS = async (recipientIdentifier: any) => {
  try {
    const requestBody = { };
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${base_url}/sendOTP?phoneNumber=${recipientIdentifier}`,
      requestBody,
      options
    );
    // Extract the verification ID from the response data
    console.log({ response });
    const instanceId = response.data.instanceId;
    const checkCode = response.data.checkCode;
    return { instanceId, checkCode }; // Return the verification ID
  } catch (error) {
    // Handle the error as before
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error("Error response from server:", axiosError.response.data);
        console.error("Status code:", axiosError.response.status);
      } else {
        console.error("Request failed:", axiosError.message);
      }
    } else {
      console.error("An unexpected error occurred:", error);
    }
    throw error; // Re-throw the error to propagate it further if needed
  }
};

export const verifyOtp = async (otpPasscode: string, checkCode: string) => {
  try {
    const requestBody = { };
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${base_url}/verifyOTP?otpPasscode=${otpPasscode}&checkCode=${checkCode}`,
      requestBody,
      options
    );
    console.log({response})
    return response.data;
  } catch (error) {
    // Handle the error as before
    if (axios.isAxiosError(error)) {
      const axiosError = error as any;
      if (axiosError.response) {
        console.error(
          "Error response from server:",
          axiosError.response.data.replyCode
        );
        console.error("Status code:", axiosError.response.status);
      } else {
        console.error("Request failed:", axiosError.message);
      }
    } else {
      console.error("An unexpected error occurred:", error);
    }
    throw error; // Re-throw the error to propagate it further if needed
  }
};
