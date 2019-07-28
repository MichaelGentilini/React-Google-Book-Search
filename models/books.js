const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  desc: { type: String, required: true },
  image: String,
  link: String,
  subtitle: String,
  isSaved: Boolean,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
