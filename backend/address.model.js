const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Address = new Schema({
    firstName: {
      type: String,
      //required: true
    },
    lastName: {
      type: String,
      //required: true
    },
    email: {
      type: String,
      ///required: true
    },
    phone: {
      type: Number,
      //required: true
    },
    image: {
      type: String,
      //required: true
    }
});


module.exports = mongoose.model('Todo', Address);