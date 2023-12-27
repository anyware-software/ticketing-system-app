/* Amplify Params - DO NOT EDIT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIIDOUTPUT
	API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const fetch = require("node-fetch");
const { operationIdEnum } = require("./constants/enum");

const { createGuest, getGuest, updateGuest } = require("./constants/queries");

const GRAPHQL_ENDPOINT =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT;

exports.handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    // const requestBody = event.body;
    console.log({ requestBody });
    const operationId = requestBody.operationId;
    const userID = requestBody.userID;
    const userAttributes = requestBody.userAttributes;
    let variables, query;

    if (operationId === operationIdEnum.createGuest) {
      const createInput = {
        id: userID,
        email: userAttributes.email,
        name: userAttributes.name,
        phone_number: userAttributes.phone_number,
        group: userAttributes.group,
        birthdate: userAttributes.birthdate,
        deleted: "0",
        createdAt: userAttributes.createdAt,
        createdByID: userAttributes.createdByID,
        createdByName: userAttributes.createdByName,
      };
      variables = {
        input: createInput,
      };
      query = createGuest;
    } else if (operationId === operationIdEnum.getGuest) {
      variables = {
        id: userID,
      };
      query = getGuest;
    } else if (operationId === operationIdEnum.updateGuest) {
      console.log(operationIdEnum.updateGuest);
      variables = {
        input: {
          id: userID,
          email: userAttributes.email,
          name: userAttributes.name,
          phone_number: userAttributes.phone_number,
          birthdate: userAttributes.birthdate,
          gender: userAttributes.gender,
          guest_avatar: userAttributes.guest_avatar,
          deleted: userAttributes.deleted,
          createdAt: userAttributes.createdAt,
        },
      };
      console.log(updateGuest);
      query = updateGuest;
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
    if (operationId === operationIdEnum.createGuest) {
      items = responseBody.data.createGuest;
    } else if (operationId === operationIdEnum.getGuest) {
      items = responseBody.data.getGuest;
    } else if (operationId === operationIdEnum.updateGuest) {
      items = responseBody.data.updateGuest;
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
