import { EventEndPoints } from "../constants/Enums";
import axios from "axios";

async function getEvent(
  eventID:any,
) {
  try {
    const operationId = 1;
    const requestBody = {
      operationId,
      eventID,
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

export default getEvent;
