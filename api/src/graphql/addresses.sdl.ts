export const schema = gql`
  type Address {
    id: Int!
    place: String
    city: String
    zipCode: String
    department: String
    departmentCode: String
    longitude: String!
    latitude: String!
    Lodging: [Lodging]!
    Job: [Job]!
    User: [User]!
  }

  type Query {
    addresses: [Address!]! @requireAuth
    address(id: Int!): Address @requireAuth
  }

  input CreateAddressInput {
    place: String
    city: String
    zipCode: String
    department: String
    departmentCode: String
    longitude: String!
    latitude: String!
  }

  input UpdateAddressInput {
    place: String
    city: String
    zipCode: String
    department: String
    departmentCode: String
    longitude: String
    latitude: String
  }

  type Mutation {
    createAddress(input: CreateAddressInput!): Address! @requireAuth
    updateAddress(id: Int!, input: UpdateAddressInput!): Address! @requireAuth
    deleteAddress(id: Int!): Address! @requireAuth
  }
`
