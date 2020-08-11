const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    // required: "Title is required",
  },
  author: [{
    type: String,
  }],
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  link: {
    type: String,
  },
});
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
