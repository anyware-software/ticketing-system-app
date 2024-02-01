import { EventEndPoints } from "../constants/Enums";
import axios from "axios";

async function listGuestBooking({ bookingGuestid }: any) {
  try {
    const operationId = 7;
    const requestBody = {
      operationId,
      bookingGuestid,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    const response = await axios.post(EventEndPoints, requestBody);
    // console.log(requestBody);
    // console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error getting user :", error);
    throw error;
  }
}

export default listGuestBooking;
