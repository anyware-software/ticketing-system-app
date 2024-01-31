import axios from "axios";
import { EventEndPoints } from "../constants/Enums";

async function updateBooking({
  eventBookingID,
  status,
  bookingMainGuestId,
  bookingGuestId,
  bookingEventId,
  bookingEventTicketId,
  isMainGuest,
  wave,
  orderId,
  specialNeed,
  phone_number,
}: any) {
  // console.log(user, status, bookingMainGuestId, bookingGuestId, bookingEventId, bookingEventTicketId, isMainGuest, wave, orderId, specialNeed);

  try {
    const operationId = 6;
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
      phone_number: phone_number,
    };

    const requestBody = {
      operationId,
      eventBookingID,
      bookAttributes: bookAttributes,
    };
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
  }
}

export default updateBooking;
