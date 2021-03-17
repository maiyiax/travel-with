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

    type Restaurant {
        _id:ID
        name: String
        link: String
        review: String
    }

    type Query {
        user: User
        vacation(_id:ID!): Vacation
        restaurants(_id:ID!): Restaurant
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addVacation(name: String!, description: String!): Vacation
        addRestaurants(name: String!, link: String!, review: String!): Restaurant
        updateUser(username: String, email: String, password: String): User
        updateVacation(name: String, descriptions: String): Vacation
        updateRestaurants(name: String, link: String, review: String): Restaurant
    }

`;

module.exports = typeDefs;