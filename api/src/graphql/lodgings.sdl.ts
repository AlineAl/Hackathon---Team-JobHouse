export const schema = gql`
  type Lodging {
    id: Int!
    url: String!
    area: Int
    price: Int
    description: String
    lodgingTypeId: Int!
    addressId: Int!
    lessorId: Int
    Type: LodgingType!
    Address: Address!
    Lessor: Lessor
    constraints: [LodgingConstraint]!
    User: [User]!
  }

  type Query {
    lodgings: [Lodging!]! @requireAuth
    lodging(id: Int!): Lodging @requireAuth
  }

  input CreateLodgingInput {
    url: String!
    area: Int
    price: Int
    description: String
    lodgingTypeId: Int!
    addressId: Int!
    lessorId: Int
  }

  input UpdateLodgingInput {
    url: String
    area: Int
    price: Int
    description: String
    lodgingTypeId: Int
    addressId: Int
    lessorId: Int
  }

  type Mutation {
    createLodging(input: CreateLodgingInput!): Lodging! @requireAuth
    updateLodging(id: Int!, input: UpdateLodgingInput!): Lodging! @requireAuth
    deleteLodging(id: Int!): Lodging! @requireAuth
  }
`
