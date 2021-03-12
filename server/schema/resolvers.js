const {User,Restaurant,Vacation} = require("../models");

const resolvers = {
    Query: {
        //users
        user: async (args) => {
            const user = await User.findById(args).populate("vacations")
            return user;
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
        addUser: async (parent,args) => {
            const user = await User.create(args);
            return user;
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