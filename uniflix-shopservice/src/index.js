require('dotenv').config()
const express = require("express");
const shopRouter = require('./routes/shopRouter')
const dbo = require('./conf/db');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/rest',shopRouter)

app.get("/", (req, res) => {
  res.send("Welcome To Uniflix-Shop");
});

// Db connection
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // Start Server
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});