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
  guestGroupName?: string | null,
  guest_avatar?: string | null,
  avg_spend?: number | null,
  avg_ticket_type?: string | null,
  numberOfTickets?: number | null,
  connections?: string | null,
  last_attended_event?: string | null,
  gender?: string | null,
  group?: string | null,
  faceBookID?: string | null,
  appPassword?: string | null,
  birthdate?: string | null,
  isVerified?: boolean | null,
  images?: Array< string | null > | null,
  address?: string | null,
  totalEvents?: number | null,
  flags?: Array< string | null > | null,
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
  guestGroupName?: ModelStringInput | null,
  guest_avatar?: ModelStringInput | null,
  avg_spend?: ModelIntInput | null,
  avg_ticket_type?: ModelStringInput | null,
  numberOfTickets?: ModelIntInput | null,
  connections?: ModelStringInput | null,
  last_attended_event?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  group?: ModelStringInput | null,
  faceBookID?: ModelIDInput | null,
  appPassword?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  images?: ModelStringInput | null,
  address?: ModelStringInput | null,
  totalEvents?: ModelIntInput | null,
  flags?: ModelIDInput | null,
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
  guestGroupName?: string | null,
  guest_avatar?: string | null,
  avg_spend?: number | null,
  avg_ticket_type?: string | null,
  numberOfTickets?: number | null,
  connections?: string | null,
  last_attended_event?: string | null,
  gender?: string | null,
  group?: string | null,
  faceBookID?: string | null,
  appPassword?: string | null,
  birthdate?: string | null,
  isVerified?: boolean | null,
  images?: Array< string | null > | null,
  address?: string | null,
  totalEvents?: number | null,
  flags?: Array< string | null > | null,
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
  guestGroupName?: string | null,
  guest_avatar?: string | null,
  avg_spend?: number | null,
  avg_ticket_type?: string | null,
  numberOfTickets?: number | null,
  connections?: string | null,
  last_attended_event?: string | null,
  gender?: string | null,
  group?: string | null,
  faceBookID?: string | null,
  appPassword?: string | null,
  birthdate?: string | null,
  isVerified?: boolean | null,
  images?: Array< string | null > | null,
  address?: string | null,
  totalEvents?: number | null,
  flags?: Array< string | null > | null,
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
  color?: string | null,
  guests?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelGuestGroupConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  color?: ModelStringInput | null,
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
  color?: string | null,
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
  color?: string | null,
  guests?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteGuestGroupInput = {
  id: string,
};

