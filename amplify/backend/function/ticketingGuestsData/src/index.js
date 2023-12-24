/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const fetch = require("node-fetch");
const { operationIdEnum } = require("./constants/enum");

const { createGuest, getGuest } = require("./constants/queries");

const GRAPHQL_ENDPOINT =
  process.env.API_CALLCENTERADMIN_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_CALLCENTERADMIN_GRAPHQLAPIKEYOUTPUT;

exports.handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
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
    if (operationId === operationIdEnum.createUser) {
      items = responseBody.data.createUser;
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
