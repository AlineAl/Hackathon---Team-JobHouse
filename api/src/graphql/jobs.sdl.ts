export const schema = gql`
  type Job {
    id: Int!
    title: String
    city: String
    salary: Int
    description: String
    employer: String
    longitude: Int!
    latitude: Int!
  }

  type Query {
    jobs: [Job!]! @requireAuth
    job(id: Int!): Job @requireAuth
  }

  input CreateJobInput {
    title: String
    city: String
    salary: Int
    description: String
    employer: String
    longitude: Int!
    latitude: Int!
  }

  input UpdateJobInput {
    title: String
    city: String
    salary: Int
    description: String
    employer: String
    longitude: Int
    latitude: Int
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`
