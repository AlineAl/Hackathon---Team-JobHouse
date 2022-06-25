export const schema = gql`
  type Lodging {
    id: Int!
    url: String!
    Type: String
    area: Int
    city: String
    price: Int
    description: String
    longitude: Int!
    latitude: Int!
  }

  type Query {
    lodgings: [Lodging!]! @requireAuth
    lodging(id: Int!): Lodging @requireAuth
  }

  input CreateLodgingInput {
    url: String!
    Type: String
    area: Int
    city: String
    price: Int
    description: String
    longitude: Int!
    latitude: Int!
  }

  input UpdateLodgingInput {
    url: String
    Type: String
    area: Int
    city: String
    price: Int
    description: String
    longitude: Int
    latitude: Int
  }

  type Mutation {
    createLodging(input: CreateLodgingInput!): Lodging! @requireAuth
    updateLodging(id: Int!, input: UpdateLodgingInput!): Lodging! @requireAuth
    deleteLodging(id: Int!): Lodging! @requireAuth
  }
`
