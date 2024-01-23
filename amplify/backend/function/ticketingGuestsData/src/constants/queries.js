const createGuest = /* GraphQL */ 
`mutation CreateGuest(
  $input: CreateGuestInput!
  $condition: ModelGuestConditionInput
) {
  createGuest(input: $input, condition: $condition) {
    id
    name
    username
    email
    phone_number
    guestGroupID
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
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
`;

 const getGuest = /* GraphQL */ 
 `query GetGuest($id: ID!) {
  getGuest(id: $id) {
    id
    name
    username
    email
    phone_number
    guestGroupID
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
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
`;

const updateGuest = /* GraphQL */ `mutation UpdateGuest(
  $input: UpdateGuestInput!
  $condition: ModelGuestConditionInput
) {
  updateGuest(input: $input, condition: $condition) {
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
}
`

const listGuests = /* GraphQL */ `query ListGuests(
  $filter: ModelGuestFilterInput
  $limit: Int
  $nextToken: String
) {
  listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      username
      email
      phone_number
      guestGroupID
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

  module.exports = {
    createGuest,
    getGuest,
    updateGuest,
    listGuests
  };