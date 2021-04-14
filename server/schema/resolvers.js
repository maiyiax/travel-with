const { AuthenticationError } = require('apollo-server-express');
const {User, Vacation} = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // pull information pertaining to logged in user
        me: async (parent, args, context) => {
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
        // restaurants: async({_id}) => {
        //     const restaurants = await Restaurant.findById({_id})
        //     return restaurants;
        // }
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
            console.log(token)
            return {token, user};
        },

        addVacation: async (parent,args,context) =>{
            if(context.user){
            const vacation = await Vacation.create(args);
            await User.findOneAndUpdate(
                {_id: context.user._id},
                {$push: {vacations: vacation}},
                {new: true}
            )
            return vacation;
            }
            throw new AuthenticationError("You need to be logged in.")
        },
        // addRestaurants: async (parent,args) => {
        //     const restaurants = await Restaurant.create(args);
        //     return restaurants;
        // },
        updateUser: async (parent,args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('Not logged in');
        },
        updateVacation: async (parent,args) => {
            const vacation = await Vacation.findByIdAndUpdate(args,{new:true});
            await User.findOneAndUpdate(
                {_id: context.user._id},
                {$push: {vacations: vacation}},
                {new: true}
            )
            return vacation;
        },
        // updateRestaurants: async (parent,args) => {
        //     const restaurants = await Restaurant.findByIdAndUpdate(args,{new:true});
        //     return restaurants;
        // },
        removeVacation: async (parent, {vacationId}, context) => {
            if(context.user){
                console.log({vacationId});
                const deleteVacation = await Vacation.findOneAndDelete({_id: vacationId});
                await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {vacations: {deleteVacation}}},
                    {new: true}
                )
                return deleteVacation;
            }
        },
        // removeRestaurants: async ({restaurantsId},context) => {
        //     if(context.user){
        //         const deleteRestaurant = await Restaurant.findOneAndDelete({_id: restaurantsId});
        //         return deleteRestaurant;
        //     }
        // }


    }
};

module.exports = resolvers;