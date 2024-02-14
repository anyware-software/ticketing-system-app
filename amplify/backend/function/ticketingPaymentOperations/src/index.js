/* Amplify Params - DO NOT EDIT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIIDOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { operationIdEnum } = require("./constants/enums");
const { listWavesConsumptions } = require("./constants/queries");

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
  try {
    let requestBody;
    let responseBody = {};
    try {
      requestBody = JSON.parse(event.body);
    } catch (err) {
      requestBody = event?.body;
    }
    const operationId = requestBody?.operationId;
    const waveId = requestBody?.waveId;
    if (operationId === operationIdEnum.CREATE_PAYMENT) {
      const filter = {
        waveId: {
          eq: waveId,
        },
      };
      const query = listWavesConsumptions;
      const wavesResponse = await fetch(GRAPHQL_ENDPOINT, {
        ...generalFetchOptions,
        body: JSON.stringify({
          query,
          variables: {
            filter,
          },
        }),
      });
      const wavesData = await wavesResponse.json();
      const wavesArr = wavesData.data.listWavesConsumptions.items;
      if (wavesArr.length === 0) {
        throw new Error("No waves found");
      }
      if (wavesArr.length > 1) {
        throw new Error("More than one wave found");
      }
      const wave = wavesArr[0];
      if (wave.consumedTickets >= wave.totalTickets) {
        throw new Error("Wave is already consumed");
      }

      responseBody = {
        waveId: waveId,
        availableTickets: wave.totalTickets - wave.consumedTickets,
      };
    }
    return {
      success: true,
      statusCode: 200,
      data: JSON.stringify(responseBody),
    };
  } catch (err) {
    console.error("Error retrieving Data:", err);
    const errorMessage = err.message;
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: errorMessage, data: null }),
    };
  }
};
