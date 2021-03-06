import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Bounds = {
  northEast: LatLngLiteral;
  southWest: LatLngLiteral;
};


export type FieldError = {
  __typename?: 'FieldError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Header = {
  __typename?: 'Header';
  id: Scalars['String'];
  toId: Scalars['String'];
  subject: Scalars['String'];
  reservationId?: Maybe<Scalars['String']>;
  messages: Array<Message>;
  listingId: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  creator: User;
};

export type HeaderInput = {
  toId: Scalars['String'];
  subject: Scalars['String'];
  listingId: Scalars['String'];
  reservationId?: Maybe<Scalars['String']>;
};

export type LatLngLiteral = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type Listing = {
  __typename?: 'Listing';
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  category: Scalars['String'];
  type: Scalars['String'];
  photos: Array<Scalars['String']>;
  price: Scalars['Float'];
  bathrooms: Scalars['Float'];
  bedrooms: Scalars['Float'];
  beds: Scalars['Float'];
  guests: Scalars['Float'];
  city: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  amenities: Array<Scalars['String']>;
  highlights: Array<Scalars['String']>;
  creatorId: Scalars['String'];
  reviews: Array<Review>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  creator: User;
};

export type ListingInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  category: Scalars['String'];
  type: Scalars['String'];
  photos: Array<Scalars['String']>;
  price: Scalars['Float'];
  bathrooms: Scalars['Int'];
  bedrooms: Scalars['Int'];
  beds: Scalars['Int'];
  guests: Scalars['Int'];
  city: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  amenities: Array<Scalars['String']>;
  highlights: Array<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['String'];
  isFromSender: Scalars['Float'];
  text: Scalars['String'];
  headerId: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  creator: User;
};

export type MessageInput = {
  text: Scalars['String'];
  isFromSender: Scalars['Float'];
  headerId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHeader: Header;
  deleteHeader: Scalars['Boolean'];
  signS3: Array<Scalars['String']>;
  createListing: Scalars['Boolean'];
  updateListing?: Maybe<Listing>;
  deleteListing: Scalars['Boolean'];
  createPaymentIntent?: Maybe<Scalars['String']>;
  createMessage: Message;
  deleteMessages: Scalars['Boolean'];
  createReview: Review;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  deleteUser: Scalars['Boolean'];
  createReservation: Reservation;
  cancelReservation: Scalars['Boolean'];
  refundReservation: Scalars['Boolean'];
};


export type MutationCreateHeaderArgs = {
  input: HeaderInput;
};


export type MutationDeleteHeaderArgs = {
  id: Scalars['String'];
};


export type MutationSignS3Args = {
  photos: Array<Photo>;
};


export type MutationCreateListingArgs = {
  input: ListingInput;
};


export type MutationUpdateListingArgs = {
  input: UpdateListing;
  id: Scalars['String'];
};


export type MutationDeleteListingArgs = {
  id: Scalars['String'];
};


export type MutationCreatePaymentIntentArgs = {
  nights: Scalars['Int'];
  id: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  input: MessageInput;
};


export type MutationDeleteMessagesArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationCreateReviewArgs = {
  input: ReviewInput;
};


export type MutationRegisterArgs = {
  credentials: UserInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type MutationCreateReservationArgs = {
  input: ReservationInput;
};


export type MutationCancelReservationArgs = {
  id: Scalars['String'];
};


export type MutationRefundReservationArgs = {
  paymentIntent: Scalars['String'];
};

export type PaginatedListings = {
  __typename?: 'PaginatedListings';
  listings: Array<Listing>;
  hasMore: Scalars['Boolean'];
};

export type Photo = {
  name: Scalars['String'];
  src: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  headers: Array<Header>;
  latestHeader: Header;
  listing?: Maybe<Listing>;
  searchListings: PaginatedListings;
  messages: Array<Message>;
  reviews: Array<Review>;
  users: Array<User>;
  me?: Maybe<User>;
  reservations: Array<Reservation>;
  reservation?: Maybe<Reservation>;
};


export type QueryListingArgs = {
  id: Scalars['String'];
};


export type QuerySearchListingsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  input: SearchInput;
};


