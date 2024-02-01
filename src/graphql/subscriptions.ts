/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAccount = /* GraphQL */ `subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onCreateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAccountSubscriptionVariables,
  APITypes.OnCreateAccountSubscription
>;
export const onUpdateAccount = /* GraphQL */ `subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
  onUpdateAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAccountSubscriptionVariables,
  APITypes.OnUpdateAccountSubscription
>;
export const onDeleteAccount = /* GraphQL */ `subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
  onDeleteAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAccountSubscriptionVariables,
  APITypes.OnDeleteAccountSubscription
>;
export const onCreateConcept = /* GraphQL */ `subscription OnCreateConcept($filter: ModelSubscriptionConceptFilterInput) {
  onCreateConcept(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConceptSubscriptionVariables,
  APITypes.OnCreateConceptSubscription
>;
export const onUpdateConcept = /* GraphQL */ `subscription OnUpdateConcept($filter: ModelSubscriptionConceptFilterInput) {
  onUpdateConcept(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConceptSubscriptionVariables,
  APITypes.OnUpdateConceptSubscription
>;
export const onDeleteConcept = /* GraphQL */ `subscription OnDeleteConcept($filter: ModelSubscriptionConceptFilterInput) {
  onDeleteConcept(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConceptSubscriptionVariables,
  APITypes.OnDeleteConceptSubscription
>;
export const onCreateLanguage = /* GraphQL */ `subscription OnCreateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
  onCreateLanguage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLanguageSubscriptionVariables,
  APITypes.OnCreateLanguageSubscription
>;
export const onUpdateLanguage = /* GraphQL */ `subscription OnUpdateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
  onUpdateLanguage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLanguageSubscriptionVariables,
  APITypes.OnUpdateLanguageSubscription
>;
export const onDeleteLanguage = /* GraphQL */ `subscription OnDeleteLanguage($filter: ModelSubscriptionLanguageFilterInput) {
  onDeleteLanguage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLanguageSubscriptionVariables,
  APITypes.OnDeleteLanguageSubscription
>;
export const onCreateFeature = /* GraphQL */ `subscription OnCreateFeature($filter: ModelSubscriptionFeatureFilterInput) {
  onCreateFeature(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeatureSubscriptionVariables,
  APITypes.OnCreateFeatureSubscription
>;
export const onUpdateFeature = /* GraphQL */ `subscription OnUpdateFeature($filter: ModelSubscriptionFeatureFilterInput) {
  onUpdateFeature(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeatureSubscriptionVariables,
  APITypes.OnUpdateFeatureSubscription
>;
export const onDeleteFeature = /* GraphQL */ `subscription OnDeleteFeature($filter: ModelSubscriptionFeatureFilterInput) {
  onDeleteFeature(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeatureSubscriptionVariables,
  APITypes.OnDeleteFeatureSubscription
>;
export const onCreateAdminRole = /* GraphQL */ `subscription OnCreateAdminRole($filter: ModelSubscriptionAdminRoleFilterInput) {
  onCreateAdminRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAdminRoleSubscriptionVariables,
  APITypes.OnCreateAdminRoleSubscription
>;
export const onUpdateAdminRole = /* GraphQL */ `subscription OnUpdateAdminRole($filter: ModelSubscriptionAdminRoleFilterInput) {
  onUpdateAdminRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAdminRoleSubscriptionVariables,
  APITypes.OnUpdateAdminRoleSubscription
>;
export const onDeleteAdminRole = /* GraphQL */ `subscription OnDeleteAdminRole($filter: ModelSubscriptionAdminRoleFilterInput) {
  onDeleteAdminRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAdminRoleSubscriptionVariables,
  APITypes.OnDeleteAdminRoleSubscription
>;
export const onCreateAdminGroup = /* GraphQL */ `subscription OnCreateAdminGroup(
  $filter: ModelSubscriptionAdminGroupFilterInput
) {
  onCreateAdminGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAdminGroupSubscriptionVariables,
  APITypes.OnCreateAdminGroupSubscription
>;
export const onUpdateAdminGroup = /* GraphQL */ `subscription OnUpdateAdminGroup(
  $filter: ModelSubscriptionAdminGroupFilterInput
) {
  onUpdateAdminGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAdminGroupSubscriptionVariables,
  APITypes.OnUpdateAdminGroupSubscription
>;
export const onDeleteAdminGroup = /* GraphQL */ `subscription OnDeleteAdminGroup(
  $filter: ModelSubscriptionAdminGroupFilterInput
) {
  onDeleteAdminGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAdminGroupSubscriptionVariables,
  APITypes.OnDeleteAdminGroupSubscription
>;
export const onCreateAttachment = /* GraphQL */ `subscription OnCreateAttachment(
  $filter: ModelSubscriptionAttachmentFilterInput
) {
  onCreateAttachment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAttachmentSubscriptionVariables,
  APITypes.OnCreateAttachmentSubscription
>;
export const onUpdateAttachment = /* GraphQL */ `subscription OnUpdateAttachment(
  $filter: ModelSubscriptionAttachmentFilterInput
) {
  onUpdateAttachment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAttachmentSubscriptionVariables,
  APITypes.OnUpdateAttachmentSubscription
>;
export const onDeleteAttachment = /* GraphQL */ `subscription OnDeleteAttachment(
  $filter: ModelSubscriptionAttachmentFilterInput
) {
  onDeleteAttachment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAttachmentSubscriptionVariables,
  APITypes.OnDeleteAttachmentSubscription
>;
export const onCreateUserConcepts = /* GraphQL */ `subscription OnCreateUserConcepts(
  $filter: ModelSubscriptionUserConceptsFilterInput
) {
  onCreateUserConcepts(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserConceptsSubscriptionVariables,
  APITypes.OnCreateUserConceptsSubscription
>;
export const onUpdateUserConcepts = /* GraphQL */ `subscription OnUpdateUserConcepts(
  $filter: ModelSubscriptionUserConceptsFilterInput
) {
  onUpdateUserConcepts(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserConceptsSubscriptionVariables,
  APITypes.OnUpdateUserConceptsSubscription
>;
export const onDeleteUserConcepts = /* GraphQL */ `subscription OnDeleteUserConcepts(
  $filter: ModelSubscriptionUserConceptsFilterInput
) {
  onDeleteUserConcepts(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserConceptsSubscriptionVariables,
  APITypes.OnDeleteUserConceptsSubscription
>;
export const onCreateGuest = /* GraphQL */ `subscription OnCreateGuest($filter: ModelSubscriptionGuestFilterInput) {
  onCreateGuest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGuestSubscriptionVariables,
  APITypes.OnCreateGuestSubscription
>;
export const onUpdateGuest = /* GraphQL */ `subscription OnUpdateGuest($filter: ModelSubscriptionGuestFilterInput) {
  onUpdateGuest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGuestSubscriptionVariables,
  APITypes.OnUpdateGuestSubscription
>;
export const onDeleteGuest = /* GraphQL */ `subscription OnDeleteGuest($filter: ModelSubscriptionGuestFilterInput) {
  onDeleteGuest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGuestSubscriptionVariables,
  APITypes.OnDeleteGuestSubscription
>;
export const onCreateGuestGroup = /* GraphQL */ `subscription OnCreateGuestGroup(
  $filter: ModelSubscriptionGuestGroupFilterInput
) {
  onCreateGuestGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGuestGroupSubscriptionVariables,
  APITypes.OnCreateGuestGroupSubscription
>;
export const onUpdateGuestGroup = /* GraphQL */ `subscription OnUpdateGuestGroup(
  $filter: ModelSubscriptionGuestGroupFilterInput
) {
  onUpdateGuestGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGuestGroupSubscriptionVariables,
  APITypes.OnUpdateGuestGroupSubscription
>;
export const onDeleteGuestGroup = /* GraphQL */ `subscription OnDeleteGuestGroup(
  $filter: ModelSubscriptionGuestGroupFilterInput
) {
  onDeleteGuestGroup(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGuestGroupSubscriptionVariables,
  APITypes.OnDeleteGuestGroupSubscription
>;
export const onCreateTimeline = /* GraphQL */ `subscription OnCreateTimeline($filter: ModelSubscriptionTimelineFilterInput) {
  onCreateTimeline(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTimelineSubscriptionVariables,
  APITypes.OnCreateTimelineSubscription
>;
export const onUpdateTimeline = /* GraphQL */ `subscription OnUpdateTimeline($filter: ModelSubscriptionTimelineFilterInput) {
  onUpdateTimeline(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTimelineSubscriptionVariables,
  APITypes.OnUpdateTimelineSubscription
>;
export const onDeleteTimeline = /* GraphQL */ `subscription OnDeleteTimeline($filter: ModelSubscriptionTimelineFilterInput) {
  onDeleteTimeline(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTimelineSubscriptionVariables,
  APITypes.OnDeleteTimelineSubscription
>;
export const onCreateFlag = /* GraphQL */ `subscription OnCreateFlag($filter: ModelSubscriptionFlagFilterInput) {
  onCreateFlag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFlagSubscriptionVariables,
  APITypes.OnCreateFlagSubscription
>;
export const onUpdateFlag = /* GraphQL */ `subscription OnUpdateFlag($filter: ModelSubscriptionFlagFilterInput) {
  onUpdateFlag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFlagSubscriptionVariables,
  APITypes.OnUpdateFlagSubscription
>;
export const onDeleteFlag = /* GraphQL */ `subscription OnDeleteFlag($filter: ModelSubscriptionFlagFilterInput) {
  onDeleteFlag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFlagSubscriptionVariables,
  APITypes.OnDeleteFlagSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
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
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
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
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
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
    deleted
    createdAt
    createdByID
    createdByName
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onCreateEventTicket = /* GraphQL */ `subscription OnCreateEventTicket(
  $filter: ModelSubscriptionEventTicketFilterInput
) {
  onCreateEventTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventTicketSubscriptionVariables,
  APITypes.OnCreateEventTicketSubscription
>;
export const onUpdateEventTicket = /* GraphQL */ `subscription OnUpdateEventTicket(
  $filter: ModelSubscriptionEventTicketFilterInput
) {
  onUpdateEventTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventTicketSubscriptionVariables,
  APITypes.OnUpdateEventTicketSubscription
>;
export const onDeleteEventTicket = /* GraphQL */ `subscription OnDeleteEventTicket(
  $filter: ModelSubscriptionEventTicketFilterInput
) {
  onDeleteEventTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventTicketSubscriptionVariables,
  APITypes.OnDeleteEventTicketSubscription
>;
export const onCreateBooking = /* GraphQL */ `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onCreateBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookingSubscriptionVariables,
  APITypes.OnCreateBookingSubscription
>;
export const onUpdateBooking = /* GraphQL */ `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onUpdateBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookingSubscriptionVariables,
  APITypes.OnUpdateBookingSubscription
>;
export const onDeleteBooking = /* GraphQL */ `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
  onDeleteBooking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookingSubscriptionVariables,
  APITypes.OnDeleteBookingSubscription
>;
