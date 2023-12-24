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
    guest_avatar
    avg_spend
    avg_ticket_type
    avg_ticket_number
    connections
    last_attended_event
    gender
    group
    appPassword
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
    guest_avatar
    avg_spend
    avg_ticket_type
    avg_ticket_number
    connections
    last_attended_event
    gender
    group
    appPassword
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
    guest_avatar
    avg_spend
    avg_ticket_type
    avg_ticket_number
    connections
    last_attended_event
    gender
    group
    appPassword
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
