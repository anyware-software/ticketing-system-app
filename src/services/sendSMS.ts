import axios from "axios";
// import { EventEndPoints } from "../constants/Enums";
import { smsEndpoint } from "../constants/Enums";

async function sendSms(
    phone: string,
    message: string,
) {
    // try {
    //     const operationId = 4;
    //     const smsAttributes = {
    //         phone: phone,
    //         message: message,
    //     }

    //     const requestBody = {
    //         operationId,
    //         queryStringParameters: smsAttributes
    //     };
    //     console.log(requestBody)

    //     const response = await axios.post(EventEndPoints, requestBody);
    //     console.log(response);
        
    //     return response.data;

    // } catch (error) {
    //     console.error("Error creating user :", error);
    //     throw error;
    // }
    try {        
        const requestBody = {
            phone: phone,
            message: message,
            conceptName:'anyware'
        };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        };
        const response = await axios.post(smsEndpoint, requestBody, options);
        console.log(requestBody)
        console.log(response);
        return response.data;

    } catch (error) {
        console.error("Error :", error);
        throw error;
    }
}

export default sendSms;