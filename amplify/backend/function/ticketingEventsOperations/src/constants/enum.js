const operationIdEnum = {
    'getEvent': 1,
    'listEvents': 2,
    'bookEvent': 3,
    'sendSmsMessage': 4 ,
    'getBooking':5,
    'updateBooking':6,
    'listEventsByGuestId': 7,
    'listBookingsForCompanion': 8,
    'overview': 9,
    'sendMails': 10,
    'listInvitations': 11,
    'createTransaction': 12,
    'listBookingsForGuest': 13,
    'listEndedEvents': 14,
    'listAllBookingsForGuest': 15,
    'listConsumedWaves': 16,
    'listWavesConsumptions': 17,
}

const AutomaticShiftTypes = {
    OFF: 'off',
    ON_TIME: 'onTime',
    ON_TICKETS: 'onTickets',
  };

module.exports = {
    operationIdEnum,
    AutomaticShiftTypes
}