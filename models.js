const MongoClient = require('mongodb');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


// User Schema
const UserSchema = new mongoose.Schema({
  userName: {
    type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true,
  },
  email: {
    type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true,
  },
  firstName: String,
  lastName: String,

}, { timestamps: true });


// Application Schema

// const ApplicationSchema = new mongoose.Schema({

// });

mongoose.model('User', UserSchema);