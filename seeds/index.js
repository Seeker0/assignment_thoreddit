const mongoose = require("mongoose");
const mongooseeder = require("mongooseeder");
const models = require("../models");

const mongodbUrl = "mongodb://localhost/assignment_thoreddit_development";

const { Post, Comment } = require("../models");

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    const posts = [];

    for (let i = 0; i < 10; i++) {
      const post = new Post({
        userName: "anon" + i,
        title: "Example Title" + i,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        commentId: [i]
      });
      posts.push(post);
    }

    const comments = [];

    for (let i = 0; i < 10; i++) {
      const comment = new Comment({
        userName: "anon" + i,
        title: "Example Comment" + i,
        content: "This is a great comment!",
        parentId: i,
        commentId: [i + 1]
      });
      comments.push(comment);
    }

    const promises = [];
    const collections = [posts, comments];

    collections.forEach(collection => {
      collection.forEach(model => {
        const promise = model.save();
        promises.push(promise);
      });
    });

    return Promise.all(promises);
  }
});
