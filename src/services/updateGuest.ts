import { EndPoints} from "../constants/Enums";
import axios from "axios";

async function updateGuest(
    userID:any,
    email?:any,
    name?:any,
    phone_number?:any,
    birthdate?: any,
    gender?: any,
    guest_avatar?: any,
    connections?:any,
    images?:any[],
    deleted?:any,
    createdAt?:any,
    address?:any,
) {
  // console.log(userID,email ,birthdate );
  
  try {
    const operationId = 3;
    const userAttributes={
        email:email,
        name:name.toLowerCase(),
        phone_number:phone_number,
        birthdate: birthdate,
        gender: gender,
        guest_avatar: guest_avatar,
        connections:connections,
        images:images,
        deleted:deleted,
        createdAt:createdAt,
        address:address,
      }
    
    const requestBody = {
      operationId,
      userID,
      userAttributes:userAttributes,
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
    throw error;
  }
}

export default updateGuest;
