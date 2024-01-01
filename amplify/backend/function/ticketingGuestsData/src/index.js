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

const {
  createGuest,
  getGuest,
  updateGuest,
  listGuests,
} = require("./constants/queries");

const GRAPHQL_ENDPOINT =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT;

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
    const userID = requestBody.userID;
    const userAttributes = requestBody.userAttributes;
    const faceBookIDs = requestBody.faceBookIDs;
    let variables, query;

    if (operationId === operationIdEnum.createGuest) {
      const createInput = {
        id: userID,
        email: userAttributes.email,
        name: userAttributes.name,
        phone_number: userAttributes.phone_number,
        group: userAttributes.group,
        faceBookID: userAttributes.faceBookID,
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
          connections: userAttributes.connections,
          deleted: userAttributes.deleted,
          createdAt: userAttributes.createdAt,
        },
      };
      console.log(updateGuest);
      query = updateGuest;
    } else if (operationId === operationIdEnum.listGuests) {
      let filter = {
        deleted: { eq: "0" },
      };
      filter.or = [];
      if (faceBookIDs) {
        for (const faceBookID of faceBookIDs) {
          filter.or.push({ faceBookID: { eq: faceBookID } });
        }
      }
      if (filter.or.length === 0) delete filter.or;
      variables = { filter };
      query = listGuests;
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
    } else if (operationId === operationIdEnum.listGuests) {
      items = responseBody.data.listGuests.items;
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
