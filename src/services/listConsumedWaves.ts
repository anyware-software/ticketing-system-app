import { EventEndPoints } from "../constants/Enums";
import axios from "axios";

async function listConsumedWaves({ waveId , bookingId }: any) {
  try {
    const operationId = 16;
    const requestBody = {
      operationId,
      waveId,
      bookingId,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    const response = await axios.post(EventEndPoints, requestBody);
    console.log(requestBody);
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error getting user :", error);
    throw error;
  }
}

export default listConsumedWaves;
