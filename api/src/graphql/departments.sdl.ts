export const schema = gql`
  type Department {
    id: Int!
    code: Int
    city: String
  }

  type Query {
    departments: [Department!]! @requireAuth
    department(id: Int!): Department @requireAuth
  }

  input CreateDepartmentInput {
    code: Int
    city: String
  }

  input UpdateDepartmentInput {
    code: Int
    city: String
  }

  type Mutation {
    createDepartment(input: CreateDepartmentInput!): Department! @requireAuth
    updateDepartment(id: Int!, input: UpdateDepartmentInput!): Department!
      @requireAuth
    deleteDepartment(id: Int!): Department! @requireAuth
  }
`
