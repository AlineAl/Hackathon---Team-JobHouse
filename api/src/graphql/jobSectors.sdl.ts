export const schema = gql`
  type JobSector {
    id: Int!
    title: String!
    Job: [Job]!
  }

  type Query {
    jobSectors: [JobSector!]! @requireAuth
    jobSector(id: Int!): JobSector @requireAuth
  }

  input CreateJobSectorInput {
    title: String!
  }

  input UpdateJobSectorInput {
    title: String
  }

  type Mutation {
    createJobSector(input: CreateJobSectorInput!): JobSector! @requireAuth
    updateJobSector(id: Int!, input: UpdateJobSectorInput!): JobSector!
      @requireAuth
    deleteJobSector(id: Int!): JobSector! @requireAuth
  }
`
