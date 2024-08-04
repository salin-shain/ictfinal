const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  img_url: { type: String }
});

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = BlogModel;
