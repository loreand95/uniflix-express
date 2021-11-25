require('dotenv').config()
const express = require("express");
const movieRouter = require('./routes/movieRouter')
const actorRouter = require('./routes/actorRouter')
const dbo = require('./conf/db');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

//Routes
app.use('/rest/movies',movieRouter)
app.use('/rest/actors',actorRouter)

app.get("/", (req, res) => {
  res.send("Welcome To Uniflix-Movie");
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