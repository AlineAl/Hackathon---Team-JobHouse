export const schema = gql`
  type User {
    id: Int!
    firstname: String
    lastname: String
    email: String
    role: Role!
    FavoritesJobs: [Job]!
    FavoritesLodgings: [Lodging]!
    Address: Address
    addressId: Int
    Lessor: Lessor
    lessorId: Int
  }

  enum Role {
    USER
    ADMIN
    LESSOR
    LESSOR_ADMIN
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    firstname: String
    lastname: String
    email: String
    role: Role!
    addressId: Int
    lessorId: Int
  }

  input UpdateUserInput {
    firstname: String
    lastname: String
    email: String
    role: Role
    addressId: Int
    lessorId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
