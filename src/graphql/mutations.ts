/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAccount = /* GraphQL */ `mutation CreateAccount(
  $input: CreateAccountInput!
  $condition: ModelAccountConditionInput
) {
  createAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const updateAccount = /* GraphQL */ `mutation UpdateAccount(
  $input: UpdateAccountInput!
  $condition: ModelAccountConditionInput
) {
  updateAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAccountMutationVariables,
  APITypes.UpdateAccountMutation
>;
export const deleteAccount = /* GraphQL */ `mutation DeleteAccount(
  $input: DeleteAccountInput!
  $condition: ModelAccountConditionInput
) {
  deleteAccount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAccountMutationVariables,
  APITypes.DeleteAccountMutation
>;
export const createConcept = /* GraphQL */ `mutation CreateConcept(
  $input: CreateConceptInput!
  $condition: ModelConceptConditionInput
) {
  createConcept(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateConceptMutationVariables,
  APITypes.CreateConceptMutation
>;
export const updateConcept = /* GraphQL */ `mutation UpdateConcept(
  $input: UpdateConceptInput!
  $condition: ModelConceptConditionInput
) {
  updateConcept(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateConceptMutationVariables,
  APITypes.UpdateConceptMutation
>;
export const deleteConcept = /* GraphQL */ `mutation DeleteConcept(
  $input: DeleteConceptInput!
  $condition: ModelConceptConditionInput
) {
  deleteConcept(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteConceptMutationVariables,
  APITypes.DeleteConceptMutation
>;
export const createLanguage = /* GraphQL */ `mutation CreateLanguage(
  $input: CreateLanguageInput!
  $condition: ModelLanguageConditionInput
) {
  createLanguage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLanguageMutationVariables,
  APITypes.CreateLanguageMutation
>;
export const updateLanguage = /* GraphQL */ `mutation UpdateLanguage(
  $input: UpdateLanguageInput!
  $condition: ModelLanguageConditionInput
) {
  updateLanguage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLanguageMutationVariables,
  APITypes.UpdateLanguageMutation
>;
export const deleteLanguage = /* GraphQL */ `mutation DeleteLanguage(
  $input: DeleteLanguageInput!
  $condition: ModelLanguageConditionInput
) {
  deleteLanguage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLanguageMutationVariables,
  APITypes.DeleteLanguageMutation
>;
export const createFeature = /* GraphQL */ `mutation CreateFeature(
  $input: CreateFeatureInput!
  $condition: ModelFeatureConditionInput
) {
  createFeature(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFeatureMutationVariables,
  APITypes.CreateFeatureMutation
>;
export const updateFeature = /* GraphQL */ `mutation UpdateFeature(
  $input: UpdateFeatureInput!
  $condition: ModelFeatureConditionInput
) {
  updateFeature(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFeatureMutationVariables,
  APITypes.UpdateFeatureMutation
>;
export const deleteFeature = /* GraphQL */ `mutation DeleteFeature(
  $input: DeleteFeatureInput!
  $condition: ModelFeatureConditionInput
) {
  deleteFeature(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFeatureMutationVariables,
  APITypes.DeleteFeatureMutation
>;
export const createAdminRole = /* GraphQL */ `mutation CreateAdminRole(
  $input: CreateAdminRoleInput!
  $condition: ModelAdminRoleConditionInput
) {
  createAdminRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAdminRoleMutationVariables,
  APITypes.CreateAdminRoleMutation
>;
export const updateAdminRole = /* GraphQL */ `mutation UpdateAdminRole(
  $input: UpdateAdminRoleInput!
  $condition: ModelAdminRoleConditionInput
) {
  updateAdminRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAdminRoleMutationVariables,
  APITypes.UpdateAdminRoleMutation
>;
export const deleteAdminRole = /* GraphQL */ `mutation DeleteAdminRole(
  $input: DeleteAdminRoleInput!
  $condition: ModelAdminRoleConditionInput
) {
  deleteAdminRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAdminRoleMutationVariables,
  APITypes.DeleteAdminRoleMutation
>;
export const createAdminGroup = /* GraphQL */ `mutation CreateAdminGroup(
  $input: CreateAdminGroupInput!
  $condition: ModelAdminGroupConditionInput
) {
  createAdminGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAdminGroupMutationVariables,
  APITypes.CreateAdminGroupMutation
>;
export const updateAdminGroup = /* GraphQL */ `mutation UpdateAdminGroup(
  $input: UpdateAdminGroupInput!
  $condition: ModelAdminGroupConditionInput
) {
  updateAdminGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAdminGroupMutationVariables,
  APITypes.UpdateAdminGroupMutation
>;
export const deleteAdminGroup = /* GraphQL */ `mutation DeleteAdminGroup(
  $input: DeleteAdminGroupInput!
  $condition: ModelAdminGroupConditionInput
) {
  deleteAdminGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAdminGroupMutationVariables,
  APITypes.DeleteAdminGroupMutation
>;
export const createAttachment = /* GraphQL */ `mutation CreateAttachment(
  $input: CreateAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  createAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAttachmentMutationVariables,
  APITypes.CreateAttachmentMutation
>;
export const updateAttachment = /* GraphQL */ `mutation UpdateAttachment(
  $input: UpdateAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  updateAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAttachmentMutationVariables,
  APITypes.UpdateAttachmentMutation
>;
export const deleteAttachment = /* GraphQL */ `mutation DeleteAttachment(
  $input: DeleteAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  deleteAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAttachmentMutationVariables,
  APITypes.DeleteAttachmentMutation
>;
export const createUserConcepts = /* GraphQL */ `mutation CreateUserConcepts(
  $input: CreateUserConceptsInput!
  $condition: ModelUserConceptsConditionInput
) {
  createUserConcepts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserConceptsMutationVariables,
  APITypes.CreateUserConceptsMutation
>;
export const updateUserConcepts = /* GraphQL */ `mutation UpdateUserConcepts(
  $input: UpdateUserConceptsInput!
  $condition: ModelUserConceptsConditionInput
) {
  updateUserConcepts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserConceptsMutationVariables,
  APITypes.UpdateUserConceptsMutation
>;
export const deleteUserConcepts = /* GraphQL */ `mutation DeleteUserConcepts(
  $input: DeleteUserConceptsInput!
  $condition: ModelUserConceptsConditionInput
) {
  deleteUserConcepts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserConceptsMutationVariables,
  APITypes.DeleteUserConceptsMutation
>;
export const createGuest = /* GraphQL */ `mutation CreateGuest(
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
` as GeneratedMutation<
  APITypes.CreateGuestMutationVariables,
  APITypes.CreateGuestMutation
>;
export const updateGuest = /* GraphQL */ `mutation UpdateGuest(
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
` as GeneratedMutation<
  APITypes.UpdateGuestMutationVariables,
  APITypes.UpdateGuestMutation
>;
export const deleteGuest = /* GraphQL */ `mutation DeleteGuest(
  $input: DeleteGuestInput!
  $condition: ModelGuestConditionInput
) {
  deleteGuest(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGuestMutationVariables,
  APITypes.DeleteGuestMutation
>;
export const createGuestGroup = /* GraphQL */ `mutation CreateGuestGroup(
  $input: CreateGuestGroupInput!
  $condition: ModelGuestGroupConditionInput
) {
  createGuestGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGuestGroupMutationVariables,
  APITypes.CreateGuestGroupMutation
>;
export const updateGuestGroup = /* GraphQL */ `mutation UpdateGuestGroup(
  $input: UpdateGuestGroupInput!
  $condition: ModelGuestGroupConditionInput
) {
  updateGuestGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGuestGroupMutationVariables,
  APITypes.UpdateGuestGroupMutation
>;
export const deleteGuestGroup = /* GraphQL */ `mutation DeleteGuestGroup(
  $input: DeleteGuestGroupInput!
  $condition: ModelGuestGroupConditionInput
) {
  deleteGuestGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGuestGroupMutationVariables,
  APITypes.DeleteGuestGroupMutation
>;
export const createTimeline = /* GraphQL */ `mutation CreateTimeline(
  $input: CreateTimelineInput!
  $condition: ModelTimelineConditionInput
) {
  createTimeline(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTimelineMutationVariables,
  APITypes.CreateTimelineMutation
>;
export const updateTimeline = /* GraphQL */ `mutation UpdateTimeline(
  $input: UpdateTimelineInput!
  $condition: ModelTimelineConditionInput
) {
  updateTimeline(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTimelineMutationVariables,
  APITypes.UpdateTimelineMutation
>;
export const deleteTimeline = /* GraphQL */ `mutation DeleteTimeline(
  $input: DeleteTimelineInput!
  $condition: ModelTimelineConditionInput
) {
  deleteTimeline(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTimelineMutationVariables,
  APITypes.DeleteTimelineMutation
>;
export const createFlag = /* GraphQL */ `mutation CreateFlag(
  $input: CreateFlagInput!
  $condition: ModelFlagConditionInput
) {
  createFlag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFlagMutationVariables,
  APITypes.CreateFlagMutation
>;
export const updateFlag = /* GraphQL */ `mutation UpdateFlag(
  $input: UpdateFlagInput!
  $condition: ModelFlagConditionInput
) {
  updateFlag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFlagMutationVariables,
  APITypes.UpdateFlagMutation
>;
export const deleteFlag = /* GraphQL */ `mutation DeleteFlag(
  $input: DeleteFlagInput!
  $condition: ModelFlagConditionInput
) {
  deleteFlag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFlagMutationVariables,
  APITypes.DeleteFlagMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const createEventTicket = /* GraphQL */ `mutation CreateEventTicket(
  $input: CreateEventTicketInput!
  $condition: ModelEventTicketConditionInput
) {
  createEventTicket(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEventTicketMutationVariables,
  APITypes.CreateEventTicketMutation
>;
export const updateEventTicket = /* GraphQL */ `mutation UpdateEventTicket(
  $input: UpdateEventTicketInput!
  $condition: ModelEventTicketConditionInput
) {
  updateEventTicket(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEventTicketMutationVariables,
  APITypes.UpdateEventTicketMutation
>;
export const deleteEventTicket = /* GraphQL */ `mutation DeleteEventTicket(
  $input: DeleteEventTicketInput!
  $condition: ModelEventTicketConditionInput
) {
  deleteEventTicket(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEventTicketMutationVariables,
  APITypes.DeleteEventTicketMutation
>;
export const createBooking = /* GraphQL */ `mutation CreateBooking(
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
    guestTicket {
      number
      __typename
    }
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
` as GeneratedMutation<
  APITypes.CreateBookingMutationVariables,
  APITypes.CreateBookingMutation
>;
export const updateBooking = /* GraphQL */ `mutation UpdateBooking(
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
    guestTicket {
      number
      __typename
    }
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
` as GeneratedMutation<
  APITypes.UpdateBookingMutationVariables,
  APITypes.UpdateBookingMutation
>;
export const deleteBooking = /* GraphQL */ `mutation DeleteBooking(
  $input: DeleteBookingInput!
  $condition: ModelBookingConditionInput
) {
  deleteBooking(input: $input, condition: $condition) {
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
    guestTicket {
      number
      __typename
    }
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
` as GeneratedMutation<
  APITypes.DeleteBookingMutationVariables,
  APITypes.DeleteBookingMutation
>;
