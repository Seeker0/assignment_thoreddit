const mongoose = require("mongoose");
const mongooseeder = require("mongooseeder");
const models = require("../models");

const mongodbUrl = "mongodb://localhost/your_db";

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    for (let i = 0; i <= 10; i++) {
      return models.Post.create({
        userName: "anon" + i,
        title: "Example Title" + i,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      });
    }
  }
});
