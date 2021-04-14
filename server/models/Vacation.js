const { Schema, model } = require('mongoose');
const RestaurantSchema = require('./Restaurant');
const LocationSchema = require('./Location');

const VacationSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
        },
        restaurants: [RestaurantSchema],
        locations: [LocationSchema]

    }
);

const Vacation = model('Vacation', VacationSchema);

module.exports = Vacation;