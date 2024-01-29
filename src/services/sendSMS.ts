import axios from "axios";
import { EventEndPoints } from "../constants/Enums";

async function sendSms(
    phone: string,
    message: string,
) {
    try {
        const operationId = 4;
        const smsAttributes = {
            phone: phone,
            message: message,
        }

        const requestBody = {
            operationId,
            queryStringParameters: smsAttributes
        };
        console.log(requestBody)

        const response = await axios.post(EventEndPoints, requestBody);
        console.log(response);
        
        return response.data;

    } catch (error) {
        console.error("Error creating user :", error);
        throw error;
    }
}

export default sendSms;