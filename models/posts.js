'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// models/hotels.js
import Commentable from './Commentable';

var PostSchema = new Schema(
  {},
  {
    discriminatorKey: 'kind'
  }
);

var Post = Commentable.discriminator('Post', PostSchema);
module.exports = Post;