export type QueryMessagesArgs = {
  headerId: Scalars['String'];
};


export type QueryReviewsArgs = {
  listingId: Scalars['String'];
};


export type QueryReservationArgs = {
  id: Scalars['String'];
};

export type Reservation = {
  __typename?: 'Reservation';
  id: Scalars['String'];
  arrival: Scalars['String'];
  departure: Scalars['String'];
  guests: Scalars['Int'];
  cancelled: Scalars['Int'];
  completed: Scalars['Int'];
  paymentIntent: Scalars['String'];
  listingId: Scalars['String'];
  guestId: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ReservationInput = {
  arrival: Scalars['DateTime'];
  departure: Scalars['DateTime'];
  guests: Scalars['Int'];
  paymentIntent: Scalars['String'];
  listingId: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['String'];
  rating: Scalars['Float'];
  cleanliness: Scalars['Float'];
  accuracy: Scalars['Float'];
  checkIn: Scalars['Float'];
  communication: Scalars['Float'];
  location: Scalars['Float'];
  value: Scalars['Float'];
  review: Scalars['String'];
  listingId: Scalars['String'];
  listing: Listing;
  creatorId: Scalars['String'];
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ReviewInput = {
  rating: Scalars['Int'];
  cleanliness: Scalars['Int'];
  accuracy: Scalars['Int'];
  checkIn: Scalars['Int'];
  communication: Scalars['Int'];
  location: Scalars['Int'];
  value: Scalars['Int'];
  review: Scalars['String'];
  listingId: Scalars['String'];
};

export type SearchInput = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  bounds?: Maybe<Bounds>;
  guests?: Maybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newHeader: Header;
  newMessage: Message;
};


export type SubscriptionNewHeaderArgs = {
  creatorId: Scalars['String'];
  toId: Scalars['String'];
};


export type SubscriptionNewMessageArgs = {
  headerId: Scalars['String'];
};

export type UpdateListing = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Scalars['String']>>;
  price?: Maybe<Scalars['Float']>;
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  guests?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  amenities?: Maybe<Array<Scalars['String']>>;
  highlights?: Maybe<Array<Scalars['String']>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  photoUrl: Scalars['String'];
  forgotPasswordLocked: Scalars['Boolean'];
  superhost: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  email: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  confirm: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type ListingDetailsFragment = (
  { __typename?: 'Listing' }
  & Pick<Listing, 'description' | 'category' | 'type' | 'price' | 'bathrooms' | 'bedrooms' | 'beds' | 'guests' | 'amenities' | 'latitude' | 'longitude'>
  & { creator: (
    { __typename?: 'User' }
    & RegularUserFragment
  ) }
);

export type RegReservationFragment = (
  { __typename?: 'Reservation' }
  & Pick<Reservation, 'id' | 'arrival' | 'departure' | 'cancelled' | 'guests' | 'listingId'>
);

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'path' | 'message'>
);

export type RegularHeadersFragment = (
  { __typename?: 'Header' }
  & Pick<Header, 'id' | 'toId' | 'subject' | 'listingId' | 'reservationId' | 'createdAt'>
  & { creator: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'photoUrl' | 'createdAt'>
  ), messages: Array<(
    { __typename?: 'Message' }
    & RegularMessageFragment
  )> }
);

export type RegularMessageFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'id' | 'isFromSender' | 'text' | 'createdAt' | 'headerId'>
  & { creator: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'photoUrl' | 'createdAt'>
  ) }
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'photoUrl' | 'createdAt'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type CancelReservationMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type CancelReservationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'cancelReservation'>
);

export type ChangePasswordMutationVariables = Exact<{
  newPassword: Scalars['String'];
  token: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateHeaderMutationVariables = Exact<{
  input: HeaderInput;
}>;


export type CreateHeaderMutation = (
  { __typename?: 'Mutation' }
  & { createHeader: (
    { __typename?: 'Header' }
    & Pick<Header, 'id' | 'toId' | 'subject' | 'listingId'>
  ) }
);

export type CreateListingMutationVariables = Exact<{
  input: ListingInput;
}>;


export type CreateListingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createListing'>
);

export type CreateMessageMutationVariables = Exact<{
  input: MessageInput;
}>;


