/* Amplify Params - DO NOT EDIT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIIDOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { listBookings } = require("./constants/queries");
const { generateMessage } = require("./utils/generateMessage");
const { sendSms } = require("./utils/sendSMS");
const { sendEmail } = require("./utils/sendEmail");
const { AutomaticShiftTypes } = require("./constants/enums");

const GRAPHQL_ENDPOINT =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT;

/**
 * @type {import('node-fetch').RequestInit}
 */
const generalFetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": GRAPHQL_API_KEY,
  },
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  try {
    const record = event.Records[0];
    const waveId = record.dynamodb.NewImage.waveId.S;
    console.log("Wave ID: ", waveId);

    const query = listBookings;
    const filter = {
      waveId: {
        eq: waveId,
      },
    };
    const bookings = await fetch(GRAPHQL_ENDPOINT, {
      ...generalFetchOptions,
      body: JSON.stringify({
        query,
        variables: {
          filter,
        },
      }),
    });
    const bookingsData = await bookings.json();
    const bookingsArr = bookingsData.data.listBookings.items;
    console.log("Bookings: ", bookingsArr.length);
    const singleBooking = bookingsArr[0];
    // console.log("Single booking: ", singleBooking);
    const currentWave = singleBooking.eventTicket.waves.find(
      (item) => item.id === waveId
    );
    if (
      !currentWave ||
      currentWave.AutomaticShift === AutomaticShiftTypes.OFF
    ) {
      console.log("No AutomaticShift for this wave.");
      console.log("Current wave: ", currentWave);
      return;
    }
    console.log("Current wave: ", currentWave);
    const currentWaveIndex = singleBooking.eventTicket.waves.findIndex(
      (item) => item.id === waveId
    );
    const nextWave = singleBooking.eventTicket.waves.find(
      (_, index) => index === currentWaveIndex + 1
    );
    console.log("Next wave: ", nextWave);
    console.log("All waves: ", singleBooking.eventTicket.waves);

    const recipients = bookingsArr.filter(
      (booking) => booking.status === "approved" && !booking.isPaid
    );
    //for logs
    const phoneNumbers = recipients.map(
      (booking) => booking.guest.phone_number
    );
    console.log("AutoShift: ", currentWave.AutomaticShift);

    // send SMS to all recipients if the current wave is set to AutomaticShift and there is a next wave
    if (
      currentWave &&
      currentWave.AutomaticShift === AutomaticShiftTypes.ON_TICKETS &&
      nextWave
    ) {
      // inform users about the next wave
      if (recipients.length > 0) {
        const smsS = recipients.map((booking) => {
          const message = generateMessage(
            booking.guest.name,
            nextWave.startDate,
            currentWave.name,
            nextWave.name,
            true
          );
          return sendSms(booking.guest.phone_number, message);
        });
        await Promise.allSettled(smsS);
        console.log(`Sent messages to ${smsS.length} users.`);
        console.log(`Current wave: ${currentWave.name}: id: ${currentWave.id}`);
        console.log(`Next wave: ${nextWave.name}, id: ${nextWave.id}`);
        console.log("Phone numbers: ", phoneNumbers);
        const emails = recipients.map((booking) => {
          return sendEmail({
            customerEmail: booking.guest.email,
            templateName: "UlterWaveShiftReserved",
            guestName: booking.guest.name,
            eventName: booking.event.name,
            link :'http://localhost:3000/dashboard/events',
          });
        });
        await Promise.allSettled(emails);
      } else {
        console.log("No messages sent. No recipients.");
        console.log("No Emails sent. No recipients.");
      }
      // do something if the current wave is set to AutomaticShift but there is no next wave
    } else if (
      currentWave &&
      currentWave.AutomaticShift === AutomaticShiftTypes.ON_TIME &&
      nextWave
    ) {
      if (recipients.length > 0) {
        const smsS = recipients.map((booking) => {
          const message = generateMessage(
            booking.guest.name,
            nextWave.startDate,
            currentWave.name,
            nextWave.name,
            true
          );
          return sendSms(booking.guest.phone_number, message);
        });
        await Promise.allSettled(smsS);
        console.log(`Sent messages to ${smsS.length} users.`);
        console.log(`Current wave: ${currentWave.name}: id: ${currentWave.id}`);
        console.log(`Next wave: ${nextWave.name}, id: ${nextWave.id}`);
        console.log("Phone numbers: ", phoneNumbers);
        const emails = recipients.map((booking) => {
          return sendEmail({
            customerEmail: booking.guest.email,
            templateName: "UlterWaveShiftReserved",
            guestName: booking.guest.name,
            eventName: booking.event.name,
            link :'http://localhost:3000/dashboard/events',
          });
        });
        await Promise.allSettled(emails);
      } else {
        console.log("No messages sent. No recipients.");
        console.log("No emails sent. No recipients.");
      }
    } else {
      console.log("No AutomaticShift for this wave.");
      console.log("Current wave: ", currentWave);
    }
    console.log(
      "SMS sent to all users who have booked for the next wave, if any."
    );
  } catch (err) {
    console.error("Error: ", err);
    console.log(
      "Error occurred while trying to send SMS to users who have booked for the next wave."
    );
  }
};
