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
const { handleSuccessPayment } = require('./utils/payment');

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  try {
    let requestBody;
    try {
      requestBody = JSON.parse(event.body);
    } catch (error) {
      requestBody = event.body;
    }
    console.log({ requestBody });
    const bookAttributes = requestBody.bookAttributes;
    const eventBookingID = requestBody.eventBookingID;
    const paymentObj = requestBody.paymentObj;
    const waveId = requestBody.waveId;

    // transaction success
    const params = {
      bookAttributes: {
        id: eventBookingID,
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
        isPaid: bookAttributes.isPaid,
        paidAmount: bookAttributes.paidAmount,
        deleted: '0',
        createdAt: bookAttributes.createdAt,
        createdByID: bookAttributes.createdByID,
        createdByName: bookAttributes.createdByName,
      },
      paymentObj: {
        guestId: paymentObj.guestId,
        eventId: paymentObj.eventId,
        ticketId: paymentObj.ticketId,
        transactionBookingId: paymentObj.transactionBookingId,
        issuccess: paymentObj.issuccess,
        failureReason: paymentObj.failureReason,
        currency: paymentObj.currency,
        amount_cents: paymentObj.amount_cents,
        refund: paymentObj.refund,
        refunded_amount_cents: paymentObj.refunded_amount_cents,
        createdAt: paymentObj.createdAt,
        createdByID: paymentObj.createdByID,
        createdByName: paymentObj.createdByName,
      },
      waveId: waveId,
    };

    // pay transaction
    await handleSuccessPayment(params);
    console.log('transaction success');

    return {
      statusCode: 200,
      body: { message: 'request handled successfully' },
    };
  } catch (error) {
    console.error('Error retrieving Data:', error);
    const errorMessage = error.message;
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving Data', errorMessage }),
    };
  }
};
