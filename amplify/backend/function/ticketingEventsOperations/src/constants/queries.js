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
        items {
          id
          type
          cashlessCredit
          description
          waves {
            id
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
          __typename
        }
        nextToken
        __typename
      }
      invitationLimit {
        items {
          id
          adminID
          quota
          eventID
          deleted
          createdAt
          createdByID
          createdByName
          updatedAt
          eventInvitationLimitId
          __typename
        }
        nextToken
        __typename
      }
      deleted
      createdAt
      createdByID
      createdByName
      published
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
          items {
            id
            type
            cashlessCredit
            description
            waves {
              id
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
            __typename
          }
          nextToken
          __typename
        }
        invitationLimit {
          items {
            id
            adminID
            quota
            eventID
            deleted
            createdAt
            createdByID
            createdByName
            updatedAt
            eventInvitationLimitId
            __typename
          }
          nextToken
          __typename
        }
        deleted
        createdAt
        createdByID
        createdByName
        published
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
          id
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
      overallStatus
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
          items {
            id
            type
            cashlessCredit
            description
            waves {
              id
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
        invitationLimit {
          items {
            id
            adminID
            quota
            eventID
            deleted
            createdAt
            createdByID
            createdByName
            updatedAt
            eventInvitationLimitId
            __typename
          }
          nextToken
          __typename
        }
        deleted
        createdAt
        createdByID
        createdByName
        published
        updatedAt
        __typename
      }
      eventTicket {
        id
        type
        cashlessCredit
        description
        waves {
          id
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
      waveId
      isMainGuest
      orderId
      statusUpdatedByID
      statusUpdatedByName
      statusUpdatedAt
      specialNeed
      phone_number
      guestTicket {
        number
        __typename
      }
      guestName
      deleted
      createdAt
      createdByID
      createdByName
      rejectionReason {
        id
        content
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        updatedByID
        updatedByName
        __typename
      }
      rejectionComment
      isPaid
      paidAmount
      updatedAt
      bookingGuestId
      bookingMainGuestId
      bookingEventId
      bookingEventTicketId
      bookingRejectionReasonId
      __typename
    }
  }
`;
const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      status
      overallStatus
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
          items {
            id
            type
            cashlessCredit
            description
            waves {
              id
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
            __typename
          }
          nextToken
          __typename
        }
        invitationLimit {
          items {
            id
            adminID
            quota
            eventID
            deleted
            createdAt
            createdByID
            createdByName
            updatedAt
            eventInvitationLimitId
            __typename
          }
          nextToken
          __typename
        }
        deleted
        createdAt
        createdByID
        createdByName
        published
        updatedAt
        __typename
      }
      eventTicket {
        id
        type
        cashlessCredit
        description
        waves {
          id
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
        __typename
      }
      wave
      waveId
      isMainGuest
      orderId
      statusUpdatedByID
      statusUpdatedByName
      statusUpdatedAt
      specialNeed
      phone_number
      guestTicket {
        number
        redeemed
        __typename
      }
      guestName
      deleted
      createdAt
      createdByID
      createdByName
      rejectionReason {
        id
        content
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        updatedByID
        updatedByName
        __typename
      }
      rejectionComment
      isPaid
      paidAmount
      updatedAt
      bookingGuestId
      bookingMainGuestId
      bookingEventId
      bookingEventTicketId
      bookingRejectionReasonId
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
      overallStatus
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
          items {
            id
            type
            cashlessCredit
            description
            waves {
              id
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
        invitationLimit {
          items {
            id
            adminID
            quota
            eventID
            deleted
            createdAt
            createdByID
            createdByName
            updatedAt
            eventInvitationLimitId
            __typename
          }
          nextToken
          __typename
        }
        deleted
        createdAt
        createdByID
        createdByName
        published
        updatedAt
        __typename
      }
      eventTicket {
        id
        type
        cashlessCredit
        description
        waves {
          id
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
      waveId
      isMainGuest
      orderId
      statusUpdatedByID
      statusUpdatedByName
      statusUpdatedAt
      specialNeed
      phone_number
      guestTicket {
        number
        __typename
      }
      guestName
      deleted
      createdAt
      createdByID
      createdByName
      rejectionReason {
        id
        content
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        updatedByID
        updatedByName
        __typename
      }
      rejectionComment
      isPaid
      paidAmount
      updatedAt
      bookingGuestId
      bookingMainGuestId
      bookingEventId
      bookingEventTicketId
      bookingRejectionReasonId
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
        overallStatus
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
            items {
              id
              type
              cashlessCredit
              description
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
              __typename
            }
            nextToken
            __typename
          }
          invitationLimit {
            items {
              id
              adminID
              quota
              eventID
              deleted
              createdAt
              createdByID
              createdByName
              updatedAt
              eventInvitationLimitId
              __typename
            }
            nextToken
            __typename
          }
          deleted
          createdAt
          createdByID
          createdByName
          published
          updatedAt
          __typename
        }
        eventTicket {
          id
          type
          cashlessCredit
          description
          waves {
            id
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
          __typename
        }
        wave
        waveId
        isMainGuest
        orderId
        statusUpdatedByID
        statusUpdatedByName
        statusUpdatedAt
        specialNeed
        phone_number
        guestTicket {
          number
          redeemed
          __typename
        }
        guestName
        deleted
        createdAt
        createdByID
        createdByName
        rejectionReason {
          id
          content
          deleted
          createdAt
          createdByID
          createdByName
          updatedAt
          updatedByID
          updatedByName
          __typename
        }
        rejectionComment
        isPaid
        paidAmount
        updatedAt
        bookingGuestId
        bookingMainGuestId
        bookingEventId
        bookingEventTicketId
        bookingRejectionReasonId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
const listInvitations = /* GraphQL */ `
  query ListInvitations(
    $filter: ModelInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        eventTicket {
          id
          type
          cashlessCredit
          description
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
        phone_number
        email
        reason
        secret
        used
        deleted
        createdAt
        createdByID
        createdByName
        updatedAt
        invitationEventId
        invitationEventTicketId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
const listOverViewBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        status
        guest {
          guestGroupID
          guestGroupName
          gender
          totalEvents
        }
        event {
          id
          name
        }
        eventTicket {
          type
          color
          waves {
            quota
          }
        }
        isPaid
        paidAmount
        waveId
      }
      nextToken
    }
  }
