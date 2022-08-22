export type Profile = {
  id: number;
  name: string;
  phone: string;
  photo: string;
};

export interface OwnerId {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: string;
  active_flag: boolean;
  value: number;
}

export interface OrgId {
  name: string;
  people_count: number;
  owner_id: number;
  address: string;
  active_flag: boolean;
  cc_email: string;
  value: number;
}

export interface Phone {
  value: string;
  primary: boolean;
  label: string;
}

export interface Email {
  value: string;
  primary: boolean;
  label: string;
}

export interface Pictures {
  128: string;
  512: string;
}

export interface PictureId {
  item_type: string;
  item_id: number;
  active_flag: boolean;
  add_time: string;
  update_time: string;
  added_by_user_id: number;
  pictures: Pictures;
  value: number;
}

export interface ProfileData {
  id: number;
  company_id: number;
  owner_id: OwnerId;
  org_id: OrgId;
  name: string;
  first_name: string;
  last_name: string;
  open_deals_count: number;
  related_open_deals_count: number;
  closed_deals_count: number;
  related_closed_deals_count: number;
  participant_open_deals_count: number;
  participant_closed_deals_count: number;
  email_messages_count: number;
  activities_count: number;
  done_activities_count: number;
  undone_activities_count: number;
  files_count: number;
  notes_count: number;
  followers_count: number;
  won_deals_count: number;
  related_won_deals_count: number;
  lost_deals_count: number;
  related_lost_deals_count: number;
  active_flag: boolean;
  phone: Phone[];
  email: Email[];
  primary_email: string;
  first_char: string;
  update_time: string;
  add_time: string;
  visible_to: string;
  marketing_status: string;
  picture_id: PictureId;
  next_activity_date: string;
  next_activity_time: string;
  next_activity_id: number;
  last_activity_id: number;
  last_activity_date: string;
  last_incoming_mail_time: string;
  last_outgoing_mail_time: string;
  label: number;
  org_name: string;
  owner_name: string;
  cc_email: string;
}

export interface Pagination {
  start: number;
  limit: number;
  more_items_in_collection: boolean;
  next_start: number;
}

export interface AdditionalData {
  pagination: Pagination;
}

export interface OrganizationModel {
  id: number;
  name: string;
  people_count: number;
  owner_id: number;
  address: string;
  active_flag: boolean;
  cc_email: string;
}

export interface Organization {
  [key: string]: OrganizationModel;
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: string;
  active_flag: boolean;
}

export interface User {
  [key: string]: UserModel;
}

export interface Pictures2 {
  128: string;
  512: string;
}

export interface PictureModel {
  id: number;
  item_type: string;
  item_id: number;
  active_flag: boolean;
  add_time: string;
  update_time: string;
  added_by_user_id: number;
  pictures: Pictures2;
}

export interface Picture {
  [key: string]: PictureModel;
}

export interface RelatedObjects {
  organization: Organization;
  user: User;
  picture: Picture;
}

export interface ProfileListResponse {
  success: boolean;
  data: ProfileData[];
  additional_data: AdditionalData;
  related_objects: RelatedObjects;
}

export interface DealsResponse {
  success: boolean;
  data: DealData[];
  additional_data: AdditionalData;
  related_objects: RelatedObjects;
}

export interface AdditionalData {
  pagination: Pagination;
}

export interface Pagination {
  start: number;
  limit: number;
  more_items_in_collection: boolean;
}

