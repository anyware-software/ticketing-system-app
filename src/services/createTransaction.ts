import axios from "axios";
import { paymentWebhook } from "../constants/Enums";

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
  isPaid,
  paidAmount,
  waveId,
}: any) {
  try {
    const paymentObj = {
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
    const bookAttributes = {
      isPaid: isPaid,
      paidAmount: paidAmount,
    };

    const requestBody = {
      eventBookingID: transactionBookingId,
      paymentObj: paymentObj,
      bookAttributes: bookAttributes,
      waveId: waveId,
    };
    console.log(requestBody);

    const response = await axios.post(paymentWebhook, requestBody);
    return response.data;
  } catch (error) {
    console.error("Error creating user :", error);
    throw error;
  }
}

export default createTransaction;
