const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());

bodyParser = require("body-parser");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/data", (req, res) => {
  req.body;
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
