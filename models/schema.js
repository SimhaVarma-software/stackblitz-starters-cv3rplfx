const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true // Ensures no duplicate emails
    },
    password: {
        type: String,
        required: true
    }
});

// Create the User model from the schema
const User = mongoose.model('User', UserSchema);

module.exports = User; // Export the model for use in other files