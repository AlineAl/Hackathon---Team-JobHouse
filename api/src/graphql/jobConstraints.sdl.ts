export const schema = gql`
  type JobConstraint {
    id: Int!
    title: String!
    jobs: [Job]!
  }

  type Query {
    jobConstraints: [JobConstraint!]! @requireAuth
    jobConstraint(id: Int!): JobConstraint @requireAuth
  }

  input CreateJobConstraintInput {
    title: String!
  }

  input UpdateJobConstraintInput {
    title: String
  }

  type Mutation {
    createJobConstraint(input: CreateJobConstraintInput!): JobConstraint!
      @requireAuth
    updateJobConstraint(
      id: Int!
      input: UpdateJobConstraintInput!
    ): JobConstraint! @requireAuth
    deleteJobConstraint(id: Int!): JobConstraint! @requireAuth
  }
`
