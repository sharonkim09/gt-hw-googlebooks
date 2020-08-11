// dependencies
const express = require("express");
const mongoose = require("mongoose");
// instance of express
const app = express();
const path = require("path");

// server port
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// last bit to get working
app.use(express.static("client/build"));


app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});



// db connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfully connected to db");
  })
  .catch((err) => {
    console.log("unable to connect to db");
    console.log(err);
  });

// event listener for port
app.listen(PORT, () => {
  console.log(`Express server on http://localhost:${PORT}`);
});
