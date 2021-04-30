const {gql} = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id:ID
        username: String
        email: String
        vacations: [Vacation]
    }

    type Vacation {
        _id: ID
        name: String
        description: String
        restaurants: [Restaurant]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        vacation(_id:ID!): Vacation
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addVacation(name: String!, description: String!): Vacation
        updateUser(username: String, email: String, password: String): User
        updateVacation(name: String, description: String): Vacation
        removeVacation(vacationId: ID): Vacation
    }

`;

module.exports = typeDefs;