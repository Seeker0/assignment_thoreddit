"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// models/hotels.js
let Commentable = require("./commentable");
//import Commentable from "./Commentable";

var PostSchema = new Schema(
  {
    commentId: Array
  },
  {
    discriminatorKey: "kind"
  }
);

var Post = Commentable.discriminator("Post", PostSchema);
module.exports = Post;
