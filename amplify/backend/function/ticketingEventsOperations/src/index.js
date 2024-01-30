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

const {
  getEvent,
  listEvents,
  byEventID,
  createBooking,
} = require("./constants/queries");

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
    } else if (operationId === operationIdEnum.bookEvent) {
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
        phone_number: bookAttributes.phone_number,
        deleted: "0",
        createdAt: bookAttributes.createdAt,
        createdByID: bookAttributes.createdByID,
        createdByName: bookAttributes.createdByName,
      };
      variables = {
        input: createInput,
      };
      query = createBooking;
    } else if (operationId === operationIdEnum.sendSmsMessage) {
      try {
        console.log({ event: JSON.stringify(event) });
        const phone = requestBody.queryStringParameters.phone;
        const message = requestBody.queryStringParameters.message;
        console.log("phone: " + phone + "message: " + message);

        const token = await GetToken();

        console.log("token: " + token);

        let headers = {
          accept: "application/json",
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "*",
          Authorization: `Bearer ${token}`,
        };

        let senderName = "ANYWARE";

        var raw = JSON.stringify({
          senderName,
          messageType: "text",
          acknowledgement: 0,
          flashing: 0,
          messageText: message,
          recipients: phone,
        });

        console.log({ requestBody: raw });

        var requestOptions = {
          method: "POST",
          headers: headers,
          body: raw,
          redirect: "follow",
        };

        let requestResponse = await fetch(
          "https://apis.cequens.com/sms/v1/messages",
          requestOptions
        )
          .then((response) => {
            return JSON.stringify(response);
          })
          .then((result) => console.log(result))

          .catch((error) => {
            console.log("error", error);
            return JSON.stringify(error);
          });

        return requestResponse;
      } catch (err) {
        console.log(err);
        return JSON.stringify(err);
      }
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
const GetToken = async () => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      apiKey: "c4dc5e38-cd68-49ec-b1f4-868ff0e2da67",
      userName: "Anyware",
    }),
  };
  try {
    const response = await fetch(
      "https://apis.cequens.com/auth/v1/tokens/",
      options
    );
    const data = await response.json();

    return data.data.access_token;
  } catch (err) {
    console.log({ error: err });
  }
};
