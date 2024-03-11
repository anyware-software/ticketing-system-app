import { EndPoints } from "../constants/Enums";
import axios from "axios";

async function getGuestDataByPhone(phoneNumber: any) {
  try {
    const operationId = 6;
    const requestBody = {
      operationId,
      phoneNumber,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    const response = await axios.post(EndPoints.getData, requestBody);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error getting user: ", error);
    throw error;
  }
}

export default getGuestDataByPhone;