export type CreateMessageMutation = (
  { __typename?: 'Mutation' }
  & { createMessage: (
    { __typename?: 'Message' }
    & RegularMessageFragment
  ) }
);

export type CreatePaymentIntentMutationVariables = Exact<{
  id: Scalars['String'];
  nights: Scalars['Int'];
}>;


export type CreatePaymentIntentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createPaymentIntent'>
);

export type CreateReservationMutationVariables = Exact<{
  input: ReservationInput;
}>;


export type CreateReservationMutation = (
  { __typename?: 'Mutation' }
  & { createReservation: (
    { __typename?: 'Reservation' }
    & Pick<Reservation, 'id' | 'arrival' | 'departure' | 'guests' | 'listingId' | 'guestId'>
  ) }
);

export type CreateReviewMutationVariables = Exact<{
  input: ReviewInput;
}>;


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { createReview: (
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'rating' | 'review' | 'listingId' | 'creatorId'>
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RefundReservationMutationVariables = Exact<{
  paymentIntent: Scalars['String'];
}>;


export type RefundReservationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'refundReservation'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  confirm: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type SignS3MutationVariables = Exact<{
  photos: Array<Photo> | Photo;
}>;


export type SignS3Mutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'signS3'>
);

export type UpdateListingMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateListing;
}>;


export type UpdateListingMutation = (
  { __typename?: 'Mutation' }
  & { updateListing?: Maybe<(
    { __typename?: 'Listing' }
    & Pick<Listing, 'id' | 'title' | 'description' | 'category' | 'type' | 'photos' | 'price' | 'bathrooms' | 'bedrooms' | 'beds' | 'guests' | 'latitude' | 'longitude' | 'amenities'>
  )> }
);

export type HeadersQueryVariables = Exact<{ [key: string]: never; }>;


export type HeadersQuery = (
  { __typename?: 'Query' }
  & { headers: Array<(
    { __typename?: 'Header' }
    & RegularHeadersFragment
  )> }
);

export type LatestHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestHeaderQuery = (
  { __typename?: 'Query' }
  & { latestHeader: (
    { __typename?: 'Header' }
    & Pick<Header, 'id'>
  ) }
);

export type ListingQueryVariables = Exact<{
  id: Scalars['String'];
  noreviews: Scalars['Boolean'];
  slim: Scalars['Boolean'];
}>;


