const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/user");
const dbo = require("./conf/db");

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

app.use("/rest/users", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome To Uniflix-User Service");
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});