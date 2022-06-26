export const schema = gql`
  type Lessor {
    id: Int!
    name: String!
    users: [User]!
    jobs: [Job]!
    Lodging: [Lodging]!
  }

  type Query {
    lessors: [Lessor!]! @requireAuth
    lessor(id: Int!): Lessor @requireAuth
  }

  input CreateLessorInput {
    name: String!
  }

  input UpdateLessorInput {
    name: String
  }

  type Mutation {
    createLessor(input: CreateLessorInput!): Lessor! @requireAuth
    updateLessor(id: Int!, input: UpdateLessorInput!): Lessor! @requireAuth
    deleteLessor(id: Int!): Lessor! @requireAuth
  }
`
