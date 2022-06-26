export const schema = gql`
  type JobDomain {
    id: Int!
    title: String!
    Job: [Job]!
  }

  type Query {
    jobDomains: [JobDomain!]! @requireAuth
    jobDomain(id: Int!): JobDomain @requireAuth
  }

  input CreateJobDomainInput {
    title: String!
  }

  input UpdateJobDomainInput {
    title: String
  }

  type Mutation {
    createJobDomain(input: CreateJobDomainInput!): JobDomain! @requireAuth
    updateJobDomain(id: Int!, input: UpdateJobDomainInput!): JobDomain!
      @requireAuth
    deleteJobDomain(id: Int!): JobDomain! @requireAuth
  }
`
