/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  domain: string,
  siteTitle: string,
  guestsCount?: number | null,
  tagline: string,
  description: string,
  siteAddress: string,
  defaultLanguage: string,
  languages: Array< string | null >,
  features: Array< string | null >,
  status: string,
  socialLinks?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  accountLogoId?: string | null,
};

export type ModelAccountConditionInput = {
  domain?: ModelStringInput | null,
  siteTitle?: ModelStringInput | null,
  guestsCount?: ModelIntInput | null,
  tagline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  siteAddress?: ModelStringInput | null,
  defaultLanguage?: ModelStringInput | null,
  languages?: ModelStringInput | null,
  features?: ModelStringInput | null,
  status?: ModelStringInput | null,
  socialLinks?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
  accountLogoId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  logo?: Attachment | null,
  domain: string,
  siteTitle: string,
  guestsCount?: number | null,
  tagline: string,
  description: string,
  siteAddress: string,
  defaultLanguage: string,
  languages: Array< string | null >,
  features: Array< string | null >,
  status: string,
  socialLinks?: Array< string | null > | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  accountLogoId?: string | null,
};

export type Attachment = {
  __typename: "Attachment",
  id: string,
  mediaID: string,
  fileUrl: string,
  filename: string,
  filetype?: string | null,
  fileSize?: number | null,
  alternativeText?: string | null,
  caption?: string | null,
  description?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateAccountInput = {
  id: string,
  domain?: string | null,
  siteTitle?: string | null,
  guestsCount?: number | null,
  tagline?: string | null,
  description?: string | null,
  siteAddress?: string | null,
  defaultLanguage?: string | null,
  languages?: Array< string | null > | null,
  features?: Array< string | null > | null,
  status?: string | null,
  socialLinks?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  accountLogoId?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateConceptInput = {
  id?: string | null,
  accountID: string,
  name: string,
  description?: string | null,
  logo?: string | null,
  type?: string | null,
  location?: string | null,
  precedence?: number | null,
  longitude?: string | null,
  latitude?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelConceptConditionInput = {
  accountID?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  type?: ModelStringInput | null,
  location?: ModelStringInput | null,
  precedence?: ModelIntInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelConceptConditionInput | null > | null,
  or?: Array< ModelConceptConditionInput | null > | null,
  not?: ModelConceptConditionInput | null,
};

export type Concept = {
  __typename: "Concept",
  id: string,
  accountID: string,
  name: string,
  description?: string | null,
  logo?: string | null,
  type?: string | null,
  location?: string | null,
  precedence?: number | null,
  longitude?: string | null,
  latitude?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateConceptInput = {
  id: string,
  accountID?: string | null,
  name?: string | null,
  description?: string | null,
  logo?: string | null,
  type?: string | null,
  location?: string | null,
  precedence?: number | null,
  longitude?: string | null,
  latitude?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteConceptInput = {
  id: string,
};

export type CreateLanguageInput = {
  id?: string | null,
  name: string,
  code: string,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelLanguageConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelLanguageConditionInput | null > | null,
  or?: Array< ModelLanguageConditionInput | null > | null,
  not?: ModelLanguageConditionInput | null,
};

export type Language = {
  __typename: "Language",
  id: string,
  name: string,
  code: string,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateLanguageInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteLanguageInput = {
  id: string,
};

export type CreateFeatureInput = {
  id?: string | null,
  name: string,
  icon?: string | null,
  slug: string,
  precedence: string,
  parent?: string | null,
  private?: boolean | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelFeatureConditionInput = {
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  precedence?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  private?: ModelBooleanInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelFeatureConditionInput | null > | null,
  or?: Array< ModelFeatureConditionInput | null > | null,
  not?: ModelFeatureConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Feature = {
  __typename: "Feature",
  id: string,
  name: string,
  icon?: string | null,
  slug: string,
  precedence: string,
  parent?: string | null,
  private?: boolean | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateFeatureInput = {
  id: string,
  name?: string | null,
  icon?: string | null,
  slug?: string | null,
  precedence?: string | null,
  parent?: string | null,
  private?: boolean | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteFeatureInput = {
  id: string,
};

export type CreateAdminRoleInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelAdminRoleConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAdminRoleConditionInput | null > | null,
  or?: Array< ModelAdminRoleConditionInput | null > | null,
  not?: ModelAdminRoleConditionInput | null,
};

export type AdminRole = {
  __typename: "AdminRole",
  id: string,
  name?: string | null,
  description?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateAdminRoleInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteAdminRoleInput = {
  id: string,
};

export type CreateAdminGroupInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  roles?: Array< string | null > | null,
  users?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelAdminGroupConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  roles?: ModelIDInput | null,
  users?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAdminGroupConditionInput | null > | null,
  or?: Array< ModelAdminGroupConditionInput | null > | null,
  not?: ModelAdminGroupConditionInput | null,
};

export type AdminGroup = {
  __typename: "AdminGroup",
  id: string,
  name?: string | null,
  description?: string | null,
  roles?: Array< string | null > | null,
  users?: Array< string | null > | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateAdminGroupInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  roles?: Array< string | null > | null,
  users?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteAdminGroupInput = {
  id: string,
};

export type CreateAttachmentInput = {
  id?: string | null,
  mediaID: string,
  fileUrl: string,
  filename: string,
  filetype?: string | null,
  fileSize?: number | null,
  alternativeText?: string | null,
  caption?: string | null,
  description?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelAttachmentConditionInput = {
  mediaID?: ModelIDInput | null,
  fileUrl?: ModelStringInput | null,
  filename?: ModelStringInput | null,
  filetype?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  alternativeText?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAttachmentConditionInput | null > | null,
  or?: Array< ModelAttachmentConditionInput | null > | null,
  not?: ModelAttachmentConditionInput | null,
};

export type UpdateAttachmentInput = {
  id: string,
  mediaID?: string | null,
  fileUrl?: string | null,
  filename?: string | null,
  filetype?: string | null,
  fileSize?: number | null,
  alternativeText?: string | null,
  caption?: string | null,
  description?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteAttachmentInput = {
  id: string,
};

export type CreateUserConceptsInput = {
  id?: string | null,
  defaultConcept?: string | null,
  concepts?: Array< string | null > | null,
  conceptsRoles?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelUserConceptsConditionInput = {
  defaultConcept?: ModelIDInput | null,
  concepts?: ModelIDInput | null,
  conceptsRoles?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelUserConceptsConditionInput | null > | null,
  or?: Array< ModelUserConceptsConditionInput | null > | null,
  not?: ModelUserConceptsConditionInput | null,
};

export type UserConcepts = {
  __typename: "UserConcepts",
  id: string,
  defaultConcept?: string | null,
  concepts?: Array< string | null > | null,
  conceptsRoles?: Array< string | null > | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateUserConceptsInput = {
  id: string,
  defaultConcept?: string | null,
  concepts?: Array< string | null > | null,
  conceptsRoles?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteUserConceptsInput = {
  id: string,
};

export type CreateGuestInput = {
  id?: string | null,
  name?: string | null,
  username?: string | null,
  email?: string | null,
  phone_number?: string | null,
  guestGroupID?: string | null,
  guest_avatar?: string | null,
  avg_spend?: number | null,
  avg_ticket_type?: string | null,
  avg_ticket_number?: number | null,
  connections?: Array< string | null > | null,
  last_attended_event?: string | null,
  gender?: string | null,
  group?: string | null,
  faceBookID?: string | null,
  appPassword?: string | null,
  birthdate?: string | null,
  isVerified?: boolean | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelGuestConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  guestGroupID?: ModelIDInput | null,
  guest_avatar?: ModelStringInput | null,
  avg_spend?: ModelIntInput | null,
  avg_ticket_type?: ModelStringInput | null,
  avg_ticket_number?: ModelIntInput | null,
  connections?: ModelIDInput | null,
  last_attended_event?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  group?: ModelStringInput | null,
  faceBookID?: ModelIDInput | null,
  appPassword?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelGuestConditionInput | null > | null,
  or?: Array< ModelGuestConditionInput | null > | null,
  not?: ModelGuestConditionInput | null,
};

export type Guest = {
  __typename: "Guest",
  id: string,
  name?: string | null,
  username?: string | null,
  email?: string | null,
  phone_number?: string | null,
  guestGroupID?: string | null,
  guest_avatar?: string | null,
  avg_spend?: number | null,
  avg_ticket_type?: string | null,
  avg_ticket_number?: number | null,
  connections?: Array< string | null > | null,
  last_attended_event?: string | null,
  gender?: string | null,
  group?: string | null,
  faceBookID?: string | null,
  appPassword?: string | null,
  birthdate?: string | null,
  isVerified?: boolean | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateGuestInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  email?: string | null,
  phone_number?: string | null,
  guestGroupID?: string | null,
  guest_avatar?: string | null,
  avg_spend?: number | null,
  avg_ticket_type?: string | null,
  avg_ticket_number?: number | null,
  connections?: Array< string | null > | null,
  last_attended_event?: string | null,
  gender?: string | null,
  group?: string | null,
  faceBookID?: string | null,
  appPassword?: string | null,
  birthdate?: string | null,
  isVerified?: boolean | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteGuestInput = {
  id: string,
};

export type CreateGuestGroupInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  guests?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelGuestGroupConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  guests?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelGuestGroupConditionInput | null > | null,
  or?: Array< ModelGuestGroupConditionInput | null > | null,
  not?: ModelGuestGroupConditionInput | null,
};

export type GuestGroup = {
  __typename: "GuestGroup",
  id: string,
  name?: string | null,
  description?: string | null,
  guests?: Array< string | null > | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateGuestGroupInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  guests?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteGuestGroupInput = {
  id: string,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  domain?: ModelStringInput | null,
  siteTitle?: ModelStringInput | null,
  guestsCount?: ModelIntInput | null,
  tagline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  siteAddress?: ModelStringInput | null,
  defaultLanguage?: ModelStringInput | null,
  languages?: ModelStringInput | null,
  features?: ModelStringInput | null,
  status?: ModelStringInput | null,
  socialLinks?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
  accountLogoId?: ModelIDInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelConceptFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  type?: ModelStringInput | null,
  location?: ModelStringInput | null,
  precedence?: ModelIntInput | null,
  longitude?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelConceptFilterInput | null > | null,
  or?: Array< ModelConceptFilterInput | null > | null,
  not?: ModelConceptFilterInput | null,
};

export type ModelConceptConnection = {
  __typename: "ModelConceptConnection",
  items:  Array<Concept | null >,
  nextToken?: string | null,
};

export type ModelLanguageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelLanguageFilterInput | null > | null,
  or?: Array< ModelLanguageFilterInput | null > | null,
  not?: ModelLanguageFilterInput | null,
};

export type ModelLanguageConnection = {
  __typename: "ModelLanguageConnection",
  items:  Array<Language | null >,
  nextToken?: string | null,
};

export type ModelFeatureFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  precedence?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  private?: ModelBooleanInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelFeatureFilterInput | null > | null,
  or?: Array< ModelFeatureFilterInput | null > | null,
  not?: ModelFeatureFilterInput | null,
};

export type ModelFeatureConnection = {
  __typename: "ModelFeatureConnection",
  items:  Array<Feature | null >,
  nextToken?: string | null,
};

export type ModelAdminRoleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAdminRoleFilterInput | null > | null,
  or?: Array< ModelAdminRoleFilterInput | null > | null,
  not?: ModelAdminRoleFilterInput | null,
};

export type ModelAdminRoleConnection = {
  __typename: "ModelAdminRoleConnection",
  items:  Array<AdminRole | null >,
  nextToken?: string | null,
};

export type ModelAdminGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  roles?: ModelIDInput | null,
  users?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAdminGroupFilterInput | null > | null,
  or?: Array< ModelAdminGroupFilterInput | null > | null,
  not?: ModelAdminGroupFilterInput | null,
};

export type ModelAdminGroupConnection = {
  __typename: "ModelAdminGroupConnection",
  items:  Array<AdminGroup | null >,
  nextToken?: string | null,
};

export type ModelAttachmentFilterInput = {
  id?: ModelIDInput | null,
  mediaID?: ModelIDInput | null,
  fileUrl?: ModelStringInput | null,
  filename?: ModelStringInput | null,
  filetype?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  alternativeText?: ModelStringInput | null,
  caption?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelAttachmentFilterInput | null > | null,
  or?: Array< ModelAttachmentFilterInput | null > | null,
  not?: ModelAttachmentFilterInput | null,
};

export type ModelAttachmentConnection = {
  __typename: "ModelAttachmentConnection",
  items:  Array<Attachment | null >,
  nextToken?: string | null,
};

export type ModelUserConceptsFilterInput = {
  id?: ModelIDInput | null,
  defaultConcept?: ModelIDInput | null,
  concepts?: ModelIDInput | null,
  conceptsRoles?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelUserConceptsFilterInput | null > | null,
  or?: Array< ModelUserConceptsFilterInput | null > | null,
  not?: ModelUserConceptsFilterInput | null,
};

export type ModelUserConceptsConnection = {
  __typename: "ModelUserConceptsConnection",
  items:  Array<UserConcepts | null >,
  nextToken?: string | null,
};

export type ModelGuestFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  guestGroupID?: ModelIDInput | null,
  guest_avatar?: ModelStringInput | null,
  avg_spend?: ModelIntInput | null,
  avg_ticket_type?: ModelStringInput | null,
  avg_ticket_number?: ModelIntInput | null,
  connections?: ModelIDInput | null,
  last_attended_event?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  group?: ModelStringInput | null,
  faceBookID?: ModelIDInput | null,
  appPassword?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelGuestFilterInput | null > | null,
  or?: Array< ModelGuestFilterInput | null > | null,
  not?: ModelGuestFilterInput | null,
};

export type ModelGuestConnection = {
  __typename: "ModelGuestConnection",
  items:  Array<Guest | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGuestGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  guests?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelGuestGroupFilterInput | null > | null,
  or?: Array< ModelGuestGroupFilterInput | null > | null,
  not?: ModelGuestGroupFilterInput | null,
};

export type ModelGuestGroupConnection = {
  __typename: "ModelGuestGroupConnection",
  items:  Array<GuestGroup | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  domain?: ModelSubscriptionStringInput | null,
  siteTitle?: ModelSubscriptionStringInput | null,
  guestsCount?: ModelSubscriptionIntInput | null,
  tagline?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  siteAddress?: ModelSubscriptionStringInput | null,
  defaultLanguage?: ModelSubscriptionStringInput | null,
  languages?: ModelSubscriptionStringInput | null,
  features?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  socialLinks?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionConceptFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  precedence?: ModelSubscriptionIntInput | null,
  longitude?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConceptFilterInput | null > | null,
  or?: Array< ModelSubscriptionConceptFilterInput | null > | null,
};

export type ModelSubscriptionLanguageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLanguageFilterInput | null > | null,
  or?: Array< ModelSubscriptionLanguageFilterInput | null > | null,
};

export type ModelSubscriptionFeatureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  precedence?: ModelSubscriptionStringInput | null,
  parent?: ModelSubscriptionStringInput | null,
  private?: ModelSubscriptionBooleanInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeatureFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeatureFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAdminRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminRoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdminRoleFilterInput | null > | null,
};

export type ModelSubscriptionAdminGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  roles?: ModelSubscriptionIDInput | null,
  users?: ModelSubscriptionIDInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdminGroupFilterInput | null > | null,
};

export type ModelSubscriptionAttachmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mediaID?: ModelSubscriptionIDInput | null,
  fileUrl?: ModelSubscriptionStringInput | null,
  filename?: ModelSubscriptionStringInput | null,
  filetype?: ModelSubscriptionStringInput | null,
  fileSize?: ModelSubscriptionIntInput | null,
  alternativeText?: ModelSubscriptionStringInput | null,
  caption?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
};

export type ModelSubscriptionUserConceptsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  defaultConcept?: ModelSubscriptionIDInput | null,
  concepts?: ModelSubscriptionIDInput | null,
  conceptsRoles?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserConceptsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserConceptsFilterInput | null > | null,
};

export type ModelSubscriptionGuestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  guestGroupID?: ModelSubscriptionIDInput | null,
  guest_avatar?: ModelSubscriptionStringInput | null,
  avg_spend?: ModelSubscriptionIntInput | null,
  avg_ticket_type?: ModelSubscriptionStringInput | null,
  avg_ticket_number?: ModelSubscriptionIntInput | null,
  connections?: ModelSubscriptionIDInput | null,
  last_attended_event?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  group?: ModelSubscriptionStringInput | null,
  faceBookID?: ModelSubscriptionIDInput | null,
  appPassword?: ModelSubscriptionStringInput | null,
  birthdate?: ModelSubscriptionStringInput | null,
  isVerified?: ModelSubscriptionBooleanInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGuestFilterInput | null > | null,
  or?: Array< ModelSubscriptionGuestFilterInput | null > | null,
};

export type ModelSubscriptionGuestGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  guests?: ModelSubscriptionIDInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGuestGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionGuestGroupFilterInput | null > | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    logo?:  {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    domain: string,
    siteTitle: string,
    guestsCount?: number | null,
    tagline: string,
    description: string,
    siteAddress: string,
    defaultLanguage: string,
    languages: Array< string | null >,
    features: Array< string | null >,
    status: string,
    socialLinks?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    accountLogoId?: string | null,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    logo?:  {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    domain: string,
    siteTitle: string,
    guestsCount?: number | null,
    tagline: string,
    description: string,
    siteAddress: string,
    defaultLanguage: string,
    languages: Array< string | null >,
    features: Array< string | null >,
    status: string,
    socialLinks?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    accountLogoId?: string | null,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    logo?:  {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    domain: string,
    siteTitle: string,
    guestsCount?: number | null,
    tagline: string,
    description: string,
    siteAddress: string,
    defaultLanguage: string,
    languages: Array< string | null >,
    features: Array< string | null >,
    status: string,
    socialLinks?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    accountLogoId?: string | null,
  } | null,
};

export type CreateConceptMutationVariables = {
  input: CreateConceptInput,
  condition?: ModelConceptConditionInput | null,
};

export type CreateConceptMutation = {
  createConcept?:  {
    __typename: "Concept",
    id: string,
    accountID: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    type?: string | null,
    location?: string | null,
    precedence?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateConceptMutationVariables = {
  input: UpdateConceptInput,
  condition?: ModelConceptConditionInput | null,
};

export type UpdateConceptMutation = {
  updateConcept?:  {
    __typename: "Concept",
    id: string,
    accountID: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    type?: string | null,
    location?: string | null,
    precedence?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteConceptMutationVariables = {
  input: DeleteConceptInput,
  condition?: ModelConceptConditionInput | null,
};

export type DeleteConceptMutation = {
  deleteConcept?:  {
    __typename: "Concept",
    id: string,
    accountID: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    type?: string | null,
    location?: string | null,
    precedence?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateLanguageMutationVariables = {
  input: CreateLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type CreateLanguageMutation = {
  createLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    code: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateLanguageMutationVariables = {
  input: UpdateLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type UpdateLanguageMutation = {
  updateLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    code: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteLanguageMutationVariables = {
  input: DeleteLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type DeleteLanguageMutation = {
  deleteLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    code: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateFeatureMutationVariables = {
  input: CreateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type CreateFeatureMutation = {
  createFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon?: string | null,
    slug: string,
    precedence: string,
    parent?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeatureMutationVariables = {
  input: UpdateFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type UpdateFeatureMutation = {
  updateFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon?: string | null,
    slug: string,
    precedence: string,
    parent?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeatureMutationVariables = {
  input: DeleteFeatureInput,
  condition?: ModelFeatureConditionInput | null,
};

export type DeleteFeatureMutation = {
  deleteFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon?: string | null,
    slug: string,
    precedence: string,
    parent?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateAdminRoleMutationVariables = {
  input: CreateAdminRoleInput,
  condition?: ModelAdminRoleConditionInput | null,
};

export type CreateAdminRoleMutation = {
  createAdminRole?:  {
    __typename: "AdminRole",
    id: string,
    name?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdminRoleMutationVariables = {
  input: UpdateAdminRoleInput,
  condition?: ModelAdminRoleConditionInput | null,
};

export type UpdateAdminRoleMutation = {
  updateAdminRole?:  {
    __typename: "AdminRole",
    id: string,
    name?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdminRoleMutationVariables = {
  input: DeleteAdminRoleInput,
  condition?: ModelAdminRoleConditionInput | null,
};

export type DeleteAdminRoleMutation = {
  deleteAdminRole?:  {
    __typename: "AdminRole",
    id: string,
    name?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateAdminGroupMutationVariables = {
  input: CreateAdminGroupInput,
  condition?: ModelAdminGroupConditionInput | null,
};

export type CreateAdminGroupMutation = {
  createAdminGroup?:  {
    __typename: "AdminGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    roles?: Array< string | null > | null,
    users?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdminGroupMutationVariables = {
  input: UpdateAdminGroupInput,
  condition?: ModelAdminGroupConditionInput | null,
};

export type UpdateAdminGroupMutation = {
  updateAdminGroup?:  {
    __typename: "AdminGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    roles?: Array< string | null > | null,
    users?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdminGroupMutationVariables = {
  input: DeleteAdminGroupInput,
  condition?: ModelAdminGroupConditionInput | null,
};

export type DeleteAdminGroupMutation = {
  deleteAdminGroup?:  {
    __typename: "AdminGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    roles?: Array< string | null > | null,
    users?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateAttachmentMutationVariables = {
  input: CreateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type CreateAttachmentMutation = {
  createAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateAttachmentMutationVariables = {
  input: UpdateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type UpdateAttachmentMutation = {
  updateAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttachmentMutationVariables = {
  input: DeleteAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type DeleteAttachmentMutation = {
  deleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateUserConceptsMutationVariables = {
  input: CreateUserConceptsInput,
  condition?: ModelUserConceptsConditionInput | null,
};

export type CreateUserConceptsMutation = {
  createUserConcepts?:  {
    __typename: "UserConcepts",
    id: string,
    defaultConcept?: string | null,
    concepts?: Array< string | null > | null,
    conceptsRoles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserConceptsMutationVariables = {
  input: UpdateUserConceptsInput,
  condition?: ModelUserConceptsConditionInput | null,
};

export type UpdateUserConceptsMutation = {
  updateUserConcepts?:  {
    __typename: "UserConcepts",
    id: string,
    defaultConcept?: string | null,
    concepts?: Array< string | null > | null,
    conceptsRoles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserConceptsMutationVariables = {
  input: DeleteUserConceptsInput,
  condition?: ModelUserConceptsConditionInput | null,
};

export type DeleteUserConceptsMutation = {
  deleteUserConcepts?:  {
    __typename: "UserConcepts",
    id: string,
    defaultConcept?: string | null,
    concepts?: Array< string | null > | null,
    conceptsRoles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateGuestMutationVariables = {
  input: CreateGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type CreateGuestMutation = {
  createGuest?:  {
    __typename: "Guest",
    id: string,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    phone_number?: string | null,
    guestGroupID?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    avg_ticket_number?: number | null,
    connections?: Array< string | null > | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateGuestMutationVariables = {
  input: UpdateGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type UpdateGuestMutation = {
  updateGuest?:  {
    __typename: "Guest",
    id: string,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    phone_number?: string | null,
    guestGroupID?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    avg_ticket_number?: number | null,
    connections?: Array< string | null > | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteGuestMutationVariables = {
  input: DeleteGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type DeleteGuestMutation = {
  deleteGuest?:  {
    __typename: "Guest",
    id: string,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    phone_number?: string | null,
    guestGroupID?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    avg_ticket_number?: number | null,
    connections?: Array< string | null > | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateGuestGroupMutationVariables = {
  input: CreateGuestGroupInput,
  condition?: ModelGuestGroupConditionInput | null,
};

export type CreateGuestGroupMutation = {
  createGuestGroup?:  {
    __typename: "GuestGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    guests?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateGuestGroupMutationVariables = {
  input: UpdateGuestGroupInput,
  condition?: ModelGuestGroupConditionInput | null,
};

export type UpdateGuestGroupMutation = {
  updateGuestGroup?:  {
    __typename: "GuestGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    guests?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteGuestGroupMutationVariables = {
  input: DeleteGuestGroupInput,
  condition?: ModelGuestGroupConditionInput | null,
};

export type DeleteGuestGroupMutation = {
  deleteGuestGroup?:  {
    __typename: "GuestGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    guests?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    logo?:  {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    domain: string,
    siteTitle: string,
    guestsCount?: number | null,
    tagline: string,
    description: string,
    siteAddress: string,
    defaultLanguage: string,
    languages: Array< string | null >,
    features: Array< string | null >,
    status: string,
    socialLinks?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    accountLogoId?: string | null,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      domain: string,
      siteTitle: string,
      guestsCount?: number | null,
      tagline: string,
      description: string,
      siteAddress: string,
      defaultLanguage: string,
      languages: Array< string | null >,
      features: Array< string | null >,
      status: string,
      socialLinks?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      accountLogoId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConceptQueryVariables = {
  id: string,
};

export type GetConceptQuery = {
  getConcept?:  {
    __typename: "Concept",
    id: string,
    accountID: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    type?: string | null,
    location?: string | null,
    precedence?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListConceptsQueryVariables = {
  filter?: ModelConceptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConceptsQuery = {
  listConcepts?:  {
    __typename: "ModelConceptConnection",
    items:  Array< {
      __typename: "Concept",
      id: string,
      accountID: string,
      name: string,
      description?: string | null,
      logo?: string | null,
      type?: string | null,
      location?: string | null,
      precedence?: number | null,
      longitude?: string | null,
      latitude?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLanguageQueryVariables = {
  id: string,
};

export type GetLanguageQuery = {
  getLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    code: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListLanguagesQueryVariables = {
  filter?: ModelLanguageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLanguagesQuery = {
  listLanguages?:  {
    __typename: "ModelLanguageConnection",
    items:  Array< {
      __typename: "Language",
      id: string,
      name: string,
      code: string,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeatureQueryVariables = {
  id: string,
};

export type GetFeatureQuery = {
  getFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon?: string | null,
    slug: string,
    precedence: string,
    parent?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturesQuery = {
  listFeatures?:  {
    __typename: "ModelFeatureConnection",
    items:  Array< {
      __typename: "Feature",
      id: string,
      name: string,
      icon?: string | null,
      slug: string,
      precedence: string,
      parent?: string | null,
      private?: boolean | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAdminRoleQueryVariables = {
  id: string,
};

export type GetAdminRoleQuery = {
  getAdminRole?:  {
    __typename: "AdminRole",
    id: string,
    name?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListAdminRolesQueryVariables = {
  filter?: ModelAdminRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminRolesQuery = {
  listAdminRoles?:  {
    __typename: "ModelAdminRoleConnection",
    items:  Array< {
      __typename: "AdminRole",
      id: string,
      name?: string | null,
      description?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAdminGroupQueryVariables = {
  id: string,
};

export type GetAdminGroupQuery = {
  getAdminGroup?:  {
    __typename: "AdminGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    roles?: Array< string | null > | null,
    users?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListAdminGroupsQueryVariables = {
  filter?: ModelAdminGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminGroupsQuery = {
  listAdminGroups?:  {
    __typename: "ModelAdminGroupConnection",
    items:  Array< {
      __typename: "AdminGroup",
      id: string,
      name?: string | null,
      description?: string | null,
      roles?: Array< string | null > | null,
      users?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAttachmentQueryVariables = {
  id: string,
};

export type GetAttachmentQuery = {
  getAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListAttachmentsQueryVariables = {
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttachmentsQuery = {
  listAttachments?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserConceptsQueryVariables = {
  id: string,
};

export type GetUserConceptsQuery = {
  getUserConcepts?:  {
    __typename: "UserConcepts",
    id: string,
    defaultConcept?: string | null,
    concepts?: Array< string | null > | null,
    conceptsRoles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListUserConceptsQueryVariables = {
  filter?: ModelUserConceptsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserConceptsQuery = {
  listUserConcepts?:  {
    __typename: "ModelUserConceptsConnection",
    items:  Array< {
      __typename: "UserConcepts",
      id: string,
      defaultConcept?: string | null,
      concepts?: Array< string | null > | null,
      conceptsRoles?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGuestQueryVariables = {
  id: string,
};

export type GetGuestQuery = {
  getGuest?:  {
    __typename: "Guest",
    id: string,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    phone_number?: string | null,
    guestGroupID?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    avg_ticket_number?: number | null,
    connections?: Array< string | null > | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListGuestsQueryVariables = {
  filter?: ModelGuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuestsQuery = {
  listGuests?:  {
    __typename: "ModelGuestConnection",
    items:  Array< {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      avg_ticket_number?: number | null,
      connections?: Array< string | null > | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByEmailQueryVariables = {
  email: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByEmailQuery = {
  ByEmail?:  {
    __typename: "ModelGuestConnection",
    items:  Array< {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      avg_ticket_number?: number | null,
      connections?: Array< string | null > | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByPhoneNumberQueryVariables = {
  phone_number: string,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByPhoneNumberQuery = {
  ByPhoneNumber?:  {
    __typename: "ModelGuestConnection",
    items:  Array< {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      avg_ticket_number?: number | null,
      connections?: Array< string | null > | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGuestGroupQueryVariables = {
  id: string,
};

export type GetGuestGroupQuery = {
  getGuestGroup?:  {
    __typename: "GuestGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    guests?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListGuestGroupsQueryVariables = {
  filter?: ModelGuestGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuestGroupsQuery = {
  listGuestGroups?:  {
    __typename: "ModelGuestGroupConnection",
    items:  Array< {
      __typename: "GuestGroup",
      id: string,
      name?: string | null,
      description?: string | null,
      guests?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    logo?:  {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    domain: string,
    siteTitle: string,
    guestsCount?: number | null,
    tagline: string,
    description: string,
    siteAddress: string,
    defaultLanguage: string,
    languages: Array< string | null >,
    features: Array< string | null >,
    status: string,
    socialLinks?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    accountLogoId?: string | null,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    logo?:  {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    domain: string,
    siteTitle: string,
    guestsCount?: number | null,
    tagline: string,
    description: string,
    siteAddress: string,
    defaultLanguage: string,
    languages: Array< string | null >,
    features: Array< string | null >,
    status: string,
    socialLinks?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    accountLogoId?: string | null,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    logo?:  {
      __typename: "Attachment",
      id: string,
      mediaID: string,
      fileUrl: string,
      filename: string,
      filetype?: string | null,
      fileSize?: number | null,
      alternativeText?: string | null,
      caption?: string | null,
      description?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    domain: string,
    siteTitle: string,
    guestsCount?: number | null,
    tagline: string,
    description: string,
    siteAddress: string,
    defaultLanguage: string,
    languages: Array< string | null >,
    features: Array< string | null >,
    status: string,
    socialLinks?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    accountLogoId?: string | null,
  } | null,
};

export type OnCreateConceptSubscriptionVariables = {
  filter?: ModelSubscriptionConceptFilterInput | null,
};

export type OnCreateConceptSubscription = {
  onCreateConcept?:  {
    __typename: "Concept",
    id: string,
    accountID: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    type?: string | null,
    location?: string | null,
    precedence?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConceptSubscriptionVariables = {
  filter?: ModelSubscriptionConceptFilterInput | null,
};

export type OnUpdateConceptSubscription = {
  onUpdateConcept?:  {
    __typename: "Concept",
    id: string,
    accountID: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    type?: string | null,
    location?: string | null,
    precedence?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConceptSubscriptionVariables = {
  filter?: ModelSubscriptionConceptFilterInput | null,
};

export type OnDeleteConceptSubscription = {
  onDeleteConcept?:  {
    __typename: "Concept",
    id: string,
    accountID: string,
    name: string,
    description?: string | null,
    logo?: string | null,
    type?: string | null,
    location?: string | null,
    precedence?: number | null,
    longitude?: string | null,
    latitude?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnCreateLanguageSubscription = {
  onCreateLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    code: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnUpdateLanguageSubscription = {
  onUpdateLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    code: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnDeleteLanguageSubscription = {
  onDeleteLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    code: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnCreateFeatureSubscription = {
  onCreateFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon?: string | null,
    slug: string,
    precedence: string,
    parent?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnUpdateFeatureSubscription = {
  onUpdateFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon?: string | null,
    slug: string,
    precedence: string,
    parent?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeatureSubscriptionVariables = {
  filter?: ModelSubscriptionFeatureFilterInput | null,
};

export type OnDeleteFeatureSubscription = {
  onDeleteFeature?:  {
    __typename: "Feature",
    id: string,
    name: string,
    icon?: string | null,
    slug: string,
    precedence: string,
    parent?: string | null,
    private?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdminRoleSubscriptionVariables = {
  filter?: ModelSubscriptionAdminRoleFilterInput | null,
};

export type OnCreateAdminRoleSubscription = {
  onCreateAdminRole?:  {
    __typename: "AdminRole",
    id: string,
    name?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdminRoleSubscriptionVariables = {
  filter?: ModelSubscriptionAdminRoleFilterInput | null,
};

export type OnUpdateAdminRoleSubscription = {
  onUpdateAdminRole?:  {
    __typename: "AdminRole",
    id: string,
    name?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdminRoleSubscriptionVariables = {
  filter?: ModelSubscriptionAdminRoleFilterInput | null,
};

export type OnDeleteAdminRoleSubscription = {
  onDeleteAdminRole?:  {
    __typename: "AdminRole",
    id: string,
    name?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdminGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAdminGroupFilterInput | null,
};

export type OnCreateAdminGroupSubscription = {
  onCreateAdminGroup?:  {
    __typename: "AdminGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    roles?: Array< string | null > | null,
    users?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdminGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAdminGroupFilterInput | null,
};

export type OnUpdateAdminGroupSubscription = {
  onUpdateAdminGroup?:  {
    __typename: "AdminGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    roles?: Array< string | null > | null,
    users?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdminGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAdminGroupFilterInput | null,
};

export type OnDeleteAdminGroupSubscription = {
  onDeleteAdminGroup?:  {
    __typename: "AdminGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    roles?: Array< string | null > | null,
    users?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnCreateAttachmentSubscription = {
  onCreateAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnUpdateAttachmentSubscription = {
  onUpdateAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnDeleteAttachmentSubscription = {
  onDeleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    mediaID: string,
    fileUrl: string,
    filename: string,
    filetype?: string | null,
    fileSize?: number | null,
    alternativeText?: string | null,
    caption?: string | null,
    description?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserConceptsSubscriptionVariables = {
  filter?: ModelSubscriptionUserConceptsFilterInput | null,
};

export type OnCreateUserConceptsSubscription = {
  onCreateUserConcepts?:  {
    __typename: "UserConcepts",
    id: string,
    defaultConcept?: string | null,
    concepts?: Array< string | null > | null,
    conceptsRoles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserConceptsSubscriptionVariables = {
  filter?: ModelSubscriptionUserConceptsFilterInput | null,
};

export type OnUpdateUserConceptsSubscription = {
  onUpdateUserConcepts?:  {
    __typename: "UserConcepts",
    id: string,
    defaultConcept?: string | null,
    concepts?: Array< string | null > | null,
    conceptsRoles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserConceptsSubscriptionVariables = {
  filter?: ModelSubscriptionUserConceptsFilterInput | null,
};

export type OnDeleteUserConceptsSubscription = {
  onDeleteUserConcepts?:  {
    __typename: "UserConcepts",
    id: string,
    defaultConcept?: string | null,
    concepts?: Array< string | null > | null,
    conceptsRoles?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGuestSubscriptionVariables = {
  filter?: ModelSubscriptionGuestFilterInput | null,
};

export type OnCreateGuestSubscription = {
  onCreateGuest?:  {
    __typename: "Guest",
    id: string,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    phone_number?: string | null,
    guestGroupID?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    avg_ticket_number?: number | null,
    connections?: Array< string | null > | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGuestSubscriptionVariables = {
  filter?: ModelSubscriptionGuestFilterInput | null,
};

export type OnUpdateGuestSubscription = {
  onUpdateGuest?:  {
    __typename: "Guest",
    id: string,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    phone_number?: string | null,
    guestGroupID?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    avg_ticket_number?: number | null,
    connections?: Array< string | null > | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGuestSubscriptionVariables = {
  filter?: ModelSubscriptionGuestFilterInput | null,
};

export type OnDeleteGuestSubscription = {
  onDeleteGuest?:  {
    __typename: "Guest",
    id: string,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    phone_number?: string | null,
    guestGroupID?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    avg_ticket_number?: number | null,
    connections?: Array< string | null > | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGuestGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGuestGroupFilterInput | null,
};

export type OnCreateGuestGroupSubscription = {
  onCreateGuestGroup?:  {
    __typename: "GuestGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    guests?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGuestGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGuestGroupFilterInput | null,
};

export type OnUpdateGuestGroupSubscription = {
  onUpdateGuestGroup?:  {
    __typename: "GuestGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    guests?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGuestGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGuestGroupFilterInput | null,
};

export type OnDeleteGuestGroupSubscription = {
  onDeleteGuestGroup?:  {
    __typename: "GuestGroup",
    id: string,
    name?: string | null,
    description?: string | null,
    guests?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};
