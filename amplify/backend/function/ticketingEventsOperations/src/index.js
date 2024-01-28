/* Amplify Params - DO NOT EDIT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIIDOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const fetch = require("node-fetch");
const { operationIdEnum } = require("./constants/enum");

const { getEvent, listEvents, byEventID , createBooking } = require("./constants/queries");

const GRAPHQL_ENDPOINT =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT;

function formatDateToYYYYMMDDHHMMSS(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
exports.handler = async (event) => {
  try {
    let requestBody;
    try {
      requestBody = JSON.parse(event.body);
    } catch (error) {
      requestBody = event.body;
    }
    console.log({ requestBody });
    const operationId = requestBody.operationId;
    const eventID = requestBody.eventID;
    let variables, query;
    const bookAttributes = requestBody.bookAttributes;

    if (operationId === operationIdEnum.listEvents) {
      variables = {
        filter: {
          deleted: {
            eq: "0",
          },
          startDate: {
            gt: formatDateToYYYYMMDDHHMMSS(new Date()),
          },
        },
      };
      query = listEvents;
    }else if (operationId === operationIdEnum.bookEvent) {
      const createInput = {
        status: bookAttributes.status,
        bookingGuestId: bookAttributes.bookingGuestId,
        bookingMainGuestId: bookAttributes.bookingMainGuestId,
        bookingEventId: bookAttributes.bookingEventId,
        bookingEventTicketId: bookAttributes.bookingEventTicketId,
        wave: bookAttributes.wave,
        isMainGuest: bookAttributes.isMainGuest,
        orderId: bookAttributes.orderId,
        specialNeed: bookAttributes.specialNeed,
        deleted: "0",
        createdAt: bookAttributes.createdAt,
        createdByID: bookAttributes.createdByID,
        createdByName: bookAttributes.createdByName,
      };
      variables = {
        input: createInput,
      };
      query = createBooking;
    }

    let responseBody = {};
    if (query) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": GRAPHQL_API_KEY,
        },
        body: JSON.stringify({ query, variables }),
      };
      const response = await fetch(GRAPHQL_ENDPOINT, options);
      responseBody = await response.json();
    }
    if (responseBody.errors) {
      console.log("GraphQL error:", responseBody.errors);
      throw new Error("Error retrieving Data");
    }
    console.log({ responseBody });

    let items = [];
    if (operationId === operationIdEnum.getEvent) {
      const eventVariables = {
        id: eventID,
      };
      const eventQuery = getEvent;
      const eventOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": GRAPHQL_API_KEY,
        },
        body: JSON.stringify({ query: eventQuery, variables: eventVariables }),
      };
      const eventPromise = fetch(GRAPHQL_ENDPOINT, eventOptions);

      const ticketsVariables = {
        eventID: eventID,
      };
      const ticketsQuery = byEventID;
      const ticketstOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": GRAPHQL_API_KEY,
        },
        body: JSON.stringify({
          query: ticketsQuery,
          variables: ticketsVariables,
        }),
      };
      const ticketsPromise = fetch(GRAPHQL_ENDPOINT, ticketstOptions);
      const [eventResponse, ticketResponse] = await Promise.all([
        eventPromise,
        ticketsPromise,
      ]);

      const [event, tickets] = await Promise.all([
        eventResponse.json(),
        ticketResponse.json(),
      ]);
      items = {
        event: event.data.getEvent,
        tickets: tickets.data.byEventID,
      };
    } else if (operationId === operationIdEnum.listEvents) {
      items = responseBody.data.listEvents;
    } else if (operationId === operationIdEnum.bookEvent) {
      items = responseBody.data.createBooking;
    }
    return {
      statusCode: 200,
      body: JSON.stringify(items),
    };
  } catch (error) {
    console.error("Error retrieving Data:", error);
    const errorMessage = error.message;
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error retrieving Data", errorMessage }),
    };
  }
};
