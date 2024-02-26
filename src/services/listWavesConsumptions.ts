import { EventEndPoints } from "../constants/Enums";
import axios from "axios";

async function listWavesConsumptions({ waveId }: any) {
  try {
    const operationId = 17;
    const requestBody = {
      operationId,
      waveId,
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

export default listWavesConsumptions;
