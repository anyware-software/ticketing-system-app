/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
  getAccount(id: $id) {
    id
    logo {
      id
      mediaID
      fileUrl
      filename
      filetype
      fileSize
      alternativeText
      caption
      description
      createdAt
      createdByID
      createdByName
      updatedAt
      __typename
    }
    domain
    siteTitle
    guestsCount
    tagline
    description
    siteAddress
    defaultLanguage
    languages
    features
    status
    socialLinks
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    accountLogoId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      domain
      siteTitle
      guestsCount
      tagline
      description
      siteAddress
      defaultLanguage
      languages
      features
      status
      socialLinks
      deleted
      createdAt
      createdByID
      createdByName
      updatedAt
      accountLogoId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
export const getConcept = /* GraphQL */ `query GetConcept($id: ID!) {
  getConcept(id: $id) {
    id
    accountID
    name
    description
    logo
    type
    location
    precedence
    longitude
    latitude
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConceptQueryVariables,
  APITypes.GetConceptQuery
>;
export const listConcepts = /* GraphQL */ `query ListConcepts(
  $filter: ModelConceptFilterInput
  $limit: Int
  $nextToken: String
) {
  listConcepts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      accountID
      name
      description
      logo
      type
      location
      precedence
      longitude
      latitude
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
` as GeneratedQuery<
  APITypes.ListConceptsQueryVariables,
  APITypes.ListConceptsQuery
>;
export const getLanguage = /* GraphQL */ `query GetLanguage($id: ID!) {
  getLanguage(id: $id) {
    id
    name
    code
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLanguageQueryVariables,
  APITypes.GetLanguageQuery
>;
export const listLanguages = /* GraphQL */ `query ListLanguages(
  $filter: ModelLanguageFilterInput
  $limit: Int
  $nextToken: String
) {
  listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      code
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
` as GeneratedQuery<
  APITypes.ListLanguagesQueryVariables,
  APITypes.ListLanguagesQuery
>;
export const getFeature = /* GraphQL */ `query GetFeature($id: ID!) {
  getFeature(id: $id) {
    id
    name
    icon
    slug
    precedence
    parent
    private
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFeatureQueryVariables,
  APITypes.GetFeatureQuery
>;
export const listFeatures = /* GraphQL */ `query ListFeatures(
  $filter: ModelFeatureFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      icon
      slug
      precedence
      parent
      private
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
` as GeneratedQuery<
  APITypes.ListFeaturesQueryVariables,
  APITypes.ListFeaturesQuery
>;
export const getAdminRole = /* GraphQL */ `query GetAdminRole($id: ID!) {
  getAdminRole(id: $id) {
    id
    name
    description
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAdminRoleQueryVariables,
  APITypes.GetAdminRoleQuery
>;
export const listAdminRoles = /* GraphQL */ `query ListAdminRoles(
  $filter: ModelAdminRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdminRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
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
` as GeneratedQuery<
  APITypes.ListAdminRolesQueryVariables,
  APITypes.ListAdminRolesQuery
>;
export const getAdminGroup = /* GraphQL */ `query GetAdminGroup($id: ID!) {
  getAdminGroup(id: $id) {
    id
    name
    description
    roles
    users
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAdminGroupQueryVariables,
  APITypes.GetAdminGroupQuery
>;
export const listAdminGroups = /* GraphQL */ `query ListAdminGroups(
  $filter: ModelAdminGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdminGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      roles
      users
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
` as GeneratedQuery<
  APITypes.ListAdminGroupsQueryVariables,
  APITypes.ListAdminGroupsQuery
>;
export const getAttachment = /* GraphQL */ `query GetAttachment($id: ID!) {
  getAttachment(id: $id) {
    id
    mediaID
    fileUrl
    filename
    filetype
    fileSize
    alternativeText
    caption
    description
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAttachmentQueryVariables,
  APITypes.GetAttachmentQuery
>;
export const listAttachments = /* GraphQL */ `query ListAttachments(
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      mediaID
      fileUrl
      filename
      filetype
      fileSize
      alternativeText
      caption
      description
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
` as GeneratedQuery<
  APITypes.ListAttachmentsQueryVariables,
  APITypes.ListAttachmentsQuery
>;
export const getUserConcepts = /* GraphQL */ `query GetUserConcepts($id: ID!) {
  getUserConcepts(id: $id) {
    id
    defaultConcept
    concepts
    conceptsRoles
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserConceptsQueryVariables,
  APITypes.GetUserConceptsQuery
>;
export const listUserConcepts = /* GraphQL */ `query ListUserConcepts(
  $filter: ModelUserConceptsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserConcepts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      defaultConcept
      concepts
      conceptsRoles
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
` as GeneratedQuery<
  APITypes.ListUserConceptsQueryVariables,
  APITypes.ListUserConceptsQuery
>;
export const getGuest = /* GraphQL */ `query GetGuest($id: ID!) {
  getGuest(id: $id) {
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
` as GeneratedQuery<APITypes.GetGuestQueryVariables, APITypes.GetGuestQuery>;
export const listGuests = /* GraphQL */ `query ListGuests(
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGuestsQueryVariables,
  APITypes.ListGuestsQuery
>;
export const ByEmail = /* GraphQL */ `query ByEmail(
  $email: String!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGuestFilterInput
  $limit: Int
  $nextToken: String
) {
  ByEmail(
    email: $email
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ByEmailQueryVariables, APITypes.ByEmailQuery>;
export const ByPhoneNumber = /* GraphQL */ `query ByPhoneNumber(
  $phone_number: String!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGuestFilterInput
  $limit: Int
  $nextToken: String
) {
  ByPhoneNumber(
    phone_number: $phone_number
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ByPhoneNumberQueryVariables,
  APITypes.ByPhoneNumberQuery
>;
export const getGuestGroup = /* GraphQL */ `query GetGuestGroup($id: ID!) {
  getGuestGroup(id: $id) {
    id
    name
    description
    color
    guests
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGuestGroupQueryVariables,
  APITypes.GetGuestGroupQuery
>;
export const listGuestGroups = /* GraphQL */ `query ListGuestGroups(
  $filter: ModelGuestGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGuestGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      color
      guests
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
` as GeneratedQuery<
  APITypes.ListGuestGroupsQueryVariables,
  APITypes.ListGuestGroupsQuery
>;
export const getTimeline = /* GraphQL */ `query GetTimeline($id: ID!) {
  getTimeline(id: $id) {
    id
    actionName
    oldStatus
    newStatus
    bookingId
    customerId
    type
    description
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTimelineQueryVariables,
  APITypes.GetTimelineQuery
>;
export const listTimelines = /* GraphQL */ `query ListTimelines(
  $filter: ModelTimelineFilterInput
  $limit: Int
  $nextToken: String
) {
  listTimelines(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      actionName
      oldStatus
      newStatus
      bookingId
      customerId
      type
      description
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
` as GeneratedQuery<
  APITypes.ListTimelinesQueryVariables,
  APITypes.ListTimelinesQuery
>;
export const timelineByCustomerID = /* GraphQL */ `query TimelineByCustomerID(
  $customerId: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelTimelineFilterInput
  $limit: Int
  $nextToken: String
) {
  timelineByCustomerID(
    customerId: $customerId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      actionName
      oldStatus
      newStatus
      bookingId
      customerId
      type
      description
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
` as GeneratedQuery<
  APITypes.TimelineByCustomerIDQueryVariables,
  APITypes.TimelineByCustomerIDQuery
>;
export const getFlag = /* GraphQL */ `query GetFlag($id: ID!) {
  getFlag(id: $id) {
    id
    accountID
    name
    icon
    color
    customers
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFlagQueryVariables, APITypes.GetFlagQuery>;
export const listFlags = /* GraphQL */ `query ListFlags(
  $filter: ModelFlagFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      accountID
      name
      icon
      color
      customers
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
` as GeneratedQuery<APITypes.ListFlagsQueryVariables, APITypes.ListFlagsQuery>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    message
    customerId
    bookingId
    replyTo
    deleted
    createdAt
    createdByID
    createdByImg
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      message
      customerId
      bookingId
      replyTo
      deleted
      createdAt
      createdByID
      createdByImg
      createdByName
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
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
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
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
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const getEventTicket = /* GraphQL */ `query GetEventTicket($id: ID!) {
  getEventTicket(id: $id) {
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
}
` as GeneratedQuery<
  APITypes.GetEventTicketQueryVariables,
  APITypes.GetEventTicketQuery
>;
export const listEventTickets = /* GraphQL */ `query ListEventTickets(
  $filter: ModelEventTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  listEventTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
` as GeneratedQuery<
  APITypes.ListEventTicketsQueryVariables,
  APITypes.ListEventTicketsQuery
>;
export const byEventID = /* GraphQL */ `query ByEventID(
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
` as GeneratedQuery<APITypes.ByEventIDQueryVariables, APITypes.ByEventIDQuery>;
