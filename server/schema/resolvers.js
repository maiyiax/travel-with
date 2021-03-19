const { AuthenticationError } = require('apollo-server-express');
const {User,Restaurant,Vacation} = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // pull information pertaining to logged in user
        me: async (parent, args, context) => {
            console.log(context)
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('vacations');

                return user;
            }
        },

        vacation: async({_id}) => {
            const vacation = await Vacation.findById({_id}).populate("restaurants")
            return vacation;
        },
        restaurants: async({_id}) => {
            const restaurants = await Restaurant.findById({_id})
            return restaurants;
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No User found with that email');
            }

            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        },
        addVacation: async (parent,args) =>{
            const vacation = await Vacation.create(args);
            return vacation;
        },
        addRestaurants: async (parent,args) => {
            const restaurants = await Restaurant.create(args);
            return restaurants;
        },
        updateUser: async (parent,args) => {
            const user = await User.findByIdAndUpdate(args,{new: true});
            return user;
        },
        updateVacation: async (parent,args) => {
            const vacation = await Vacation.findByIdAndUpdate(args,{new:true});
            return vacation;
        },
        updateRestaurants: async (parent,args) => {
            const restaurants = await Restaurant.findByIdAndUpdate(args,{new:true});
            return restaurants;
        }

    }
};

module.exports = resolvers;