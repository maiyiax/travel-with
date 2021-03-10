const { Schema, model } = require('mongoose');

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
        restaurants: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Restaurant'
            }
        ]

    }
);

const Vacation = model('Vacation', VacationSchema);

module.exports = Vacation;