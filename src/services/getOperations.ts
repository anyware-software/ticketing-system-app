import axios from "axios";
import { EndPoints } from "../constants/Enums";

type RequestData = {
  [key: string]: any;
};

async function fetchData(operationId: number, requestData: RequestData = {}) {
  try {
    const requestBody = { operationId, ...requestData };
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(requestBody),
    // };

    const response = await axios.post(EndPoints.getData, requestBody);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching data for operation ID ${operationId}:`,
      error
    );
    throw error;
  }
}

export async function listGuests(filters?: any) {
  const operationId = 4;
  return await fetchData(operationId, filters);
}
