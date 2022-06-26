export const schema = gql`
  type LodgingConstraint {
    id: Int!
    name: String!
    lodgingId: Int
    Lodging: Lodging
  }

  type Query {
    lodgingConstraints: [LodgingConstraint!]! @requireAuth
    lodgingConstraint(id: Int!): LodgingConstraint @requireAuth
  }

  input CreateLodgingConstraintInput {
    name: String!
    lodgingId: Int
  }

  input UpdateLodgingConstraintInput {
    name: String
    lodgingId: Int
  }

  type Mutation {
    createLodgingConstraint(
      input: CreateLodgingConstraintInput!
    ): LodgingConstraint! @requireAuth
    updateLodgingConstraint(
      id: Int!
      input: UpdateLodgingConstraintInput!
    ): LodgingConstraint! @requireAuth
    deleteLodgingConstraint(id: Int!): LodgingConstraint! @requireAuth
  }
`