export type ListingQuery = (
  { __typename?: 'Query' }
  & { listing?: Maybe<(
    { __typename?: 'Listing' }
    & Pick<Listing, 'id' | 'title' | 'city' | 'photos'>
    & { reviews?: Maybe<Array<(
      { __typename?: 'Review' }
      & Pick<Review, 'id' | 'rating' | 'cleanliness' | 'accuracy' | 'checkIn' | 'communication' | 'location' | 'value' | 'review' | 'createdAt'>
      & { creator: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'photoUrl'>
      ) }
    )>> }
    & ListingDetailsFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type MessagesQueryVariables = Exact<{
  headerId: Scalars['String'];
}>;


export type MessagesQuery = (
  { __typename?: 'Query' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & RegularMessageFragment
  )> }
);

export type ReservationQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ReservationQuery = (
  { __typename?: 'Query' }
  & { reservation?: Maybe<(
    { __typename?: 'Reservation' }
    & RegReservationFragment
  )> }
);

export type ReservationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReservationsQuery = (
  { __typename?: 'Query' }
  & { reservations: Array<(
    { __typename?: 'Reservation' }
    & Pick<Reservation, 'completed' | 'paymentIntent'>
    & RegReservationFragment
  )> }
);

export type SearchListingsQueryVariables = Exact<{
  input: SearchInput;
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type SearchListingsQuery = (
  { __typename?: 'Query' }
  & { searchListings: (
    { __typename?: 'PaginatedListings' }
    & Pick<PaginatedListings, 'hasMore'>
    & { listings: Array<(
      { __typename?: 'Listing' }
      & Pick<Listing, 'id' | 'title' | 'description' | 'category' | 'city' | 'photos' | 'bathrooms' | 'bedrooms' | 'beds' | 'guests' | 'amenities' | 'price' | 'latitude' | 'longitude' | 'createdAt'>
      & { reviews: Array<(
        { __typename?: 'Review' }
        & Pick<Review, 'id' | 'rating'>
      )> }
    )> }
  ) }
);

export type NewMessageSubscriptionVariables = Exact<{
  headerId: Scalars['String'];
}>;


export type NewMessageSubscription = (
  { __typename?: 'Subscription' }
  & { newMessage: (
    { __typename?: 'Message' }
    & RegularMessageFragment
  ) }
);

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  photoUrl
  createdAt
}
    `;
export const ListingDetailsFragmentDoc = gql`
    fragment ListingDetails on Listing {
  description
  category
  type
  price
  bathrooms
  bedrooms
  beds
  guests
  amenities
  latitude
  longitude
  creator {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export const RegReservationFragmentDoc = gql`
    fragment RegReservation on Reservation {
  id
  arrival
  departure
  cancelled
  guests
  listingId
}
    `;
export const RegularMessageFragmentDoc = gql`
    fragment RegularMessage on Message {
  id
  isFromSender
  text
  createdAt
  headerId
  creator {
    id
    name
    photoUrl
    createdAt
  }
}
    `;
export const RegularHeadersFragmentDoc = gql`
    fragment RegularHeaders on Header {
  id
  toId
  subject
  listingId
  reservationId
  createdAt
  creator {
    id
    name
    photoUrl
    createdAt
  }
  messages {
    ...RegularMessage
  }
}
    ${RegularMessageFragmentDoc}`;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  path
  message
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const CancelReservationDocument = gql`
    mutation cancelReservation($id: String!) {
  cancelReservation(id: $id)
}
    `;
export type CancelReservationMutationFn = Apollo.MutationFunction<CancelReservationMutation, CancelReservationMutationVariables>;

/**
 * __useCancelReservationMutation__
 *
 * To run a mutation, you first call `useCancelReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelReservationMutation, { data, loading, error }] = useCancelReservationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCancelReservationMutation(baseOptions?: Apollo.MutationHookOptions<CancelReservationMutation, CancelReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelReservationMutation, CancelReservationMutationVariables>(CancelReservationDocument, options);
      }
export type CancelReservationMutationHookResult = ReturnType<typeof useCancelReservationMutation>;
export type CancelReservationMutationResult = Apollo.MutationResult<CancelReservationMutation>;
export type CancelReservationMutationOptions = Apollo.BaseMutationOptions<CancelReservationMutation, CancelReservationMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($newPassword: String!, $token: String!) {
  changePassword(newPassword: $newPassword, token: $token) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateHeaderDocument = gql`
    mutation CreateHeader($input: HeaderInput!) {
  createHeader(input: $input) {
    id
    toId
    subject
    listingId
  }
}
    `;
export type CreateHeaderMutationFn = Apollo.MutationFunction<CreateHeaderMutation, CreateHeaderMutationVariables>;

/**
 * __useCreateHeaderMutation__
 *
 * To run a mutation, you first call `useCreateHeaderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHeaderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHeaderMutation, { data, loading, error }] = useCreateHeaderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHeaderMutation(baseOptions?: Apollo.MutationHookOptions<CreateHeaderMutation, CreateHeaderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHeaderMutation, CreateHeaderMutationVariables>(CreateHeaderDocument, options);
      }
export type CreateHeaderMutationHookResult = ReturnType<typeof useCreateHeaderMutation>;
export type CreateHeaderMutationResult = Apollo.MutationResult<CreateHeaderMutation>;
export type CreateHeaderMutationOptions = Apollo.BaseMutationOptions<CreateHeaderMutation, CreateHeaderMutationVariables>;
export const CreateListingDocument = gql`
    mutation CreateListing($input: ListingInput!) {
  createListing(input: $input)
}
    `;
export type CreateListingMutationFn = Apollo.MutationFunction<CreateListingMutation, CreateListingMutationVariables>;

/**
 * __useCreateListingMutation__
 *
 * To run a mutation, you first call `useCreateListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListingMutation, { data, loading, error }] = useCreateListingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateListingMutation(baseOptions?: Apollo.MutationHookOptions<CreateListingMutation, CreateListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateListingMutation, CreateListingMutationVariables>(CreateListingDocument, options);
      }
export type CreateListingMutationHookResult = ReturnType<typeof useCreateListingMutation>;
export type CreateListingMutationResult = Apollo.MutationResult<CreateListingMutation>;
export type CreateListingMutationOptions = Apollo.BaseMutationOptions<CreateListingMutation, CreateListingMutationVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($input: MessageInput!) {
  createMessage(input: $input) {
    ...RegularMessage
  }
}
    ${RegularMessageFragmentDoc}`;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const CreatePaymentIntentDocument = gql`
    mutation CreatePaymentIntent($id: String!, $nights: Int!) {
  createPaymentIntent(id: $id, nights: $nights)
}
    `;
export type CreatePaymentIntentMutationFn = Apollo.MutationFunction<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;

/**
 * __useCreatePaymentIntentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentIntentMutation, { data, loading, error }] = useCreatePaymentIntentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      nights: // value for 'nights'
 *   },
 * });
 */
export function useCreatePaymentIntentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>(CreatePaymentIntentDocument, options);
      }
export type CreatePaymentIntentMutationHookResult = ReturnType<typeof useCreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationResult = Apollo.MutationResult<CreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;
export const CreateReservationDocument = gql`
    mutation CreateReservation($input: ReservationInput!) {
  createReservation(input: $input) {
    id
    arrival
    departure
    guests
    listingId
    guestId
  }
}
    `;
export type CreateReservationMutationFn = Apollo.MutationFunction<CreateReservationMutation, CreateReservationMutationVariables>;

/**
 * __useCreateReservationMutation__
 *
 * To run a mutation, you first call `useCreateReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReservationMutation, { data, loading, error }] = useCreateReservationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReservationMutation(baseOptions?: Apollo.MutationHookOptions<CreateReservationMutation, CreateReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReservationMutation, CreateReservationMutationVariables>(CreateReservationDocument, options);
      }
export type CreateReservationMutationHookResult = ReturnType<typeof useCreateReservationMutation>;
export type CreateReservationMutationResult = Apollo.MutationResult<CreateReservationMutation>;
export type CreateReservationMutationOptions = Apollo.BaseMutationOptions<CreateReservationMutation, CreateReservationMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($input: ReviewInput!) {
  createReview(input: $input) {
    id
    rating
    review
    listingId
    creatorId
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefundReservationDocument = gql`
    mutation refundReservation($paymentIntent: String!) {
  refundReservation(paymentIntent: $paymentIntent)
}
    `;
export type RefundReservationMutationFn = Apollo.MutationFunction<RefundReservationMutation, RefundReservationMutationVariables>;

/**
 * __useRefundReservationMutation__
 *
 * To run a mutation, you first call `useRefundReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefundReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refundReservationMutation, { data, loading, error }] = useRefundReservationMutation({
 *   variables: {
 *      paymentIntent: // value for 'paymentIntent'
 *   },
 * });
 */
export function useRefundReservationMutation(baseOptions?: Apollo.MutationHookOptions<RefundReservationMutation, RefundReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefundReservationMutation, RefundReservationMutationVariables>(RefundReservationDocument, options);
      }
export type RefundReservationMutationHookResult = ReturnType<typeof useRefundReservationMutation>;
export type RefundReservationMutationResult = Apollo.MutationResult<RefundReservationMutation>;
export type RefundReservationMutationOptions = Apollo.BaseMutationOptions<RefundReservationMutation, RefundReservationMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $name: String!, $password: String!, $confirm: String!) {
  register(
    credentials: {email: $email, name: $name, password: $password, confirm: $confirm}
  ) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      confirm: // value for 'confirm'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SignS3Document = gql`
    mutation signS3($photos: [Photo!]!) {
  signS3(photos: $photos)
}
    `;
export type SignS3MutationFn = Apollo.MutationFunction<SignS3Mutation, SignS3MutationVariables>;

/**
 * __useSignS3Mutation__
 *
 * To run a mutation, you first call `useSignS3Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignS3Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signS3Mutation, { data, loading, error }] = useSignS3Mutation({
 *   variables: {
 *      photos: // value for 'photos'
 *   },
 * });
 */
export function useSignS3Mutation(baseOptions?: Apollo.MutationHookOptions<SignS3Mutation, SignS3MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignS3Mutation, SignS3MutationVariables>(SignS3Document, options);
      }
export type SignS3MutationHookResult = ReturnType<typeof useSignS3Mutation>;
export type SignS3MutationResult = Apollo.MutationResult<SignS3Mutation>;
export type SignS3MutationOptions = Apollo.BaseMutationOptions<SignS3Mutation, SignS3MutationVariables>;
export const UpdateListingDocument = gql`
    mutation UpdateListing($id: String!, $input: UpdateListing!) {
  updateListing(id: $id, input: $input) {
    id
    title
    description
    category
    type
    photos
    price
    bathrooms
    bedrooms
    beds
    guests
    latitude
    longitude
    amenities
  }
}
    `;
export type UpdateListingMutationFn = Apollo.MutationFunction<UpdateListingMutation, UpdateListingMutationVariables>;

/**
 * __useUpdateListingMutation__
 *
 * To run a mutation, you first call `useUpdateListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateListingMutation, { data, loading, error }] = useUpdateListingMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateListingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateListingMutation, UpdateListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateListingMutation, UpdateListingMutationVariables>(UpdateListingDocument, options);
      }
export type UpdateListingMutationHookResult = ReturnType<typeof useUpdateListingMutation>;
export type UpdateListingMutationResult = Apollo.MutationResult<UpdateListingMutation>;
export type UpdateListingMutationOptions = Apollo.BaseMutationOptions<UpdateListingMutation, UpdateListingMutationVariables>;
export const HeadersDocument = gql`
    query Headers {
  headers {
    ...RegularHeaders
  }
}
    ${RegularHeadersFragmentDoc}`;

/**
 * __useHeadersQuery__
 *
 * To run a query within a React component, call `useHeadersQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeadersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeadersQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeadersQuery(baseOptions?: Apollo.QueryHookOptions<HeadersQuery, HeadersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeadersQuery, HeadersQueryVariables>(HeadersDocument, options);
      }
export function useHeadersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeadersQuery, HeadersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeadersQuery, HeadersQueryVariables>(HeadersDocument, options);
        }
export type HeadersQueryHookResult = ReturnType<typeof useHeadersQuery>;
export type HeadersLazyQueryHookResult = ReturnType<typeof useHeadersLazyQuery>;
export type HeadersQueryResult = Apollo.QueryResult<HeadersQuery, HeadersQueryVariables>;
export const LatestHeaderDocument = gql`
    query LatestHeader {
  latestHeader {
    id
  }
}
    `;

/**
 * __useLatestHeaderQuery__
 *
 * To run a query within a React component, call `useLatestHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestHeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestHeaderQuery(baseOptions?: Apollo.QueryHookOptions<LatestHeaderQuery, LatestHeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestHeaderQuery, LatestHeaderQueryVariables>(LatestHeaderDocument, options);
      }
export function useLatestHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestHeaderQuery, LatestHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestHeaderQuery, LatestHeaderQueryVariables>(LatestHeaderDocument, options);
        }
export type LatestHeaderQueryHookResult = ReturnType<typeof useLatestHeaderQuery>;
export type LatestHeaderLazyQueryHookResult = ReturnType<typeof useLatestHeaderLazyQuery>;
export type LatestHeaderQueryResult = Apollo.QueryResult<LatestHeaderQuery, LatestHeaderQueryVariables>;
export const ListingDocument = gql`
    query Listing($id: String!, $noreviews: Boolean!, $slim: Boolean!) {
  listing(id: $id) {
    id
    title
    city
    photos
    reviews @skip(if: $noreviews) {
      id
      rating
      cleanliness
      accuracy
      checkIn
      communication
      location
      value
      review
      createdAt
      creator {
        id
        name
        photoUrl
      }
    }
    ...ListingDetails @skip(if: $slim)
  }
}
    ${ListingDetailsFragmentDoc}`;

/**
 * __useListingQuery__
 *
 * To run a query within a React component, call `useListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListingQuery({
 *   variables: {
 *      id: // value for 'id'
 *      noreviews: // value for 'noreviews'
 *      slim: // value for 'slim'
 *   },
 * });
 */
export function useListingQuery(baseOptions: Apollo.QueryHookOptions<ListingQuery, ListingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListingQuery, ListingQueryVariables>(ListingDocument, options);
      }
export function useListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListingQuery, ListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListingQuery, ListingQueryVariables>(ListingDocument, options);
        }
