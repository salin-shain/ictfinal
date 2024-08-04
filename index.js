const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./models/BlogModel"); // Ensure the correct path to your model

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Write your POST API here
app.post("/add", async (req, res) => {
  try {
    const newBlog = new BlogModel({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });
    
    await newBlog.save();
    res.status(201).send("Blog added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error adding blog");
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching blogs");
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
