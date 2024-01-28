import axios from "axios";
import { EventEndPoints } from "../constants/Enums";

async function createBooking(
  user: any,
  status: string,
  bookingMainGuestId: string,
  bookingGuestId?: string,
  bookingEventId?: string,
  bookingEventTicketId?: string,
  isMainGuest?: Boolean,
  wave?: string,
  orderId?: String,
  specialNeed?: Boolean,
) {
  // console.log(user, status, bookingMainGuestId, bookingGuestId, bookingEventId, bookingEventTicketId, isMainGuest, wave, orderId, specialNeed);

  try {
    const operationId = 3;
    const bookAttributes = {
      status: status,
      bookingMainGuestId: bookingMainGuestId,
      bookingGuestId: bookingGuestId,
      bookingEventId: bookingEventId,
      bookingEventTicketId: bookingEventTicketId,
      isMainGuest: isMainGuest,
      wave: wave,
      orderId: orderId,
      specialNeed: specialNeed,
      createdAt: new Date(),
      createdByID: user.id,
      createdByName: user.name,
    }

    const requestBody = {
      operationId,
      bookAttributes: bookAttributes
    };
    console.log(requestBody)
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

export default createBooking;