const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Comment, Post } = mongoose.model('post');

router.get('/post/:id', (req, res) => {
  Post.find({ _id: req.query.id })
    .then(console.log(req.query.id))
    .then(_lg('Post.find.populate'))
    .populate('childIds')
    .then(post => {
      res.render('welcome/post', { post });
    })
    .catch(e => res.status(500).send(e.stack));
});
