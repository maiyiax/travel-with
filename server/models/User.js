const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        vacation: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Vacation'
            }
        ]
    }
);

const User = model('User', UserSchema);

module.exports = User;