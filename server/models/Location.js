const { Schema } = require('mongoose');

const LocationSchema = new Schema(
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

module.exports = LocationSchema;