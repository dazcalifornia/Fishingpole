const express = require('express');
const app = express();
const cors = require("cors");
const axios = require("axios");


app.use(cors());

const port = process.env.environment === 'server' ? 80 : 3505;
const server = app.listen(port,  function(){
  console.log('server listen port :'+port);
})