`;
const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      guestId
      eventId
      ticketId
      booking {
        id
        status
        overallStatus
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
            items {
              id
              type
              cashlessCredit
              description
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
          invitationLimit {
            items {
              id
              adminID
              quota
              eventID
              deleted
              createdAt
              createdByID
              createdByName
              updatedAt
              eventInvitationLimitId
              __typename
            }
            nextToken
            __typename
          }
          deleted
          createdAt
          createdByID
          createdByName
          published
          updatedAt
          __typename
        }
        eventTicket {
          id
          type
          cashlessCredit
          description
          waves {
            id
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
        waveId
        isMainGuest
        orderId
        statusUpdatedByID
        statusUpdatedByName
        statusUpdatedAt
        specialNeed
        phone_number
        guestTicket {
          number
          __typename
        }
        guestName
        deleted
        createdAt
        createdByID
        createdByName
        rejectionReason {
          id
          content
          deleted
          createdAt
          createdByID
          createdByName
          updatedAt
          updatedByID
          updatedByName
          __typename
        }
        rejectionComment
        isPaid
        paidAmount
        updatedAt
        bookingGuestId
        bookingMainGuestId
        bookingEventId
        bookingEventTicketId
        bookingRejectionReasonId
        __typename
      }
      issuccess
      failureReason
      currency
      amount_cents
      refund
      refunded_amount_cents
      createdAt
      createdByID
      createdByName
      updatedAt
      transactionBookingId
      __typename
    }
  }
`;
const listWavesConsumptions = /* GraphQL */ `
  query ListWavesConsumptions(
    $filter: ModelWavesConsumptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWavesConsumptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        waveId
        consumedTickets
        totalTickets
        consumed
        eventId
        id
        createdAt
        updatedAt
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
  listOverViewBookings,
  listInvitations,
  createTransaction,
  listWavesConsumptions,
};
