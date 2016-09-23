const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var messageSchema = new Schema({
  author: {type: String, required: true},
  text: {type: String, required: true}
});

module.exports = mongoose.model('Message', messageSchema);
