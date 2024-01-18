const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
}
`
const listEvents = /* GraphQL */ `query ListEvents(
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
`
const byEventID = /* GraphQL */ `query ByEventID(
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
`
  module.exports = {
    getEvent,
    listEvents,
    byEventID,
  };