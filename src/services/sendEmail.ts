import axios from "axios";
import { LambdaFunctions } from "../constants/Enums";
import { invokeLambda } from "../Components/helpers/utils";

async function sendEmail({
  customerEmail,
  adminName,
  eventName,
  link,
  textContent,
  templateName,
  guestName,
}: any) {
  try {
    const operationId = 10;
    const emailAttributes = {
      customerEmail,
      guestName,
      adminName,
      eventName,
      link,
      textContent,
      sourceMail: "info@anyware.software",
      templateName,
    };

    const requestBody = {
      operationId,
      queryStringParameters: emailAttributes,
    };
    console.log(requestBody);

    let response = await invokeLambda(
      LambdaFunctions.ticketingEventsOperations,
      requestBody
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error creating user :", error);
    throw error;
  }
}

export default sendEmail;
