const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = require("./user");

let CommentableSchema = new Schema(
  {
    userName: String,
    authorId: { type: Schema.Types.ObjectId, ref: "User" },
    title: String,
    content: String
  },
  {
    timestamps: true,
    discriminatorKey: "kind"
  }
);

var Commentable = mongoose.model("Commentable", CommentableSchema);
module.exports = Commentable;
