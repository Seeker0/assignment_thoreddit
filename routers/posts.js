const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("post");

router.get("/getPostSupport", (req, res) => {
  Post.find({})
    .then(posts => {
      res.render("welcome/index", { posts });
    })
    .catch(e => res.status(500).send(e.stack));
});
