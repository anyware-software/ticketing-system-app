import { EventEndPoints } from "../constants/Enums";
import axios from "axios";

async function listAccompaniedGuests({
  bookingMainGuestId,
  bookingEventId,
}: any) {
  try {
    const operationId = 8;
    const requestBody = {
      operationId,
      bookingMainGuestId,
      bookingEventId,
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

export default listAccompaniedGuests;
