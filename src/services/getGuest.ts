import { EndPoints } from "../constants/Enums";
import axios from "axios";

async function getGuest(
    userID:any,
) {
  try {
    const operationId = 2;
    const requestBody = {
      operationId,
      userID,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    
    const response = await axios.post(EndPoints.getData, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error getting user :", error);
    throw error;
  }
}

export default getGuest;
