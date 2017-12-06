"use strict";

var mongoose = require("mongoose");
var bluebird = require("bluebird");

// Set bluebird as the promise
// library for mongoose
mongoose.Promise = bluebird;

var models = {};

// Load models and attach to models here
models.Commentable = require("./commentable");
models.Post = require("./post");
models.Comment = require("./comment");
//... more models

module.exports = models;
