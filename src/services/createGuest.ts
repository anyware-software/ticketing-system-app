import axios from "axios";
import { EndPoints } from "../constants/Enums";

async function createGuest(
  user: any,
  group: any,
  faceBookID: any,
  gender: any
) {
  // console.log(user,group,faceBookID);

  try {
    const operationId = 1;
    const userAttributes = {
      email: user.email.toLowerCase(),
      name: user.name ? user.name.toLowerCase() : "user",
      phone_number: user.phone_number
        ? user.phone_number.substring(2, user?.phone_number.length + 1)
        : "+20",
      group: group,
      faceBookID: faceBookID,
      gender: gender,
      createdAt: new Date().toISOString(),
      createdByID: user.sub,
      createdByName: user.email,
    };

    const requestBody = {
      operationId,
      userID: user.sub,
      userAttributes: userAttributes,
    };
    console.log(requestBody);
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
    console.error("Error creating user :", error);
    throw error;
  }
}

export default createGuest;
