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
const { handleSuccessPayment } = require("./utils/payMob");

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  try {
    const body = JSON.parse(event.body);
    console.log("type: ", body.type);
    console.log("obj: ", body.obj);
    console.log({ body });
    console.log({ body: JSON.stringify(body) });

    // transaction success
    console.log("transaction success");
    const params = {
      refunded_amount_cents: body.obj.refunded_amount_cents,
      paymentObj: body.obj.order.data[0],
      transactionID: body.obj.id,
      amount_cents: body.obj.amount_cents,
      ownerID: body.obj.owner,
      currency: body.obj.currency,
      orderID: body.obj.order.id,
    };

      // pay transaction
      await handleSuccessPayment(params);
   
    return {
      statusCode: 200,
      body: { message: "request handled successfully" },
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
