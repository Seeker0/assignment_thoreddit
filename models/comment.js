"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// models/motels.js
let Commentable = require("./commentable");
//import Commentable from './Commentable';

var CommentSchema = new Schema(
  {},
  {
    discriminatorKey: "kind"
  }
);

var Comment = Commentable.discriminator("Comment", CommentSchema);
module.exports = Comment;
