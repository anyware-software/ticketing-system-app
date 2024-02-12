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
const fetch = require('node-fetch');
const { operationIdEnum } = require('./constants/enum');
const aws = require('aws-sdk');

const {
  getEvent,
  listEvents,
  byEventID,
  createBooking,
  getBooking,
  updateBooking,
  listBookings,
  listOverViewBookings,
  listInvitations,
} = require('./constants/queries');

const GRAPHQL_ENDPOINT =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY =
  process.env.API_TICKETINGSYSTEMADMIN_GRAPHQLAPIKEYOUTPUT;

aws.config.update({ region: 'us-east-2' });
const ses = new aws.SES();

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
    const eventBookingID = requestBody.eventBookingID;
    const bookingGuestid = requestBody.bookingGuestid;
    const bookingMainGuestId = requestBody.bookingMainGuestId;
    const bookingEventId = requestBody.bookingEventId;
    const invitationSecret = requestBody.invitationSecret;
    const fromDate = requestBody.fromDate;
    const toDate = requestBody.toDate;

    if (operationId === operationIdEnum.listEvents) {
      variables = {
        filter: {
          deleted: {
            eq: '0',
          },
          published: {
            eq: true,
          },
          startDate: {
            gt: new Date().toISOString(),
          },
        },
      };
      query = listEvents;
    } else if (operationId === operationIdEnum.listBookingsForCompanion) {
      variables = {
        filter: {
          deleted: {
            eq: '0',
          },
          bookingMainGuestId: {
            eq: bookingMainGuestId,
          },
          bookingEventId: {
            eq: bookingEventId,
          },
          isMainGuest: {
            eq: false,
          },
        },
      };
      query = listBookings;
    } else if (operationId === operationIdEnum.listInvitations) {
      variables = {
        filter: {
          deleted: {
            eq: '0',
          },
          secret: {
            eq: invitationSecret,
          },
          used: {
            eq: false,
          },
        },
      };
      query = listInvitations;
    } else if (operationId === operationIdEnum.bookEvent) {
      console.log({ bookAttributes: bookAttributes.guestTicket.number });
      const createInput = {
        status: bookAttributes.status,
        bookingGuestId: bookAttributes.bookingGuestId,
        bookingMainGuestId: bookAttributes.bookingMainGuestId,
        bookingEventId: bookAttributes.bookingEventId,
        bookingEventTicketId: bookAttributes.bookingEventTicketId,
        wave: bookAttributes.wave,
        waveId: bookAttributes.waveId,
        isMainGuest: bookAttributes.isMainGuest,
        orderId: bookAttributes.orderId,
        specialNeed: bookAttributes.specialNeed,
        phone_number: bookAttributes.phone_number,
        guestTicket: bookAttributes.guestTicket,
        overallStatus: bookAttributes.overallStatus,
        guestName: bookAttributes.guestName,
        isPaid: false,
        deleted: '0',
        createdAt: bookAttributes.createdAt,
        createdByID: bookAttributes.createdByID,
        createdByName: bookAttributes.createdByName,
      };
      variables = {
        input: createInput,
      };
      query = createBooking;
    } else if (operationId === operationIdEnum.getBooking) {
      variables = {
        id: eventBookingID,
      };
      query = getBooking;
    } else if (operationId === operationIdEnum.updateBooking) {
      variables = {
        input: {
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
          deleted: '0',
          createdAt: bookAttributes.createdAt,
          createdByID: bookAttributes.createdByID,
          createdByName: bookAttributes.createdByName,
        },
      };
      query = updateBooking;
    } else if (operationId === operationIdEnum.sendMails) {
      const templateData = {};
      templateData.customerEmail =
        requestBody.queryStringParameters.customer_email;
      templateData.customerSecret =
        requestBody.queryStringParameters.customer_secret;
      templateData.senderName = requestBody.queryStringParameters.sender_name;
      const sourceMail = requestBody.queryStringParameters.source_email;
      const templateName = requestBody.queryStringParameters.template_name;
      await ses
        .sendTemplatedEmail({
          Destination: {
            ToAddresses: [templateData.customerEmail],
          },
          Source: sourceMail,
          Template: templateName,
          TemplateData: JSON.stringify(templateData),
        })
        .promise();
      return { status: 'done' };
    } else if (operationId === operationIdEnum.sendSmsMessage) {
      try {
        console.log({ event: JSON.stringify(event) });
        const phone = requestBody.queryStringParameters.phone;
        const message = requestBody.queryStringParameters.message;
        console.log('phone: ' + phone + 'message: ' + message);

        const token = await GetToken();

        console.log('token: ' + token);

        let headers = {
          accept: 'application/json',
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
          'Access-Control-Allow-Headers': '*',
          Authorization: `Bearer ${token}`,
        };

        let senderName = 'ANYWARE';

        var raw = JSON.stringify({
          senderName,
          messageType: 'text',
          acknowledgement: 0,
          flashing: 0,
          messageText: message,
          recipients: phone,
        });

        console.log({ requestBody: raw });

        var requestOptions = {
          method: 'POST',
          headers: headers,
          body: raw,
          redirect: 'follow',
        };

        let requestResponse = await fetch(
          'https://apis.cequens.com/sms/v1/messages',
          requestOptions,
        )
          .then((response) => {
            return JSON.stringify(response);
          })
          .then((result) => console.log(result))

          .catch((error) => {
            console.log('error', error);
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': GRAPHQL_API_KEY,
        },
        body: JSON.stringify({ query, variables }),
      };
      const response = await fetch(GRAPHQL_ENDPOINT, options);
      responseBody = await response.json();
    }
    if (responseBody.errors) {
      console.log('GraphQL error:', responseBody.errors);
      throw new Error('Error retrieving Data');
    }
    console.log({ responseBody });

    let items = [];
    if (operationId === operationIdEnum.getEvent) {
      const eventVariables = {
        id: eventID,
      };
      const eventQuery = getEvent;
      const eventOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': GRAPHQL_API_KEY,
        },
        body: JSON.stringify({ query: eventQuery, variables: eventVariables }),
      };
      const eventPromise = fetch(GRAPHQL_ENDPOINT, eventOptions);

      const ticketsVariables = {
        eventID: eventID,
      };
      const ticketsQuery = byEventID;
      const ticketstOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': GRAPHQL_API_KEY,
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
    } else if (operationId === operationIdEnum.getBooking) {
      items = responseBody.data.getBooking;
    } else if (operationId === operationIdEnum.updateBooking) {
      items = responseBody.data.updateBooking;
    } else if (operationId === operationIdEnum.listBookingsForCompanion) {
      items = responseBody.data.listBookings;
    } else if (operationId === operationIdEnum.listInvitations) {
      items = responseBody.data.listInvitations;
    } else if (operationId === operationIdEnum.listEventsByGuestId) {
      variables = {
        filter: {
          deleted: {
            eq: '0',
          },
          endDate: {
            gt: new Date().toISOString(),
          },
        },
      };
      query = listEvents;
      const eventOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': GRAPHQL_API_KEY,
        },
        body: JSON.stringify({ query: listEvents, variables: variables }),
      };
      const events = await fetch(GRAPHQL_ENDPOINT, eventOptions);
      const eventsList = await events.json();
      const eventsListIds = eventsList.data.listEvents.items.map(
        (event) => event.id,
      );
      const bookingVariables = {
        filter: {
          deleted: {
            eq: '0',
          },
          bookingGuestId: {
            eq: bookingGuestid,
          },
          or: eventsListIds.map((eventid) => ({
            bookingEventId: { eq: eventid },
          })),
        },
      };
      query = listBookings;
      const bookingOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': GRAPHQL_API_KEY,
        },
        body: JSON.stringify({
          query: listBookings,
          variables: bookingVariables,
        }),
      };
      const bookings = await fetch(GRAPHQL_ENDPOINT, bookingOptions);
      const bookingsList = await bookings.json();
      items = bookingsList.data.listBookings;
      console.log(items);
    } else if (operationId === operationIdEnum.overview) {
      async function list(nextToken, limit) {
        const filter = {
          deleted: { eq: '0' },
        };
        filter.and = [];

        if (eventID) filter.bookingEventId = { eq: eventID };
        if (fromDate && toDate) {
          filter.and.push({
            createdAt: {
              ge: fromDate,
            },
          });
          filter.and.push({
            createdAt: {
              lt: toDate,
            },
          });
        }

        if (filter.and && filter.and.length === 0) delete filter.and;
        console.log(filter.and);
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': GRAPHQL_API_KEY,
          },
          body: JSON.stringify({
            query: listOverViewBookings,
            variables: { limit: limit || 100000, filter, nextToken },
          }),
        };
        const listing = await fetch(GRAPHQL_ENDPOINT, options).then((res) =>
          res.json(),
        );
        return listing.data.listBookings;
      }

      let listing;
      let bookings = [];
      do {
        listing = await list(listing?.nextToken);
        bookings = bookings.concat(listing.items);
      } while (listing.nextToken);

      console.log(bookings);

      let result = bookings.reduce(
        (result, booking) => {
          // some of these if condetions should check if the booking is paid
          // do this after payments is implemented
          if (booking.guest) {
            if (!result.gender[booking.guest.gender]) {
              result.gender[booking.guest.gender] = 1;
            } else {
              result.gender[booking.guest.gender]++;
            }

            if (!result.guests[booking.guest.guestGroupName]) {
              result.guests[booking.guest.guestGroupName] = 1;
            } else {
              result.guests[booking.guest.guestGroupName]++;
            }

            if (booking.guest.totalEvents > 0) result.guest.recurring++;
          }

          if (booking.eventTicket) {
            if (!result.ticketsTypes[booking.eventTicket.type]) {
              result.ticketsTypes[booking.eventTicket.type] = {};
              result.ticketsTypes[booking.eventTicket.type].amount = 1;
            } else {
              result.ticketsTypes[booking.eventTicket.type].amount++;
            }
            if (!result.ticketsTypes[booking.eventTicket.type].color) {
              result.ticketsTypes[booking.eventTicket.type].color =
                booking.eventTicket.color;
            }
            if (!result.ticketsTypes[booking.eventTicket.type].quota) {
              result.ticketsTypes[booking.eventTicket.type].quota =
                booking.eventTicket.waves.reduce(
                  (quota, wave) => (quota += wave.quota),
                  0,
                );
            }
          }

          if (booking.status) {
            if (!result.ticketsStatuses[booking.status]) {
              result.ticketsStatuses[booking.status] = 1;
            } else {
              result.ticketsStatuses[booking.status]++;
            }
          }

          if (booking.waveId) {
            if (!result.waves[booking.waveId]) {
              result.waves[booking.waveId] = 1;
            } else {
              result.waves[booking.waveId]++;
            }
          }

          // this should be event total revenue not number
          // update it after payment is implemented
          if (booking.event) {
            if (!result.events[booking.event.name]) {
              result.events[booking.event.name] = 1;
            } else {
              result.events[booking.event.name]++;
            }
          }

          return result;
        },
        {
          gender: {},
          guests: { recurring: 0 },
          ticketsTypes: {},
          ticketsStatuses: {},
          events: {},
          waves: {},
        },
      );

      items = result;
    }
    return {
      statusCode: 200,
      body: JSON.stringify(items),
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
const GetToken = async () => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      apiKey: 'c4dc5e38-cd68-49ec-b1f4-868ff0e2da67',
      userName: 'Anyware',
    }),
  };
  try {
    const response = await fetch(
      'https://apis.cequens.com/auth/v1/tokens/',
      options,
    );
    const data = await response.json();

    return data.data.access_token;
  } catch (err) {
    console.log({ error: err });
  }
};
