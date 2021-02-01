import mongoose from 'mongoose';

//create schema for users

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    // create fields automatically
    timestamps: true
})


// create a model from this schema, and call it user
const User = mongoose.model('User', userSchema);

export default User