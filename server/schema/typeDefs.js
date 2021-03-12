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

    type Restaurants {
        _id:ID
        name: String
        link: String
        review: String
    }

    type Query {
        user: User
        vacation(_id:ID!): Vacation
        restaurants(_id:ID!): Restaurants
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addVacation(name: String!, description: String!): Vacation
        addRestaurants(name: String!, link: String!, review: String!): Restaurants
        updateUser(username: String, email: String, password: String): User
        updateVacation(name: String, descriptions: String): Vacation
        updateRestaurants(name: String, link: String, review: String): Restaurants
    }

`;

module.exports = typeDefs;