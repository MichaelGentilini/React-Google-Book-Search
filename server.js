const express = require("express");
const path = require("path");
const routes = "./routes/api";
// const router = require("express").Router();
// const booksController = require("./controllers/booksController");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// @ Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mylist");

// Define API routes here
app.use(routes);

// ! tried this to see if it would help ... nope!
// router
//   .route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