export type ListingQueryHookResult = ReturnType<typeof useListingQuery>;
export type ListingLazyQueryHookResult = ReturnType<typeof useListingLazyQuery>;
export type ListingQueryResult = Apollo.QueryResult<ListingQuery, ListingQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MessagesDocument = gql`
    query Messages($headerId: String!) {
  messages(headerId: $headerId) {
    ...RegularMessage
  }
}
    ${RegularMessageFragmentDoc}`;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      headerId: // value for 'headerId'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const ReservationDocument = gql`
    query Reservation($id: String!) {
  reservation(id: $id) {
    ...RegReservation
  }
}
    ${RegReservationFragmentDoc}`;

/**
 * __useReservationQuery__
 *
 * To run a query within a React component, call `useReservationQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReservationQuery(baseOptions: Apollo.QueryHookOptions<ReservationQuery, ReservationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReservationQuery, ReservationQueryVariables>(ReservationDocument, options);
      }
export function useReservationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationQuery, ReservationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReservationQuery, ReservationQueryVariables>(ReservationDocument, options);
        }
export type ReservationQueryHookResult = ReturnType<typeof useReservationQuery>;
export type ReservationLazyQueryHookResult = ReturnType<typeof useReservationLazyQuery>;
export type ReservationQueryResult = Apollo.QueryResult<ReservationQuery, ReservationQueryVariables>;
export const ReservationsDocument = gql`
    query Reservations {
  reservations {
    completed
    paymentIntent
    ...RegReservation
  }
}
    ${RegReservationFragmentDoc}`;

