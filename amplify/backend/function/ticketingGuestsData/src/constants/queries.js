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
    avg_ticket_number
    connections
    last_attended_event
    gender
    group
    appPassword
    birthdate
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
    avg_ticket_number
    connections
    last_attended_event
    gender
    group
    appPassword
    birthdate
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
`;

  module.exports = {
    createGuest,
    getGuest,
  };