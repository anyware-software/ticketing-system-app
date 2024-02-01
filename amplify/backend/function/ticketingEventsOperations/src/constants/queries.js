const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      description
      startDate
      endDate
      location {
        address
        coordinates {
          lat
          lng
          __typename
        }
        __typename
      }
      todoList
      eventComments {
        image
        name
        message
        __typename
      }
      map
      image
      gallery
      visibleTo
      tickets {
        nextToken
        __typename
      }
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      __typename
    }
  }
`;
const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        startDate
        endDate
        todoList
        map
        image
        gallery
        visibleTo
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
const byEventID = /* GraphQL */ `
  query ByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        cashlessCredit
        description
        waves {
          name
          price
          startDate
          endDate
          active
          quota
          AutomaticShift
          __typename
        }
        color
        paymentRules
        approvalRule
        showAll
        showOnHold
        onHoldDisplayText
        showSoldOut
        soldOutDisplayText
        setAvailable
        availableAtDate
        allowTransferred
        transferredAprroval
        transferredSameGender
        eventID
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        eventTicketsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      status
      guest {
        id
        name
        username
        email
        phone_number
        guestGroupID
        guestGroupName
        guest_avatar
        avg_spend
        avg_ticket_type
        numberOfTickets
        connections
        last_attended_event
        gender
        group
        faceBookID
        appPassword
        birthdate
        isVerified
        images
        address
        totalEvents
        flags
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      mainGuest {
        id
        name
        username
        email
        phone_number
        guestGroupID
        guestGroupName
        guest_avatar
        avg_spend
        avg_ticket_type
        numberOfTickets
        connections
        last_attended_event
        gender
        group
        faceBookID
        appPassword
        birthdate
        isVerified
        images
        address
        totalEvents
        flags
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      event {
        id
        name
        description
        startDate
        endDate
        location {
          address
          __typename
        }
        todoList
        eventComments {
          image
          name
          message
          __typename
        }
        map
        image
        gallery
        visibleTo
        tickets {
          nextToken
          __typename
        }
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      eventTicket {
        id
        type
        cashlessCredit
        description
        waves {
          name
          price
          startDate
          endDate
          active
          quota
          AutomaticShift
          __typename
        }
        color
        paymentRules
        approvalRule
        showAll
        showOnHold
        onHoldDisplayText
        showSoldOut
        soldOutDisplayText
        setAvailable
        availableAtDate
        allowTransferred
        transferredAprroval
        transferredSameGender
        eventID
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        eventTicketsId
        __typename
      }
      wave
      isMainGuest
      orderId
      statusUpdatedByID
      statusUpdatedByName
      statusUpdatedAt
      specialNeed
      phone_number
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      bookingGuestId
      bookingMainGuestId
      bookingEventId
      bookingEventTicketId
      __typename
    }
  }
`;
const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      status
      guest {
        id
        name
        username
        email
        phone_number
        guestGroupID
        guestGroupName
        guest_avatar
        avg_spend
        avg_ticket_type
        numberOfTickets
        connections
        last_attended_event
        gender
        group
        faceBookID
        appPassword
        birthdate
        isVerified
        images
        address
        totalEvents
        flags
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      mainGuest {
        id
        name
        username
        email
        phone_number
        guestGroupID
        guestGroupName
        guest_avatar
        avg_spend
        avg_ticket_type
        numberOfTickets
        connections
        last_attended_event
        gender
        group
        faceBookID
        appPassword
        birthdate
        isVerified
        images
        address
        totalEvents
        flags
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      event {
        id
        name
        description
        startDate
        endDate
        location {
          address
          __typename
        }
        todoList
        eventComments {
          image
          name
          message
          __typename
        }
        map
        image
        gallery
        visibleTo
        tickets {
          nextToken
          __typename
        }
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      eventTicket {
        id
        type
        cashlessCredit
        description
        waves {
          name
          price
          startDate
          endDate
          active
          quota
          AutomaticShift
          __typename
        }
        color
        paymentRules
        approvalRule
        showAll
        showOnHold
        onHoldDisplayText
        showSoldOut
        soldOutDisplayText
        setAvailable
        availableAtDate
        allowTransferred
        transferredAprroval
        transferredSameGender
        eventID
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        eventTicketsId
        __typename
      }
      wave
      isMainGuest
      orderId
      statusUpdatedByID
      statusUpdatedByName
      statusUpdatedAt
      specialNeed
      phone_number
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      bookingGuestId
      bookingMainGuestId
      bookingEventId
      bookingEventTicketId
      __typename
    }
  }
`;
const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      status
      guest {
        id
        name
        username
        email
        phone_number
        guestGroupID
        guestGroupName
        guest_avatar
        avg_spend
        avg_ticket_type
        numberOfTickets
        connections
        last_attended_event
        gender
        group
        faceBookID
        appPassword
        birthdate
        isVerified
        images
        address
        totalEvents
        flags
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      mainGuest {
        id
        name
        username
        email
        phone_number
        guestGroupID
        guestGroupName
        guest_avatar
        avg_spend
        avg_ticket_type
        numberOfTickets
        connections
        last_attended_event
        gender
        group
        faceBookID
        appPassword
        birthdate
        isVerified
        images
        address
        totalEvents
        flags
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      event {
        id
        name
        description
        startDate
        endDate
        location {
          address
          __typename
        }
        todoList
        eventComments {
          image
          name
          message
          __typename
        }
        map
        image
        gallery
        visibleTo
        tickets {
          nextToken
          __typename
        }
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        __typename
      }
      eventTicket {
        id
        type
        cashlessCredit
        description
        waves {
          name
          price
          startDate
          endDate
          active
          quota
          AutomaticShift
          __typename
        }
        color
        paymentRules
        approvalRule
        showAll
        showOnHold
        onHoldDisplayText
        showSoldOut
        soldOutDisplayText
        setAvailable
        availableAtDate
        allowTransferred
        transferredAprroval
        transferredSameGender
        eventID
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        eventTicketsId
        __typename
      }
      wave
      isMainGuest
      orderId
      statusUpdatedByID
      statusUpdatedByName
      statusUpdatedAt
      specialNeed
      phone_number
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      bookingGuestId
      bookingMainGuestId
      bookingEventId
      bookingEventTicketId
      __typename
    }
  }
`;
const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        guest {
          id
          name
          username
          email
          phone_number
          guestGroupID
          guestGroupName
          guest_avatar
          avg_spend
          avg_ticket_type
          numberOfTickets
          connections
          last_attended_event
          gender
          group
          faceBookID
          appPassword
          birthdate
          isVerified
          images
          address
          totalEvents
          flags
          deleted
          createdAt
          createdByID
          createdByName
          updatedAt
          __typename
        }
        mainGuest {
          id
          name
          username
          email
          phone_number
          guestGroupID
          guestGroupName
          guest_avatar
          avg_spend
          avg_ticket_type
          numberOfTickets
          connections
          last_attended_event
          gender
          group
          faceBookID
          appPassword
          birthdate
          isVerified
          images
          address
          totalEvents
          flags
          deleted
          createdAt
          createdByID
          createdByName
          updatedAt
          __typename
        }
        event {
          id
          name
          description
          startDate
          endDate
          location {
            address
            coordinates {
              lat
              lng
              __typename
            }
            __typename
          }
          todoList
          eventComments {
            image
            name
            message
            __typename
          }
          map
          image
          gallery
          visibleTo
          tickets {
            nextToken
            __typename
          }
          deleted
          createdAt
          createdByID
          createdByName
          updatedAt
          __typename
        }
        eventTicket {
          id
          type
          cashlessCredit
          description
          waves {
            name
            price
            startDate
            endDate
            active
            quota
            AutomaticShift
            __typename
          }
          color
          paymentRules
          approvalRule
          showAll
          showOnHold
          onHoldDisplayText
          showSoldOut
          soldOutDisplayText
          setAvailable
          availableAtDate
          allowTransferred
          transferredAprroval
          transferredSameGender
          eventID
          deleted
          createdAt
          createdByID
          createdByName
          updatedAt
          eventTicketsId
          __typename
        }
        wave
        isMainGuest
        orderId
        statusUpdatedByID
        statusUpdatedByName
        statusUpdatedAt
        specialNeed
        phone_number
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        bookingGuestId
        bookingMainGuestId
        bookingEventId
        bookingEventTicketId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
module.exports = {
  getEvent,
  listEvents,
  byEventID,
  createBooking,
  getBooking,
  updateBooking,
  listBookings,
};