/**
 * __useReservationsQuery__
 *
 * To run a query within a React component, call `useReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useReservationsQuery(baseOptions?: Apollo.QueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, options);
      }
export function useReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, options);
        }
export type ReservationsQueryHookResult = ReturnType<typeof useReservationsQuery>;
export type ReservationsLazyQueryHookResult = ReturnType<typeof useReservationsLazyQuery>;
export type ReservationsQueryResult = Apollo.QueryResult<ReservationsQuery, ReservationsQueryVariables>;
export const SearchListingsDocument = gql`
    query SearchListings($input: SearchInput!, $limit: Int!, $cursor: String) {
  searchListings(input: $input, limit: $limit, cursor: $cursor) {
    listings {
      id
      title
      description
      category
      city
      photos
      bathrooms
      bedrooms
      beds
      guests
      amenities
      price
      latitude
      longitude
      createdAt
      reviews {
        id
        rating
      }
    }
    hasMore
  }
}
    `;

/**
 * __useSearchListingsQuery__
 *
 * To run a query within a React component, call `useSearchListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchListingsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useSearchListingsQuery(baseOptions: Apollo.QueryHookOptions<SearchListingsQuery, SearchListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchListingsQuery, SearchListingsQueryVariables>(SearchListingsDocument, options);
      }
export function useSearchListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchListingsQuery, SearchListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchListingsQuery, SearchListingsQueryVariables>(SearchListingsDocument, options);
        }
export type SearchListingsQueryHookResult = ReturnType<typeof useSearchListingsQuery>;
export type SearchListingsLazyQueryHookResult = ReturnType<typeof useSearchListingsLazyQuery>;
export type SearchListingsQueryResult = Apollo.QueryResult<SearchListingsQuery, SearchListingsQueryVariables>;
export const NewMessageDocument = gql`
    subscription NewMessage($headerId: String!) {
  newMessage(headerId: $headerId) {
    ...RegularMessage
  }
}
    ${RegularMessageFragmentDoc}`;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *      headerId: // value for 'headerId'
 *   },
 * });
 */
export function useNewMessageSubscription(baseOptions: Apollo.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, options);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;