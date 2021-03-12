const { Schema, model } = require('mongoose');

const RestaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        link: {
            type: String
        },
        review: {
            type: String
        }
    }
)

const Restaurant = model('Restaurant', RestaurantSchema);

module.exports = Restaurant;