import { EventEndPoints } from "../constants/Enums";
import axios from "axios";

async function getBooking(
    eventBookingID:any,
) {
  try {
    const operationId = 5;
    const requestBody = {
      operationId,
      eventBookingID,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    
    const response = await axios.post(EventEndPoints, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error getting user :", error);
    throw error;
  }
}

export default getBooking;
