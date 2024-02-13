import axios from "axios";
import { EventEndPoints } from "../constants/Enums";

async function createTransaction({
  user,
  guestId,
  eventId,
  ticketId,
  issuccess,
  failureReason,
  currency,
  amount_cents,
  refund,
  refunded_amount_cents,
  transactionBookingId,
}: any) {
  try {
    const operationId = 12;
    const bookAttributes = {
      guestId: guestId,
      eventId: eventId,
      ticketId: ticketId,
      issuccess: issuccess,
      failureReason: failureReason,
      currency: currency,
      amount_cents: amount_cents,
      refund: refund,
      refunded_amount_cents: refunded_amount_cents,
      transactionBookingId: transactionBookingId,
      createdAt: new Date().toISOString(),
      createdByID: user.id,
      createdByName: user.name,
    };

    const requestBody = {
      operationId,
      bookAttributes: bookAttributes,
    };
    console.log(requestBody);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    const response = await axios.post(EventEndPoints, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error creating user :", error);
    throw error;
  }
}

export default createTransaction;
