const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Comment, Post } = require('../models');
const bodyParser = require('body-parser');

//Get user's posts
router.get('/:id', (req, res) => {
  id = req.query.id;
  console.log(id);
  Post.find({ _id: req.query.id })
    // .then(_ls('Post.find'))
    // .populate('childIds')
    .then(post => {
      console.log(post);
      res.render('welcome/post', { post });
    })
    .catch(e => res.status(500).send(e.stack));
});

//Add new post(Form Submission)
//Add update post/ delete post
//Add single post view(with up/downvote && score)/Add comment link
module.exports = router;
