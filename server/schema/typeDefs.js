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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        vacation(_id:ID!): Vacation
        restaurants(_id:ID!): Restaurant
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addVacation(name: String!, description: String!): Vacation
        addRestaurants(name: String!, link: String!, review: String!): Restaurant
        updateUser(username: String, email: String, password: String): Auth
        updateVacation(name: String, descriptions: String): Vacation
        updateRestaurants(name: String, link: String, review: String): Restaurant
        removeVacation(vacationId:ID): Vacation
        removeRestaurants(restaurantsId:ID): Restaurant
    }

`;

module.exports = typeDefs;