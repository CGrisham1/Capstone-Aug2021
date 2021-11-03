const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  post: String
});

const post = mongoose.model('Post', postSchema);

module.exports = {
  model: post,
  schema: postSchema
};