export interface DealData {
  id: number;
  creator_user_id: CreatorUserID;
  user_id: CreatorUserID;
  person_id: PersonModel;
  org_id: OrgID;
  stage_id: number;
  title: string;
  value: number;
  currency: string;
  add_time: Date;
  update_time: Date;
  stage_change_time: null;
  active: boolean;
  deleted: boolean;
  status: string;
  probability: null;
  next_activity_date: null;
  next_activity_time: null;
  next_activity_id: null;
  last_activity_id: null;
  last_activity_date: null;
  lost_reason: null;
  visible_to: string;
  close_time: null;
  pipeline_id: number;
  won_time: null;
  first_won_time: null;
  lost_time: null;
  products_count: number;
  files_count: number;
  notes_count: number;
  followers_count: number;
  email_messages_count: number;
  activities_count: number;
  done_activities_count: number;
  undone_activities_count: number;
  participants_count: number;
  expected_close_date: Date;
  last_incoming_mail_time: null;
  last_outgoing_mail_time: null;
  label: null;
  renewal_type: string;
  stage_order_nr: number;
  person_name: string;
  org_name: string;
  next_activity_subject: null;
  next_activity_type: null;
  next_activity_duration: null;
  next_activity_note: null;
  group_id: null;
  group_name: null;
  formatted_value: string;
  weighted_value: number;
  formatted_weighted_value: string;
  weighted_value_currency: string;
  rotten_time: null;
  owner_name: string;
  cc_email: string;
  org_hidden: boolean;
  person_hidden: boolean;
}

export interface CreatorUserID {
  id: number;
  name: string;
  email: string;
  has_pic: number;
  pic_hash: null;
  active_flag: boolean;
  value?: number;
}

export interface OrgID {
  name: string;
  people_count: number;
  owner_id: number;
  address: null;
  active_flag: boolean;
  cc_email: string;
  value?: number;
  id?: number;
}

export interface PersonModel {
  active_flag: boolean;
  name: string;
  email: Email[];
  phone: Email[];
  owner_id: number;
  value?: number;
  id?: number;
}

export interface Email {
  label: string;
  value: string;
  primary: boolean;
}

export interface RelatedObjects {
  user: User;
  organization: Organization;
  person: Person;
}

export interface Person {
  [key: string]: PersonModel;
}

export interface AcitivitiesResponse {
  success: boolean;
  data: ActivityModel[];
  additional_data: AdditionalData;
}

export interface AdditionalData {
  activity_distribution: ActivityDistribution;
  pagination: Pagination;
}

export interface ActivityDistribution {
  [key: string]: AdditionalData;
}

export interface AdditionalData {
  activities: Activities;
  name: string;
  activity_count: number;
  share: number;
}

export interface Activities {
  call: number;
}

export interface Pagination {
  start: number;
  limit: number;
  more_items_in_collection: boolean;
}

export interface ActivityModel {
  id: number;
  company_id: number;
  user_id: number;
  done: boolean;
  type: string;
  reference_type: null;
  reference_id: null;
  conference_meeting_client: null;
  conference_meeting_url: null;
  due_date: Date;
  due_time: string;
  duration: string;
  busy_flag: null;
  add_time: Date;
  marked_as_done_time: string;
  last_notification_time: null;
  last_notification_user_id: null;
  notification_language_id: null;
  subject: string;
  public_description: string;
  calendar_sync_include_context: null;
  location: null;
  org_id: number;
  person_id: number;
  deal_id: null;
  lead_id: null;
  active_flag: boolean;
  update_time: Date;
  update_user_id: null;
  source_timezone: null;
  rec_rule: null;
  rec_rule_extension: null;
  rec_master_activity_id: null;
  conference_meeting_id: null;
  original_start_time: null;
  note: null;
  created_by_user_id: number;
  location_subpremise: null;
  location_street_number: null;
  location_route: null;
  location_sublocality: null;
  location_locality: null;
  location_admin_area_level_1: null;
  location_admin_area_level_2: null;
  location_country: null;
  location_postal_code: null;
  location_formatted_address: null;
  attendees: null;
  participants: Participant[];
  series: null;
  is_recurring: null;
  note_clean: null;
  org_name: string;
  person_name: string;
  deal_title: null;
  lead_title: null;
  owner_name: string;
  person_dropbox_bcc: string;
  deal_dropbox_bcc: null;
  assigned_to_user_id: number;
  type_name: string;
  lead: null;
}

export interface Participant {
  person_id: number;
  primary_flag: boolean;
}
