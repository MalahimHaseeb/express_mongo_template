const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
},{timestamps:true});

const authS = mongoose.model('Auth', authSchema);
module.exports = authS 