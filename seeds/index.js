const mongoose = require('mongoose');
const mongooseeder = require('mongooseeder');
const models = require('../models');

const mongodbUrl = 'mongodb://localhost/assignment_thoreddit_development';

const { User, Post, Comment } = require('../models');

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    const users = [];
    const posts = [];
    const comments = [];

    for (let i = 0; i < 10; i++) {
      const user = new User({
        userName: 'anon' + i,
        fname: 'First' + i,
        lname: 'Lastname' + i,
        email: `${i}@nobodywrites.com`,
        posts: []
      });
      users.push(user);
    }

    for (let i = 0; i < 20; i++) {
      // console.log("===========");
      // console.log(Math.floor(Math.random() * (users.length + 1)));
      // console.log("===========");
      let user = users[i % users.length];
      //  console.log(user);
      const post = new Post({
        authorId: user._id,
        userName: user.userName,
        title: 'Example Title' + i,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        childIds: []
      });
      user.posts.push(post._id);
      posts.push(post);
    }

    for (let i = 0; i < 40; i++) {
      let user = users[i % users.length];
      let post = posts[i % users.length];
      if (i < 20) {
        const comment = new Comment({
          authorId: user._id,
          userName: user.userName,
          title: 'Example Comment' + i,
          content: 'This is a great comment!',
          parentId: post._id,
          childIds: []
        });
        post.childIds.push(comment._id);
        comments.push(comment);
      } else {
        let comment = comments[i % users.length];
        const newComment = new Comment({
          authorId: user._id,
          userName: user.userName,
          title: 'Example Comment' + i,
          content: 'This is a great comment!',
          parentId: comment._id,
          childIds: []
        });
        comment.childIds.push(newComment._id);
        comments.push(newComment);
      }
    }

    const promises = [];
    const collections = [users, posts, comments];

    collections.forEach(collection => {
      collection.forEach(model => {
        const promise = model.save();
        promises.push(promise);
      });
    });

    return Promise.all(promises);
  }
});
