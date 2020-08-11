// dependencies
const express = require("express");
const mongoose = require("mongoose");
// instance of express
const app = express();
const path = require("path");
const routes=require("./routes")
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

app.use(routes);
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });
// db connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/gt-hw-googlebooks", {
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
