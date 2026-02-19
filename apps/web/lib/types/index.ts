/**
 * @file index.ts
 * @description Barrel export for all shared types.
 *
 * Import from this file for convenient access:
 * ```ts
 * import type { User, Listing, ApiResponse } from '@/lib/types'
 * import { listingInsertSchema } from '@/lib/types'
 * ```
 */

// Database model types & the Supabase Database interface
export type {
  // Branded primitives
  StellarPublicKey,
  ContractId,
  ISOTimestamp,

  // Status enums
  ListingStatus,
  PaymentStatus,
  AgreementStatus,

  // User
  UserRow,
  User,
  UserInsert,
  UserUpdate,
  PublicUser,

  // Listing
  ListingRow,
  Listing,
  ListingInsert,
  ListingUpdate,
  ListingWithLandlord,
  ListingWithAmenities,
  ListingDetail,

  // ListingAmenity
  ListingAmenityRow,
  ListingAmenity,
  ListingAmenityInsert,

  // Message
  MessageRow,
  Message,
  MessageInsert,
  MessageUpdate,
  MessageWithSender,

  // PaymentRecord
  PaymentRecordRow,
  PaymentRecord,
  PaymentRecordInsert,
  PaymentRecordUpdate,
  PaymentRecordWithTenant,

  // RentAgreement
  RentAgreementRow,
  RentAgreement,
  RentAgreementInsert,
  RentAgreementUpdate,
  RentAgreementDetail,

  // Supabase typed client interface
  Database,
} from './database'

// API request/response types
export type {
  ApiSuccessResponse,
  ApiErrorResponse,
  ApiResponse,
  PaginationMeta,
  PaginatedResponse,

  // Listings
  ListingSearchParams,
  ListingSearchResult,
  ListingCardResponse,
  ListingDetailResponse,
  CreateListingBody,
  UpdateListingBody,

  // Messages
  MessageThreadResponse,
  SendMessageBody,

  // Payments
  PaymentSummary,
  ListingPaymentsResponse,

  // Auth / User
  AuthUserResponse,
  UserProfileResponse,
  PublicUserProfileResponse,
  RegisterUserBody,
  UpdateUserBody,
} from './api'

// Zod validation schemas (values — can be used at runtime)
export {
  stellarPublicKeySchema,
  isoTimestampSchema,
  uuidSchema,
  paymentPeriodSchema,
  isoDateSchema,
  radiusSchema,
  userInsertSchema,
  userUpdateSchema,
  listingInsertSchema,
  listingUpdateSchema,
  listingAmenityInsertSchema,
  messageInsertSchema,
  messageUpdateSchema,
  paymentRecordInsertSchema,
  paymentRecordUpdateSchema,
  rentAgreementInsertSchema,
  rentAgreementUpdateSchema,
  listingSearchParamsSchema,
} from './validation'

// z.infer-derived input types (compile-time only)
export type {
  UserInsertInput,
  UserUpdateInput,
  ListingInsertInput,
  ListingUpdateInput,
  ListingAmenityInsertInput,
  MessageInsertInput,
  MessageUpdateInput,
  PaymentRecordInsertInput,
  PaymentRecordUpdateInput,
  RentAgreementInsertInput,
  RentAgreementUpdateInput,
  ListingSearchParamsInput,
} from './validation'
