const GRAPHQL_ENDPOINT =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT;
let variables, query;

const {
  createTransaction: createTransactionQuery,
  updateBooking: updateBookingQuery,
  listWavesConsumptions: listWavesConsumptionsQuery,
  updateWavesConsumption: updateWavesConsumptionQuery,
} = require('../constants/queries');

const createTransaction = async (paymentObj) => {
  const createInput = {
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
  };
  variables = { input: createInput };
  query = createTransactionQuery;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': GRAPHQL_API_KEY,
    },
    body: JSON.stringify({ query, variables }),
  };
  const response = await fetch(GRAPHQL_ENDPOINT, options);
  const responseBody = await response.json();
  console.log({ responseBody: JSON.stringify(responseBody) });
  return responseBody.data.createTransaction;
};

const updateBooking = async (bookAttributes) => {
  variables = {
    input: {
      id: bookAttributes.id,
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
  };
  const query = updateBookingQuery;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': GRAPHQL_API_KEY,
    },
    body: JSON.stringify({ query, variables }),
  };
  const response = await fetch(GRAPHQL_ENDPOINT, options);
  const responseBody = await response.json();
  console.log({ responseBody: JSON.stringify(responseBody) });
  return responseBody.data.updateBooking;
};

const UpdateWavesConsumptions = async (waveId) => {
  const filter = {
    waveId: {
      eq: waveId,
    },
  };
  const query = listWavesConsumptionsQuery;
  const generalFetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': GRAPHQL_API_KEY,
    },
  };
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
  const wave = wavesArr[0];
  const WaveConsumptionId = wave.id;
  const WaveConsumption = wave.consumedTickets;
  const WavetotalTickets = wave.totalTickets;
  if (WaveConsumption < WavetotalTickets && wave.consumed !== '1') {
    if (WaveConsumption + 1 === WavetotalTickets) {
      variables = {
        input: {
          id: WaveConsumptionId,
          consumedTickets: WaveConsumption + 1,
          consumed: '1',
        },
      };
    } else {
      variables = {
        input: {
          id: WaveConsumptionId,
          consumedTickets: WaveConsumption + 1,
        },
      };
    }
    const query = updateWavesConsumptionQuery;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': GRAPHQL_API_KEY,
      },
      body: JSON.stringify({ query, variables }),
    };
    const response = await fetch(GRAPHQL_ENDPOINT, options);
    const responseBody = await response.json();
    console.log({ responseBody: JSON.stringify(responseBody) });
    return responseBody.data.updateWavesConsumption;
  } else {
    throw new Error('Wave is already consumed');
  }
};

const handleSuccessPayment = async (params) => {
  const { paymentObj, bookAttributes, waveId } = params;
  // update Booking
  // create a transaction
  const [transaction] = await Promise.all([
    createTransaction(paymentObj),
    updateBooking(bookAttributes),
    UpdateWavesConsumptions(waveId),
  ]);
  console.log({ transaction });
};

module.exports = {
  handleSuccessPayment,
};