export type CreateTimelineInput = {
  id?: string | null,
  actionName: string,
  oldStatus: string,
  newStatus: string,
  bookingId?: string | null,
  customerId?: string | null,
  type?: string | null,
  description?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelTimelineConditionInput = {
  actionName?: ModelStringInput | null,
  oldStatus?: ModelStringInput | null,
  newStatus?: ModelStringInput | null,
  bookingId?: ModelStringInput | null,
  customerId?: ModelStringInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelTimelineConditionInput | null > | null,
  or?: Array< ModelTimelineConditionInput | null > | null,
  not?: ModelTimelineConditionInput | null,
};

export type Timeline = {
  __typename: "Timeline",
  id: string,
  actionName: string,
  oldStatus: string,
  newStatus: string,
  bookingId?: string | null,
  customerId?: string | null,
  type?: string | null,
  description?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateTimelineInput = {
  id: string,
  actionName?: string | null,
  oldStatus?: string | null,
  newStatus?: string | null,
  bookingId?: string | null,
  customerId?: string | null,
  type?: string | null,
  description?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteTimelineInput = {
  id: string,
};

export type CreateFlagInput = {
  id?: string | null,
  accountID: string,
  name: string,
  icon: string,
  color?: string | null,
  customers?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type ModelFlagConditionInput = {
  accountID?: ModelStringInput | null,
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  color?: ModelStringInput | null,
  customers?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelFlagConditionInput | null > | null,
  or?: Array< ModelFlagConditionInput | null > | null,
  not?: ModelFlagConditionInput | null,
};

export type Flag = {
  __typename: "Flag",
  id: string,
  accountID: string,
  name: string,
  icon: string,
  color?: string | null,
  customers?: Array< string | null > | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type UpdateFlagInput = {
  id: string,
  accountID?: string | null,
  name?: string | null,
  icon?: string | null,
  color?: string | null,
  customers?: Array< string | null > | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteFlagInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  message: string,
  customerId?: string | null,
  bookingId?: string | null,
  replyTo?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByImg?: string | null,
  createdByName: string,
};

export type ModelCommentConditionInput = {
  message?: ModelStringInput | null,
  customerId?: ModelStringInput | null,
  bookingId?: ModelStringInput | null,
  replyTo?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByImg?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  message: string,
  customerId?: string | null,
  bookingId?: string | null,
  replyTo?: string | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByImg?: string | null,
  createdByName: string,
  updatedAt: string,
};

export type UpdateCommentInput = {
  id: string,
  message?: string | null,
  customerId?: string | null,
  bookingId?: string | null,
  replyTo?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByImg?: string | null,
  createdByName?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  location?: LocationInput | null,
  todoList?: Array< string | null > | null,
  eventComments?: Array< EventCommentsInput | null > | null,
  map?: string | null,
  image?: string | null,
  gallery?: Array< string | null > | null,
  visibleTo?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
};

export type LocationInput = {
  address?: string | null,
  coordinates?: CoordinatesInput | null,
};

export type CoordinatesInput = {
  lat?: number | null,
  lng?: number | null,
};

export type EventCommentsInput = {
  image?: string | null,
  name?: string | null,
  message?: string | null,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  todoList?: ModelStringInput | null,
  map?: ModelStringInput | null,
  image?: ModelStringInput | null,
  gallery?: ModelStringInput | null,
  visibleTo?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  name?: string | null,
  description?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  location?: Location | null,
  todoList?: Array< string | null > | null,
  eventComments?:  Array<EventComments | null > | null,
  map?: string | null,
  image?: string | null,
  gallery?: Array< string | null > | null,
  visibleTo?: string | null,
  tickets?: ModelEventTicketConnection | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
};

export type Location = {
  __typename: "Location",
  address?: string | null,
  coordinates?: Coordinates | null,
};

export type Coordinates = {
  __typename: "Coordinates",
  lat?: number | null,
  lng?: number | null,
};

export type EventComments = {
  __typename: "EventComments",
  image?: string | null,
  name?: string | null,
  message?: string | null,
};

export type ModelEventTicketConnection = {
  __typename: "ModelEventTicketConnection",
  items:  Array<EventTicket | null >,
  nextToken?: string | null,
};

export type EventTicket = {
  __typename: "EventTicket",
  id: string,
  type: string,
  cashlessCredit?: number | null,
  description?: string | null,
  waves?:  Array<Wave | null > | null,
  color?: string | null,
  paymentRules?: string | null,
  approvalRule?: string | null,
  showAll?: boolean | null,
  showOnHold?: boolean | null,
  onHoldDisplayText?: string | null,
  showSoldOut?: boolean | null,
  soldOutDisplayText?: string | null,
  setAvailable?: boolean | null,
  availableAtDate?: string | null,
  allowTransferred?: boolean | null,
  transferredAprroval?: boolean | null,
  transferredSameGender?: boolean | null,
  eventID: string,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  updatedAt: string,
  eventTicketsId?: string | null,
};

export type Wave = {
  __typename: "Wave",
  name: string,
  price: number,
  startDate?: string | null,
  endDate?: string | null,
  active?: boolean | null,
  quota?: number | null,
  AutomaticShift?: boolean | null,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  location?: LocationInput | null,
  todoList?: Array< string | null > | null,
  eventComments?: Array< EventCommentsInput | null > | null,
  map?: string | null,
  image?: string | null,
  gallery?: Array< string | null > | null,
  visibleTo?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateEventTicketInput = {
  id?: string | null,
  type: string,
  cashlessCredit?: number | null,
  description?: string | null,
  waves?: Array< WaveInput | null > | null,
  color?: string | null,
  paymentRules?: string | null,
  approvalRule?: string | null,
  showAll?: boolean | null,
  showOnHold?: boolean | null,
  onHoldDisplayText?: string | null,
  showSoldOut?: boolean | null,
  soldOutDisplayText?: string | null,
  setAvailable?: boolean | null,
  availableAtDate?: string | null,
  allowTransferred?: boolean | null,
  transferredAprroval?: boolean | null,
  transferredSameGender?: boolean | null,
  eventID: string,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  eventTicketsId?: string | null,
};

export type WaveInput = {
  name: string,
  price: number,
  startDate?: string | null,
  endDate?: string | null,
  active?: boolean | null,
  quota?: number | null,
  AutomaticShift?: boolean | null,
};

export type ModelEventTicketConditionInput = {
  type?: ModelStringInput | null,
  cashlessCredit?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  color?: ModelStringInput | null,
  paymentRules?: ModelStringInput | null,
  approvalRule?: ModelStringInput | null,
  showAll?: ModelBooleanInput | null,
  showOnHold?: ModelBooleanInput | null,
  onHoldDisplayText?: ModelStringInput | null,
  showSoldOut?: ModelBooleanInput | null,
  soldOutDisplayText?: ModelStringInput | null,
  setAvailable?: ModelBooleanInput | null,
  availableAtDate?: ModelStringInput | null,
  allowTransferred?: ModelBooleanInput | null,
  transferredAprroval?: ModelBooleanInput | null,
  transferredSameGender?: ModelBooleanInput | null,
  eventID?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelEventTicketConditionInput | null > | null,
  or?: Array< ModelEventTicketConditionInput | null > | null,
  not?: ModelEventTicketConditionInput | null,
  eventTicketsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
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

export type UpdateEventTicketInput = {
  id: string,
  type?: string | null,
  cashlessCredit?: number | null,
  description?: string | null,
  waves?: Array< WaveInput | null > | null,
  color?: string | null,
  paymentRules?: string | null,
  approvalRule?: string | null,
  showAll?: boolean | null,
  showOnHold?: boolean | null,
  onHoldDisplayText?: string | null,
  showSoldOut?: boolean | null,
  soldOutDisplayText?: string | null,
  setAvailable?: boolean | null,
  availableAtDate?: string | null,
  allowTransferred?: boolean | null,
  transferredAprroval?: boolean | null,
  transferredSameGender?: boolean | null,
  eventID?: string | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  eventTicketsId?: string | null,
};

export type DeleteEventTicketInput = {
  id: string,
};

export type CreateBookingInput = {
  id?: string | null,
  status?: string | null,
  isMainGuest?: boolean | null,
  orderId?: string | null,
  updatedBy?: string | null,
  updatedByName?: string | null,
  updatedAt?: string | null,
  specialNeed?: boolean | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID: string,
  createdByName: string,
  bookingGuestId?: string | null,
  bookingMainGuestId?: string | null,
  bookingEventId?: string | null,
};

export type ModelBookingConditionInput = {
  status?: ModelStringInput | null,
  isMainGuest?: ModelBooleanInput | null,
  orderId?: ModelStringInput | null,
  updatedBy?: ModelStringInput | null,
  updatedByName?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  specialNeed?: ModelBooleanInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelBookingConditionInput | null > | null,
  or?: Array< ModelBookingConditionInput | null > | null,
  not?: ModelBookingConditionInput | null,
  bookingGuestId?: ModelIDInput | null,
  bookingMainGuestId?: ModelIDInput | null,
  bookingEventId?: ModelIDInput | null,
};

export type Booking = {
  __typename: "Booking",
  id: string,
  status?: string | null,
  guest?: Guest | null,
  mainGuest?: Guest | null,
  event?: Event | null,
  isMainGuest?: boolean | null,
  orderId?: string | null,
  updatedBy?: string | null,
  updatedByName?: string | null,
  updatedAt?: string | null,
  specialNeed?: boolean | null,
  deleted?: string | null,
  createdAt: string,
  createdByID: string,
  createdByName: string,
  bookingGuestId?: string | null,
  bookingMainGuestId?: string | null,
  bookingEventId?: string | null,
};

export type UpdateBookingInput = {
  id: string,
  status?: string | null,
  isMainGuest?: boolean | null,
  orderId?: string | null,
  updatedBy?: string | null,
  updatedByName?: string | null,
  updatedAt?: string | null,
  specialNeed?: boolean | null,
  deleted?: string | null,
  createdAt?: string | null,
  createdByID?: string | null,
  createdByName?: string | null,
  bookingGuestId?: string | null,
  bookingMainGuestId?: string | null,
  bookingEventId?: string | null,
};

export type DeleteBookingInput = {
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
  guestGroupName?: ModelStringInput | null,
  guest_avatar?: ModelStringInput | null,
  avg_spend?: ModelIntInput | null,
  avg_ticket_type?: ModelStringInput | null,
  numberOfTickets?: ModelIntInput | null,
  connections?: ModelStringInput | null,
  last_attended_event?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  group?: ModelStringInput | null,
  faceBookID?: ModelIDInput | null,
  appPassword?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  images?: ModelStringInput | null,
  address?: ModelStringInput | null,
  totalEvents?: ModelIntInput | null,
  flags?: ModelIDInput | null,
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
  color?: ModelStringInput | null,
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

export type ModelTimelineFilterInput = {
  id?: ModelIDInput | null,
  actionName?: ModelStringInput | null,
  oldStatus?: ModelStringInput | null,
  newStatus?: ModelStringInput | null,
  bookingId?: ModelStringInput | null,
  customerId?: ModelStringInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelTimelineFilterInput | null > | null,
  or?: Array< ModelTimelineFilterInput | null > | null,
  not?: ModelTimelineFilterInput | null,
};

export type ModelTimelineConnection = {
  __typename: "ModelTimelineConnection",
  items:  Array<Timeline | null >,
  nextToken?: string | null,
};

export type ModelFlagFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelStringInput | null,
  name?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  color?: ModelStringInput | null,
  customers?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelFlagFilterInput | null > | null,
  or?: Array< ModelFlagFilterInput | null > | null,
  not?: ModelFlagFilterInput | null,
};

export type ModelFlagConnection = {
  __typename: "ModelFlagConnection",
  items:  Array<Flag | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  customerId?: ModelStringInput | null,
  bookingId?: ModelStringInput | null,
  replyTo?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByImg?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  todoList?: ModelStringInput | null,
  map?: ModelStringInput | null,
  image?: ModelStringInput | null,
  gallery?: ModelStringInput | null,
  visibleTo?: ModelStringInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelEventTicketFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  cashlessCredit?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  color?: ModelStringInput | null,
  paymentRules?: ModelStringInput | null,
  approvalRule?: ModelStringInput | null,
  showAll?: ModelBooleanInput | null,
  showOnHold?: ModelBooleanInput | null,
  onHoldDisplayText?: ModelStringInput | null,
  showSoldOut?: ModelBooleanInput | null,
  soldOutDisplayText?: ModelStringInput | null,
  setAvailable?: ModelBooleanInput | null,
  availableAtDate?: ModelStringInput | null,
  allowTransferred?: ModelBooleanInput | null,
  transferredAprroval?: ModelBooleanInput | null,
  transferredSameGender?: ModelBooleanInput | null,
  eventID?: ModelIDInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelEventTicketFilterInput | null > | null,
  or?: Array< ModelEventTicketFilterInput | null > | null,
  not?: ModelEventTicketFilterInput | null,
  eventTicketsId?: ModelIDInput | null,
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  isMainGuest?: ModelBooleanInput | null,
  orderId?: ModelStringInput | null,
  updatedBy?: ModelStringInput | null,
  updatedByName?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  specialNeed?: ModelBooleanInput | null,
  deleted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  createdByID?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
  bookingGuestId?: ModelIDInput | null,
  bookingMainGuestId?: ModelIDInput | null,
  bookingEventId?: ModelIDInput | null,
};

export type ModelBookingConnection = {
  __typename: "ModelBookingConnection",
  items:  Array<Booking | null >,
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
  guestGroupName?: ModelSubscriptionStringInput | null,
  guest_avatar?: ModelSubscriptionStringInput | null,
  avg_spend?: ModelSubscriptionIntInput | null,
  avg_ticket_type?: ModelSubscriptionStringInput | null,
  numberOfTickets?: ModelSubscriptionIntInput | null,
  connections?: ModelSubscriptionStringInput | null,
  last_attended_event?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  group?: ModelSubscriptionStringInput | null,
  faceBookID?: ModelSubscriptionIDInput | null,
  appPassword?: ModelSubscriptionStringInput | null,
  birthdate?: ModelSubscriptionStringInput | null,
  isVerified?: ModelSubscriptionBooleanInput | null,
  images?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  totalEvents?: ModelSubscriptionIntInput | null,
  flags?: ModelSubscriptionIDInput | null,
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
  color?: ModelSubscriptionStringInput | null,
  guests?: ModelSubscriptionIDInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGuestGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionGuestGroupFilterInput | null > | null,
};

export type ModelSubscriptionTimelineFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  actionName?: ModelSubscriptionStringInput | null,
  oldStatus?: ModelSubscriptionStringInput | null,
  newStatus?: ModelSubscriptionStringInput | null,
  bookingId?: ModelSubscriptionStringInput | null,
  customerId?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTimelineFilterInput | null > | null,
  or?: Array< ModelSubscriptionTimelineFilterInput | null > | null,
};

export type ModelSubscriptionFlagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  customers?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFlagFilterInput | null > | null,
  or?: Array< ModelSubscriptionFlagFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  customerId?: ModelSubscriptionStringInput | null,
  bookingId?: ModelSubscriptionStringInput | null,
  replyTo?: ModelSubscriptionIDInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByImg?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  todoList?: ModelSubscriptionStringInput | null,
  map?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  gallery?: ModelSubscriptionStringInput | null,
  visibleTo?: ModelSubscriptionStringInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type ModelSubscriptionEventTicketFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  cashlessCredit?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  paymentRules?: ModelSubscriptionStringInput | null,
  approvalRule?: ModelSubscriptionStringInput | null,
  showAll?: ModelSubscriptionBooleanInput | null,
  showOnHold?: ModelSubscriptionBooleanInput | null,
  onHoldDisplayText?: ModelSubscriptionStringInput | null,
  showSoldOut?: ModelSubscriptionBooleanInput | null,
  soldOutDisplayText?: ModelSubscriptionStringInput | null,
  setAvailable?: ModelSubscriptionBooleanInput | null,
  availableAtDate?: ModelSubscriptionStringInput | null,
  allowTransferred?: ModelSubscriptionBooleanInput | null,
  transferredAprroval?: ModelSubscriptionBooleanInput | null,
  transferredSameGender?: ModelSubscriptionBooleanInput | null,
  eventID?: ModelSubscriptionIDInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventTicketFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventTicketFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
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

export type ModelSubscriptionBookingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  isMainGuest?: ModelSubscriptionBooleanInput | null,
  orderId?: ModelSubscriptionStringInput | null,
  updatedBy?: ModelSubscriptionStringInput | null,
  updatedByName?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  specialNeed?: ModelSubscriptionBooleanInput | null,
  deleted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdByID?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookingFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookingFilterInput | null > | null,
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
    guestGroupName?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    numberOfTickets?: number | null,
    connections?: string | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    images?: Array< string | null > | null,
    address?: string | null,
    totalEvents?: number | null,
    flags?: Array< string | null > | null,
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
    guestGroupName?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    numberOfTickets?: number | null,
    connections?: string | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    images?: Array< string | null > | null,
    address?: string | null,
    totalEvents?: number | null,
    flags?: Array< string | null > | null,
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
    guestGroupName?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    numberOfTickets?: number | null,
    connections?: string | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    images?: Array< string | null > | null,
    address?: string | null,
    totalEvents?: number | null,
    flags?: Array< string | null > | null,
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
    color?: string | null,
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
    color?: string | null,
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
    color?: string | null,
    guests?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateTimelineMutationVariables = {
  input: CreateTimelineInput,
  condition?: ModelTimelineConditionInput | null,
};

export type CreateTimelineMutation = {
  createTimeline?:  {
    __typename: "Timeline",
    id: string,
    actionName: string,
    oldStatus: string,
    newStatus: string,
    bookingId?: string | null,
    customerId?: string | null,
    type?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateTimelineMutationVariables = {
  input: UpdateTimelineInput,
  condition?: ModelTimelineConditionInput | null,
};

export type UpdateTimelineMutation = {
  updateTimeline?:  {
    __typename: "Timeline",
    id: string,
    actionName: string,
    oldStatus: string,
    newStatus: string,
    bookingId?: string | null,
    customerId?: string | null,
    type?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteTimelineMutationVariables = {
  input: DeleteTimelineInput,
  condition?: ModelTimelineConditionInput | null,
};

export type DeleteTimelineMutation = {
  deleteTimeline?:  {
    __typename: "Timeline",
    id: string,
    actionName: string,
    oldStatus: string,
    newStatus: string,
    bookingId?: string | null,
    customerId?: string | null,
    type?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateFlagMutationVariables = {
  input: CreateFlagInput,
  condition?: ModelFlagConditionInput | null,
};

export type CreateFlagMutation = {
  createFlag?:  {
    __typename: "Flag",
    id: string,
    accountID: string,
    name: string,
    icon: string,
    color?: string | null,
    customers?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateFlagMutationVariables = {
  input: UpdateFlagInput,
  condition?: ModelFlagConditionInput | null,
};

export type UpdateFlagMutation = {
  updateFlag?:  {
    __typename: "Flag",
    id: string,
    accountID: string,
    name: string,
    icon: string,
    color?: string | null,
    customers?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteFlagMutationVariables = {
  input: DeleteFlagInput,
  condition?: ModelFlagConditionInput | null,
};

export type DeleteFlagMutation = {
  deleteFlag?:  {
    __typename: "Flag",
    id: string,
    accountID: string,
    name: string,
    icon: string,
    color?: string | null,
    customers?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    customerId?: string | null,
    bookingId?: string | null,
    replyTo?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByImg?: string | null,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    customerId?: string | null,
    bookingId?: string | null,
    replyTo?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByImg?: string | null,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    customerId?: string | null,
    bookingId?: string | null,
    replyTo?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByImg?: string | null,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
    } | null,
    todoList?: Array< string | null > | null,
    eventComments?:  Array< {
      __typename: "EventComments",
      image?: string | null,
      name?: string | null,
      message?: string | null,
    } | null > | null,
    map?: string | null,
    image?: string | null,
    gallery?: Array< string | null > | null,
    visibleTo?: string | null,
    tickets?:  {
      __typename: "ModelEventTicketConnection",
      nextToken?: string | null,
    } | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
    } | null,
    todoList?: Array< string | null > | null,
    eventComments?:  Array< {
      __typename: "EventComments",
      image?: string | null,
      name?: string | null,
      message?: string | null,
    } | null > | null,
    map?: string | null,
    image?: string | null,
    gallery?: Array< string | null > | null,
    visibleTo?: string | null,
    tickets?:  {
      __typename: "ModelEventTicketConnection",
      nextToken?: string | null,
    } | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
    } | null,
    todoList?: Array< string | null > | null,
    eventComments?:  Array< {
      __typename: "EventComments",
      image?: string | null,
      name?: string | null,
      message?: string | null,
    } | null > | null,
    map?: string | null,
    image?: string | null,
    gallery?: Array< string | null > | null,
    visibleTo?: string | null,
    tickets?:  {
      __typename: "ModelEventTicketConnection",
      nextToken?: string | null,
    } | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type CreateEventTicketMutationVariables = {
  input: CreateEventTicketInput,
  condition?: ModelEventTicketConditionInput | null,
};

export type CreateEventTicketMutation = {
  createEventTicket?:  {
    __typename: "EventTicket",
    id: string,
    type: string,
    cashlessCredit?: number | null,
    description?: string | null,
    waves?:  Array< {
      __typename: "Wave",
      name: string,
      price: number,
      startDate?: string | null,
      endDate?: string | null,
      active?: boolean | null,
      quota?: number | null,
      AutomaticShift?: boolean | null,
    } | null > | null,
    color?: string | null,
    paymentRules?: string | null,
    approvalRule?: string | null,
    showAll?: boolean | null,
    showOnHold?: boolean | null,
    onHoldDisplayText?: string | null,
    showSoldOut?: boolean | null,
    soldOutDisplayText?: string | null,
    setAvailable?: boolean | null,
    availableAtDate?: string | null,
    allowTransferred?: boolean | null,
    transferredAprroval?: boolean | null,
    transferredSameGender?: boolean | null,
    eventID: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    eventTicketsId?: string | null,
  } | null,
};

export type UpdateEventTicketMutationVariables = {
  input: UpdateEventTicketInput,
  condition?: ModelEventTicketConditionInput | null,
};

export type UpdateEventTicketMutation = {
  updateEventTicket?:  {
    __typename: "EventTicket",
    id: string,
    type: string,
    cashlessCredit?: number | null,
    description?: string | null,
    waves?:  Array< {
      __typename: "Wave",
      name: string,
      price: number,
      startDate?: string | null,
      endDate?: string | null,
      active?: boolean | null,
      quota?: number | null,
      AutomaticShift?: boolean | null,
    } | null > | null,
    color?: string | null,
    paymentRules?: string | null,
    approvalRule?: string | null,
    showAll?: boolean | null,
    showOnHold?: boolean | null,
    onHoldDisplayText?: string | null,
    showSoldOut?: boolean | null,
    soldOutDisplayText?: string | null,
    setAvailable?: boolean | null,
    availableAtDate?: string | null,
    allowTransferred?: boolean | null,
    transferredAprroval?: boolean | null,
    transferredSameGender?: boolean | null,
    eventID: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    eventTicketsId?: string | null,
  } | null,
};

export type DeleteEventTicketMutationVariables = {
  input: DeleteEventTicketInput,
  condition?: ModelEventTicketConditionInput | null,
};

export type DeleteEventTicketMutation = {
  deleteEventTicket?:  {
    __typename: "EventTicket",
    id: string,
    type: string,
    cashlessCredit?: number | null,
    description?: string | null,
    waves?:  Array< {
      __typename: "Wave",
      name: string,
      price: number,
      startDate?: string | null,
      endDate?: string | null,
      active?: boolean | null,
      quota?: number | null,
      AutomaticShift?: boolean | null,
    } | null > | null,
    color?: string | null,
    paymentRules?: string | null,
    approvalRule?: string | null,
    showAll?: boolean | null,
    showOnHold?: boolean | null,
    onHoldDisplayText?: string | null,
    showSoldOut?: boolean | null,
    soldOutDisplayText?: string | null,
    setAvailable?: boolean | null,
    availableAtDate?: string | null,
    allowTransferred?: boolean | null,
    transferredAprroval?: boolean | null,
    transferredSameGender?: boolean | null,
    eventID: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    eventTicketsId?: string | null,
  } | null,
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type CreateBookingMutation = {
  createBooking?:  {
    __typename: "Booking",
    id: string,
    status?: string | null,
    guest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    mainGuest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      todoList?: Array< string | null > | null,
      map?: string | null,
      image?: string | null,
      gallery?: Array< string | null > | null,
      visibleTo?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    isMainGuest?: boolean | null,
    orderId?: string | null,
    updatedBy?: string | null,
    updatedByName?: string | null,
    updatedAt?: string | null,
    specialNeed?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    bookingGuestId?: string | null,
    bookingMainGuestId?: string | null,
    bookingEventId?: string | null,
  } | null,
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type UpdateBookingMutation = {
  updateBooking?:  {
    __typename: "Booking",
    id: string,
    status?: string | null,
    guest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    mainGuest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      todoList?: Array< string | null > | null,
      map?: string | null,
      image?: string | null,
      gallery?: Array< string | null > | null,
      visibleTo?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    isMainGuest?: boolean | null,
    orderId?: string | null,
    updatedBy?: string | null,
    updatedByName?: string | null,
    updatedAt?: string | null,
    specialNeed?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    bookingGuestId?: string | null,
    bookingMainGuestId?: string | null,
    bookingEventId?: string | null,
  } | null,
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type DeleteBookingMutation = {
  deleteBooking?:  {
    __typename: "Booking",
    id: string,
    status?: string | null,
    guest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    mainGuest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      todoList?: Array< string | null > | null,
      map?: string | null,
      image?: string | null,
      gallery?: Array< string | null > | null,
      visibleTo?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    isMainGuest?: boolean | null,
    orderId?: string | null,
    updatedBy?: string | null,
    updatedByName?: string | null,
    updatedAt?: string | null,
    specialNeed?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    bookingGuestId?: string | null,
    bookingMainGuestId?: string | null,
    bookingEventId?: string | null,
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
    guestGroupName?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    numberOfTickets?: number | null,
    connections?: string | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    images?: Array< string | null > | null,
    address?: string | null,
    totalEvents?: number | null,
    flags?: Array< string | null > | null,
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
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
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
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
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
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
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
    color?: string | null,
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
      color?: string | null,
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

export type GetTimelineQueryVariables = {
  id: string,
};

export type GetTimelineQuery = {
  getTimeline?:  {
    __typename: "Timeline",
    id: string,
    actionName: string,
    oldStatus: string,
    newStatus: string,
    bookingId?: string | null,
    customerId?: string | null,
    type?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListTimelinesQueryVariables = {
  filter?: ModelTimelineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimelinesQuery = {
  listTimelines?:  {
    __typename: "ModelTimelineConnection",
    items:  Array< {
      __typename: "Timeline",
      id: string,
      actionName: string,
      oldStatus: string,
      newStatus: string,
      bookingId?: string | null,
      customerId?: string | null,
      type?: string | null,
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

export type TimelineByCustomerIDQueryVariables = {
  customerId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTimelineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TimelineByCustomerIDQuery = {
  timelineByCustomerID?:  {
    __typename: "ModelTimelineConnection",
    items:  Array< {
      __typename: "Timeline",
      id: string,
      actionName: string,
      oldStatus: string,
      newStatus: string,
      bookingId?: string | null,
      customerId?: string | null,
      type?: string | null,
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

export type GetFlagQueryVariables = {
  id: string,
};

export type GetFlagQuery = {
  getFlag?:  {
    __typename: "Flag",
    id: string,
    accountID: string,
    name: string,
    icon: string,
    color?: string | null,
    customers?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListFlagsQueryVariables = {
  filter?: ModelFlagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlagsQuery = {
  listFlags?:  {
    __typename: "ModelFlagConnection",
    items:  Array< {
      __typename: "Flag",
      id: string,
      accountID: string,
      name: string,
      icon: string,
      color?: string | null,
      customers?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    customerId?: string | null,
    bookingId?: string | null,
    replyTo?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByImg?: string | null,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      message: string,
      customerId?: string | null,
      bookingId?: string | null,
      replyTo?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByImg?: string | null,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
    } | null,
    todoList?: Array< string | null > | null,
    eventComments?:  Array< {
      __typename: "EventComments",
      image?: string | null,
      name?: string | null,
      message?: string | null,
    } | null > | null,
    map?: string | null,
    image?: string | null,
    gallery?: Array< string | null > | null,
    visibleTo?: string | null,
    tickets?:  {
      __typename: "ModelEventTicketConnection",
      nextToken?: string | null,
    } | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name?: string | null,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      todoList?: Array< string | null > | null,
      map?: string | null,
      image?: string | null,
      gallery?: Array< string | null > | null,
      visibleTo?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventTicketQueryVariables = {
  id: string,
};

export type GetEventTicketQuery = {
  getEventTicket?:  {
    __typename: "EventTicket",
    id: string,
    type: string,
    cashlessCredit?: number | null,
    description?: string | null,
    waves?:  Array< {
      __typename: "Wave",
      name: string,
      price: number,
      startDate?: string | null,
      endDate?: string | null,
      active?: boolean | null,
      quota?: number | null,
      AutomaticShift?: boolean | null,
    } | null > | null,
    color?: string | null,
    paymentRules?: string | null,
    approvalRule?: string | null,
    showAll?: boolean | null,
    showOnHold?: boolean | null,
    onHoldDisplayText?: string | null,
    showSoldOut?: boolean | null,
    soldOutDisplayText?: string | null,
    setAvailable?: boolean | null,
    availableAtDate?: string | null,
    allowTransferred?: boolean | null,
    transferredAprroval?: boolean | null,
    transferredSameGender?: boolean | null,
    eventID: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    eventTicketsId?: string | null,
  } | null,
};

export type ListEventTicketsQueryVariables = {
  filter?: ModelEventTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventTicketsQuery = {
  listEventTickets?:  {
    __typename: "ModelEventTicketConnection",
    items:  Array< {
      __typename: "EventTicket",
      id: string,
      type: string,
      cashlessCredit?: number | null,
      description?: string | null,
      color?: string | null,
      paymentRules?: string | null,
      approvalRule?: string | null,
      showAll?: boolean | null,
      showOnHold?: boolean | null,
      onHoldDisplayText?: string | null,
      showSoldOut?: boolean | null,
      soldOutDisplayText?: string | null,
      setAvailable?: boolean | null,
      availableAtDate?: string | null,
      allowTransferred?: boolean | null,
      transferredAprroval?: boolean | null,
      transferredSameGender?: boolean | null,
      eventID: string,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      eventTicketsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ByEventIDQueryVariables = {
  eventID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByEventIDQuery = {
  byEventID?:  {
    __typename: "ModelEventTicketConnection",
    items:  Array< {
      __typename: "EventTicket",
      id: string,
      type: string,
      cashlessCredit?: number | null,
      description?: string | null,
      color?: string | null,
      paymentRules?: string | null,
      approvalRule?: string | null,
      showAll?: boolean | null,
      showOnHold?: boolean | null,
      onHoldDisplayText?: string | null,
      showSoldOut?: boolean | null,
      soldOutDisplayText?: string | null,
      setAvailable?: boolean | null,
      availableAtDate?: string | null,
      allowTransferred?: boolean | null,
      transferredAprroval?: boolean | null,
      transferredSameGender?: boolean | null,
      eventID: string,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
      eventTicketsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookingQueryVariables = {
  id: string,
};

export type GetBookingQuery = {
  getBooking?:  {
    __typename: "Booking",
    id: string,
    status?: string | null,
    guest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    mainGuest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      todoList?: Array< string | null > | null,
      map?: string | null,
      image?: string | null,
      gallery?: Array< string | null > | null,
      visibleTo?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    isMainGuest?: boolean | null,
    orderId?: string | null,
    updatedBy?: string | null,
    updatedByName?: string | null,
    updatedAt?: string | null,
    specialNeed?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    bookingGuestId?: string | null,
    bookingMainGuestId?: string | null,
    bookingEventId?: string | null,
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      status?: string | null,
      isMainGuest?: boolean | null,
      orderId?: string | null,
      updatedBy?: string | null,
      updatedByName?: string | null,
      updatedAt?: string | null,
      specialNeed?: boolean | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      bookingGuestId?: string | null,
      bookingMainGuestId?: string | null,
      bookingEventId?: string | null,
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
    guestGroupName?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    numberOfTickets?: number | null,
    connections?: string | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    images?: Array< string | null > | null,
    address?: string | null,
    totalEvents?: number | null,
    flags?: Array< string | null > | null,
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
    guestGroupName?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    numberOfTickets?: number | null,
    connections?: string | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    images?: Array< string | null > | null,
    address?: string | null,
    totalEvents?: number | null,
    flags?: Array< string | null > | null,
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
    guestGroupName?: string | null,
    guest_avatar?: string | null,
    avg_spend?: number | null,
    avg_ticket_type?: string | null,
    numberOfTickets?: number | null,
    connections?: string | null,
    last_attended_event?: string | null,
    gender?: string | null,
    group?: string | null,
    faceBookID?: string | null,
    appPassword?: string | null,
    birthdate?: string | null,
    isVerified?: boolean | null,
    images?: Array< string | null > | null,
    address?: string | null,
    totalEvents?: number | null,
    flags?: Array< string | null > | null,
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
    color?: string | null,
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
    color?: string | null,
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
    color?: string | null,
    guests?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTimelineSubscriptionVariables = {
  filter?: ModelSubscriptionTimelineFilterInput | null,
};

export type OnCreateTimelineSubscription = {
  onCreateTimeline?:  {
    __typename: "Timeline",
    id: string,
    actionName: string,
    oldStatus: string,
    newStatus: string,
    bookingId?: string | null,
    customerId?: string | null,
    type?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTimelineSubscriptionVariables = {
  filter?: ModelSubscriptionTimelineFilterInput | null,
};

export type OnUpdateTimelineSubscription = {
  onUpdateTimeline?:  {
    __typename: "Timeline",
    id: string,
    actionName: string,
    oldStatus: string,
    newStatus: string,
    bookingId?: string | null,
    customerId?: string | null,
    type?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTimelineSubscriptionVariables = {
  filter?: ModelSubscriptionTimelineFilterInput | null,
};

export type OnDeleteTimelineSubscription = {
  onDeleteTimeline?:  {
    __typename: "Timeline",
    id: string,
    actionName: string,
    oldStatus: string,
    newStatus: string,
    bookingId?: string | null,
    customerId?: string | null,
    type?: string | null,
    description?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFlagSubscriptionVariables = {
  filter?: ModelSubscriptionFlagFilterInput | null,
};

export type OnCreateFlagSubscription = {
  onCreateFlag?:  {
    __typename: "Flag",
    id: string,
    accountID: string,
    name: string,
    icon: string,
    color?: string | null,
    customers?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFlagSubscriptionVariables = {
  filter?: ModelSubscriptionFlagFilterInput | null,
};

export type OnUpdateFlagSubscription = {
  onUpdateFlag?:  {
    __typename: "Flag",
    id: string,
    accountID: string,
    name: string,
    icon: string,
    color?: string | null,
    customers?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFlagSubscriptionVariables = {
  filter?: ModelSubscriptionFlagFilterInput | null,
};

export type OnDeleteFlagSubscription = {
  onDeleteFlag?:  {
    __typename: "Flag",
    id: string,
    accountID: string,
    name: string,
    icon: string,
    color?: string | null,
    customers?: Array< string | null > | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    customerId?: string | null,
    bookingId?: string | null,
    replyTo?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByImg?: string | null,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    customerId?: string | null,
    bookingId?: string | null,
    replyTo?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByImg?: string | null,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    message: string,
    customerId?: string | null,
    bookingId?: string | null,
    replyTo?: string | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByImg?: string | null,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
    } | null,
    todoList?: Array< string | null > | null,
    eventComments?:  Array< {
      __typename: "EventComments",
      image?: string | null,
      name?: string | null,
      message?: string | null,
    } | null > | null,
    map?: string | null,
    image?: string | null,
    gallery?: Array< string | null > | null,
    visibleTo?: string | null,
    tickets?:  {
      __typename: "ModelEventTicketConnection",
      nextToken?: string | null,
    } | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
    } | null,
    todoList?: Array< string | null > | null,
    eventComments?:  Array< {
      __typename: "EventComments",
      image?: string | null,
      name?: string | null,
      message?: string | null,
    } | null > | null,
    map?: string | null,
    image?: string | null,
    gallery?: Array< string | null > | null,
    visibleTo?: string | null,
    tickets?:  {
      __typename: "ModelEventTicketConnection",
      nextToken?: string | null,
    } | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    description?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
    } | null,
    todoList?: Array< string | null > | null,
    eventComments?:  Array< {
      __typename: "EventComments",
      image?: string | null,
      name?: string | null,
      message?: string | null,
    } | null > | null,
    map?: string | null,
    image?: string | null,
    gallery?: Array< string | null > | null,
    visibleTo?: string | null,
    tickets?:  {
      __typename: "ModelEventTicketConnection",
      nextToken?: string | null,
    } | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventTicketSubscriptionVariables = {
  filter?: ModelSubscriptionEventTicketFilterInput | null,
};

export type OnCreateEventTicketSubscription = {
  onCreateEventTicket?:  {
    __typename: "EventTicket",
    id: string,
    type: string,
    cashlessCredit?: number | null,
    description?: string | null,
    waves?:  Array< {
      __typename: "Wave",
      name: string,
      price: number,
      startDate?: string | null,
      endDate?: string | null,
      active?: boolean | null,
      quota?: number | null,
      AutomaticShift?: boolean | null,
    } | null > | null,
    color?: string | null,
    paymentRules?: string | null,
    approvalRule?: string | null,
    showAll?: boolean | null,
    showOnHold?: boolean | null,
    onHoldDisplayText?: string | null,
    showSoldOut?: boolean | null,
    soldOutDisplayText?: string | null,
    setAvailable?: boolean | null,
    availableAtDate?: string | null,
    allowTransferred?: boolean | null,
    transferredAprroval?: boolean | null,
    transferredSameGender?: boolean | null,
    eventID: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    eventTicketsId?: string | null,
  } | null,
};

export type OnUpdateEventTicketSubscriptionVariables = {
  filter?: ModelSubscriptionEventTicketFilterInput | null,
};

export type OnUpdateEventTicketSubscription = {
  onUpdateEventTicket?:  {
    __typename: "EventTicket",
    id: string,
    type: string,
    cashlessCredit?: number | null,
    description?: string | null,
    waves?:  Array< {
      __typename: "Wave",
      name: string,
      price: number,
      startDate?: string | null,
      endDate?: string | null,
      active?: boolean | null,
      quota?: number | null,
      AutomaticShift?: boolean | null,
    } | null > | null,
    color?: string | null,
    paymentRules?: string | null,
    approvalRule?: string | null,
    showAll?: boolean | null,
    showOnHold?: boolean | null,
    onHoldDisplayText?: string | null,
    showSoldOut?: boolean | null,
    soldOutDisplayText?: string | null,
    setAvailable?: boolean | null,
    availableAtDate?: string | null,
    allowTransferred?: boolean | null,
    transferredAprroval?: boolean | null,
    transferredSameGender?: boolean | null,
    eventID: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    eventTicketsId?: string | null,
  } | null,
};

export type OnDeleteEventTicketSubscriptionVariables = {
  filter?: ModelSubscriptionEventTicketFilterInput | null,
};

export type OnDeleteEventTicketSubscription = {
  onDeleteEventTicket?:  {
    __typename: "EventTicket",
    id: string,
    type: string,
    cashlessCredit?: number | null,
    description?: string | null,
    waves?:  Array< {
      __typename: "Wave",
      name: string,
      price: number,
      startDate?: string | null,
      endDate?: string | null,
      active?: boolean | null,
      quota?: number | null,
      AutomaticShift?: boolean | null,
    } | null > | null,
    color?: string | null,
    paymentRules?: string | null,
    approvalRule?: string | null,
    showAll?: boolean | null,
    showOnHold?: boolean | null,
    onHoldDisplayText?: string | null,
    showSoldOut?: boolean | null,
    soldOutDisplayText?: string | null,
    setAvailable?: boolean | null,
    availableAtDate?: string | null,
    allowTransferred?: boolean | null,
    transferredAprroval?: boolean | null,
    transferredSameGender?: boolean | null,
    eventID: string,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    updatedAt: string,
    eventTicketsId?: string | null,
  } | null,
};

export type OnCreateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnCreateBookingSubscription = {
  onCreateBooking?:  {
    __typename: "Booking",
    id: string,
    status?: string | null,
    guest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    mainGuest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      todoList?: Array< string | null > | null,
      map?: string | null,
      image?: string | null,
      gallery?: Array< string | null > | null,
      visibleTo?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    isMainGuest?: boolean | null,
    orderId?: string | null,
    updatedBy?: string | null,
    updatedByName?: string | null,
    updatedAt?: string | null,
    specialNeed?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    bookingGuestId?: string | null,
    bookingMainGuestId?: string | null,
    bookingEventId?: string | null,
  } | null,
};

export type OnUpdateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking?:  {
    __typename: "Booking",
    id: string,
    status?: string | null,
    guest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    mainGuest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      todoList?: Array< string | null > | null,
      map?: string | null,
      image?: string | null,
      gallery?: Array< string | null > | null,
      visibleTo?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    isMainGuest?: boolean | null,
    orderId?: string | null,
    updatedBy?: string | null,
    updatedByName?: string | null,
    updatedAt?: string | null,
    specialNeed?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    bookingGuestId?: string | null,
    bookingMainGuestId?: string | null,
    bookingEventId?: string | null,
  } | null,
};

export type OnDeleteBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking?:  {
    __typename: "Booking",
    id: string,
    status?: string | null,
    guest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    mainGuest?:  {
      __typename: "Guest",
      id: string,
      name?: string | null,
      username?: string | null,
      email?: string | null,
      phone_number?: string | null,
      guestGroupID?: string | null,
      guestGroupName?: string | null,
      guest_avatar?: string | null,
      avg_spend?: number | null,
      avg_ticket_type?: string | null,
      numberOfTickets?: number | null,
      connections?: string | null,
      last_attended_event?: string | null,
      gender?: string | null,
      group?: string | null,
      faceBookID?: string | null,
      appPassword?: string | null,
      birthdate?: string | null,
      isVerified?: boolean | null,
      images?: Array< string | null > | null,
      address?: string | null,
      totalEvents?: number | null,
      flags?: Array< string | null > | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      name?: string | null,
      description?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      todoList?: Array< string | null > | null,
      map?: string | null,
      image?: string | null,
      gallery?: Array< string | null > | null,
      visibleTo?: string | null,
      deleted?: string | null,
      createdAt: string,
      createdByID: string,
      createdByName: string,
      updatedAt: string,
    } | null,
    isMainGuest?: boolean | null,
    orderId?: string | null,
    updatedBy?: string | null,
    updatedByName?: string | null,
    updatedAt?: string | null,
    specialNeed?: boolean | null,
    deleted?: string | null,
    createdAt: string,
    createdByID: string,
    createdByName: string,
    bookingGuestId?: string | null,
    bookingMainGuestId?: string | null,
    bookingEventId?: string | null,
  } | null,
};
