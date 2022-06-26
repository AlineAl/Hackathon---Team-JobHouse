export const schema = gql`
  type Job {
    id: Int!
    title: String!
    salary: Int
    description: String
    employer: String
    domainId: Int
    sectorId: Int
    addressId: Int!
    lessorId: Int
    Domain: JobDomain
    Sector: JobSector
    Address: Address!
    Lessor: Lessor
    Constraints: [JobConstraint]!
    User: [User]!
  }

  type Query {
    jobs: [Job!]! @requireAuth
    job(id: Int!): Job @requireAuth
  }

  input CreateJobInput {
    title: String!
    salary: Int
    description: String
    employer: String
    domainId: Int
    sectorId: Int
    addressId: Int!
    lessorId: Int
  }

  input UpdateJobInput {
    title: String
    salary: Int
    description: String
    employer: String
    domainId: Int
    sectorId: Int
    addressId: Int
    lessorId: Int
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`
