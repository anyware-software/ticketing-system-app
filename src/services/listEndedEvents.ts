import { EventEndPoints } from "../constants/Enums";
import axios from "axios";

async function listEndedEvents(
) {
  try {
    const operationId = 14;
    const requestBody = {
      operationId,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    
    const response = await axios.post(EventEndPoints, requestBody);
    // console.log(response);
    
    return response.data;
  } catch (error) {
    console.error("Error getting user :", error);
    throw error;
  }
}

export default listEndedEvents;
