const express = require('express');
const app = express();
const cors = require("cors");
const axios = require("axios");
const bodyParser = require('body-parser')

require('dotenv').config();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/', (req, res) => {
  res.sendStatus(200);
})

app.post ('/webhook', (req, res) => {
  const { body } = req;
  console.log(body);
  res.sendStatus(200);
})

const port = process.env.environment === 'server' ? 80 : 3505;
const server = app.listen(port,  function(){
  console.log('server listen port :'+port);
})


