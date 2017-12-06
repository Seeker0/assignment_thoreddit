const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  userName: String,
  fname: String,
  lname: String,
  email: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Commentable' }]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
