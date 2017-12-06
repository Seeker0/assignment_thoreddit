const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentableSchema = new Schema(
  {
    userName: String,
    title: String,
    contnet: String
  },
  {
    timestamps: true,
    discriminatorKey: 'kind'
  }
);

var Commentable = mongoose.model('Commentable', CommentableSchema);
module.exports = Commentable;
