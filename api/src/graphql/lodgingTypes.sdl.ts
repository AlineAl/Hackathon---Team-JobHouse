export const schema = gql`
  type LodgingType {
    id: Int!
    title: String!
    Lodging: [Lodging]!
  }

  type Query {
    lodgingTypes: [LodgingType!]! @requireAuth
    lodgingType(id: Int!): LodgingType @requireAuth
  }

  input CreateLodgingTypeInput {
    title: String!
  }

  input UpdateLodgingTypeInput {
    title: String
  }

  type Mutation {
    createLodgingType(input: CreateLodgingTypeInput!): LodgingType! @requireAuth
    updateLodgingType(id: Int!, input: UpdateLodgingTypeInput!): LodgingType!
      @requireAuth
    deleteLodgingType(id: Int!): LodgingType! @requireAuth
  }
`
