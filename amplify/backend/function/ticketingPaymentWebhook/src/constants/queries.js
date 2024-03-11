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
        id
        consumed
      }
      nextToken
      __typename
    }
  }
`;
const updateWavesConsumption = /* GraphQL */ `
  mutation UpdateWavesConsumption(
    $input: UpdateWavesConsumptionInput!
    $condition: ModelWavesConsumptionConditionInput
  ) {
    updateWavesConsumption(input: $input, condition: $condition) {
      waveId
      consumedTickets
      totalTickets
      id
      consumed
      __typename
    }
  }
`;
module.exports = {
  createTransaction,
  updateBooking,
  listWavesConsumptions,
  updateWavesConsumption,
};
