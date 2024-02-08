import { EndPoints } from "../constants/Enums";
import axios from "axios";

async function updateGuest({
  userID,
  email,
  name,
  phone_number,
  birthdate,
  gender,
  guest_avatar,
  connections,
  images,
  address,
  deleted,
}: any) {
  // console.log(userID,email ,birthdate );

  try {
    const operationId = 3;
    const userAttributes = {
      email,
      name,
      phone_number,
      birthdate,
      gender,
      guest_avatar,
      connections,
      images,
      address,
      deleted,
    };

    const requestBody = {
      operationId,
      userID,
      userAttributes: userAttributes,
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
    console.error("Error updating user :", error);
  }
}

export default updateGuest;
