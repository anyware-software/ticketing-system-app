/* Amplify Params - DO NOT EDIT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIIDOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { listBookings } = require("./constants/queries");
const { generateMessage } = require("./utils/generateMessage");
const { default: sendSms } = require("./utils/sendSMS");

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
    console.log("Current wave: ", currentWave);
    const currentWaveIndex = singleBooking.eventTicket.waves.findIndex(
      (item) => item.id === waveId
    );
    const nextWave = singleBooking.eventTicket.waves.find(
      (item) => item.index === currentWaveIndex + 1
    );

    if (currentWave.AutomaticShift && nextWave) {
      // inform users about the next wave
      const phoneNumbers = bookingsArr.map(
        (booking) => booking.guest.phone_number
      );
      const recipients = bookingsArr.filter(
        (booking) => booking.status === "approved" && booking.isPaid
      );
      const smsS = recipients.map((booking) => {
        const message = generateMessage(
          booking.guest.name,
          nextWave.startDate,
          currentWave.name,
          nextWave.name
        );
        return sendSms(booking.guest.phone_number, message);
      });

      await Promise.allSettled(smsS);
      console.log(`Sent messages to ${phoneNumbers.length} users.`);
      console.log(`Next wave: ${nextWave.name}, id: ${nextWave.id}`);
      console.log(`Current wave: ${currentWave.name}: id: ${currentWave.id}`);
    } else {
      // inform users that there are no more waves
    }
  } catch (err) {
    console.log("Error: ", err);
  }

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
};
